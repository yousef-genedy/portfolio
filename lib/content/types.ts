export type ContentCollection = "projects" | "posts" | "experience" | "oss";

export type BaseEntry = {
  slug: string;
  body: string;
  title: string;
  summary: string;
  tags: string[];
  date?: string;
  order?: number;
  featured?: boolean;
  status?: string;
};

export type ProjectEntry = BaseEntry & {
  collection: "projects";
  stack: string[];
  impact: string;
  company?: string;
  role?: string;
  links?: {
    github?: string;
    demo?: string;
  };
};

export type PostEntry = BaseEntry & {
  collection: "posts";
  published: boolean;
  readingTime: string;
  readingTimeMinutes: number;
  formattedDate: string;
};

export type ExperienceEntry = BaseEntry & {
  collection: "experience";
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location?: string;
};

export type OssEntry = BaseEntry & {
  collection: "oss";
  project: string;
  contributionType: string;
  links?: {
    project?: string;
    pullRequest?: string;
    issue?: string;
  };
};

export type AboutEntry = {
  slug: "index";
  body: string;
  title: string;
  summary: string;
  updatedAt?: string;
};

export type AchievementType =
  | "feature"
  | "bug-fix"
  | "performance"
  | "architecture"
  | "api"
  | "security"
  | "integration"
  | "infrastructure"
  | "refactor"
  | "tooling"
  | "migration"
  | "analytics";

export type ExperienceAchievement = {
  type: AchievementType;
  text: string;
};

export type ExperienceTechnology = {
  name: string;
  icon?: string;
  href?: string;
};

export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  employmentType?: string;
  location?: string;
  summary?: string;
  achievements: ExperienceAchievement[];
  technologies: ExperienceTechnology[];
  featured?: boolean;
  order?: number;
  date?: string;
};

export type PullRequestStatus = "merged" | "open" | "closed";

export type OssMetric = {
  label: string;
  value: string;
  helper?: string;
};

export type OssRepo = {
  name: string;
  slug?: string;
  description: string;
  primaryLanguage: string;
  stars?: string;
  contributionCount: number;
  href: string;
};

export type PullRequestEntry = {
  number: number;
  title: string;
  repository: string;
  status: PullRequestStatus;
  summary: string;
  date?: string;
  labels: string[];
  href: string;
};

export type OssPageContent = {
  title: string;
  summary: string;
  repositories: OssRepo[];
  pullRequests: PullRequestEntry[];
  metrics: OssMetric[];
};

export type ExperiencePageContent = {
  title: string;
  summary: string;
  items: ExperienceItem[];
};

export type HeroFact = {
  title: string;
  detail: string;
};

export type HeroSocialLink = {
  label: string;
  href: string;
};

export type HeroCta = {
  label: string;
  href: string;
};

export type HomePageContent = {
  greeting: string;
  name: string;
  title: string;
  description: string;
  facts: HeroFact[];
  socialLinks: HeroSocialLink[];
  ctas: HeroCta[];
};
