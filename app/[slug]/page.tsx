import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CKContentRenderer from "@/app/components/shared/CKContentRenderer";
import GuideFAQs from "@/app/components/GuideFAQs";
import GuideCTASection from "@/app/components/GuideCTASection";
import { getGuideBySlug } from "@/app/endpoints/guide";
import { ApiFetchError } from "@/app/endpoints/errors"; // or "./blog", see note above
import { Guide, GuidesResponse } from "@/app/types/types";
import { buildPublicSiteUrl } from "@/app/utils/siteUrl";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  let res: GuidesResponse;
  try {
    res = await getGuideBySlug(slug);
  } catch (error) {
    console.error(`generateMetadata: failed to fetch guide "${slug}".`, error);
    return {};
  }

  const guide: Guide | undefined = res?.data?.[0];
  if (!guide) return {};

  const title = guide.title;
  const canonical = buildPublicSiteUrl(`/${slug}`);

  return {
    title,
    alternates: { canonical },
    openGraph: { title, url: canonical, type: "article" },
    twitter: { card: "summary", title },
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let res: GuidesResponse;
  try {
    res = await getGuideBySlug(slug);
  } catch (error) {
    // Fetch genuinely failed — don't notFound(). Rethrow so Next renders
    // the nearest error.tsx as a 500, which crawlers treat as "try later,"
    // not "this is gone."
    console.error(`GuideDetailPage: failed to fetch guide "${slug}".`, error);
    throw error instanceof ApiFetchError
      ? error
      : new ApiFetchError("Unexpected error fetching guide.", error);
  }

  const guide: Guide | undefined = res?.data?.[0];

  // Fetch succeeded and genuinely found nothing — this is a real 404.
  if (!guide) notFound();

  const title = guide.title ?? "";
  const publishedAt = guide.publishedAt ?? guide.createdAt ?? "";
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const content = typeof guide.content === "string" ? guide.content : "";
  const faqs = guide.faqs ?? [];

  return (
    <div className="min-h-dvh bg-white dark:bg-gray-950">
      <section className="mx-auto w-full max-w-4xl px-6 py-10">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold">
          <Link href="/" className="text-(--color-primary) hover:underline">
            Home
          </Link>
          <span className="text-zinc-400">/</span>
          <span className="text-(--color-primary)">{title}</span>
        </nav>

        <header className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {title}
          </h1>
          {formattedDate ? (
            <p className="mt-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {formattedDate}
            </p>
          ) : null}
        </header>

        {content.trim().length > 0 ? (
          <article className="mt-10 max-w-none">
            <CKContentRenderer content={content} />
          </article>
        ) : null}

        <GuideFAQs faqs={faqs} />
        <GuideCTASection homeCTA={guide.homeCTA} />

        <div className="mt-12 border-t border-zinc-200 pt-6">
          <Link
            href="/"
            className="text-sm font-semibold text-zinc-900 dark:text-white hover:underline hover:text-primary"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}