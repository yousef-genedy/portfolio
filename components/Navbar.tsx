import Container from "@/components/Container";
import { siteConfig } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <a href="#top" className="font-semibold tracking-tight text-zinc-900">
            {siteConfig.name}
          </a>
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-600 sm:gap-x-6 sm:text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
