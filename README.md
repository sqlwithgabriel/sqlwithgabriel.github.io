# Tech blog

Built with [Astro](https://astro.build/) and the [AstroPaper](https://github.com/satnaing/astro-paper) theme. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Edit

- Site settings (name, author, links, URL): `astro-paper.config.ts`
- Posts: `src/content/posts/*.md`
- About page: `src/content/pages/about.md`
- Colors: `src/styles/theme.css`

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # production build into dist/
```

## Writing a post

Front matter:

```yaml
---
title: "Post title"
description: "One-sentence summary (used for SEO and social cards)."
pubDatetime: 2026-10-17T12:00:00Z
tags: [sql-server, performance]
---
```

Useful Markdown features:

- Code block with a file label: ```` ```sql file="setup.sql" ````
- Callouts: `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!CAUTION]`
- A heading named `## Table of contents` generates the table of contents.
