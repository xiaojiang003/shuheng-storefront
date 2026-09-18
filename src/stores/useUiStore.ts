import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UiStore {
  announcementDismissed: boolean;
  dismissAnnouncement: () => void;
}

export const useUiStore = create<UiStore>()(
  persist(
    (set) => ({
      announcementDismissed: false,
      dismissAnnouncement: () => set({ announcementDismissed: true }),
    }),
    { name: 'shuheng-ui' },
  ),
);
