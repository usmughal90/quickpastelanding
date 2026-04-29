function normalizeBaseUrl(baseUrl?: string | null) {
  const trimmedUrl = baseUrl?.trim();

  if (!trimmedUrl) return null;

  const normalizedUrl = /^https?:\/\//i.test(trimmedUrl)
    ? trimmedUrl
    : `https://${trimmedUrl}`;

  return normalizedUrl.endsWith("/") ? normalizedUrl : `${normalizedUrl}/`;
}

function buildAbsoluteUrl(baseUrl: string | undefined, path: string) {
  if (/^https?:\/\//i.test(path)) return path;

  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);

  if (!normalizedBaseUrl) return null;

  try {
    return new URL(path.replace(/^\//, ""), normalizedBaseUrl).toString();
  } catch (error) {
    console.error("Failed to build absolute URL.", error);
    return null;
  }
}

function buildApiUrl(path: string) {
  return buildAbsoluteUrl(process.env.NEXT_PUBLIC_API_URL, path);
}

function buildImageUrl(path: string) {
  return buildAbsoluteUrl(process.env.NEXT_PUBLIC_API_IMAGE_URL, path);
}

export { buildApiUrl, buildImageUrl };
