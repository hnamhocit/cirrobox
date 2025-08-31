import { Theme } from "@/interfaces";
import { create } from "zustand";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: Theme.DARK,
  setTheme: (theme: Theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    })),
}));
