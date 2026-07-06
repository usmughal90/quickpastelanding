import Link from "next/link";
import type { GuideHomeCTA } from "@/app/types/types";
import { getHomeCtaHref } from "@/app/utils/homeCta";

const APP_STORE_URL =
  "https://apps.apple.com/pk/app/copy-paste-keyboard/id6748644352";

interface GuideCTASectionProps {
  homeCTA?: GuideHomeCTA | null;
}

export default function GuideCTASection({ homeCTA }: GuideCTASectionProps) {
  const hasHomeCta = Boolean(homeCTA?.title?.trim() && homeCTA?.link);

  return (
    <section className="mt-16 rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 to-primary/10 px-6 py-10 text-center dark:border-primary/30 dark:from-primary/10 dark:to-primary/5 sm:px-10">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        Get Quick Paste on your iPhone
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        Free clipboard manager for iOS — save text, images, and links, then paste
        anywhere in one tap.
      </p>

      <div className="mt-6 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
        {hasHomeCta ? (
          <Link
            href={getHomeCtaHref(homeCTA!.link)}
            className="inline-flex items-center justify-center rounded-xl border border-primary bg-white px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary/5 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
          >
            {homeCTA!.title}
          </Link>
        ) : null}
        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#0766ad] to-[#0a7fd4] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-primary/40 dark:from-[#0766ad] dark:to-[#3d9ae8]"
        >
          Download on App Store
        </Link>
      </div>
    </section>
  );
}
