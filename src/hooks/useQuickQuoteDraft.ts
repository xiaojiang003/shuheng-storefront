import { useQuoteStore } from '@/stores/useQuoteStore';

export function useQuickQuoteDraft() {
  const { brief, update, reset, loadDraft } = useQuoteStore();
  return { brief, update, reset, hasDraft: loadDraft };
}
