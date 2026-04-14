import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/ui/PageHeader";
import OssMetricsStrip from "@/components/oss/OssMetricsStrip";
import OssPrExplorer from "@/components/oss/OssPrExplorer";
import OssRepositoryGrid from "@/components/oss/OssRepositoryGrid";
import { getOssPageData } from "@/lib/content/queries";

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description: "A collection of open-source contributions, pull requests, and repository work.",
};

export default function OssPage() {
  const content = getOssPageData();

  return (
    <Container>
      <div className="space-y-12 pb-14 pt-8 md:pb-20 md:pt-10">
        <PageHeader title={content.title} description={content.summary} />

        <OssMetricsStrip metrics={content.metrics} />
        <OssRepositoryGrid repositories={content.repositories} />
        <OssPrExplorer pullRequests={content.pullRequests} />
      </div>
    </Container>
  );
}
