import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  cartOpen: false,

  setCartOpen: (open) => set({ cartOpen: open }),

  addItem: (product) => {
    const existing = get().items.find((i) => i.id === product.id);
    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        ),
      });
    } else {
      set({ items: [...get().items, { ...product, qty: 1 }] });
    }
  },

  removeItem: (id) =>
    set({ items: get().items.filter((i) => i.id !== id) }),

  updateQty: (id, qty) => {
    if (qty < 1) return get().removeItem(id);
    set({
      items: get().items.map((i) => (i.id === id ? { ...i, qty } : i)),
    });
  },

  clearCart: () => set({ items: [] }),

  get totalPrice() {
    return get().items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  get totalCarbon() {
    return get().items.reduce((sum, i) => sum + i.carbonGrams * i.qty, 0);
  },

  get itemCount() {
    return get().items.reduce((sum, i) => sum + i.qty, 0);
  },
}));
