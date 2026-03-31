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
