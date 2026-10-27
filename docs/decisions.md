# Technical decisions

Each decision records what was chosen, why, and what would make us reconsider it. Add new decisions at the bottom; don't rewrite old ones. If a decision is replaced, mark it **Superseded by D#**.

---

## D1 — Rebuild from scratch on Astro

**Date:** 2026-10-27. **Status:** Accepted.

**Context.** The first version is a client-rendered React SPA (React 18, Vite 5, Framer Motion, Font Awesome from a CDN). The browser receives an empty page until about 104 KB of gzipped JavaScript loads. Search engines and link previews see little content, and the Arabic version has no URL of its own.

**Decision.** Rebuild on [Astro](https://astro.build), as a static site generated at build time.

**Why.**
- Ships plain HTML and CSS, with JavaScript only for the parts that need it. That makes the 50 KB budget easy to meet.
- Built-in i18n routing gives `/` and `/ar/` as separate, indexable pages.
- Content collections hold projects, services and experience as typed data files with a schema. Content stays separate from layout, and per-project pages can be added later.
- Built-in image optimization, sitemap support and page transitions.
- Cloudflare acquired Astro in January 2026, and Astro remains MIT-licensed. Deploying to Cloudflare is first-class, and GitHub Pages also works.

**Rejected.**
- *Keep React + Vite.* It ships a runtime the site doesn't need.
- *Next.js.* Built for server-rendered apps, which is more than a static portfolio needs.
- *Hand-written HTML.* No i18n routing, no content schema, and it gets harder to maintain as the site grows.

**Reconsider if** the site needs heavy app-like interactivity across most pages.

## D2 — No UI framework (no React)

**Status:** Accepted.

The interactive parts are small: a menu, project filters, a theme toggle, and animations. They're written as small TypeScript scripts in Astro components. Removing React saves about 45 KB gzipped and a layer of complexity.

**Reconsider if** a component becomes complex enough to need managed state. In that case add a framework island for that component only. Prefer Preact or Svelte, which are smaller.

## D3 — Animation: GSAP for orchestrated moments, CSS for the rest

**Status:** Accepted.

- [GSAP](https://gsap.com) with ScrollTrigger (and SplitText if headline type animation is used). GSAP and all its plugins have been free, including for commercial use, since Webflow's acquisition. It's the standard tool for high-end scroll and timeline animation and works without a framework.
- Plain CSS (transitions, keyframes, and scroll-driven animations where supported) handles hovers and small UI feedback, so those need no JavaScript.
- Every animation has a `prefers-reduced-motion` fallback, and content must be visible if JavaScript fails.
- **Not adopted for now:** Lenis or any other smooth-scroll library. It changes how native scrolling feels and isn't needed for scroll-linked effects. Revisit only if a design requires it.
- Framer Motion is dropped because it's React-only.

## D4 — Styling: Tailwind CSS v4

**Status:** Accepted.

Design tokens (colors, type scale, radii, motion durations) are CSS variables defined once, with Tailwind v4's `@theme` mapping them to utilities. Both themes swap only the variables. Use logical properties (`ms-`, `ps-`, `start-`) everywhere so RTL works without special cases.

## D5 — Icons inlined at build time

**Status:** Accepted.

Replace the Font Awesome CDN, which loads the whole icon set and its webfonts, with SVG icons inlined at build time so only the icons actually used ship. Use a general icon set such as Lucide or Tabler for UI icons and [simple-icons](https://simpleicons.org) for brand logos. Pick the exact integration during setup and keep it to one package per icon source.

## D6 — Self-hosted fonts

**Status:** Accepted.

Serve font files from the site itself, subset and preloaded, instead of from Google Fonts. That saves a third-party connection on the critical path and gives control over `font-display`. We need one Latin family and one Arabic family that pair well. The specific faces are chosen in the design phase.

## D7 — Hosting: GitHub Pages now, Cloudflare later

**Status:** Accepted.

- **Now:** GitHub Pages, deployed by a GitHub Actions workflow on every push to `main` (the official Astro action). The `gh-pages` npm script goes away, and `dist/` is no longer committed (add it to `.gitignore`).
- **Later**, when job hunting starts: move to Cloudflare Workers with Static Assets, which Cloudflare recommends for new static sites, plus a custom domain. The domain matters more for credibility than the host does. Cloudflare Registrar sells domains at cost.
- **Keep the move cheap.** The only host-specific setting should be Astro's `site` and `base` in `astro.config`: `base: "/portfolio"` on GitHub Pages, `/` on a custom domain. Never hard-code the base path in components; always build URLs from `import.meta.env.BASE_URL`.

## D8 — Runtime dependency policy

**Status:** Accepted.

A package may be added only if it does something we can't do reasonably in a few lines, and its reason goes in this file. Prefer build-time tools, which ship nothing to the browser, over runtime libraries. Expected runtime JavaScript: GSAP and our own small scripts. Nothing else without a new decision entry.

## D9 — Prototype v1 kept as reference

**Status:** Accepted.

The Veracode-inspired React redesign is committed on the `prototype-v1` branch. It's not approved design and won't be merged. Reuse ideas from it freely: section order, the animated "pipeline" hero preview, the services menu, and the content split between data and translations.
