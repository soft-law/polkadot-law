"use client";

import { useEffect, type ReactNode } from "react";
import { useThemeStore } from "@/store/themeStore";

export default function ThemeInitializer({
  children,
}: {
  children: ReactNode;
}) {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (dark: boolean) => {
      const theme = dark ? "dark" : "light";
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      setTheme(theme);
    };

    apply(mq.matches);

    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [setTheme]);

  return <>{children}</>;
}
