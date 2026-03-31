import type { Metadata } from "next";
import Container from "@/components/Container";
import OssCard from "@/components/OssCard";
import PageHeader from "@/components/PageHeader";
import { getOssEntries } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "OSS",
  description: "Open-source contributions and collaboration highlights.",
};

export default function OssPage() {
  const entries = getOssEntries();

  return (
    <Container>
      <div className="space-y-10 py-14 md:py-20">
        <PageHeader
          eyebrow="Open Source"
          title="OSS Contributions"
          description="Work across Joplin and community contributions with an emphasis on practical impact."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {entries.map((entry) => (
            <OssCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </Container>
  );
}

