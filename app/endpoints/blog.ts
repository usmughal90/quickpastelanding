import type { Article, BlogPost, BlogPostsResponse } from "../types/types";
import { buildApiUrl } from "../utils/urls";

const REQUEST_TIMEOUT_MS = 10_000;

const emptyBlogPostsResponse: BlogPostsResponse = {
  data: [],
  meta: {
    pagination: {
      page: 1,
      pageSize: 0,
      pageCount: 0,
      total: 0,
    },
  },
};

function createApiUrl(path: string) {
  const apiUrl = buildApiUrl(path);

  if (!apiUrl) {
    console.error("NEXT_PUBLIC_API_URL is not configured.");
    return null;
  }

  try {
    return new URL(apiUrl);
  } catch (error) {
    console.error("NEXT_PUBLIC_API_URL is invalid.", error);
    return null;
  }
}

async function fetchApiJson<T>(url: URL): Promise<T | null> {
  try {
    const res = await fetch(url.toString(), {
      cache: "no-store",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!res.ok) {
      console.error(`API request failed: ${res.status} ${res.statusText}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("API request timed out or failed.", error);
    return null;
  }
}

async function getLatestBlogPosts(): Promise<{
  visibleUpdates: BlogPost[];
  visibleCount: number;
}> {
  const url = createApiUrl("/blogs");

  if (!url) return { visibleUpdates: [], visibleCount: 0 };

  url.searchParams.set("filters[appName][$eq]", "quick-paste-manager");

  const blogPosts = await fetchApiJson<BlogPostsResponse>(url);
  const visibleUpdates = blogPosts?.data?.slice(0, 3) ?? [];
  const visibleCount = visibleUpdates.length;

  return { visibleUpdates, visibleCount };
}

async function getFeatures(): Promise<Article[]> {
  const url = createApiUrl("/quick-paste-features");

  if (!url) return [];

  const features = await fetchApiJson<{ data?: Article[] }>(url);

  return features?.data ?? [];
}

async function getBlogPostsPage(options?: {
  page?: number;
  pageSize?: number;
}): Promise<BlogPostsResponse> {
  const page = options?.page ?? 1;
  const pageSize = options?.pageSize ?? 9;

  const url = createApiUrl("/blogs");

  if (!url) return emptyBlogPostsResponse;

  url.searchParams.set("filters[appName][$eq]", "quick-paste-manager");
  // Strapi-style pagination params
  url.searchParams.set("pagination[page]", String(page));
  url.searchParams.set("pagination[pageSize]", String(pageSize));
  // url.searchParams.set('sort', 'rank:asc');

  // Ensure nested fields used by the UI are available (safe even if backend ignores it)
  url.searchParams.set("populate[blogDetailPage][populate]", "thumbnail");

  return (await fetchApiJson<BlogPostsResponse>(url)) ?? emptyBlogPostsResponse;
}

async function getBlogPostBySlug(slug: string): Promise<BlogPostsResponse> {
  const url = createApiUrl("/blogs");

  if (!url) return emptyBlogPostsResponse;

  url.searchParams.set("filters[slug][$eq]", slug);
  // Grab everything needed for the detail page (text + images)
  // url.searchParams.set("populate[blogDetailPage][populate]", "*");

  return (await fetchApiJson<BlogPostsResponse>(url)) ?? emptyBlogPostsResponse;
}

export { getLatestBlogPosts, getBlogPostsPage, getBlogPostBySlug, getFeatures };
