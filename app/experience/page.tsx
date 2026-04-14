import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/ui/PageHeader";
import ExperienceSection from "@/components/experience/ExperienceSection";
import { getExperiencePageContent } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience focused on backend systems, APIs, and distributed architectures.",
};

export default function ExperiencePage() {
  const content = getExperiencePageContent();

  return (
    <Container>
      <div className="space-y-12 pb-14 pt-8 md:pb-20 md:pt-10">
        <PageHeader title={content.title} description={content.summary} />
        <ExperienceSection items={content.items} />
      </div>
    </Container>
  );
}
