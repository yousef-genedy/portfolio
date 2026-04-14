"use client";

import { useState } from "react";
import type { ExperienceTechnology } from "@/lib/content/types";
import { getTechBadgeClasses, getTechIcon, getTechLogo } from "@/components/experience/iconMap";

type TechBadgeProps = {
  tech: ExperienceTechnology;
};

export default function TechBadge({ tech }: TechBadgeProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const icon = getTechIcon(tech.icon);
  const logo = getTechLogo(tech.icon);
  const accent = getTechBadgeClasses(tech.icon);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border bg-black/80 px-2.5 py-1 text-xs text-zinc-200 transition-colors hover:bg-zinc-900 ${accent.border}`}
    >
      {icon ? (
        <span className={`inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${accent.icon}`}>
          {logo && !logoFailed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo.src}
              alt={logo.alt}
              width={12}
              height={12}
              loading="lazy"
              decoding="async"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            icon
          )}
        </span>
      ) : null}
      <span>{tech.name}</span>
    </span>
  );
}
