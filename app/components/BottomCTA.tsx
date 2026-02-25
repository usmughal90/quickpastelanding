import ContactForm from "./shared/ContactForm";

export default function BottomCTA() {
  return (
    <section className="bg-primary dark:bg-gray-950 py-20 px-6 lg:px-12 text-center relative overflow-hidden border-t border-gray-200 dark:border-white/5" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center dark:text-white mb-6 tracking-tight">
          Upgrade Your iPhone Clipboard
        </h2>
        <p className="text-white text-center dark:text-gray-400 text-lg md:text-xl leading-relaxed">
          Install a dedicated clipboard manager and stop losing copied content.
        </p>
      </div>
      <div className="max-w-4xl mx-auto relative z-10 mt-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6  ">
          <ContactForm />
          {/* <button className="bg-white flex items-start text-primary dark:bg-white dark:text-gray-950 px-3 py-3 rounded-xl font-semibold text-lg hover:scale-102 dark:hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg">
              Download Now
            </button> */}
        </div>
      </div>
    </section>
  );
}
/*

<a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-7 py-5 border-2 border-white dark:border-white rounded-xl font-bold text-white dark:text-white hover:bg-[#0766ad] hover:text-[#ddeefc]  dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all transform hover:scale-102 group w-fit mx-auto mt-12"
          >
            <svg
              className="w-8 h-8 fill-black dark:fill-white group-hover:fill-[#ddeefc] dark:group-hover:fill-black transition-colors"
              viewBox="0 0 384 512"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="flex flex-col items-start text-left leading-tight">
              <span className=" uppercase tracking-wider font-medium">
                Download Now
              </span>
            </div>
          </a>

          */
