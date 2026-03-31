export type NavLink = {
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type HeroFact = {
  title: string;
  detail: string;
};

export type HighlightItem = {
  label: string;
  value: string;
};

export type HeroSocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Yousef Genedy",
  brand: "//YG",
  greeting: "Hi There",
  title: "Software Engineer",
  description:
    "I build backend systems focused on scalable APIs, distributed services, and performance-driven architecture with practical engineering depth.",
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "OSS", href: "/oss" },
    { label: "Posts", href: "/posts" },
    { label: "Projects", href: "/projects" },
  ] as NavLink[],
  heroSocialLinks: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "Email", href: "mailto:you@example.com" },
  ] as HeroSocialLink[],
  footerLinks: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "CV", href: "https://example.com/cv.pdf" },
    { label: "Email", href: "mailto:you@example.com" },
  ] as FooterLink[],
  heroFacts: [
    { title: "Current Role", detail: "Backend Engineer at e& Egypt" },
    { title: "Core Stack", detail: "Spring Boot, Node.js, PostgreSQL, Redis" },
    { title: "Systems Focus", detail: "Distributed systems, async pipelines, observability" },
    { title: "Open Source", detail: "Contributing to Joplin and backend tooling" },
    { title: "Now", detail: "Exploring AI/LLM integrations for product workflows" },
  ] as HeroFact[],
  homeHighlights: [
    { label: "Current focus", value: "Scalable backend architecture" },
    { label: "Preferred style", value: "Reliable APIs and clean system boundaries" },
    { label: "Open source", value: "Joplin contributions and issue triage" },
  ] as HighlightItem[],
};

