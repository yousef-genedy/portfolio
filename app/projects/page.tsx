import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { getProjects } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects across backend systems, tools, and practical software built with a focus on clarity and reliability.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Container>
      <div className="space-y-10 pb-14 pt-8 md:pb-20 md:pt-10">
        <PageHeader
          title="Projects"
          description="A collection of projects across backend systems, tools, and practical software built with a focus on clarity and reliability."
          descriptionClassName="xl:max-w-none xl:whitespace-nowrap"
        />
        <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
