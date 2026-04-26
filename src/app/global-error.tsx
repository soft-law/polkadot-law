"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-6xl font-extrabold text-gray-200 mb-4">Error</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-500 mb-8">
            A critical error occurred. Please reload the page.
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
