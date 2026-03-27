import Container from "@/components/Container";
import ContributionCard from "@/components/ContributionCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SkillGroup from "@/components/SkillGroup";
import {
  contactLinks,
  contributions,
  featuredProjects,
  siteConfig,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navbar />
      <main className="space-y-20 py-16">
        <Container>
          <section className="space-y-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              {siteConfig.role}
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                {siteConfig.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                {siteConfig.intro}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
              >
                Contact me
              </a>
            </div>
          </section>

          <div className="mt-20">
            <Section id="about" title="About">
              <p className="max-w-3xl leading-8 text-zinc-600">
                {siteConfig.about}
              </p>
            </Section>
          </div>

          <div className="mt-20">
            <Section
              id="projects"
              title="Featured Projects"
              description="Selected backend-focused projects with clear business and engineering outcomes."
            >
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </Section>
          </div>

          <div className="mt-20">
            <Section
              id="skills"
              title="Skills / Tech Stack"
              description="Core technologies I use to design, build, and operate backend systems."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.title} group={group} />
                ))}
              </div>
            </Section>
          </div>

          <div className="mt-20">
            <Section
              id="open-source"
              title="Open Source / Contributions"
              description="Recent open-source work, including Joplin-related collaboration placeholders."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {contributions.map((item) => (
                  <ContributionCard key={item.title} contribution={item} />
                ))}
              </div>
            </Section>
          </div>

          <div className="mt-20">
            <Section id="contact" title="Contact">
              <div className="flex flex-wrap gap-5 text-sm text-zinc-700">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
