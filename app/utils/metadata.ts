import type { Metadata } from "next";
import { buildPublicSiteUrl, getPublicSiteUrl } from "./siteUrl";

export const SITE_NAME = "Clipboard Manager Quick Paste";
export const DEFAULT_DESCRIPTION =
  "A secure iOS clipboard manager that saves text, images, and links.";

const OG_IMAGE_PATH = "/header.png";

export function getSiteOgImageUrl(): string {
  return buildPublicSiteUrl(OG_IMAGE_PATH);
}

export function buildRootMetadata(overrides?: Metadata): Metadata {
  const siteUrl = getPublicSiteUrl();
  const ogImage = getSiteOgImageUrl();

  const base: Metadata = {
    metadataBase: new URL(siteUrl),
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      images: [ogImage],
    },
    other: {
      "apple-itunes-app": "app-id=6748644352",
    },
  };

  return { ...base, ...overrides };
}

export const BLOG_INDEX_METADATA: Metadata = {
  title: "Blog | Clipboard Manager Quick Paste",
  description:
    "Tips, setup guides, and updates for Quick Paste — the iOS clipboard manager that saves text, images, and links.",
  alternates: {
    canonical: buildPublicSiteUrl("/blog"),
  },
  openGraph: {
    type: "website",
    url: buildPublicSiteUrl("/blog"),
    title: "Blog | Clipboard Manager Quick Paste",
    description:
      "Tips, setup guides, and updates for Quick Paste — the iOS clipboard manager that saves text, images, and links.",
    images: [
      {
        url: getSiteOgImageUrl(),
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Clipboard Manager Quick Paste",
    description:
      "Tips, setup guides, and updates for Quick Paste — the iOS clipboard manager that saves text, images, and links.",
    images: [getSiteOgImageUrl()],
  },
};
