import type { Contribution } from "@/data/portfolio";

type ContributionCardProps = {
  contribution: Contribution;
};

export default function ContributionCard({ contribution }: ContributionCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5">
      <h3 className="text-base font-semibold text-zinc-900">
        {contribution.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{contribution.description}</p>
      <p className="mt-2 text-sm text-zinc-700">
        <span className="font-medium text-zinc-900">Result:</span> {contribution.result}
      </p>
      {contribution.link ? (
        <a
          href={contribution.link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm text-zinc-700 underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900"
        >
          View contribution
        </a>
      ) : null}
    </article>
  );
}
