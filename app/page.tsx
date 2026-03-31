import Link from "next/link";
import Container from "@/components/Container";
import HeroFactsPanel from "@/components/HeroFactsPanel";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <div>
      <Container>
        <section className="grid gap-10 pb-12 pt-14 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-24">
          <div className="space-y-7">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{siteConfig.greeting}</p>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="max-w-2xl text-lg text-zinc-300">
                {siteConfig.title}
              </p>
              <p className="max-w-2xl text-zinc-400">
                {siteConfig.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-300">
              {siteConfig.heroSocialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <HeroFactsPanel facts={siteConfig.heroFacts} />
        </section>

        <section className="grid gap-4 border-y border-zinc-900 py-7 sm:grid-cols-3">
          {siteConfig.homeHighlights.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {item.label}
              </p>
              <p className="text-sm text-zinc-200">{item.value}</p>
            </div>
          ))}
        </section>

        <div className="py-10" />
      </Container>
    </div>
  );
}
