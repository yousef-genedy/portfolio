import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  description?: string;
}>;

export default function Section({
  id,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          {title}
        </h2>
        {description ? <p className="text-zinc-600">{description}</p> : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

