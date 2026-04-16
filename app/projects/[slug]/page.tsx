import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import MdxArticle from "@/components/mdx/MdxArticle";
import PageHeader from "@/components/ui/PageHeader";
import { getTechBadgeClasses, getTechIcon, getTechLogo, resolveTechIconKey } from "@/components/experience/iconMap";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { renderMdx } from "@/lib/content/mdx";
import { getProjectBySlug, getProjects } from "@/lib/content/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yousef-genedy.dev";

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
      {project.stack.map((tech) => {
      const iconKey = resolveTechIconKey(tech);
      const accent = getTechBadgeClasses(iconKey);
      const icon = getTechIcon(iconKey);
      const logo = getTechLogo(iconKey);

      return (
        <span
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
        </span>
      );
      })}
        </div>
        <MdxArticle>{body}</MdxArticle>
      </div>
    </Container>
  );
}


