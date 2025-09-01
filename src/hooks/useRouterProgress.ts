"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useProgress } from "@/contexts/ProgressProvider";

export const useRouterProgress = () => {
  const { start, stop } = useProgress();
  const pathname = usePathname();

  useEffect(() => {
    stop();
  }, [pathname, stop]);

  return { start };
};
