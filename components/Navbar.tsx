"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [brandText, setBrandText] = useState(siteConfig.brand);
  const scrambleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startBrandScramble = () => {
    const target = siteConfig.brand;
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/";
    let frame = 0;

    if (scrambleTimerRef.current) {
      clearInterval(scrambleTimerRef.current);
    }

    scrambleTimerRef.current = setInterval(() => {
      const next = target
        .split("")
        .map((char, index) => {
          if (char === " ") {
            return " ";
          }

          if (index < frame) {
            return char;
          }

          return charset[Math.floor(Math.random() * charset.length)];
        })
        .join("");

      setBrandText(next);
      frame += 0.45;

      if (frame >= target.length) {
        if (scrambleTimerRef.current) {
          clearInterval(scrambleTimerRef.current);
          scrambleTimerRef.current = null;
        }
        setBrandText(target);
      }
    }, 36);
  };

  const resetBrandScramble = () => {
    if (scrambleTimerRef.current) {
      clearInterval(scrambleTimerRef.current);
      scrambleTimerRef.current = null;
    }
    setBrandText(siteConfig.brand);
  };

  useEffect(() => {
    return () => {
      if (scrambleTimerRef.current) {
        clearInterval(scrambleTimerRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/90 bg-[#000000]/88 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            onMouseEnter={startBrandScramble}
            onMouseLeave={resetBrandScramble}
            className="inline-flex w-[5ch] items-center text-xl font-black tracking-[0.08em] text-sky-300 transition-colors hover:text-sky-200"
          >
            {brandText}
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-md border border-zinc-800 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100 md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>

          <nav className="hidden md:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-1 text-sm text-zinc-400">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-md px-3 py-2 transition-colors ${
                        isActive ? "bg-zinc-900/80 text-zinc-100" : "hover:bg-zinc-900/60 hover:text-zinc-200"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {isOpen ? (
          <nav className="border-t border-zinc-900 py-3 md:hidden" aria-label="Mobile navigation">
            <ul className="space-y-1 text-sm text-zinc-300">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-md px-2 py-2 transition-colors ${
                        isActive ? "bg-zinc-900/80 text-zinc-100" : "hover:bg-zinc-900/60 hover:text-zinc-200"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
