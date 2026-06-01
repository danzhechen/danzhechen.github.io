# danzhechen.github.io

Personal portfolio site for [Danzhe Chen](https://danzhechen.github.io).

**Live:** https://danzhechen.github.io

Built with [Astro](https://astro.build) + Tailwind CSS, deployed to [GitHub Pages](https://pages.github.com/) on every push to `main`.

## Site structure

Single scrolling page with two project threads:

- **Telling stories** — work that helps people, places, and stories be seen.
- **Exploring** — curiosity-driven technical experiments.

Contact: `chendanzhe@gmail.com` · [LinkedIn](https://www.linkedin.com/in/danzhe-chen/) · [GitHub](https://github.com/danzhechen)

Résumé: `/DanzheChen2026.pdf` (linked from the nav).

## Local development

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # serve dist/ locally
```

## Editing content

### Projects

Add or edit markdown in `src/content/projects/`:

```markdown
---
title: "Project name"
summary: "One or two sentences."
thread: "stories"              # or "exploring"
tags: ["Python", "Mapping"]
role: "Your role"
year: "2026"
link: "https://example.com"    # optional — live project or PDF
repo: "https://github.com/..." # optional
video: "https://youtube.com/..." # optional — shows thumbnail + play overlay
cover: "/projects/photo.jpg"   # optional — else YouTube thumb if video set
coverFit: contain              # optional — use for logos; default is cover
imageCredit: "Photo credit"      # optional — shown on cover
order: 1
---
```

Put images in `public/projects/`. They are served from the site root (e.g. `/projects/photo.jpg`).

### Hero headshot

Replace `public/avatar.jpg` (square-friendly crop works best).

### Résumé

Replace `public/DanzheChen2026.pdf`. The file is **public** (website + this repo). Review for phone, school email, or other details you do not want downloadable before committing.

## Deployment

`.github/workflows/deploy.yml` runs on push to `main`: Node 24 → `npm ci` → `npm run build` → GitHub Pages.

Repo setting (one-time): **Settings → Pages → Build and deployment → Source: GitHub Actions.**

## Privacy

This repository is **public**. Anything under `public/` (photos, PDF, project images) can be copied or cloned. Do not commit secrets (`.env`, keys, tokens).

## Maintenance notes

- Amber accent and editorial typography are defined in `src/styles/global.css`.
- `/cinematic` is an alternate dark skin (optional); the default home page is `/`.
- Veritas cover image: revisit if you prefer a photo without other participants’ faces.
