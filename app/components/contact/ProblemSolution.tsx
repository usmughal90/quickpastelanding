
interface SolutionItem {
  title: string;
}

const solutions: SolutionItem[] = [
  { title: "Copy multiple messages or replies without losing them" },
  { title: "Save links and references" },
  { title: "Reuse templates and repeated text" },
  { title: "Switch between apps while working" },
  {
    title:
      "A clipboard manager solves this by keeping a searchable clipboard history.",
  },
];

export default function WhyClipboardManager() {
  return (
    <section className="bg-(--primary) dark:bg-gray-950 py-20 px-6  border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center dark:text-white mb-6 tracking-tight">
            Why iPhone Needs a Clipboard Manager?
          </h2>
          <p className="text-white text-center dark:text-gray-400 text-lg md:text-xl leading-relaxed">
            By default, iOS only keeps your most recent copied item. When you
            copy something new, the previous content is lost.
          </p>
        </div>

        {/* Solution List */}
        <div className="">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-6">
            The Solution
          </h3>

          <div className="grid gap-4">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-center p-5 rounded-2xl bg-white dark:bg-primary/10 border border-primary/20 dark:border-primary/30 hover:border-primary/50 transition-all group shadow-sm hover:shadow-md hover:scale-102"
              >
                {/* Checkmark Icon */}
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary dark:bg-primary/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>

                <p className="text-gray-900 dark:text-gray-200 text-lg font-medium leading-tight">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
