import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  title: string;
  description?: string;
}>;

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">{title}</h2>
        {description ? <p className="max-w-3xl text-zinc-300">{description}</p> : null}
      </div>
      <div>{children}</div>
    </section>
  );
}
