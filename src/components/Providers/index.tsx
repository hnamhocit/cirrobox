"use client";

import { HeroUIProvider } from "@heroui/react";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import AuthModalProvider from "@/contexts/AuthModalProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider />

      <AuthProvider>
        <AuthModalProvider>{children}</AuthModalProvider>
      </AuthProvider>
    </HeroUIProvider>
  );
};

export default Providers;
