"use client";

import { useState } from "react";
import Link from "next/link";
import type { ExperienceItem } from "@/lib/content/types";
import ExperienceAchievementItem from "@/components/experience/ExperienceAchievementItem";
import TechBadge from "@/components/experience/TechBadge";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export default function ExperienceCard({ item }: ExperienceCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
	<article className="experience-card group rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-950">
	  <header className="space-y-2.5">
		<div className="flex flex-wrap items-center justify-between gap-2">
		  <h3 className="text-lg font-semibold tracking-tight text-zinc-100">{item.title}</h3>
		  <div className="flex flex-wrap items-center gap-2">
			{item.featured ? (
			  <span className="rounded-full border border-sky-500/40 bg-sky-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-sky-300">
				Current
			  </span>
			) : null}
			<p className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-300">
			  {item.period}
			</p>
		  </div>
		</div>

		<div className="flex flex-wrap items-center gap-2 text-sm">
		  {item.companyUrl ? (
			<Link
			  href={item.companyUrl}
			  target="_blank"
			  rel="noreferrer"
			  className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-zinc-100"
			>
			  {item.company}
			</Link>
		  ) : (
			<span className="text-zinc-300">{item.company}</span>
		  )}
		  {item.employmentType ? <span className="text-zinc-600">•</span> : null}
		  {item.employmentType ? <span className="text-zinc-400">{item.employmentType}</span> : null}
		  {item.location ? <span className="text-zinc-600">•</span> : null}
		  {item.location ? <span className="text-zinc-500">{item.location}</span> : null}
		</div>
	  </header>

	  <div
		className={`grid transition-all duration-300 ${
		  isCollapsed ? "mt-0 grid-rows-[0fr] opacity-0" : "mt-4 grid-rows-[1fr] opacity-100"
		}`}
	  >
		<div className="overflow-hidden space-y-4">
		  <ul className="space-y-2.5">
			{item.achievements.map((achievement, index) => (
			  <ExperienceAchievementItem
				key={`${item.id}-${achievement.type}-${index}`}
				achievement={achievement}
			  />
			))}
		  </ul>

		  <div className="flex flex-wrap gap-2">
			{item.technologies.map((tech) => (
			  <TechBadge key={`${item.id}-${tech.name}`} tech={tech} />
			))}
		  </div>
		</div>
	  </div>

	  <div className="mt-3 flex justify-center">
		<button
		  type="button"
		  onClick={() => setIsCollapsed((value) => !value)}
		  aria-expanded={!isCollapsed}
		  className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-zinc-500 transition-colors hover:text-zinc-200"
		>
		  <svg
			viewBox="0 0 24 24"
			className={`h-3.5 w-3.5 transition-transform duration-200 ${isCollapsed ? "rotate-0" : "rotate-180"}`}
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
		  >
			<path d="m6 9 6 6 6-6" />
		  </svg>
		  {isCollapsed ? "Expand" : "Collapse"}
		</button>
	  </div>
	</article>
  );
}
