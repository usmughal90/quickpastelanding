import Link from "next/link";

const APP_STORE_URL =
  "https://apps.apple.com/pk/app/copy-paste-keyboard/id6748644352";

type AppStoreDownloadCTAProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  className?: string;
};

export default function AppStoreDownloadCTA({
  title = "Get Quick Paste on your iPhone",
  description = "Free clipboard manager for iOS — save text, images, and links, then paste anywhere in one tap.",
  buttonLabel = "Download on App Store",
  className = "",
}: AppStoreDownloadCTAProps) {
  return (
    <section
      className={`mt-16 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 px-6 py-10 text-center dark:border-primary/30 dark:from-primary/10 dark:to-primary/5 sm:px-10 ${className}`}
    >
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <Link
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#0766ad] to-[#0a7fd4] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-primary/40 dark:from-[#0766ad] dark:to-[#3d9ae8]"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
