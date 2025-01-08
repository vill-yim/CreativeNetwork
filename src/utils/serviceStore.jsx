import { create } from "zustand";

export const serviceStore = create((set) => ({
 
  home: false,
  services: false,
  portfolio: false,
  showPath: (routepath) =>
    set({
      home: routepath === "home",
      services: routepath === "services",
      portfolio: routepath === "portfolio",
    }),
}));
