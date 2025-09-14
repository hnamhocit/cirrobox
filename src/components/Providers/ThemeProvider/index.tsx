import { Theme } from "@/interfaces";
import { useThemeStore } from "@/stores";
import { ReactNode, useEffect } from "react";

const DarkBackground = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-screen w-full relative">
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      `,
      }}
    />
    {children}
  </div>
}

const LightBackground = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-screen w-full relative">
    {/* Aurora Dream Soft Harmony */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: `
       radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
      }}
    />

    {children}
  </div>
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore();
  const Component = theme === Theme.LIGHT ? LightBackground : DarkBackground

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <Component>{children}</Component>
};

export default ThemeProvider;
