"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Building } from "lucide-react";

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white font-bold text-lg sm:text-xl hover:text-pink-400 transition-colors font-unbounded"
            >
              <Image
                src="/Polkadot_Logo_Pink-White.png"
                alt="Polkadot Law"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/research"
              className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg transition-all text-sm lg:text-base ${
                pathname === "/research"
                  ? "bg-pink-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Research
            </Link>

            <Link
              href="/pcf"
              className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg transition-all text-sm lg:text-base ${
                pathname === "/pcf"
                  ? "bg-pink-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Building className="w-4 h-4" />
              PCF
            </Link>

            <a
              href="https://wiki.polkadot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm lg:text-base"
            >
              Wiki
            </a>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href="/research"
              className={`px-3 py-2 rounded-lg transition-all text-sm ${
                pathname === "/research"
                  ? "bg-pink-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Research
            </Link>

            <Link
              href="/pcf"
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all text-sm ${
                pathname === "/pcf"
                  ? "bg-pink-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Building className="w-3 h-3" />
              PCF
            </Link>

            <a
              href="https://wiki.polkadot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm"
            >
              Wiki
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
