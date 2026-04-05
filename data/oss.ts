export type PullRequestStatus = "merged" | "open" | "closed";

export type OssMetric = {
  label: string;
  value: string;
  helper?: string;
};

export type OssRepo = {
  name: string;
  description: string;
  primaryLanguage: string;
  stars?: string;
  contributionCount: number;
  href: string;
};

export type PullRequestEntry = {
  number: number;
  title: string;
  repository: string;
  status: PullRequestStatus;
  summary: string;
  date?: string;
  labels: string[];
  href: string;
};

function toSortableTimestamp(date?: string) {
  if (!date) {
    return 0;
  }

  const timestamp = new Date(date).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export const ossRepositories: OssRepo[] = [
  {
    name: "laurent22/joplin",
    description:
      "Joplin - the privacy-focused note taking app with sync capabilities for Windows, macOS, Linux, Android and iOS.",
    primaryLanguage: "TypeScript",
    contributionCount: 4,
    href: "https://github.com/laurent22/joplin",
  },
];

const pullRequestEntries: PullRequestEntry[] = [
  {
    number: 14574,
    title: "Start sync when app opens or resumes",
    repository: "laurent22/joplin",
    status: "merged",
    summary: "Triggers synchronization automatically on launch and when the app regains focus.",
    date: "2026-03-05",
    labels: ["sync", "desktop", "mobile"],
    href: "https://github.com/laurent22/joplin/pull/14574",
  },
  {
    number: 14360,
    title: "Make notebook search accent-insensitive in GotoAnything",
    repository: "laurent22/joplin",
    status: "merged",
    summary: "Improves notebook lookup by matching accented and non-accented query text consistently.",
    date: "2026-02-16",
    labels: ["search", "ux", "desktop"],
    href: "https://github.com/laurent22/joplin/pull/14360",
  },
  {
    number: 14818,
    title: "Implement note attachments management screen",
    repository: "laurent22/joplin",
    status: "merged",
    summary: "Adds a dedicated UI to view, manage, and clean up note-related attachments.",
    date: "2026-03-18",
    labels: ["feature", "attachments", "ui"],
    href: "https://github.com/laurent22/joplin/pull/14818",
  },
  {
    number: 14429,
    title: "E2EE setup dialog theme and cancel validation",
    repository: "laurent22/joplin",
    status: "closed",
    summary: "Refines E2EE setup dialog theming and improves cancel-flow validation behavior.",
    date: "2026-02-23",
    labels: ["security", "ui", "validation"],
    href: "https://github.com/laurent22/joplin/pull/14429",
  },
];

export const pullRequests: PullRequestEntry[] = [...pullRequestEntries].sort((a, b) => {
  const dateDifference = toSortableTimestamp(b.date) - toSortableTimestamp(a.date);

  if (dateDifference !== 0) {
    return dateDifference;
  }

  return b.number - a.number;
});

export const ossSummaryMetrics: OssMetric[] = (() => {
  const merged = pullRequests.filter((entry) => entry.status === "merged").length;
  const open = pullRequests.filter((entry) => entry.status === "open").length;
  const closed = pullRequests.filter((entry) => entry.status === "closed").length;

  return [
    { label: "Repositories", value: String(ossRepositories.length) },
    { label: "Total PRs", value: String(pullRequests.length) },
    { label: "Merged PRs", value: String(merged) },
    { label: "Open PRs", value: String(open) },
    { label: "Closed PRs", value: String(closed) },
  ];
})();
