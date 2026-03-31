import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MdxArticle from "@/components/MdxArticle";
import PageHeader from "@/components/PageHeader";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { renderMdx } from "@/lib/content/mdx";
import { getNoteBySlug, getNotes } from "@/lib/content/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.netlify.app";

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getNotes().map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.summary,
    alternates: {
      canonical: `${siteUrl}/notes/${note.slug}`,
    },
    openGraph: {
      title: note.title,
      description: note.summary,
      url: `${siteUrl}/notes/${note.slug}`,
      type: "article",
    },
  };
}

export default async function NoteDetailPage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const body = await renderMdx({ source: note.body, components: mdxComponents });

  return (
    <Container>
      <div className="space-y-10 py-14 md:py-20">
        <PageHeader eyebrow="Note" title={note.title} description={note.summary} />
        <MdxArticle>{body}</MdxArticle>
      </div>
    </Container>
  );
}


