import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  isOpen: false,
  clubSelection: null,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (newItem) =>
    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === newItem.id,
      );
      let updatedItems;
      if (existingIndex > -1) {
        updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += 1;
      } else {
        updatedItems = [...state.items, { ...newItem, quantity: 1 }];
      }
      return { items: updatedItems, isOpen: true }; // Open cart drawer on item add
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    })),
  clearCart: () => set({ items: [] }),
  selectClub: (tierId) => set({ clubSelection: tierId }),
}));
