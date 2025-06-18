import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/actions";

const isProd = process.env.NODE_ENV === "production";
const domain = isProd
  ? process.env.NEXT_PUBLIC_PROD_URL!
  : process.env.NEXT_PUBLIC_DEV_URL!;

const routes = ["", "about", "projects", "blog", "bits", "uses"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();

  const baseRoutes = routes.map((route) => ({
    url: `${domain}/${route}`,
    lastModified: new Date(),
  }));

  const blogPostRoutes = blogPosts.map(({ slug, date }) => ({
    url: `${domain}/blog/${slug}`,
    lastModified: new Date(date),
  }));

  return [...baseRoutes, ...blogPostRoutes];
}
