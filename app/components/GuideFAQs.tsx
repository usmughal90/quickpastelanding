"use client";

import { useState } from "react";
import type { GuideFAQ } from "../types/types";

interface GuideFAQsProps {
  faqs: GuideFAQ[];
}

export default function GuideFAQs({ faqs }: GuideFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs.length) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-0">
        {faqs.map((faq, index) => (
          <div
            key={faq.id ?? index}
            className="border-b border-gray-200 dark:border-gray-800 last:border-0"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
            >
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#0766ad] dark:group-hover:text-blue-400 transition-colors pr-4">
                {faq.question}
              </span>
              <span
                className={`shrink-0 transform transition-transform duration-300 text-gray-500 group-hover:text-[#0766ad] dark:group-hover:text-blue-400 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100 mb-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed pr-8 whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
