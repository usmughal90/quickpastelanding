export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaqItems: FaqItem[] = [
  {
    question: "What is a clipboard manager on iPhone?",
    answer:
      "A clipboard manager is an app that saves copied items and provides clipboard history so users can paste previous content again.",
  },
  {
    question: "Does iPhone support clipboard history?",
    answer:
      "Not by default. A clipboard manager app adds clipboard history to iOS.",
  },
  {
    question: "What is the best way to save copied text on iPhone?",
    answer:
      "Using a clipboard manager app that stores copied text and lets you reuse it later.",
  },
  {
    question: "Can a clipboard app save images and links?",
    answer:
      "Yes. Advanced clipboard managers can store text, images, and links.",
  },
  {
    question: "Is clipboard data private?",
    answer:
      "In privacy-focused clipboard managers, data is stored locally and can be protected with Face ID.",
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
