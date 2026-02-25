"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faks: FAQItem[] = [
  {
    question: " What is a clipboard manager on iPhone?",
    answer:
      "A clipboard manager is an app that saves copied items and provides clipboard history so users can paste previous content again.",
  },
  {
    question: "Does iPhone support clipboard history?",
    answer:
      " Not by default. A clipboard manager app adds clipboard history to iOS.",
  },
  {
    question: "What is the best way to save copied text on iPhone?",
    answer:
      " Using a clipboard manager app that stores copied text and lets you reuse it later.",
  },
  {
    question: " Can a clipboard app save images and links?",
    answer:
      "Yes. Advanced clipboard managers can store text, images, and links.",
  },
  {
    question: "Is clipboard data private?",
    answer:
      "In privacy‑focused clipboard managers, data is stored locally and can be protected with Face ID.",
  },
  {
    question: "How can I see my copy paste history on iPhone?",
    answer:
      "You can view copy-paste history by using a clipboard manager app that stores copied content and shows it in a list.",
  },
  {
    question: "Does a clipboard manager work across different apps?",
    answer:
      "Yes, saved clipboard items can be reused across supported apps using paste features and keyboard extensions.",
  },
  {
    question:
      "Does the clipboard manager automatically capture everything I copy?",
    answer:
      "It captures copied content based on app permissions and supported methods, not system-level interception.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-transparent dark:bg-gray-950 py-20 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-800" id="faqs">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 text-center dark:text-white mb-6 tracking-tight">
          FAQs
        </h2>
      </div>
      <div className="max-w-3xl mx-auto mt-12">
        <div className="space-y-0">
          {faks.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-800 last:border-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
              >
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#0766ad] dark:group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 text-gray-500 group-hover:text-[#0766ad] dark:group-hover:text-blue-400 ${openIndex === index ? "rotate-45" : "rotate-0"}`}
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
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"}`}
              >
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
