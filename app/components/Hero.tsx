import Image from "next/image";
import Link from "next/link";
import ChooseButton from "./shared/ChooseButton";

export default function Hero() {
  return (
    <section className="bg-(--secondary) dark:bg-gray-950 text-black dark:text-white min-h-full lg:h-dvh flex items-center justify-center px-6 lg:px-16 overflow-hidden relative mt-0 py-12">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* left side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          <h1 className="text-[10vw] sm:text-6xl md:text-7xl lg:text-[4rem] font-bold tracking-tighter leading-[1.05] w-full">
            <span className="block xl:whitespace-nowrap">Clipboard Manager</span>
            <span className="mt-2 text-[#0766ad] block">Quick Paste</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-zinc-900 dark:text-gray-400 max-w-md font-medium">
            A secure iOS clipboard manager that saves text, images, and links.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col md:flex-row gap-6 flex-wrap">
            <Link
              target="_blank"
              href="https://apps.apple.com/pk/app/copy-paste-keyboard/id6748644352"
            >
              <button className="cursor-pointer bg-primary text-white dark:bg-white dark:text-gray-950 px-8 py-3 rounded-xl font-semibold text-lg hover:scale-102 dark:hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg">
                Let's start - It's free
              </button>
            </Link>
            <ChooseButton />
          </div>
        </div>

        {/* right side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative group lg:mt-0">
          <div className="absolute w-64 h-64 transition-all duration-700"></div>
          <div className="relative z-10 w-full transition-transform duration-500 group-hover:animate-premium-float">
            <Image
              src="/header.png"
              alt="Clipboard Manager Quick Paste"
              width={400}
              height={800}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}