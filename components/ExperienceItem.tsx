import type { ExperienceEntry } from "@/lib/content/types";

type ExperienceItemProps = {
  item: ExperienceEntry;
};

export default function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/65 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">{item.role}</h2>
          <p className="text-zinc-300">{item.company}</p>
        </div>
        <p className="text-sm text-zinc-500">
          {item.startDate} - {item.endDate ?? "Present"}
        </p>
      </div>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
