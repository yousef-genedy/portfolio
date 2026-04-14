"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Section from "@/components/ui/Section";
import type { PullRequestEntry, PullRequestStatus } from "@/lib/content/types";

type OssPrExplorerProps = {
  pullRequests: PullRequestEntry[];
};

type TabKey = "all" | PullRequestStatus;

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "merged", label: "Merged" },
  { key: "open", label: "Open" },
  { key: "closed", label: "Closed" },
];

const statusChipClasses: Record<PullRequestStatus, string> = {
  merged: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300",
  open: "border-sky-500/30 bg-sky-500/10 text-sky-300",
  closed: "border-rose-500/30 bg-rose-500/10 text-rose-300",
};

function formatStatus(status: PullRequestStatus) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function OssPrExplorer({ pullRequests }: OssPrExplorerProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());

  const toggleDescription = (entryKey: string) => {
    setExpandedDescriptions((prev) => {
      const next = new Set(prev);

      if (next.has(entryKey)) {
        next.delete(entryKey);
      } else {
        next.add(entryKey);
      }

      return next;
    });
  };

  const countsByStatus = useMemo(
    () => ({
      all: pullRequests.length,
      merged: pullRequests.filter((entry) => entry.status === "merged").length,
      open: pullRequests.filter((entry) => entry.status === "open").length,
      closed: pullRequests.filter((entry) => entry.status === "closed").length,
    }),
    [pullRequests],
  );

  const filteredPullRequests = useMemo(() => {
    if (activeTab === "all") {
      return pullRequests;
    }

    return pullRequests.filter((entry) => entry.status === activeTab);
  }, [activeTab, pullRequests]);

  return (
    <Section id="pull-requests" title="PR Explorer">
      <div className="space-y-3">
        <div className="overflow-x-auto">
          <div
            role="tablist"
            aria-label="Filter pull requests by status"
            className="inline-flex min-w-full gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950/80 p-1 sm:min-w-0"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                    isActive ? "bg-zinc-800 text-zinc-100" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {tab.label} <span className="text-zinc-500">{countsByStatus[tab.key]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2.5">
          {filteredPullRequests.length === 0 ? (
            <article className="rounded-xl border border-zinc-800 bg-zinc-900/65 p-4 text-sm text-zinc-300">
              No open pull requests yet.
            </article>
          ) : null}

          {filteredPullRequests.map((entry) => {
            const entryKey = `${entry.repository}-${entry.number}`;
            const descriptionId = `pr-description-${entry.number}-${entry.repository.replaceAll("/", "-")}`;
            const isDescriptionOpen = expandedDescriptions.has(entryKey);

            return (
              <article key={entryKey} className="rounded-xl border border-zinc-800 bg-zinc-900/65 p-3.5 sm:p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{entry.repository}</p>
                    <h3 className="mt-1 text-sm font-semibold tracking-tight text-zinc-100 sm:text-base">{entry.title}</h3>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-xs ${statusChipClasses[entry.status]}`}>
                    {formatStatus(entry.status)}
                  </span>
                </div>

                {isDescriptionOpen ? (
                  <p id={descriptionId} className="mt-3 text-sm leading-5 text-zinc-300">
                    {entry.summary}
                  </p>
                ) : null}

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
                    <span className="text-zinc-400">
                      PR #{entry.number}
                      {entry.date ? ` · ${formatDate(entry.date)}` : ""}
                    </span>
                    {entry.labels.map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-zinc-700 bg-zinc-950/80 px-2 py-0.5 text-[11px] text-zinc-300"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-expanded={isDescriptionOpen}
                      aria-controls={descriptionId}
                      onClick={() => toggleDescription(entryKey)}
                      className="text-sm text-zinc-300 transition-colors hover:text-zinc-100"
                    >
                      {isDescriptionOpen ? "Hide" : "Description"}
                    </button>
                    <Link
                      href={entry.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-zinc-200 hover:text-sky-300"
                    >
                      Open on GitHub
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
