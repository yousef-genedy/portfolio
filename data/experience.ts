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
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "et-egypt-backend-engineer",
    title: "Software Engineer",
    company: "e& Egypt",
    period: "Aug 2024 - Present",
    employmentType: "Full-time",
    location: "Cairo, Egypt",
    achievements: [
      {
        type: "migration",
        text: "Built a **Node.js** migration pipeline between **MongoDB** and **OracleDB**, processing **200K+ records daily** in production.",
      },
      {
        type: "analytics",
        text: "Designed and shipped the **Chatbot KPI backend** in **Node.js** from scratch, reducing production bugs by **40%**.",
      },
      {
        type: "integration",
        text: "Contributed to chatbot system design with **LLM integrations** to improve response quality and orchestration flow.",
      },
      {
        type: "architecture",
        text: "Developed a **Spring Boot** microservice for chatbot node management with **PostgreSQL**, **Redis** caching, and **MinIO** asset integration.",
      },
      {
        type: "security",
        text: "Implemented and refactored core chatbot backend modules including **API security**, conversation sessions, and back-stack navigation.",
      },
      {
        type: "infrastructure",
        text: "Built a background analytics service in **Spring Boot** using **Redis Streams** producers, consumers, and consumer groups for async analysis.",
      },
      {
        type: "analytics",
        text: "Delivered analytics backend on **Spring Boot + OpenSearch** with **Docker** sync jobs between **MongoDB** and **OpenSearch**.",
      },
    ],
    technologies: [
      { name: "Spring Boot", icon: "spring" },
      { name: "Node.js", icon: "node" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Redis", icon: "redis" },
      { name: "OpenSearch", icon: "search" },
      { name: "MongoDB", icon: "mongo" },
      { name: "OracleDB", icon: "oracle" },
      { name: "Docker", icon: "docker" },
      { name: "MinIO", icon: "minio" },
    ],
    featured: true,
  },
  {
    id: "master-micro-software-engineer-intern",
    title: "Software Engineer Intern",
    company: "Master Micro",
    period: "Dec 2022 - May 2023",
    employmentType: "Internship",
    location: "Remote",
    achievements: [
      {
        type: "tooling",
        text: "Created front-end utility modules with the **Qt** framework to streamline repeated UI workflows.",
      },
      {
        type: "refactor",
        text: "Refactored existing modules to improve **maintainability**, **readability**, and execution efficiency.",
      },
      {
        type: "performance",
        text: "Enhanced system functionality and runtime performance through targeted **algorithm improvements**.",
      },
      {
        type: "integration",
        text: "Developed interfaces that improved integration consistency between **front-end** and **back-end systems**.",
      },
    ],
    technologies: [
      { name: "Qt", icon: "qt" },
      { name: "C++", icon: "cplusplus" },
      { name: "Python", icon: "python" },
      { name: "Algorithms", icon: "algorithms" },
    ],
  },
];
