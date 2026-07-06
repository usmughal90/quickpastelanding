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

/** Hostname from the configured public site URL (www or apex). */
export function getPreferredSiteHostname(): string {
  return new URL(getPublicSiteUrl()).hostname;
}

/** The other www/apex variant of the preferred hostname, if applicable. */
export function getAlternateSiteHostname(): string | null {
  const preferred = getPreferredSiteHostname();
  if (preferred.startsWith("www.")) {
    return preferred.slice(4);
  }
  return `www.${preferred}`;
}
