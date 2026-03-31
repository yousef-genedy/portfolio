import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MdxArticle from "@/components/MdxArticle";
import PageHeader from "@/components/PageHeader";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { renderMdx } from "@/lib/content/mdx";
import { getProjectBySlug, getProjects } from "@/lib/content/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yousef-genedy.netlify.app";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${siteUrl}/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const body = await renderMdx({ source: project.body, components: mdxComponents });

  return (
    <Container>
      <div className="space-y-10 pb-14 pt-8 md:pb-20 md:pt-10">
        <PageHeader title={project.title} description={project.summary} />
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
              {tech}
            </span>
          ))}
        </div>
        <MdxArticle>{body}</MdxArticle>
      </div>
    </Container>
  );
}


