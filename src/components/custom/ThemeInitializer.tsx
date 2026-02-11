"use client";

import { useEffect, type ReactNode } from "react";
import { useThemeStore } from "@/store/themeStore";

export default function ThemeInitializer({
  children,
}: {
  children: ReactNode;
}) {
  const { theme, isManual, setTheme } = useThemeStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [setTheme]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    if (isManual) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, isManual]);

  return <>{children}</>;
}
