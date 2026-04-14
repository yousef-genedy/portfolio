import type { HeroFact } from "@/lib/content/types";
import { getTechBadgeClasses, getTechIcon, getTechLogo, resolveTechIconKey } from "@/components/experience/iconMap";

type HeroFactsPanelProps = {
  facts: HeroFact[];
};

export default function HeroFactsPanel({ facts }: HeroFactsPanelProps) {
  const [mission, stack, interests] = facts;
  const stackItems = (stack?.detail ?? "Spring Boot, Node.js, PostgreSQL, Redis, OpenSearch")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!mission) {
    return null;
  }

  return (
    <aside className="group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/95 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700/90">
      <div className="border-b border-zinc-900 px-6 py-4">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Engineering Snapshot</p>
      </div>

      <div className="space-y-4 p-6">
        <div className="relative rounded-xl border border-zinc-700/90 bg-black p-5 shadow-[0_0_28px_-22px_rgba(56,189,248,0.65)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_40%)]" />
          <div className="flex items-center gap-2.5">
            <span className="dot-pulse h-2 w-2 rounded-full bg-[#38bdf8]" />
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-400">{mission.title}</p>
          </div>
          <p className="relative mt-3 text-base leading-7 text-zinc-100">{mission.detail}</p>
        </div>

        <div className="grid gap-3 sm:auto-rows-fr sm:grid-cols-2">
          <div className="h-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-400">
              {stack?.title ?? "Stack"}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {stackItems.map((item) => {
                const iconKey = resolveTechIconKey(item);
                const accent = getTechBadgeClasses(iconKey);
                const icon = getTechIcon(iconKey);
                const logo = getTechLogo(iconKey);

                return (
                  <span
                    key={item}
                    className={`inline-flex items-center gap-2 rounded-full border bg-black px-2.5 py-1 text-xs text-zinc-200 ${accent.border}`}
                  >
                    {icon || logo ? (
                      <span
                        className={`inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${accent.icon}`}
                      >
                        {logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={logo.src} alt={logo.alt} width={12} height={12} loading="lazy" decoding="async" />
                        ) : (
                          icon
                        )}
                      </span>
                    ) : null}
                    <span>{item}</span>
                  </span>
                );
              })}
            </div>
          </div>

          <div className="h-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-400">
              {interests?.title ?? "Interests"}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(interests?.detail ?? "Distributed architecture, observability, and performance engineering")
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean)
                .map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-700 bg-black px-2.5 py-1 text-xs text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
