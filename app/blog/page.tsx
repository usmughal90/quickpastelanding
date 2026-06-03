import type { Metadata } from "next";
import BlogItem from "../components/BlogItem";
import Link from "next/link";
import { BlogPostsResponse } from "../types/types";
import { getBlogPostsPage } from "../endpoints/blog";
import { BLOG_INDEX_METADATA } from "../utils/metadata";
import { buildPublicSiteUrl } from "../utils/siteUrl";

type PageProps = {
  searchParams?: Promise<{ page?: string }>;
};

function parsePageParam(raw?: string): number {
  const n = Number(raw ?? "1");
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.floor(n);
}

function clampPage(value: number, pageCount: number) {
  if (pageCount > 0 && value > pageCount) return pageCount;
  return value;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const sp = searchParams ? await searchParams : undefined;
  const page = parsePageParam(sp?.page);

  if (page > 1) {
    return {
      ...BLOG_INDEX_METADATA,
      robots: { index: false, follow: true },
      alternates: {
        canonical: buildPublicSiteUrl("/blog"),
      },
    };
  }

  return BLOG_INDEX_METADATA;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const sp = searchParams ? await searchParams : undefined;
  const requestedPage = parsePageParam(sp?.page);

  const firstPageResponse: BlogPostsResponse = await getBlogPostsPage({
    page: 1,
    pageSize: 9,
  });
  const pageCount = firstPageResponse?.meta?.pagination?.pageCount ?? 1;
  const page = clampPage(requestedPage, pageCount);

  const postsResponse: BlogPostsResponse =
    page === 1
      ? firstPageResponse
      : await getBlogPostsPage({ page, pageSize: 9 });

  const posts = postsResponse?.data ?? [];
  const meta = postsResponse?.meta?.pagination;

  return (
    <div className="min-h-screen bg-transparent dark:bg-gray-950 pt-24 pb-20">
      <header className="text-center mb-12">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Blogs
        </h1>
        <div className="mx-auto mt-3 h-0.5 w-10 rounded bg-(--color-primary)" />
      </header>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold">
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
          <span className="text-zinc-400">/</span>
          <Link href="/blog" className="text-primary  hover:underline">
            Blog
          </Link>
        </nav>

        <div className="flex flex-col">
          {posts.map((post, index) => (
            <Link
              key={post.slug ? post.slug : index}
              href={`/blog/${post.slug}`}
              className="outline-none focus-visible:underline"
            >
              <BlogItem
                key={post.id}
                title={post.title}
                description={post.shortDescription}
                date={post.publishedAt ? post.publishedAt : post.createdAt}
                featuredImage={post.featuredImage}
              />
            </Link>
          ))}
        </div>

        {pageCount > 1 ? (
          <nav className="mt-10 flex flex-col items-center justify-center gap-4">
            <p className="text-sm dark:text-zinc-300">
              Page{" "}
              <span className="font-semibold text-zinc-700 dark:text-white">
                {meta?.page ?? page}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-zinc-700 dark:text-white">
                {meta?.pageCount ?? pageCount}
              </span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link
                href={page <= 2 ? "/blog" : `/blog?page=${page - 1}`}
                aria-disabled={page <= 1}
                className={`rounded-md border px-3 py-2 text-sm font-semibold ${
                  page <= 1
                    ? "pointer-events-none border-zinc-200 text-zinc-400"
                    : "border-zinc-300 text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                Prev
              </Link>

              {Array.from({ length: pageCount }, (_, i) => i + 1)
                .slice(Math.max(0, page - 3), Math.min(pageCount, page + 2))
                .map((p) => (
                  <Link
                    key={p}
                    href={p === 1 ? "/blog" : `/blog?page=${p}`}
                    className={`rounded-md border px-3 py-2 text-sm font-semibold ${
                      p === page
                        ? "border-primary bg-primary text-white"
                        : "border-zinc-300 text-zinc-900 hover:bg-zinc-50"
                    }`}
                  >
                    {p}
                  </Link>
                ))}

              <Link
                href={`/blog?page=${Math.min(pageCount, page + 1)}`}
                aria-disabled={page >= pageCount}
                className={`rounded-md border px-3 py-2 text-sm font-semibold ${
                  page >= pageCount
                    ? "pointer-events-none border-zinc-200 text-zinc-400"
                    : "border-zinc-300 text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                Next
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
