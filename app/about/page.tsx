import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import MdxArticle from "@/components/mdx/MdxArticle";
import PageHeader from "@/components/ui/PageHeader";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { renderMdx } from "@/lib/content/mdx";
import { getAboutPage } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "About",
  description: "About Yousef Genedy and his backend engineering approach.",
};

export default async function AboutPage() {
  const about = getAboutPage();
  const body = await renderMdx({ source: about.body, components: mdxComponents });

  return (
    <Container>
      <div className="space-y-7 pb-14 pt-8 md:pb-20 md:pt-10">
        <PageHeader title={about.title} description={about.summary} />
        <MdxArticle>{body}</MdxArticle>
      </div>
    </Container>
  );
}
