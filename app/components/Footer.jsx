import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-950 border-t border-white/10 py-6 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm sm:text-base md:text-md text-zinc-900 dark:text-white font-normal">
          Copyrights © 2024 - 2026 <a href={`${process.env.NEXT_PUBLIC_API_DOMAIN ? process.env.NEXT_PUBLIC_API_DOMAIN : '/'}`}  className="text-zinc-900 dark:text-white underline">Quick Paste Manager</a>. Product by <a href="https://www.codematics.co/" target="_blank" className="text-zinc-900 dark:text-white underline">Codematics Services (Private) Limited</a>.
        </p>
      </div>
    </footer>
  );
}
