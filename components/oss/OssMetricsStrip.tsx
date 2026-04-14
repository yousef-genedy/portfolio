import type { OssMetric } from "@/lib/content/types";

type OssMetricsStripProps = {
  metrics: OssMetric[];
};

export default function OssMetricsStrip({ metrics }: OssMetricsStripProps) {
  return (
    <section aria-label="OSS summary metrics">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="flex items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-900/65 px-3 py-2 transition-colors hover:border-zinc-700"
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">{metric.label}</p>
            <p className="text-base font-semibold tracking-tight text-zinc-100">{metric.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
