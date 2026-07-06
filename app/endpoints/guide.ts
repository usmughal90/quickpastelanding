import type { GuidesResponse } from "../types/types";
import { buildApiUrl } from "../utils/urls";
import { ApiFetchError } from "./errors";

const REQUEST_TIMEOUT_MS = 10_000;
const GUIDE_REVALIDATE_SECONDS = 3600;

const emptyGuidesResponse: GuidesResponse = {
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

/** Throws ApiFetchError on timeout, network failure, non-2xx, or invalid JSON. */
async function fetchApiJson<T>(url: URL): Promise<T> {
  let res: Response;
  try {
    res = await fetch(url.toString(), {
      next: { revalidate: GUIDE_REVALIDATE_SECONDS },
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

async function fetchApiJsonOrNull<T>(url: URL): Promise<T | null> {
  try {
    return await fetchApiJson<T>(url);
  } catch {
    return null;
  }
}

/**
 * Used by the guides listing page (if one exists). Degrades gracefully —
 * an empty list is not user/crawler-hostile the way a false 404 is.
 */
async function getGuidesPage(options?: {
  page?: number;
  pageSize?: number;
}): Promise<GuidesResponse> {
  const page = options?.page ?? 1;
  const pageSize = options?.pageSize ?? 9;

  const url = createApiUrl("/guides");
  if (!url) return emptyGuidesResponse;

  url.searchParams.set("filters[appName][$eq]", "quick-paste-manager");
  url.searchParams.set("pagination[page]", String(page));
  url.searchParams.set("pagination[pageSize]", String(pageSize));
  url.searchParams.set("sort", "publishedAt:desc");

  const result = await fetchApiJsonOrNull<GuidesResponse>(url);
  return result ?? emptyGuidesResponse;
}

/**
 * Used by the guide detail page. THROWS ApiFetchError on network/timeout/5xx
 * failures instead of silently returning empty. Callers must catch
 * ApiFetchError and render/throw a 500-style error rather than calling
 * notFound() — a permissions regression or cold start should never look
 * like "this page doesn't exist" to Google.
 */
async function getGuideBySlug(slug: string): Promise<GuidesResponse> {
  const url = createApiUrl("/guides");
  if (!url) {
    throw new ApiFetchError("NEXT_PUBLIC_API_URL is not configured.");
  }

  url.searchParams.set("filters[slug][$eq]", slug);
  url.searchParams.set("filters[appName][$eq]", "quick-paste-manager");

  return fetchApiJson<GuidesResponse>(url);
}

export { getGuidesPage, getGuideBySlug };