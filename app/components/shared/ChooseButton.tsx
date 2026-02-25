"use client";

export default function ChooseButton() {
  return (
    <button
      onClick={() => {
        document.getElementById("how-it-work")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="cursor-pointer bg-white text-primary border border-primary dark:bg-white dark:text-gray-950 px-8 py-3 rounded-xl font-semibold text-lg hover:scale-102 dark:hover:bg-gray-200 transition-all transform hover:-translate-y-1"
    >
      How it works
    </button>
  );
}