import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {
  AboutEntry,
  ContentCollection,
  ExperienceEntry,
  PostEntry,
  OssEntry,
  ProjectEntry,
} from "@/lib/content/types";

const CONTENT_ROOT = path.join(process.cwd(), "content");
const WORDS_PER_MINUTE = 220;

function readFileContent(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

function getCollectionFileNames(collection: ContentCollection) {
  const collectionPath = path.join(CONTENT_ROOT, collection);

  if (!fs.existsSync(collectionPath)) {
    return [];
  }

  return fs
    .readdirSync(collectionPath)
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"));
}

function extractSlug(fileName: string) {
  return fileName.replace(/\.mdx?$/, "");
}

function sortByOrderAndDate<T extends { order?: number; date?: string }>(entries: T[]) {
  return [...entries].sort((a, b) => {
    const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.order ?? Number.MAX_SAFE_INTEGER;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;

    return dateB - dateA;
  });
}

function formatDateForUi(date?: string) {
  if (!date) {
    return "Draft";
  }

  const timestamp = new Date(date).getTime();

  if (Number.isNaN(timestamp)) {
    return "Draft";
  }

  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function calculateReadingTimeMinutes(content: string, fallback: unknown) {
  if (typeof fallback === "number" && Number.isFinite(fallback) && fallback > 0) {
    return Math.round(fallback);
  }

  if (typeof fallback === "string") {
    const parsed = Number(fallback);

    if (Number.isFinite(parsed) && parsed > 0) {
      return Math.round(parsed);
    }
  }

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function getAboutPage(): AboutEntry {
  const filePath = path.join(CONTENT_ROOT, "about", "index.mdx");
  const { data, content } = readFileContent(filePath);

  return {
    slug: "index",
    body: content,
    title: String(data.title ?? "About"),
    summary: String(data.summary ?? ""),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
  };
}

export function getProjects(): ProjectEntry[] {
  const entries = getCollectionFileNames("projects").map((fileName) => {
    const filePath = path.join(CONTENT_ROOT, "projects", fileName);
    const { data, content } = readFileContent(filePath);

    return {
      collection: "projects" as const,
      slug: extractSlug(fileName),
      body: content,
      title: String(data.title ?? extractSlug(fileName)),
      summary: String(data.summary ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      date: data.date ? String(data.date) : undefined,
      order: typeof data.order === "number" ? data.order : undefined,
      featured: Boolean(data.featured),
      status: data.status ? String(data.status) : undefined,
      stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
      impact: String(data.impact ?? ""),
      company: data.company ? String(data.company) : undefined,
      role: data.role ? String(data.role) : undefined,
      links:
        typeof data.links === "object" && data.links
          ? {
              github:
                typeof (data.links as { github?: unknown }).github === "string"
                  ? (data.links as { github: string }).github
                  : undefined,
              demo:
                typeof (data.links as { demo?: unknown }).demo === "string"
                  ? (data.links as { demo: string }).demo
                  : undefined,
            }
          : undefined,
    };
  });

  return sortByOrderAndDate(entries);
}

export function getFeaturedProjects() {
  return getProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

export function getPosts(): PostEntry[] {
  const entries = getCollectionFileNames("posts").map((fileName) => {
    const filePath = path.join(CONTENT_ROOT, "posts", fileName);
    const { data, content } = readFileContent(filePath);
    const status = data.status ? String(data.status) : undefined;
    const date = data.date ? String(data.date) : undefined;
    const readingTimeMinutes = calculateReadingTimeMinutes(content, (data as { readingTime?: unknown }).readingTime);
    const published =
      typeof data.published === "boolean"
        ? data.published
        : status
          ? status.toLowerCase() !== "draft"
          : true;

    return {
      collection: "posts" as const,
      slug:
        typeof data.slug === "string" && data.slug.trim().length > 0
          ? data.slug.trim()
          : extractSlug(fileName),
      body: content,
      title: String(data.title ?? extractSlug(fileName)),
      summary: String(data.summary ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      date,
      order: typeof data.order === "number" ? data.order : undefined,
      featured: Boolean(data.featured),
      status,
      published,
      readingTimeMinutes,
      readingTime: `${readingTimeMinutes} min read`,
      formattedDate: formatDateForUi(date),
    };
  });

  return sortByOrderAndDate(entries).filter((post) => post.published);
}

export function getPostBySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

export function getExperienceEntries(): ExperienceEntry[] {
  const entries = getCollectionFileNames("experience").map((fileName) => {
    const filePath = path.join(CONTENT_ROOT, "experience", fileName);
    const { data, content } = readFileContent(filePath);

    return {
      collection: "experience" as const,
      slug: extractSlug(fileName),
      body: content,
      title: String(data.title ?? extractSlug(fileName)),
      summary: String(data.summary ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      date: data.date ? String(data.date) : undefined,
      order: typeof data.order === "number" ? data.order : undefined,
      featured: Boolean(data.featured),
      status: data.status ? String(data.status) : undefined,
      company: String(data.company ?? ""),
      role: String(data.role ?? ""),
      startDate: String(data.startDate ?? ""),
      endDate: data.endDate ? String(data.endDate) : undefined,
      location: data.location ? String(data.location) : undefined,
    };
  });

  return sortByOrderAndDate(entries);
}

export function getOssEntries(): OssEntry[] {
  const entries = getCollectionFileNames("oss").map((fileName) => {
    const filePath = path.join(CONTENT_ROOT, "oss", fileName);
    const { data, content } = readFileContent(filePath);

    return {
      collection: "oss" as const,
      slug: extractSlug(fileName),
      body: content,
      title: String(data.title ?? extractSlug(fileName)),
      summary: String(data.summary ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      date: data.date ? String(data.date) : undefined,
      order: typeof data.order === "number" ? data.order : undefined,
      featured: Boolean(data.featured),
      status: data.status ? String(data.status) : undefined,
      project: String(data.project ?? ""),
      contributionType: String(data.contributionType ?? ""),
      links:
        typeof data.links === "object" && data.links
          ? {
              project:
                typeof (data.links as { project?: unknown }).project === "string"
                  ? (data.links as { project: string }).project
                  : undefined,
              pullRequest:
                typeof (data.links as { pullRequest?: unknown }).pullRequest === "string"
                  ? (data.links as { pullRequest: string }).pullRequest
                  : undefined,
              issue:
                typeof (data.links as { issue?: unknown }).issue === "string"
                  ? (data.links as { issue: string }).issue
                  : undefined,
            }
          : undefined,
    };
  });

  return sortByOrderAndDate(entries);
}
