"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-polkadot-grey-50 dark:bg-polkadot-grey-950 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-extrabold font-serif text-polkadot-grey-300 dark:text-polkadot-grey-700 mb-4">
          Error
        </p>
        <h1 className="text-2xl font-bold text-polkadot-grey-950 dark:text-white mb-2">
          Something went wrong
        </h1>
        <p className="text-polkadot-grey-500 dark:text-polkadot-grey-400 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-polkadot-grey-950 dark:bg-polkadot-grey-100 text-white dark:text-polkadot-grey-950 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
