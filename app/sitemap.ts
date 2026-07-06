import type { MetadataRoute } from "next";
import { getBlogPostsPage } from "./endpoints/blog";
import { getGuidesPage } from "./endpoints/guide";
import { buildPublicSiteUrl } from "./utils/siteUrl";

export const revalidate = 3600;

const HOME_LAST_MODIFIED = new Date("2026-07-06");
const LEGAL_PAGES_LAST_MODIFIED = new Date("2026-07-06");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postsResponse, guidesResponse] = await Promise.all([
    getBlogPostsPage({ page: 1, pageSize: 100 }),
    getGuidesPage({ page: 1, pageSize: 100 }),
  ]);

  const posts = postsResponse.data ?? [];
  const guides = guidesResponse.data ?? [];

  return [
    {
      url: buildPublicSiteUrl("/"),
      lastModified: HOME_LAST_MODIFIED,
      priority: 1,
    },
    {
      url: buildPublicSiteUrl("/blog"),
      lastModified: new Date(), // legitimately dynamic — new posts land here
      priority: 0.8,
    },
    {
      url: buildPublicSiteUrl("/privacy-policy"),
      lastModified: LEGAL_PAGES_LAST_MODIFIED,
      priority: 0.3,
    },
    {
      url: buildPublicSiteUrl("/terms"),
      lastModified: LEGAL_PAGES_LAST_MODIFIED,
      priority: 0.3,
    },
    ...posts.map((post) => ({
      url: buildPublicSiteUrl(`/blog/${post.slug}`),
      lastModified: new Date(
        post.updatedAt || post.publishedAt || post.createdAt
      ),
      priority: 0.64,
    })),
    ...guides.map((guide) => ({
      url: buildPublicSiteUrl(`/${guide.slug}`),
      lastModified: new Date(
        guide.updatedAt || guide.publishedAt || guide.createdAt
      ),
      priority: 0.64,
    })),
  ];
}