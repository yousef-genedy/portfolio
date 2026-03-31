import type { Metadata } from "next";
import Container from "@/components/Container";
import ExperienceItem from "@/components/ExperienceItem";
import PageHeader from "@/components/PageHeader";
import { getExperienceEntries } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience focused on backend systems, APIs, and distributed architectures.",
};

export default function ExperiencePage() {
  const entries = getExperienceEntries();

  return (
    <Container>
      <div className="space-y-10 py-14 md:py-20">
        <PageHeader
          title="Experience"
          description="Selected roles and responsibilities centered around scalable backend systems."
        />
        <div className="space-y-4">
          {entries.map((item) => (
            <ExperienceItem key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
