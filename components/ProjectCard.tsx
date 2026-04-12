import Link from "next/link";
import type { ProjectEntry } from "@/lib/content/types";
import { getTechBadgeClasses, getTechIcon, getTechLogo, resolveTechIconKey } from "@/components/experience/iconMap";

type ProjectCardProps = {
  project: ProjectEntry;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
	<article className="rounded-2xl border border-zinc-800 bg-zinc-900/65 p-5 transition-all hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900">
	  <div className="space-y-3">
		<div className="space-y-2">
		  <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
		  <p className="text-sm leading-6 text-zinc-300">{project.summary}</p>
		</div>


		<ul className="flex flex-wrap gap-2" aria-label="Project technology stack">
		  {project.stack.map((tech) => {
			const iconKey = resolveTechIconKey(tech);
			const accent = getTechBadgeClasses(iconKey);
			const icon = getTechIcon(iconKey);
			const logo = getTechLogo(iconKey);

			return (
			  <li
				key={tech}
				className={`inline-flex items-center gap-2 rounded-full border bg-zinc-950/80 px-2.5 py-1 text-xs text-zinc-200 ${accent.border}`}
			  >
				{icon ? (
				  <span
					className={`inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${accent.icon}`}
				  >
					{logo ? (
					  // eslint-disable-next-line @next/next/no-img-element
					  <img src={logo.src} alt={logo.alt} width={12} height={12} loading="lazy" decoding="async" />
					) : (
					  icon
					)}
				  </span>
				) : null}
				<span>{tech}</span>
			  </li>
			);
		  })}
		</ul>
	  </div>

	  <div className="mt-5 flex flex-wrap gap-4 text-sm">
		<Link href={`/projects/${project.slug}`} className="text-zinc-200 transition-colors hover:text-sky-300">
		  Read case study
		</Link>
		{project.links?.github ? (
		  <Link href={project.links.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-200">
			GitHub
		  </Link>
		) : null}
		{project.links?.demo ? (
		  <Link href={project.links.demo} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-200">
			Demo
		  </Link>
		) : null}
	  </div>
	</article>
  );
}
