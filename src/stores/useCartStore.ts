import { create } from 'zustand';

/** Phase 2 cart — minimal stub for phase 1 enquiry-led storefront */
interface CartStore {
  quantity: number;
  setQuantity: (n: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  quantity: 1,
  setQuantity: (quantity) => set({ quantity: Math.max(1, quantity) }),
}));
