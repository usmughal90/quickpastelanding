import type { Article, BlogPost, BlogPostsResponse } from "../types/types";
import { ApiFetchError } from "./errors";
import { buildApiUrl } from "../utils/urls";

const REQUEST_TIMEOUT_MS = 10_000;
const BLOG_REVALIDATE_SECONDS = 3600; // cache for 1 hour instead of hitting Strapi on every request/crawl

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

/**
 * Thrown when a request to the API fails due to network error, timeout,
 * or a non-2xx response. This is intentionally distinct from the API
 * successfully responding with zero results (a valid "not found" state).
 *
 * Callers that render user-facing 404s (e.g. blog detail pages) MUST
 * distinguish this from an empty-but-successful response — otherwise a
 * transient backend hiccup gets served to users and crawlers as a
 * permanent 404 on a URL our own sitemap lists as valid.
 */


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

/**
 * Fetches JSON from the given URL.
 * Throws ApiFetchError on timeout, network failure, non-2xx, or invalid JSON.
 * Callers decide whether to swallow that (degrade gracefully) or propagate it
 * (surface a 500 instead of a false 404).
 */
async function fetchApiJson<T>(url: URL): Promise<T> {
  let res: Response;
  try {
    res = await fetch(url.toString(), {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (error) {
    console.error("API request timed out or failed.", error);
    throw new ApiFetchError("API request timed out or failed.", error);
  }

  if (!res.ok) {
    console.error(`API request failed: ${res.status} ${res.statusText}`);
    throw new ApiFetchError(
      `API request failed: ${res.status} ${res.statusText}`
    );
  }

  try {
    return (await res.json()) as T;
  } catch (error) {
    console.error("API response was not valid JSON.", error);
    throw new ApiFetchError("API response was not valid JSON.", error);
  }
}

/**
 * Safe wrapper for call sites that should degrade gracefully on failure
 * (e.g. homepage sections) rather than distinguish error from empty.
 */
async function fetchApiJsonOrNull<T>(url: URL): Promise<T | null> {
  try {
    return await fetchApiJson<T>(url);
  } catch {
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

  const blogPosts = await fetchApiJsonOrNull<BlogPostsResponse>(url);
  const visibleUpdates = blogPosts?.data?.slice(0, 3) ?? [];
  const visibleCount = visibleUpdates.length;

  return { visibleUpdates, visibleCount };
}

async function getFeatures(): Promise<Article[]> {
  const url = createApiUrl("/quick-paste-features");
  if (!url) return [];

  const features = await fetchApiJsonOrNull<{ data?: Article[] }>(url);
  return features?.data ?? [];
}

/**
 * Used by the blog listing page and sitemap.xml.
 * Degrades gracefully to an empty page on failure — a blank list is not
 * user- or crawler-hostile the way a false 404 on a specific post is.
 */
async function getBlogPostsPage(options?: {
  page?: number;
  pageSize?: number;
}): Promise<BlogPostsResponse> {
  const page = options?.page ?? 1;
  const pageSize = options?.pageSize ?? 9;

  const url = createApiUrl("/blogs");
  if (!url) return emptyBlogPostsResponse;

  url.searchParams.set("filters[appName][$eq]", "quick-paste-manager");
  url.searchParams.set("pagination[page]", String(page));
  url.searchParams.set("pagination[pageSize]", String(pageSize));
  url.searchParams.set("sort", "publishedAt:desc");
  url.searchParams.set("populate[blogDetailPage][populate]", "thumbnail");

  const result = await fetchApiJsonOrNull<BlogPostsResponse>(url);
  return result ?? emptyBlogPostsResponse;
}

/**
 * Used by blog detail pages (generateMetadata + page body) and sitemap lookups.
 *
 * IMPORTANT: this THROWS ApiFetchError on network/timeout/5xx failures
 * instead of silently returning empty. Callers must catch ApiFetchError
 * and render/throw a 500-style error rather than calling notFound().
 */
async function getBlogPostBySlug(slug: string): Promise<BlogPostsResponse> {
  const url = createApiUrl("/blogs");
  if (!url) {
    throw new ApiFetchError("NEXT_PUBLIC_API_URL is not configured.");
  }

  url.searchParams.set("filters[slug][$eq]", slug);
  // url.searchParams.set("populate", "*");

  return fetchApiJson<BlogPostsResponse>(url);
}

export { getLatestBlogPosts, getBlogPostsPage, getBlogPostBySlug, getFeatures };