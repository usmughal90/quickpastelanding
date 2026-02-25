import Link from "next/link";

interface StepItem {
  title: string;
  desc: string;
}

export default function HowItWorks() {
  const steps: StepItem[] = [
    {
      title: " Enable Action Extension for Limitless Copying",
      desc: "Turn on the Quick Paste Action Extension to save anything instantly. Select any text or image → tap Share → choose Copy to Quick Paste.",
    },
    {
      title: "Use the Paste Keyboard Anywhere",
      desc: "While typing, long-press the language switch key → select Quick Paste → view saved clips → tap any item to paste instantly.",
    },
  ];

  return (
    <section
      id="how-it-work"
      className="bg-(--primary) dark:bg-gray-950 py-20 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center dark:text-white mb-6 tracking-tight">
          How Clipboard Manager Works?
        </h2>
        <p className="text-white text-center dark:text-gray-400 text-lg md:text-xl leading-relaxed px-4">
          Instead of copying the same content repeatedly, users can store and
          reuse it with one tap. See how
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        {/* Left Column: Real Mobile Mockup Frame */}
        <div className="flex justify-center lg:justify-center relative order-last lg:order-first ">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[420px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

          {/* Physical Phone Frame */}
          <div className="relative z-10 w-full max-w-[220px] h-[420px] p-[2px] bg-gray-100 dark:bg-[#1a1a1a] rounded-[3rem] border-[6px] border-gray-300 dark:border-[#333] shadow-2xl overflow-hidden">
            {/* Notch */}
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 dark:bg-[#1a1a1a] rounded-b-2xl z-20"></div> */}

            <div className="rounded-[2.2rem] overflow-hidden bg-gray-100 h-full">
              <video
                src="/video/EnablingKeyboard.mp4"
                className="min-w-full h-full object-fit"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

        {/* Right Column: Steps with Numbers (No Lines) */}
        <div className="flex flex-col text-left">
          <div className="space-y-12 relative ">
            {/* Lines are removed as requested */}
            {steps.map((step: StepItem, index: number) => (
              <div key={index} className="flex gap-8 relative items-start">
                {/* Step Circle with Numbers (1, 2, 3) */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-white flex items-center justify-center text-primary dark:text-gray-950 font-bold text-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)] relative z-10">
                  {index + 1}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-white dark:text-gray-400 leading-relaxed text-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 ms-20">
            <Link
              target="_blank"
              href="https://apps.apple.com/pk/app/copy-paste-keyboard/id6748644352"
            >
              <button className="cursor-pointer bg-white text-primary dark:bg-white dark:text-gray-950 px-8 py-2 rounded-xl font-semibold text-lg hover:scale-102 dark:hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
