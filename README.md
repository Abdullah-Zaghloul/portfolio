# Abdullah Zaghloul — Portfolio

Bilingual (Arabic and English) portfolio, built with [Astro](https://astro.build) and Tailwind CSS v4. Arabic is served at `/` and English at `/en/`.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321/portfolio/
npm run build     # type-checks, then builds to dist/
npm run preview   # serves the built site
```

## Edit the content

Content is separate from layout, so changing text never means touching a component.

| What | Where |
|------|-------|
| Availability, contact links, CV files | `src/content/settings/site.yaml` |
| Headline, About, "How I work", education | `src/content/home/home.yaml` |
| Services | `src/content/services/*.yaml` |
| Projects | `src/content/projects/*.yaml` |
| Experience | `src/content/experience/*.yaml` |
| Navigation, buttons, section titles, footer | `src/i18n/ui.ts` |

Every text field has an `ar` and an `en` value. The schemas in `src/content.config.ts` check each file at build time, so a missing translation or a typo in a field name fails the build instead of shipping.

A project testimonial marked `placeholder: true` shows in development only and never in a production build.

## Deploy

Pushing to `main` builds and deploys to GitHub Pages with GitHub Actions (`.github/workflows/deploy.yml`). The repo's Pages source must be set to **GitHub Actions**. `dist/` is not committed.

The only host-specific settings are `site` and `base` in `astro.config.mjs`.

## Docs

Plans and decisions live in [`docs/`](docs): start with [`docs/roadmap.md`](docs/roadmap.md).
