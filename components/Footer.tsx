import Container from "@/components/Container";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <a href="#top" className="transition-colors hover:text-zinc-900">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}

