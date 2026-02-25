

export default function Summary() {
  return (
    <section className="bg-transparent dark:bg-gray-950  px-6 lg:px-12 pb-20">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold capitalize text-black dark:text-white mb-8 tracking-tight">
          Clipboard Tool for iOS
        </h2>

        {/* Responsive text container */}
        <div className="mx-auto max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl px-8">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Quick Paste - Clipboard Manager is designed to help iPhone users save and reuse copied text, images, and links with structured clipboard history and pasteboard management features. It adds fast paste access through a keyboard extension and keeps saved clipboard items stored locally with optional Face ID protection.

          </p>
        </div>

      </div>
    </section>
  );
}
