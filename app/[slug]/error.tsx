"use client";
import { useEffect } from "react";

export default function GuideDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Guide detail render error:", error.digest ?? error.message);
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-20 text-center">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
        We couldn&apos;t load this guide
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300">
        Something went wrong fetching this content. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
      >
        Try again
      </button>
    </div>
  );
}