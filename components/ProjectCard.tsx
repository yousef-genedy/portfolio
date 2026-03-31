import Link from "next/link";
import type { ProjectEntry } from "@/lib/content/types";

type ProjectCardProps = {
  project: ProjectEntry;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
	<article className="rounded-2xl border border-zinc-800 bg-zinc-900/65 p-5 transition-all hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900">
	  <div className="space-y-4">
		<div className="space-y-2">
		  <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
		  <p className="text-sm leading-6 text-zinc-300">{project.summary}</p>
		</div>

		<p className="text-sm text-zinc-300">
		  <span className="font-medium text-zinc-100">Impact:</span> {project.impact}
		</p>

		<ul className="flex flex-wrap gap-2" aria-label="Project technology stack">
		  {project.stack.map((tech) => (
			<li
			  key={tech}
			  className="rounded-full border border-zinc-700 bg-zinc-950/80 px-2.5 py-1 text-xs text-zinc-300"
			>
			  {tech}
			</li>
		  ))}
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
