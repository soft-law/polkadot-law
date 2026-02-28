"use client";

import PolkadotIcon from "@/components/custom/PolkadotIcon";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-polkadot-grey-50 dark:bg-polkadot-grey-950 backdrop-blur-md border-t border-polkadot-grey-200 dark:border-polkadot-grey-800/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-polkadot-grey-500 dark:text-polkadot-grey-400">

          {/* Left: attribution */}
          <div className="flex items-center gap-1.5">
            <span>By</span>
            <a
              href="https://www.soft.law/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-polkadot-grey-950 dark:text-white hover:opacity-70 transition-opacity"
            >
              soft.law
            </a>
            <span>·</span>
            <a
              href="https://x.com/soft_law"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="soft.law on X (Twitter)"
              className="flex items-center gap-1 font-semibold text-polkadot-grey-950 dark:text-white hover:opacity-70 transition-opacity"
            >
              <XIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Center: funding */}
          <div className="flex items-center gap-1.5">
            <span>Funded by</span>
            <PolkadotIcon className="w-4 h-4 text-polkadot-grey-950 dark:text-polkadot-grey-300" />
            <a
              href="https://polkadot.subsquare.io/referenda/1676"
              target="_blank"
              rel="noopener noreferrer"
             className="font-semibold text-polkadot-grey-700 dark:text-polkadot-grey-300"
            >
              Polkadot
            </a>
          </div>

          {/* Right: links */}
          <div className="flex items-center gap-3 text-xs">
            <a
              href="https://github.com/soft-law/polkadot-law"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-polkadot-grey-950 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <span>Project rights belong to the Polkadot DAO</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
