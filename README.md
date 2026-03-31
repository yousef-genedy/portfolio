# Yousef Genedy Portfolio (Next.js + MDX)

A dark, modern, backend-focused developer portfolio built with Next.js, TypeScript, Tailwind CSS, and filesystem-based MDX content.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MDX rendering via `next-mdx-remote`
- Netlify deployment (`@netlify/plugin-nextjs`)

## Project Structure

```text
app/
  about/page.tsx
  experience/page.tsx
  notes/page.tsx
  notes/[slug]/page.tsx
  oss/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  HeroFactsPanel.tsx
  Navbar.tsx
  Footer.tsx
  ProjectCard.tsx
  NoteCard.tsx
  ExperienceItem.tsx
  OssCard.tsx
  PageHeader.tsx
  MdxArticle.tsx
  mdx/MdxComponents.tsx
content/
  about/index.mdx
  projects/*.mdx
  notes/*.mdx
  experience/*.mdx
  oss/*.mdx
data/
  site.ts
lib/content/
  queries.ts
  mdx.tsx
  types.ts
```

## Content Architecture

All portfolio content is authorable through MDX frontmatter + body content.

### Collections

- `content/about/index.mdx`
- `content/projects/*.mdx`
- `content/notes/*.mdx`
- `content/experience/*.mdx`
- `content/oss/*.mdx`

### Frontmatter fields (common)

- `title`
- `summary`
- `date`
- `tags`
- `order`
- `featured`
- `status`

Each collection supports extra typed fields in `lib/content/types.ts`.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Netlify Deployment

1. Push the repository to GitHub.
2. Create a new site in Netlify and connect the repo.
3. Build command: `npm run build`
4. Publish directory: `.next` (plugin handles runtime wiring)
5. Confirm `@netlify/plugin-nextjs` is active from `netlify.toml`.
6. Set env var `NEXT_PUBLIC_SITE_URL` to your production domain.

## Add New Content

### Add a note

1. Create a new file under `content/notes/`, for example:
   - `content/notes/my-new-note.mdx`
2. Add frontmatter + markdown body.
3. The note appears automatically on `/notes` and gets a page at `/notes/my-new-note`.

### Add a project case study

1. Create a file in `content/projects/`, for example:
   - `content/projects/my-service.mdx`
2. Add frontmatter fields like `stack`, `impact`, and `featured`.
3. It appears on `/projects`; featured entries can surface on `/`.

### Add OSS or experience entries

- `content/oss/*.mdx` for contributions
- `content/experience/*.mdx` for timeline entries

## Notes

- Keep placeholder links updated in `data/site.ts`.
- For canonical/Open Graph URLs, set `NEXT_PUBLIC_SITE_URL` in local `.env.local` and Netlify env settings.
