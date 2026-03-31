"use client";

import { useEffect, useState } from "react";
import type { HeroFact } from "@/data/site";

type HeroFactsPanelProps = {
  facts: HeroFact[];
};

export default function HeroFactsPanel({ facts }: HeroFactsPanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (facts.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % facts.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [facts.length]);

  return (
    <div className="relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-[0_0_50px_-28px_rgba(125,211,252,0.4)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.2),transparent_42%),radial-gradient(circle_at_85%_90%,rgba(59,130,246,0.16),transparent_35%)]" />
      <div className="relative space-y-5">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Profile signal board</p>

        <div className="rounded-xl border border-zinc-800/90 bg-zinc-950/75 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-sky-300/80">{facts[activeIndex]?.title}</p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 transition-opacity duration-500">
            {facts[activeIndex]?.detail}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {facts.map((fact, index) => (
            <button
              type="button"
              key={fact.title}
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg border px-3 py-2 text-left transition-all duration-300 ${
                index === activeIndex
                  ? "border-sky-400/60 bg-sky-400/10 text-zinc-100"
                  : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
              }`}
            >
              <span className="line-clamp-1 text-xs font-medium tracking-wide">{fact.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
