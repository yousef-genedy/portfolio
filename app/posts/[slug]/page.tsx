import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MdxArticle from "@/components/MdxArticle";
import PageHeader from "@/components/PageHeader";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { renderMdx } from "@/lib/content/mdx";
import { getPostBySlug, getPosts } from "@/lib/content/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yousef-genedy.netlify.app";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `${siteUrl}/posts/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${siteUrl}/posts/${post.slug}`,
      type: "article",
    },
  };
}

export default async function PostDetailPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const body = await renderMdx({ source: post.body, components: mdxComponents });

  return (
    <Container>
      <div className="space-y-10 pb-14 pt-8 md:pb-20 md:pt-10">
        <PageHeader title={post.title} description={post.summary} />
        <MdxArticle>{body}</MdxArticle>
      </div>
    </Container>
  );
}
