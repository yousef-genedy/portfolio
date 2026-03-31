import Link from "next/link";
import type { OssEntry } from "@/lib/content/types";

type OssCardProps = {
  entry: OssEntry;
};

export default function OssCard({ entry }: OssCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/65 p-5">
      <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{entry.contributionType}</p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-100">{entry.project}</h2>
      <h3 className="mt-1 text-sm text-zinc-400">{entry.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{entry.summary}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {entry.links?.project ? (
          <Link href={entry.links.project} target="_blank" rel="noreferrer" className="text-zinc-200 hover:text-sky-300">
            Project
          </Link>
        ) : null}
        {entry.links?.pullRequest ? (
          <Link href={entry.links.pullRequest} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-100">
            Pull request
          </Link>
        ) : null}
        {entry.links?.issue ? (
          <Link href={entry.links.issue} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-100">
            Issue
          </Link>
        ) : null}
      </div>
    </article>
  );
}
