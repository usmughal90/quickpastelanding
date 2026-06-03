import type { BlogPost } from "../types/types";
import { buildImageUrl } from "./urls";
import { buildPublicSiteUrl } from "./siteUrl";

export function buildBlogPostJsonLd(post: BlogPost, slug: string) {
  const url = buildPublicSiteUrl(`/blog/${slug}`);
  const imageUrl = post.featuredImage?.url
    ? buildImageUrl(post.featuredImage.url)
    : undefined;
  const datePublished = post.publishedAt || post.createdAt;
  const dateModified = post.updatedAt || datePublished;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.shortDescription || undefined,
        datePublished,
        dateModified,
        author: {
          "@type": "Person",
          name: post.author || "CodeBuster Apps",
        },
        publisher: {
          "@type": "Organization",
          name: "CodeBuster Apps",
          url: buildPublicSiteUrl("/"),
        },
        ...(imageUrl ? { image: [imageUrl] } : {}),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
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
