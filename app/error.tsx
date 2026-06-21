"use client";

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
          <AlertTriangle size={36} className="text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-[#181818]">Something went wrong</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          An unexpected error occurred. Please try again or go back to the home page.
        </p>
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="h-12 rounded-md bg-[#9A35D4] px-8 text-sm font-semibold text-white shadow-md hover:bg-[#8E26C7] transition"
          >
            Try again
          </button>
          <a
            href="/"
            className="h-12 rounded-md border border-[#D9B8EC] px-8 text-sm font-semibold text-[#9A35D4] flex items-center hover:bg-[#f7f3fb] transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
