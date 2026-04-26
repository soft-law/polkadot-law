import Link from "next/link";
import PolkadotIcon from "@/components/custom/PolkadotIcon";

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-polkadot-grey-50 dark:bg-polkadot-grey-950 backdrop-blur-md border-b border-polkadot-grey-200 dark:border-polkadot-grey-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-14 sm:h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <PolkadotIcon className="w-7 h-7 sm:w-8 sm:h-8 text-polkadot-grey-950 dark:text-polkadot-cool-gray" />
            <span className="font-serif text-lg sm:text-xl font-bold text-polkadot-grey-950 dark:text-white tracking-tight">
              Polkadot<span className="text-polkadot-grey-500 dark:text-polkadot-grey-400">.law</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
