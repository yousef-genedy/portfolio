import Link from "next/link";
import Section from "@/components/Section";
import type { OssRepo } from "@/data/oss";

type OssRepositoryGridProps = {
  repositories: OssRepo[];
};

export default function OssRepositoryGrid({ repositories }: OssRepositoryGridProps) {
  return (
    <Section id="repositories" title="Repositories Contributed To">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {repositories.map((repo) => (
          <article
            key={repo.name}
            className="group rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-[0_10px_24px_-20px_rgba(56,189,248,0.4)]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-100">{repo.name}</h3>
              <Link
                href={repo.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${repo.name} repository`}
                className="rounded-md border border-zinc-400 bg-zinc-600/85 p-1.5 text-zinc-50 transition-colors hover:border-sky-400/70 hover:bg-zinc-600 hover:text-sky-300"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M14 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 14L19 5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <p className="mt-2 text-sm leading-5 text-zinc-300">{repo.description}</p>

            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-zinc-500">Primary</dt>
                <dd className="mt-1 text-zinc-200">{repo.primaryLanguage}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Contributions</dt>
                <dd className="mt-1 text-zinc-200">{repo.contributionCount}</dd>
              </div>
              {repo.stars ? (
                <div>
                  <dt className="text-zinc-500">Stars</dt>
                  <dd className="mt-1 text-zinc-200">{repo.stars}</dd>
                </div>
              ) : null}
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
