import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {
  AchievementType,
  AboutEntry,
  ContentCollection,
  ExperiencePageContent,
  HomePageContent,
  ExperienceItem,
  ExperienceTechnology,
  ExperienceAchievement,
  HeroCta,
  HeroFact,
  HeroSocialLink,
  OssMetric,
  OssPageContent,
  PostEntry,
  PullRequestEntry,
  PullRequestStatus,
  ProjectEntry,
  OssRepo,
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

function parseHeroFacts(value: unknown): HeroFact[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const facts: HeroFact[] = [];

  for (const item of value) {
    if (typeof item !== "object" || item === null) {
      continue;
    }

    const row = item as { title?: unknown; detail?: unknown };
    const title = typeof row.title === "string" ? row.title : "";
    const detail = typeof row.detail === "string" ? row.detail : "";

    if (!title || !detail) {
      continue;
    }

    facts.push({ title, detail });
  }

  return facts;
}

function parseHeroLinks(value: unknown): HeroSocialLink[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const links: HeroSocialLink[] = [];

  for (const item of value) {
    if (typeof item !== "object" || item === null) {
      continue;
    }

    const row = item as { label?: unknown; href?: unknown };
    const label = typeof row.label === "string" ? row.label : "";
    const href = typeof row.href === "string" ? row.href : "";

    if (!label || !href) {
      continue;
    }

    links.push({ label, href });
  }

  return links;
}

function parseHeroCtas(value: unknown): HeroCta[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const ctas: HeroCta[] = [];

  for (const item of value) {
    if (typeof item !== "object" || item === null) {
      continue;
    }

    const row = item as { label?: unknown; href?: unknown };
    const label = typeof row.label === "string" ? row.label : "";
    const href = typeof row.href === "string" ? row.href : "";

    if (!label || !href) {
      continue;
    }

    ctas.push({ label, href });
  }

  return ctas;
}

export function getHomePageContent(): HomePageContent {
  const filePath = path.join(CONTENT_ROOT, "home", "index.mdx");

  if (!fs.existsSync(filePath)) {
    return {
      greeting: "Hey There",
      name: "Yousef Genedy",
      title: "Software Engineer",
      description: "I build systems, explore ideas, and enjoy learning how things work from the inside out.",
      facts: [],
      socialLinks: [],
      ctas: [
        { label: "Explore OSS", href: "/oss" },
        { label: "View Projects", href: "/projects" },
      ],
    };
  }

  const { data } = readFileContent(filePath);

  const facts = parseHeroFacts((data as { facts?: unknown }).facts);
  const socialLinks = parseHeroLinks((data as { socialLinks?: unknown }).socialLinks);
  const ctas = parseHeroCtas((data as { ctas?: unknown }).ctas);

  return {
    greeting: typeof data.greeting === "string" ? data.greeting : "Hey There",
    name: typeof data.name === "string" ? data.name : "Yousef Genedy",
    title: typeof data.title === "string" ? data.title : "Software Engineer",
    description:
      typeof data.description === "string"
        ? data.description
        : "I build systems, explore ideas, and enjoy learning how things work from the inside out.",
    facts,
    socialLinks,
    ctas:
      ctas.length > 0
        ? ctas
        : [
            { label: "Explore OSS", href: "/oss" },
            { label: "View Projects", href: "/projects" },
          ],
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

function getSafeString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function getSafeStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String).filter(Boolean) : [];
}

function getSafeNumber(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function formatPeriod(startDate?: string, endDate?: string, period?: string) {
  if (period) {
    return period;
  }

  if (startDate && endDate) {
    return `${startDate} - ${endDate}`;
  }

  if (startDate) {
    return `${startDate} - Present`;
  }

  return "";
}

function parseAchievementType(value: unknown): AchievementType {
  const normalized = typeof value === "string" ? value : "";
  const allowed: AchievementType[] = [
    "feature",
    "bug-fix",
    "performance",
    "architecture",
    "api",
    "security",
    "integration",
    "infrastructure",
    "refactor",
    "tooling",
    "migration",
    "analytics",
  ];

  return allowed.includes(normalized as AchievementType) ? (normalized as AchievementType) : "feature";
}

function parseExperienceAchievements(value: unknown): ExperienceAchievement[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const achievements: ExperienceAchievement[] = [];

  for (const item of value) {
    if (typeof item !== "object" || item === null) {
      continue;
    }

    const row = item as { type?: unknown; text?: unknown };
    const text = getSafeString(row.text);

    if (!text) {
      continue;
    }

    achievements.push({
      type: parseAchievementType(row.type),
      text,
    });
  }

  return achievements;
}

function parseExperienceTechnologies(value: unknown): ExperienceTechnology[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const technologies: ExperienceTechnology[] = [];

  for (const item of value) {
    if (typeof item !== "object" || item === null) {
      continue;
    }

    const row = item as { name?: unknown; icon?: unknown; href?: unknown };
    const name = getSafeString(row.name);

    if (!name) {
      continue;
    }

    technologies.push({
      name,
      icon: typeof row.icon === "string" ? row.icon : undefined,
      href: typeof row.href === "string" ? row.href : undefined,
    });
  }

  return technologies;
}

export function getExperiencePageContent(): ExperiencePageContent {
  const indexFilePath = path.join(CONTENT_ROOT, "experience", "index.mdx");
  const indexData = fs.existsSync(indexFilePath)
    ? readFileContent(indexFilePath).data
    : { title: "Experience", summary: "A summary of my professional experience and work journey." };

  const items = getCollectionFileNames("experience")
    .filter((fileName) => extractSlug(fileName) !== "index")
    .map((fileName) => {
      const filePath = path.join(CONTENT_ROOT, "experience", fileName);
      const { data } = readFileContent(filePath);
      const slug = extractSlug(fileName);
      const startDate = getSafeString((data as { startDate?: unknown }).startDate);
      const endDate = getSafeString((data as { endDate?: unknown }).endDate);
      const period = getSafeString((data as { period?: unknown }).period);

      return {
        id: getSafeString((data as { id?: unknown }).id, slug),
        title: getSafeString((data as { title?: unknown }).title, slug),
        company: getSafeString((data as { company?: unknown }).company),
        companyUrl: getSafeString((data as { companyUrl?: unknown }).companyUrl) || undefined,
        period: formatPeriod(startDate, endDate, period),
        employmentType: getSafeString((data as { employmentType?: unknown }).employmentType) || undefined,
        location: getSafeString((data as { location?: unknown }).location) || undefined,
        summary: getSafeString((data as { summary?: unknown }).summary) || undefined,
        achievements: parseExperienceAchievements((data as { achievements?: unknown }).achievements),
        technologies: parseExperienceTechnologies((data as { technologies?: unknown }).technologies),
        featured: Boolean((data as { featured?: unknown }).featured),
        order: getSafeNumber((data as { order?: unknown }).order),
        date: getSafeString((data as { date?: unknown }).date) || undefined,
      } satisfies ExperienceItem;
    });

  return {
    title: getSafeString((indexData as { title?: unknown }).title, "Experience"),
    summary: getSafeString(
      (indexData as { summary?: unknown }).summary,
      "A summary of my professional experience and work journey.",
    ),
    items: sortByOrderAndDate(items),
  };
}

function toTimestamp(date?: string): number {
  if (!date) {
    return 0;
  }

  const timestamp = new Date(date).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function parsePullRequestStatus(value: unknown): PullRequestStatus {
  const normalized = typeof value === "string" ? value.toLowerCase() : "";

  if (normalized === "merged" || normalized === "open" || normalized === "closed") {
    return normalized;
  }

  return "closed";
}

function parsePullRequests(value: unknown, repository: string): PullRequestEntry[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const pullRequests: PullRequestEntry[] = [];

  for (const item of value) {
    if (typeof item !== "object" || item === null) {
      continue;
    }

    const row = item as {
      number?: unknown;
      title?: unknown;
      status?: unknown;
      summary?: unknown;
      date?: unknown;
      labels?: unknown;
      href?: unknown;
    };
    const number = typeof row.number === "number" ? row.number : Number(row.number);
    const title = getSafeString(row.title);
    const href = getSafeString(row.href);

    if (!Number.isFinite(number) || !title || !href) {
      continue;
    }

    pullRequests.push({
      number,
      title,
      repository,
      status: parsePullRequestStatus(row.status),
      summary: getSafeString(row.summary),
      date: getSafeString(row.date) || undefined,
      labels: getSafeStringArray(row.labels),
      href,
    });
  }

  return pullRequests;
}

export function getOssPageContent(): OssPageContent {
  const indexFilePath = path.join(CONTENT_ROOT, "oss", "index.mdx");
  const indexData = fs.existsSync(indexFilePath)
    ? readFileContent(indexFilePath).data
    : {
        title: "Open Source Contributions",
        summary: "A collection of open-source contributions, pull requests, and repository work.",
      };

  const repositories = getCollectionFileNames("oss")
    .filter((fileName) => extractSlug(fileName) !== "index")
    .map((fileName) => {
      const filePath = path.join(CONTENT_ROOT, "oss", fileName);
      const { data } = readFileContent(filePath);
      const slug = extractSlug(fileName);
      const repository = getSafeString((data as { repository?: unknown }).repository, slug);
      const pullRequests = parsePullRequests((data as { pullRequests?: unknown }).pullRequests, repository);

      return {
        name: getSafeString((data as { name?: unknown }).name, repository),
        slug: repository,
        description: getSafeString((data as { description?: unknown }).description),
        primaryLanguage: getSafeString((data as { primaryLanguage?: unknown }).primaryLanguage),
        stars: getSafeString((data as { stars?: unknown }).stars) || undefined,
        contributionCount:
          getSafeNumber((data as { contributionCount?: unknown }).contributionCount) ?? pullRequests.length,
        href: getSafeString((data as { href?: unknown }).href),
        pullRequests,
        order: getSafeNumber((data as { order?: unknown }).order),
      };
    })
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));

  const ossRepositories: OssRepo[] = repositories.map(({ pullRequests, order, ...repo }) => repo);

  const pullRequests = repositories
    .flatMap((repo) => repo.pullRequests)
    .sort((a, b) => {
      const diff = toTimestamp(b.date) - toTimestamp(a.date);

      if (diff !== 0) {
        return diff;
      }

      return b.number - a.number;
    });

  const merged = pullRequests.filter((entry) => entry.status === "merged").length;
  const open = pullRequests.filter((entry) => entry.status === "open").length;
  const closed = pullRequests.filter((entry) => entry.status === "closed").length;

  const metrics: OssMetric[] = [
    { label: "Repositories", value: String(ossRepositories.length) },
    { label: "Total PRs", value: String(pullRequests.length) },
    { label: "Merged PRs", value: String(merged) },
    { label: "Open PRs", value: String(open) },
    { label: "Closed PRs", value: String(closed) },
  ];

  return {
    title: getSafeString((indexData as { title?: unknown }).title, "Open Source Contributions"),
    summary: getSafeString(
      (indexData as { summary?: unknown }).summary,
      "A collection of open-source contributions, pull requests, and repository work.",
    ),
    repositories: ossRepositories,
    pullRequests,
    metrics,
  };
}

export function getOssPageData(): OssPageContent {
  return getOssPageContent();
}

export function getHomePageData(): HomePageContent {
  return getHomePageContent();
}
