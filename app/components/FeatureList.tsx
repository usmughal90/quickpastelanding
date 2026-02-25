
import Image from 'next/image';

interface FeatureBullet {
  text: string;
}

const clipboardFeatures: FeatureBullet[] = [
  { text: "Reuse saved clipboard items across iPhone apps" },
  { text: "Store multiple content types in one clipboard list" },
  { text: "Paste saved items directly from the iOS keyboard" },
  { text: "Organise frequently used copied content" },
  { text: "Protect clipboard history with Face lock" },
  { text: "Clipboard data never leaves your device" },
  { text: "Fast, responsive, and free of cost" },
];

export default function FeatureSection() {
  return (
    <section className="bg-transparent dark:bg-gray-950 py-16 px-6 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

        {/* Left Column: Content */}
        <div className="flex flex-col text-left ">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Features Clipboard Manager
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-3">
            Everything you copy can be saved, organised, and pasted again when needed.
          </p>

          <div className="space-y-4 relative">
            {clipboardFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-center group">
                {/* White Square Bullet */}
                <div className="flex-shrink-0 w-2.5 h-2.5 bg-(--primary) dark:bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(255,255,255,0.4)] rounded-full group-hover:scale-125 transition-transform duration-300">
                </div>

                <div className="flex-1">
                  <p className="text-gray-800 dark:text-gray-300 text-lg font-medium leading-tight">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Mobile Mockup (Now Aligned Left towards the text) */}
        <div className="flex justify-center relative ">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>

          {/* Physical Phone Frame */}
          <div className="relative z-10 w-full max-w-[240px] p-[8px] bg-gray-100 dark:bg-[#1a1a1a] rounded-[2.4rem] border-[5px] border-gray-300 dark:border-[#333] shadow-2xl overflow-hidden">
            {/* Notch */}
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-100 dark:bg-[#1a1a1a] rounded-b-xl z-20"></div> */}

            <div className="rounded-[2.2rem] overflow-hidden bg-gray-900 h-full">
              <Image
                src="/images/featured-image.jpg"
                alt="Clipboard Manager Features"
                width={100}
                height={100}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}