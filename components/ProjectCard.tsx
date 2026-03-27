import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
	<article className="rounded-xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-sm">
	  <div className="space-y-3">
		<h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
		<p className="text-sm leading-6 text-zinc-600">{project.description}</p>
		<p className="text-sm text-zinc-700">
		  <span className="font-medium text-zinc-900">Impact:</span> {project.impact}
		</p>
		<ul className="flex flex-wrap gap-2" aria-label="Project technology stack">
		  {project.techStack.map((tech) => (
			<li
			  key={tech}
			  className="rounded-full border border-zinc-300 px-2.5 py-1 text-xs text-zinc-700"
			>
			  {tech}
			</li>
		  ))}
		</ul>
	  </div>

	  {(project.githubUrl || project.demoUrl) ? (
		<div className="mt-4 flex gap-3 text-sm">
		  {project.githubUrl ? (
			<a
			  href={project.githubUrl}
			  target="_blank"
			  rel="noreferrer"
			  className="text-zinc-700 underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900"
			>
			  GitHub
			</a>
		  ) : null}
		  {project.demoUrl ? (
			<a
			  href={project.demoUrl}
			  target="_blank"
			  rel="noreferrer"
			  className="text-zinc-700 underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900"
			>
			  Demo
			</a>
		  ) : null}
		</div>
	  ) : null}
	</article>
  );
}

