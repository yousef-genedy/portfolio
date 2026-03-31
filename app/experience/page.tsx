import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ExperienceSection from "@/components/experience/ExperienceSection";
import { experienceItems } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience focused on backend systems, APIs, and distributed architectures.",
};

export default function ExperiencePage() {
  return (
    <Container>
      <div className="space-y-12 pb-14 pt-8 md:pb-20 md:pt-10">
        <PageHeader
          title="Experience"
          description="A summary of my professional experience and work journey."
        />
        <ExperienceSection items={experienceItems} />
      </div>
    </Container>
  );
}
