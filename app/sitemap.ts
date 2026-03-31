import type { MetadataRoute } from "next";
import { getPosts, getProjects } from "@/lib/content/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yousef-genedy.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/experience", "/oss", "/projects", "/posts"];
  const projectRoutes = getProjects().map((project) => `/projects/${project.slug}`);
  const postRoutes = getPosts().map((post) => `/posts/${post.slug}`);
  const allRoutes = [...staticRoutes, ...projectRoutes, ...postRoutes];

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

