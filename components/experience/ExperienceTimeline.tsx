import type { ExperienceItem } from "@/lib/content/types";
import ExperienceCard from "@/components/experience/ExperienceCard";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="relative mx-auto max-w-5xl space-y-6 before:absolute before:bottom-0 before:left-2.75 before:top-3 before:w-px before:bg-zinc-800/90 md:space-y-7 md:before:left-3.25">
      {items.map((item, index) => (
        <li key={item.id} className="relative pl-8 md:pl-10">
          <span
            className={`timeline-node absolute left-0 top-5 inline-flex h-6 w-6 items-center justify-center rounded-full border bg-zinc-950 ${
              item.featured
                ? "border-sky-500/70 shadow-[0_0_20px_-12px_rgba(56,189,248,0.7)]"
                : "border-zinc-700"
            }`}
            aria-hidden="true"
          >
            <span className={`h-2 w-2 rounded-full ${item.featured ? "bg-sky-400" : "bg-zinc-500"}`} />
          </span>

          <div className={`reveal-enter ${index % 2 === 0 ? "reveal-delay-1" : "reveal-delay-2"}`}>
            <ExperienceCard item={item} />
          </div>
        </li>
      ))}
    </ol>
  );
}
