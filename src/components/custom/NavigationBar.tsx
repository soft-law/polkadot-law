"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";
import PolkadotIcon from "@/components/custom/PolkadotIcon";

export default function NavigationBar() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-polkadot-grey-50 dark:bg-polkadot-grey-950 backdrop-blur-md border-b border-polkadot-grey-200 dark:border-polkadot-grey-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <PolkadotIcon className="w-7 h-7 sm:w-8 sm:h-8 text-polkadot-grey-950 dark:text-polkadot-cool-gray" />
            <span className="font-serif text-lg sm:text-xl font-bold text-polkadot-grey-950 dark:text-white tracking-tight">
              Polkadot<span className="text-polkadot-grey-500 dark:text-polkadot-grey-400">.law</span>
            </span>
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-polkadot-grey-700 dark:text-polkadot-grey-300 hover:text-black dark:hover:text-white hover:bg-polkadot-grey-100 dark:hover:bg-polkadot-grey-800 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
