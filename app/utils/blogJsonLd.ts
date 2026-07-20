import type { BlogPost } from "../types/types";
import { organizationId, organizationSchema, websiteId } from "../data/schemaIds";
import { buildImageUrl } from "./urls";
import { buildPublicSiteUrl } from "./siteUrl";

export function buildBlogPostJsonLd(post: BlogPost, slug: string) {
  const url = post.seo?.canonicalUrl || buildPublicSiteUrl(`/blog/${slug}`);
  const imageSourceUrl =
    post.seo?.ogImage?.url || post.featuredImage?.url || undefined;
  const imageUrl = imageSourceUrl ? buildImageUrl(imageSourceUrl) : undefined;
  const datePublished = post.publishedAt || post.createdAt;
  const dateModified = post.updatedAt || datePublished;
  const authorName = post.author?.trim();

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      {
        "@type": "BlogPosting",
        "@id": url,
        url,
        headline: post.title,
        description: post.shortDescription || undefined,
        datePublished,
        dateModified,
        inLanguage: "en",
        ...(authorName
          ? { author: { "@type": "Person", name: authorName } }
          : { author: { "@id": organizationId } }),
        publisher: { "@id": organizationId },
        ...(imageUrl ? { image: [imageUrl] } : {}),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
          isPartOf: { "@id": websiteId },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: buildPublicSiteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: buildPublicSiteUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };
}
