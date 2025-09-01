"use client";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

type ProgressContextType = {
  progress: number;
  start: () => void;
  stop: () => void;
};

const ProgressContext = createContext<ProgressContextType | null>(null);

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) return prev + 5;
        return prev;
      });
    }, 200);
  }, []);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setProgress(100);
    // reset về 0 sau khi hiển thị full 1 chút
    setTimeout(() => setProgress(0), 400);
  }, []);

  return (
    <ProgressContext.Provider value={{ progress, start, stop }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
};

export default ProgressProvider;
