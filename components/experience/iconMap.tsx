import type { ReactNode } from "react";
import type { AchievementType } from "@/data/experience";

const iconClass = "h-3.5 w-3.5";

export function getAchievementIcon(type: AchievementType): ReactNode {
  switch (type) {
	case "feature":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M12 3v18" />
		  <path d="M3 12h18" />
		</svg>
	  );
	case "bug-fix":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M8 9h8v8H8z" />
		  <path d="M9 4h6" />
		</svg>
	  );
	case "performance":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M4 14a8 8 0 1 1 16 0" />
		  <path d="M12 14l4-4" />
		</svg>
	  );
	case "architecture":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M4 6h7v5H4z" />
		  <path d="M13 6h7v5h-7z" />
		  <path d="M8 11v3" />
		  <path d="M16 11v3" />
		  <path d="M8 14h8" />
		  <path d="M10 14v4h4v-4" />
		</svg>
	  );
	case "api":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M8 7h8" />
		  <path d="M8 12h8" />
		  <path d="M8 17h5" />
		  <rect x="4" y="4" width="16" height="16" rx="2" />
		</svg>
	  );
	case "security":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
		</svg>
	  );
	case "integration":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M9 7h3v3H9z" />
		  <path d="M12 8h3a3 3 0 1 1 0 6h-3" />
		  <path d="M9 11H6a3 3 0 1 0 0 6h3" />
		</svg>
	  );
	case "infrastructure":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M4 8h16" />
		  <path d="M4 16h16" />
		  <rect x="6" y="5" width="12" height="4" rx="1" />
		  <rect x="6" y="13" width="12" height="4" rx="1" />
		</svg>
	  );
	case "refactor":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M4 7h7l2 2h7" />
		  <path d="M20 7l-2-2" />
		  <path d="M20 7l-2 2" />
		  <path d="M20 17h-7l-2-2H4" />
		  <path d="M4 17l2-2" />
		  <path d="M4 17l2 2" />
		</svg>
	  );
	case "tooling":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M14.5 3a5 5 0 0 0 0 7L6 18.5 3.5 16 12 7.5a5 5 0 0 0 7-4.5z" />
		</svg>
	  );
	case "migration":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M4 12h13" />
		  <path d="M13 8l4 4-4 4" />
		</svg>
	  );
	case "analytics":
	  return (
		<svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M4 19h16" />
		  <path d="M7 16V9" />
		  <path d="M12 16V5" />
		  <path d="M17 16v-3" />
		</svg>
	  );
	default:
	  return null;
  }
}

export function getTechIcon(icon?: string): ReactNode {
  switch (icon) {
	case "generic":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <circle cx="12" cy="12" r="7" />
		  <path d="M12 9v6" />
		  <path d="M9 12h6" />
		</svg>
	  );
	case "spring":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M6 15c0-5 5-8 12-8-1 6-4 11-9 11a3 3 0 0 1-3-3Z" />
		</svg>
	  );
	case "node":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M12 3 20 8v8l-8 5-8-5V8z" />
		  <path d="M12 7v10" />
		</svg>
	  );
	case "postgres":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <ellipse cx="12" cy="6" rx="6" ry="3" />
		  <path d="M6 6v8c0 1.7 2.7 3 6 3s6-1.3 6-3V6" />
		</svg>
	  );
	case "redis":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="m5 8 7-3 7 3-7 3-7-3Z" />
		  <path d="m5 12 7 3 7-3" />
		  <path d="m5 16 7 3 7-3" />
		</svg>
	  );
	case "search":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <circle cx="11" cy="11" r="6" />
		  <path d="m20 20-3.5-3.5" />
		</svg>
	  );
	case "docker":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M4 14h10a3 3 0 0 0 3 3h1a3 3 0 0 0 2-1" />
		  <path d="M5 10h3v3H5zM8 10h3v3H8zM11 10h3v3h-3z" />
		</svg>
	  );
	case "typescript":
	  return <span className="text-[9px] font-bold">TS</span>;
	case "c":
	  return <span className="text-[9px] font-bold">C</span>;
	case "cli":
	  return <span className="text-[8px] font-bold">CLI</span>;
	case "oop":
	  return <span className="text-[8px] font-bold">OOP</span>;
	case "storage":
	  return <span className="text-[8px] font-bold">DB</span>;
	case "web":
	  return <span className="text-[8px] font-bold">WEB</span>;
	case "backend":
	  return <span className="text-[8px] font-bold">BE</span>;
	case "unix":
	  return <span className="text-[8px] font-bold">UX</span>;
	case "text":
	  return <span className="text-[8px] font-bold">TXT</span>;
	case "testing":
	  return <span className="text-[8px] font-bold">T</span>;
	case "interpreter":
	  return <span className="text-[8px] font-bold">INT</span>;
	case "bytecode":
	  return <span className="text-[8px] font-bold">BC</span>;
	case "data-structures":
	  return <span className="text-[8px] font-bold">DS</span>;
	case "stack":
	  return <span className="text-[8px] font-bold">ST</span>;
	case "queue":
	  return <span className="text-[8px] font-bold">Q</span>;
	case "shell":
	  return <span className="text-[8px] font-bold">SH</span>;
	case "parsing":
	  return <span className="text-[8px] font-bold">PR</span>;
	case "processes":
	  return <span className="text-[8px] font-bold">PS</span>;
	case "systems":
	  return <span className="text-[8px] font-bold">SYS</span>;
	case "nestjs":
	  return <span className="text-[8px] font-bold">Nest</span>;
	case "typeorm":
	  return <span className="text-[8px] font-bold">ORM</span>;
	case "mysql":
	  return <span className="text-[8px] font-bold">SQL</span>;
	case "sqlalchemy":
	  return <span className="text-[8px] font-bold">SA</span>;
	case "python":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M8 7h8a3 3 0 0 1 3 3v2h-8a3 3 0 0 1-3-3V7Z" />
		  <path d="M16 17H8a3 3 0 0 1-3-3v-2h8a3 3 0 0 1 3 3v2Z" />
		</svg>
	  );
	case "go":
	  return <span className="text-[9px] font-bold">Go</span>;
	case "gin":
	  return <span className="text-[9px] font-bold">Gin</span>;
	case "jwt":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <circle cx="12" cy="12" r="8" />
		  <path d="M12 8v4l3 2" />
		</svg>
	  );
	case "swagger":
	  return <span className="text-[8px] font-bold">Sw</span>;
	case "cicd":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M6 7h12" />
		  <path d="M6 12h8" />
		  <path d="M6 17h12" />
		  <path d="m15 10 3 2-3 2" />
		</svg>
	  );
	case "cron":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <circle cx="12" cy="12" r="8" />
		  <path d="M12 8v4l3 2" />
		</svg>
	  );
	case "ai":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M12 4v4" />
		  <path d="M12 16v4" />
		  <path d="M4 12h4" />
		  <path d="M16 12h4" />
		  <circle cx="12" cy="12" r="3" />
		</svg>
	  );
	case "mongo":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M12 3c3 3 4 8 0 18-4-10-3-15 0-18Z" />
		</svg>
	  );
	case "streams":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M4 8c2 2 4 2 6 0s4-2 6 0 4 2 4 2" />
		  <path d="M4 14c2 2 4 2 6 0s4-2 6 0 4 2 4 2" />
		</svg>
	  );
	case "pipeline":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <circle cx="5" cy="12" r="2" />
		  <circle cx="12" cy="7" r="2" />
		  <circle cx="19" cy="12" r="2" />
		  <path d="M7 12h3l1.2-3" />
		  <path d="M14 7h2.5L18 10" />
		</svg>
	  );
	case "oracle":
	  return <span className="text-[9px] font-bold">O</span>;
	case "minio":
	  return <span className="text-[9px] font-bold">M</span>;
	case "qt":
	  return <span className="text-[9px] font-bold">Qt</span>;
	case "cplusplus":
	  return <span className="text-[9px] font-bold">C++</span>;
	case "algorithms":
	  return (
		<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
		  <path d="M4 18h16" />
		  <path d="M7 14 11 10l3 3 4-5" />
		</svg>
	  );
	default:
	  return null;
  }
}

type TechLogoMeta = {
  src: string;
  alt: string;
};

export function getTechLogo(icon?: string): TechLogoMeta | null {
  switch (icon) {
	case "c":
	  return { src: "https://cdn.simpleicons.org/c/00599C", alt: "C" };
	case "spring":
	  return { src: "https://cdn.simpleicons.org/springboot/6DB33F", alt: "Spring Boot" };
	case "node":
	  return { src: "https://cdn.simpleicons.org/nodedotjs/5FA04E", alt: "Node.js" };
	case "postgres":
	  return { src: "https://cdn.simpleicons.org/postgresql/4169E1", alt: "PostgreSQL" };
	case "redis":
	  return { src: "https://cdn.simpleicons.org/redis/DC382D", alt: "Redis" };
	case "streams":
	  return { src: "https://cdn.simpleicons.org/redis/DC382D", alt: "Redis Streams" };
	case "search":
	  return { src: "https://cdn.simpleicons.org/opensearch/005EB8", alt: "OpenSearch" };
	case "docker":
	  return { src: "https://cdn.simpleicons.org/docker/2496ED", alt: "Docker" };
	case "typescript":
	  return { src: "https://cdn.simpleicons.org/typescript/3178C6", alt: "TypeScript" };
	case "nestjs":
	  return { src: "https://cdn.simpleicons.org/nestjs/E0234E", alt: "NestJS" };
	case "typeorm":
	  return { src: "https://cdn.simpleicons.org/typeorm/FE0803", alt: "TypeORM" };
	case "mysql":
	  return { src: "https://cdn.simpleicons.org/mysql/4479A1", alt: "MySQL" };
	case "sqlalchemy":
	  return { src: "https://cdn.simpleicons.org/sqlalchemy/D71F00", alt: "SQLAlchemy" };
	case "python":
	  return { src: "https://cdn.simpleicons.org/python/3776AB", alt: "Python" };
	case "go":
	  return { src: "https://cdn.simpleicons.org/go/00ADD8", alt: "Go" };
	case "gin":
	  return { src: "https://cdn.simpleicons.org/gin/008ECF", alt: "Gin" };
	case "jwt":
	  return { src: "https://cdn.simpleicons.org/jsonwebtokens/F97316", alt: "JWT" };
	case "swagger":
	  return { src: "https://cdn.simpleicons.org/swagger/85EA2D", alt: "Swagger" };
	case "cicd":
	  return { src: "https://cdn.simpleicons.org/githubactions/2088FF", alt: "CI/CD" };
	case "cron":
	  return { src: "https://cdn.simpleicons.org/clockify/03A9F4", alt: "Cron" };
	case "ai":
	  return { src: "https://cdn.simpleicons.org/googlegemini/8E75B2", alt: "Gemini" };
	case "mongo":
	  return { src: "https://cdn.simpleicons.org/mongodb/47A248", alt: "MongoDB" };
	case "oracle":
	  return { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", alt: "Oracle" };
	case "minio":
	  return { src: "https://cdn.simpleicons.org/minio/C72E49", alt: "MinIO" };
	case "qt":
	  return { src: "https://cdn.simpleicons.org/qt/41CD52", alt: "Qt" };
	case "cplusplus":
	  return { src: "https://cdn.simpleicons.org/cplusplus/00599C", alt: "C++" };
	case "algorithms":
	  return null;
	default:
	  return null;
  }
}

export function getTechBadgeClasses(icon?: string) {
  switch (icon) {
	case "generic":
	  return { border: "border-zinc-600", icon: "text-zinc-200 bg-zinc-700/70" };
	case "spring":
	  return { border: "border-emerald-500/40", icon: "text-emerald-300 bg-emerald-500/15" };
	case "node":
	  return { border: "border-lime-500/40", icon: "text-lime-300 bg-lime-500/15" };
	case "postgres":
	  return { border: "border-blue-500/40", icon: "text-blue-300 bg-blue-500/15" };
	case "redis":
	  return { border: "border-red-500/40", icon: "text-red-300 bg-red-500/15" };
	case "search":
	  return { border: "border-sky-500/40", icon: "text-sky-300 bg-sky-500/15" };
	case "docker":
	  return { border: "border-cyan-500/40", icon: "text-cyan-300 bg-cyan-500/15" };
	case "typescript":
	  return { border: "border-blue-500/40", icon: "text-blue-200 bg-blue-500/20" };
	case "c":
	  return { border: "border-blue-500/40", icon: "text-blue-200 bg-blue-500/20" };
	case "cli":
	  return { border: "border-slate-500/40", icon: "text-slate-200 bg-slate-500/15" };
	case "oop":
	  return { border: "border-fuchsia-500/40", icon: "text-fuchsia-200 bg-fuchsia-500/15" };
	case "storage":
	  return { border: "border-cyan-500/40", icon: "text-cyan-200 bg-cyan-500/15" };
	case "web":
	  return { border: "border-sky-500/40", icon: "text-sky-200 bg-sky-500/15" };
	case "backend":
	  return { border: "border-indigo-500/40", icon: "text-indigo-200 bg-indigo-500/15" };
	case "unix":
	  return { border: "border-zinc-500/40", icon: "text-zinc-200 bg-zinc-500/20" };
	case "text":
	  return { border: "border-amber-500/40", icon: "text-amber-200 bg-amber-500/15" };
	case "testing":
	  return { border: "border-emerald-500/40", icon: "text-emerald-200 bg-emerald-500/15" };
	case "interpreter":
	  return { border: "border-purple-500/40", icon: "text-purple-200 bg-purple-500/15" };
	case "bytecode":
	  return { border: "border-violet-500/40", icon: "text-violet-200 bg-violet-500/15" };
	case "data-structures":
	  return { border: "border-indigo-500/40", icon: "text-indigo-200 bg-indigo-500/15" };
	case "stack":
	  return { border: "border-sky-500/40", icon: "text-sky-200 bg-sky-500/15" };
	case "queue":
	  return { border: "border-cyan-500/40", icon: "text-cyan-200 bg-cyan-500/15" };
	case "shell":
	  return { border: "border-green-500/40", icon: "text-green-200 bg-green-500/15" };
	case "parsing":
	  return { border: "border-orange-500/40", icon: "text-orange-200 bg-orange-500/15" };
	case "processes":
	  return { border: "border-rose-500/40", icon: "text-rose-200 bg-rose-500/15" };
	case "systems":
	  return { border: "border-neutral-500/40", icon: "text-neutral-200 bg-neutral-500/15" };
	case "nestjs":
	  return { border: "border-rose-500/40", icon: "text-rose-200 bg-rose-500/15" };
	case "typeorm":
	  return { border: "border-orange-500/40", icon: "text-orange-200 bg-orange-500/15" };
	case "mysql":
	  return { border: "border-blue-500/40", icon: "text-blue-200 bg-blue-500/20" };
	case "sqlalchemy":
	  return { border: "border-orange-500/40", icon: "text-orange-200 bg-orange-500/15" };
	case "python":
	  return { border: "border-yellow-500/40", icon: "text-yellow-200 bg-yellow-500/15" };
	case "go":
	  return { border: "border-cyan-500/40", icon: "text-cyan-200 bg-cyan-500/15" };
	case "gin":
	  return { border: "border-sky-500/40", icon: "text-sky-200 bg-sky-500/15" };
	case "jwt":
	  return { border: "border-fuchsia-500/40", icon: "text-fuchsia-200 bg-fuchsia-500/15" };
	case "swagger":
	  return { border: "border-lime-500/40", icon: "text-lime-200 bg-lime-500/15" };
	case "cicd":
	  return { border: "border-indigo-500/40", icon: "text-indigo-200 bg-indigo-500/15" };
	case "cron":
	  return { border: "border-sky-500/40", icon: "text-sky-200 bg-sky-500/15" };
	case "ai":
	  return { border: "border-violet-500/40", icon: "text-violet-200 bg-violet-500/15" };
	case "mongo":
	  return { border: "border-emerald-500/40", icon: "text-emerald-300 bg-emerald-500/15" };
	case "streams":
	  return { border: "border-red-500/40", icon: "text-red-300 bg-red-500/15" };
	case "pipeline":
	  return { border: "border-violet-500/40", icon: "text-violet-300 bg-violet-500/15" };
	case "oracle":
	  return { border: "border-red-500/40", icon: "text-red-300 bg-red-500/15" };
	case "minio":
	  return { border: "border-red-500/40", icon: "text-red-300 bg-red-500/15" };
	case "qt":
	  return { border: "border-emerald-500/40", icon: "text-emerald-300 bg-emerald-500/15" };
	case "cplusplus":
	  return { border: "border-blue-500/40", icon: "text-blue-200 bg-blue-500/20" };
	case "algorithms":
	  return { border: "border-amber-500/40", icon: "text-amber-200 bg-amber-500/15" };
	default:
	  return { border: "border-zinc-700", icon: "text-zinc-300 bg-zinc-800" };
  }
}

export function resolveTechIconKey(tech: string) {
  const normalized = tech.trim().toLowerCase();

  switch (normalized) {
	case "spring boot":
	case "spring":
	  return "spring";
	case "node.js":
	case "node":
	  return "node";
	case "postgresql":
	case "postgres":
	  return "postgres";
	case "redis":
	  return "redis";
	case "opensearch":
	case "search":
	  return "search";
	case "docker":
	  return "docker";
	case "typescript":
	case "ts":
	  return "typescript";
	case "nestjs":
	case "nest.js":
	  return "nestjs";
	case "typeorm":
	  return "typeorm";
	case "mysql":
	  return "mysql";
	case "sqlalchemy":
	case "sqlalchemy orm":
	  return "sqlalchemy";
	case "python":
	  return "python";
	case "c":
	  return "c";
	case "cli":
	  return "cli";
	case "oop":
	  return "oop";
	case "storage":
	  return "storage";
	case "web":
	  return "web";
	case "backend":
	  return "backend";
	case "unix":
	  return "unix";
	case "text processing":
	case "text":
	  return "text";
	case "testing":
	  return "testing";
	case "interpreter":
	  return "interpreter";
	case "bytecode":
	  return "bytecode";
	case "data structures":
	  return "data-structures";
	case "stack":
	  return "stack";
	case "queue":
	  return "queue";
	case "shell":
	  return "shell";
	case "parsing":
	  return "parsing";
	case "processes":
	  return "processes";
	case "systems":
	  return "systems";
	case "go":
	case "golang":
	  return "go";
	case "gin":
	case "gin-gonic":
	  return "gin";
	case "jwt":
	case "json web token":
	  return "jwt";
	case "swagger":
	case "openapi":
	  return "swagger";
	case "ci/cd":
	case "ci-cd":
	case "github actions":
	  return "cicd";
	case "cron":
	case "scheduler":
	case "nestjs schedule":
	  return "cron";
	case "ai":
	case "openai":
	case "llm":
	  return "ai";
	case "mongodb":
	case "mongo":
	  return "mongo";
	case "redis streams":
	case "streams":
	  return "streams";
	case "oracle":
	case "oracledb":
	  return "oracle";
	case "minio":
	  return "minio";
	case "qt":
	  return "qt";
	case "c++":
	case "cplusplus":
	  return "cplusplus";
	case "algorithms":
	  return "algorithms";
	default:
	  return "generic";
  }
}

