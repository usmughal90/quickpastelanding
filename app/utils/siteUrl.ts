/**
 * Public URL of this Next.js site (Search Console, sitemap, canonical).
 * Must match the property host where the sitemap is submitted — not Strapi/API hosts.
 */
function normalizeOrigin(raw: string) {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  try {
    const u = new URL(withProtocol);
    return u.origin;
  } catch {
    return null;
  }
}

export function getPublicSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const normalized = fromEnv ? normalizeOrigin(fromEnv) : null;
  if (normalized) return normalized;

  return "https://quickpaste.codebusterapps.com";
}

export function buildPublicSiteUrl(path: string): string {
  const base = getPublicSiteUrl();
  const pathname = path.startsWith("/") ? path : `/${path}`;
  return new URL(pathname, `${base}/`).toString();
}
