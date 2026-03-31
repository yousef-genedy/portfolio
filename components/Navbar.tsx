"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/Container";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/90 bg-[#000000]/88 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.14em] text-zinc-300 transition-colors hover:text-zinc-100"
          >
            {siteConfig.brand}
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
                        isActive ? "text-zinc-100" : "hover:text-zinc-200"
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
                        isActive ? "text-zinc-100" : "hover:text-zinc-200"
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
