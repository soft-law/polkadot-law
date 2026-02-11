"use client";

import dynamic from "next/dynamic";
import { useThemeStore } from "@/store/themeStore";

const NetworkAnimation = dynamic(
  () => import("@/components/custom/NetworkAnimation"),
  { ssr: false }
);

export default function HeroBackground() {
  const theme = useThemeStore((state) => state.theme);
  return <NetworkAnimation isDark={theme === "dark"} />;
}
