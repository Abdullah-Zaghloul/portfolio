# Roadmap

Work goes in this order: content first, then the technical rebuild, then identity and visual polish. Each phase ends with its exit criteria met and this file updated.

**Current phase: 2 — Content.** Updated 2026-10-28.

---

## Phase 1 — Planning and docs ✅

- [x] Choose the stack ([decisions.md](decisions.md))
- [x] Write the brief ([brief.md](brief.md))
- [x] Save the Veracode-style prototype on `prototype-v1`
- [x] Set up `CLAUDE.md` so new sessions start with context

## Phase 2 — Content

Collect and write everything the site will say, in English and Arabic. The checklist and the open questions are in [content.md](content.md).

**Exit:** every section in content.md is marked done, with no placeholders or invented numbers left.

## Phase 3 — Rebuild foundation

A working Astro site with real content and a plain, temporary design.

- [ ] Scaffold Astro with TypeScript and Tailwind v4, and remove the old React/Vite code
- [ ] Content collections and schemas for services, projects, experience and site settings
- [ ] i18n routing (`/` and `/ar/`), RTL, language switcher that keeps the current section
- [ ] Theme toggle (system default plus remembered choice, no flash on load)
- [ ] SEO: per-language titles and descriptions, `hreflang`, Open Graph image, sitemap, `robots.txt`
- [ ] Icons inlined at build time, self-hosted fonts
- [ ] GitHub Actions deploy to GitHub Pages; stop committing `dist/`
- [ ] Rewrite README for the new stack

**Exit:** live on GitHub Pages and meeting the [quality bar](brief.md#quality-bar), apart from motion.

## Phase 4 — Identity and design

- [ ] Agree on an identity direction: palette, type, logo mark, tone. Start from what worked in the Veracode reference and make it Abdullah's own.
- [ ] Define design tokens and component styles
- [ ] Design each section with the real content
- [ ] Review on mobile and desktop, in both languages and both themes

**Exit:** the user approves the design.

## Phase 5 — Motion

- [ ] Write the motion principles: which moments animate, timing, easing
- [ ] Build the hero moment and the scroll-linked sequences with GSAP
- [ ] Add reduced-motion fallbacks and test performance on a mid-range phone

**Exit:** animations feel smooth at 60 fps on mobile and the JS budget still holds.

## Phase 6 — Launch on Cloudflare

Do this when job hunting starts.

- [ ] Buy a domain
- [ ] Deploy with Cloudflare Workers Static Assets, connected to the GitHub repo
- [ ] Change `site`/`base` in `astro.config`, and redirect the old GitHub Pages URL
- [ ] Cookie-less analytics (Cloudflare Web Analytics)

## Later ideas

- Case-study page for each major project
- Blog or notes section
- Arabic and English CVs generated from the same content
