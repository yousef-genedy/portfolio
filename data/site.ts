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

export type HeroSocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Yousef Genedy",
  brand: "YG",
  greeting: "Hey There",
  title: "Software Engineer",
  description:
    "Building systems, exploring ideas, and enjoy learning how things work from the inside out.",
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "OSS", href: "/oss" },
    { label: "Posts", href: "/posts" },
    { label: "Projects", href: "/projects" },
  ] as NavLink[],
  heroSocialLinks: [
    { label: "GitHub", href: "https://github.com/yousef-genedy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yousef-genedy/" },
    { label: "Email", href: "mailto:youssef.ahmmed29@gmail.com" },
    {
      label: "CV",
      href: "/cv",
    },
  ] as HeroSocialLink[],
  footerLinks: [
    { label: "GitHub", href: "https://github.com/yousef-genedy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yousef-genedy/" },
    { label: "Email", href: "mailto:youssef.ahmmed29@gmail.com" },
    {
      label: "CV",
      href: "/cv",
    },
  ] as FooterLink[],
  heroFacts: [
    { title: "Current Mission", detail: "Exploring open source software and building around AI agentic trends and workflows." },
    {
      title: "Stack",
      detail: "Java, Spring Boot, TypeScript, Node.js, Python, Go, PostgreSQL, Redis",
    },
    {
      title: "Interests",
      detail: "Distributed systems, System design, Low level programming, Cloud, Agentic AI",
    },
  ] as HeroFact[],
};
