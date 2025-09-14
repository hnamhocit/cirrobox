"use client";

import { HeroUIProvider } from "@heroui/react";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import AuthModalProvider from "@/contexts/AuthModalProvider";
import { useThemeStore } from "@/stores";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore()

  return (
    <HeroUIProvider>
      <AuthProvider>
        <AuthModalProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthModalProvider>
      </AuthProvider>
    </HeroUIProvider>
  );
};

export default Providers;
