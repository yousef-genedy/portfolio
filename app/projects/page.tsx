import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "Projects",
  description: "Backend project case studies with architecture and impact details.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Container>
      <div className="space-y-10 py-14 md:py-20">
        <PageHeader
          title="Projects"
          description="A curated set of backend engineering projects focused on architecture, reliability, and outcomes."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}

