# Developer Portfolio Starter

Minimal, responsive portfolio starter built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**, structured for backend engineering profiles.

## Features

- App Router structure with reusable components
- Data-driven content in a dedicated `data` module for quick editing
- Responsive sections: Hero, About, Projects, Skills, Open Source, Contact
- SEO basics: title template, description, Open Graph, robots, sitemap
- Netlify-ready config using `@netlify/plugin-nextjs`

## Project Structure

```text
app/
  globals.css
  icon.svg
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  Container.tsx
  ContributionCard.tsx
  Footer.tsx
  Navbar.tsx
  ProjectCard.tsx
  Section.tsx
  SkillGroup.tsx
data/
  portfolio.ts
public/
netlify.toml
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build / Production Check

```bash
npm run lint
npm run build
```

## Content Editing

Update all placeholder portfolio content in `data/portfolio.ts`:

- bio and hero text
- project cards
- skill groups
- open-source entries
- contact links

## Netlify Deployment

`netlify.toml` is already configured:

- build command: `npm run build`
- publish directory: `.next`
- plugin: `@netlify/plugin-nextjs`

### Deploy Steps

1. Push this repo to GitHub.
2. In Netlify, select **Add new site** -> **Import an existing project**.
3. Choose your GitHub repository.
4. Confirm build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL` = your Netlify production URL (or custom domain)
6. Trigger deploy.
7. Verify:
   - `/` loads correctly
   - `/robots.txt` and `/sitemap.xml` are available
   - mobile + desktop layouts render correctly

## Optional Netlify CLI Deploy

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --build
netlify deploy --prod --build
```
