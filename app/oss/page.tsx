import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import OssMetricsStrip from "@/components/oss/OssMetricsStrip";
import OssPrExplorer from "@/components/oss/OssPrExplorer";
import OssRepositoryGrid from "@/components/oss/OssRepositoryGrid";
import { ossRepositories, ossSummaryMetrics, pullRequests } from "@/data/oss";

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description: "A collection of open-source contributions, pull requests, and repository work.",
};

export default function OssPage() {
  return (
    <Container>
      <div className="space-y-12 pb-14 pt-8 md:pb-20 md:pt-10">
        <PageHeader
          title="Open Source Contributions"
          description="A collection of open-source contributions, pull requests, and repository work."
        />

        <OssMetricsStrip metrics={ossSummaryMetrics} />
        <OssRepositoryGrid repositories={ossRepositories} />
        <OssPrExplorer pullRequests={pullRequests} />
      </div>
    </Container>
  );
}
