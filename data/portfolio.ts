export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  demoUrl?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Contribution = {
  title: string;
  description: string;
  result: string;
  link?: string;
};

export const siteConfig = {
  name: "Yousef Genedy",
  role: "Backend Engineer",
  intro:
    "Backend engineer focused on scalable systems, APIs, and distributed architectures.",
  about:
    "I design and build backend services with a strong focus on reliability, performance, and maintainability. My work centers on API design, event-driven systems, observability, and pragmatic system design that supports long-term product growth.",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Open Source", href: "#open-source" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
};

export const featuredProjects: Project[] = [
  {
    title: "Event Pipeline Platform",
    description:
      "A backend platform for ingesting and processing high-volume product events with strong delivery guarantees.",
    techStack: ["TypeScript", "Node.js", "Kafka", "PostgreSQL", "Redis"],
    impact:
      "Improved event processing throughput by 3.5x while reducing processing latency by 42%.",
    githubUrl: "https://github.com/your-username/event-pipeline-platform",
  },
  {
    title: "Multi-Tenant API Gateway",
    description:
      "A secure API gateway with tenant-aware routing, rate-limiting, and centralized auth policies.",
    techStack: ["Go", "gRPC", "OpenTelemetry", "Docker", "Kubernetes"],
    impact:
      "Cut integration onboarding time from days to hours and improved API reliability in production.",
    demoUrl: "https://example.com/demo",
  },
  {
    title: "Job Orchestration Service",
    description:
      "A resilient job scheduler and worker system for long-running asynchronous workloads.",
    techStack: ["Python", "FastAPI", "RabbitMQ", "MongoDB", "Prometheus"],
    impact:
      "Reduced failed background tasks by 60% through retries, circuit breakers, and observability.",
    githubUrl: "https://github.com/your-username/job-orchestrator",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    skills: ["Node.js", "TypeScript", "Go", "Python", "REST", "gRPC"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Messaging / Caching",
    skills: ["Kafka", "RabbitMQ", "Redis Streams", "NATS"],
  },
  {
    title: "DevOps / Tools",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus"],
  },
];

export const contributions: Contribution[] = [
  {
    title: "Joplin Plugin Improvements",
    description:
      "Contributed fixes and enhancements to plugin behavior and markdown rendering edge cases.",
    result:
      "Helped improve stability across plugin workflows and reduced reported integration issues.",
    link: "https://github.com/laurent22/joplin",
  },
  {
    title: "Issue Triage and Documentation",
    description:
      "Reviewed open issues, proposed reproducible reports, and improved contributor-facing docs.",
    result:
      "Lowered onboarding friction for new contributors and clarified troubleshooting steps.",
  },
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { label: "Email", href: "mailto:you@example.com" },
];

