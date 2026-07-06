import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-white dark:bg-gray-950 border-t border-white/10 py-6 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
          <Link
            href="/privacy-policy"
            className="text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-white underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-white underline-offset-4 hover:underline"
          >
            Terms & Conditions
          </Link>
        </nav>
        <p className="text-sm sm:text-base md:text-md text-zinc-900 dark:text-white font-normal">
          Copyright © 2024 - 2026{" "}
          <Link
            href="/"
            className="text-zinc-900 dark:text-white underline hover:text-primary"
          >
            Quick Paste Manager
          </Link>
        </p>
      </div>
    </footer>
  );
}
