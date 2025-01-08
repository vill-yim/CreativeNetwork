import { create } from "zustand";

export const sidebarStore = create((set) => ({
  showMenu: false,
  setShowMenu: () =>
    set((state) => ({
      showMenu: !state.showMenu,
    })),
}));
