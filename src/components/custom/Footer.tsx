"use client";

import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* Main attribution */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <span>Made with</span>
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>by</span>
            <a
              href="https://www.soft.law/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              soft.law
            </a>
          </div>

          {/* Funding and community info */}
          <div className="flex flex-col items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span>Funded by</span>
              <div className="flex items-center gap-1">
                <Image
                  src="/Polkadot_Logo_Pink-White.png"
                  alt="Polkadot Law"
                  width={100}
                  height={100}
                />
              </div>
              <span>•</span>
              <a
                href="https://polkadot.subsquare.io/referenda/1676"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-200"
              >
                Referendum #1676
              </a>
            </div>
          </div>

          {/* Legal and links */}
          <div className="flex flex-col items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <div className="text-center">
              Project rights belong to the community
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/soft-law/polkadot-law"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://polkadot.network"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                Polkadot Network
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
