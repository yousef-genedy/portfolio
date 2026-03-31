import type { MetadataRoute } from "next";
import { getNotes, getProjects } from "@/lib/content/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/experience", "/oss", "/projects", "/posts"];
  const projectRoutes = getProjects().map((project) => `/projects/${project.slug}`);
  const postRoutes = getNotes().map((post) => `/posts/${post.slug}`);
  const allRoutes = [...staticRoutes, ...projectRoutes, ...postRoutes];

  const entries: MetadataRoute.Sitemap = allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  return entries;
}

