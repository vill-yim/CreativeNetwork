import { create } from "zustand";

export const portfolioStore = create((set) => ({
  design: false,
  social: false,
  motion: false,
  d3: false,
  showDesign: () =>
    set({ design: true, Social: false, motion: false, d3: false }),
  showSocial: () =>
    set({
      social: true,
      design: false,
      Social: false,
      motion: false,
      d3: false,
    }),
  showMotion: () =>
    set({ motion: true, design: false, Social: false, d3: false }),
  showD3: () =>
    set({ design: false, Social: false, motion: false, d3: true }),
}))
