import type { MetadataRoute } from "next";
import { getBlogPostsPage } from "./endpoints/blog";
import { buildPublicSiteUrl } from "./utils/siteUrl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsResponse = await getBlogPostsPage({ page: 1, pageSize: 100 });
  const posts = postsResponse.data ?? [];

  return [
    {
      url: buildPublicSiteUrl("/"),
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: buildPublicSiteUrl("/blog"),
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: buildPublicSiteUrl("/privacy-policy"),
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: buildPublicSiteUrl("/terms"),
      lastModified: new Date(),
      priority: 0.3,
    },
    ...posts.map((post) => ({
      url: buildPublicSiteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt),
      priority: 0.64,
    })),
  ];
}
