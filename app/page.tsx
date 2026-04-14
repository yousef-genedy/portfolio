import Link from "next/link";
import Container from "@/components/layout/Container";
import HeroFactsPanel from "@/components/home/HeroFactsPanel";
import { getHomePageData } from "@/lib/content/queries";
import type { HeroSocialLink } from "@/lib/content/types";

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "GitHub":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
          aria-hidden="true"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.26-.35 6.67-1.6 6.67-7.2a5.6 5.6 0 0 0-1.53-3.92A5.2 5.2 0 0 0 19.03.5S17.73.15 15 2.4a13.38 13.38 0 0 0-6 0C6.27.15 4.97.5 4.97.5a5.2 5.2 0 0 0-.11 3.96A5.6 5.6 0 0 0 3.33 8.4c0 5.56 3.4 6.85 6.67 7.2a4.8 4.8 0 0 0-1 3.2v4" />
          <path d="M9 18c-4.5 2-5-2-7-2" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.5h4V21H3V9.5Zm7 0h3.84v1.57h.05c.54-1.02 1.86-2.1 3.83-2.1C21.32 8.97 22 11.2 22 14.1V21h-4v-6.08c0-1.45-.02-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2V21h-4V9.5Z" />
        </svg>
      );
    case "Email":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
          aria-hidden="true"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <path d="m22 7-8.97 5.7a2 2 0 0 1-2.14 0L2 7" />
        </svg>
      );
    case "CV":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-text size-4"
          aria-hidden="true"
        >
          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
          <path d="M14 2v5a1 1 0 0 0 1 1h5" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M14 3h7v7h-2V6.4l-7.8 7.8-1.4-1.4L17.6 5H14V3ZM5 5h6v2H5v12h12v-6h2v8H3V5h2Z" />
        </svg>
      );
  }
}

export default function Home() {
  const home = getHomePageData();
  const [primaryCta, secondaryCta] = home.ctas;

  return (
    <div className="hero-surface bg-black">
      <Container>
        <section className="grid gap-10 pb-10 pt-14 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-24">
          <div className="min-w-0 space-y-8">
            <p className="reveal-enter text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              {home.greeting}, I&apos;M
            </p>
            <div className="reveal-enter reveal-delay-1 space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl md:text-7xl">
                {home.name}
              </h1>
              <p className="text-xl font-medium text-zinc-200 sm:text-2xl">{home.title}</p>
              <p className="max-w-2xl leading-8 text-zinc-300/90">{home.description}</p>
            </div>

            <div className="reveal-enter reveal-delay-2 flex flex-wrap items-center gap-3">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="rounded-lg border border-sky-400/40 bg-sky-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-sky-300"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition-all hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900/70"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>

            <div className="reveal-enter reveal-delay-3 flex flex-wrap items-center gap-3 text-sm text-zinc-300">
              {home.socialLinks.map((link: HeroSocialLink) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  title={link.label}
                  className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-zinc-600 hover:text-zinc-100"
                >
                  <SocialIcon label={link.label} />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-zinc-800 bg-zinc-950 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-300 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="reveal-enter reveal-delay-2 min-w-0">
            <HeroFactsPanel facts={home.facts} />
          </div>
        </section>

        <div className="h-10" />
      </Container>
    </div>
  );
}
