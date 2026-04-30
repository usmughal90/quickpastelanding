import type { MetadataRoute } from "next";
import { getBlogPostsPage } from "./endpoints/blog";

const SITE_URL =
  process.env.NEXT_PUBLIC_API_DOMAIN || "https://quickpaste.codebusterapps.com";

function buildSiteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsResponse = await getBlogPostsPage({ page: 1, pageSize: 100 });
  const posts = postsResponse.data ?? [];

  return [
    {
      url: buildSiteUrl("/"),
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: buildSiteUrl("/blog"),
      lastModified: new Date(),
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: buildSiteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt),
      priority: 0.64,
    })),
  ];
}
