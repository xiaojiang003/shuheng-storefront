import { CHANNELS } from '@/config/channels';
import type { QuoteBrief } from '@/types/quote';
import { create } from 'zustand';

const DRAFT_KEY = 'shu-quote-draft';

const defaultBrief = (): QuoteBrief => ({
  capStyle: 'unsure',
  quantity: 100,
  logoPlacements: ['front-centred'],
  material: 'recommend',
  channel: CHANNELS.primary,
});

interface QuoteStore {
  isOpen: boolean;
  brief: QuoteBrief;
  source: string;
  open: (prefill?: Partial<QuoteBrief>, source?: string) => void;
  close: () => void;
  update: (patch: Partial<QuoteBrief>) => void;
  reset: () => void;
  loadDraft: () => boolean;
}

function persistDraft(brief: QuoteBrief) {
  try {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify(brief));
  } catch {
    /* ignore */
  }
}

export const useQuoteStore = create<QuoteStore>((set, get) => ({
  isOpen: false,
  brief: defaultBrief(),
  source: 'header',
  open: (prefill, source = 'header') => {
    const draft = get().loadDraft();
    const brief = draft
      ? { ...get().brief, ...prefill }
      : { ...defaultBrief(), ...prefill };
    set({ isOpen: true, brief, source });
  },
  close: () => set({ isOpen: false }),
  update: (patch) => {
    const brief = { ...get().brief, ...patch };
    persistDraft(brief);
    set({ brief });
  },
  reset: () => {
    sessionStorage.removeItem(DRAFT_KEY);
    set({ brief: defaultBrief() });
  },
  loadDraft: () => {
    try {
      const raw = sessionStorage.getItem(DRAFT_KEY);
      if (!raw) return false;
      const parsed = JSON.parse(raw) as QuoteBrief;
      set({ brief: parsed });
      return true;
    } catch {
      return false;
    }
  },
}));
