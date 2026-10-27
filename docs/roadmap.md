# Roadmap

Work goes in this order: content first, then the technical rebuild, then identity and visual polish. Each phase ends with its exit criteria met and this file updated.

**Current phase: 3 — Rebuild foundation** (built and verified locally; deploy pending). Updated 2026-10-28.

---

## Phase 1 — Planning and docs ✅

- [x] Choose the stack ([decisions.md](decisions.md))
- [x] Write the brief ([brief.md](brief.md))
- [x] Save the Veracode-style prototype on `prototype-v1`
- [x] Set up `CLAUDE.md` so new sessions start with context

## Phase 2 — Content ✅

Collect and write everything the site will say, in English and Arabic. The checklist and the open questions are in [content.md](content.md).

Progress (2026-10-28):
- [x] Ground rules, positioning, audience and services agreed
- [x] Old content reviewed and cut; new experience and projects drafted in both languages
- [x] URL layout decided (D10: Arabic at `/`, English at `/en/`)
- [x] Drafts in sections 1 to 5 accepted as the working copy for the build. The wording review moves to [Before launch](#before-launch-real-assets).
- [x] About: "How I work" approved, no "Now" line, no graduation year
- [x] Site copy drafted (navigation, buttons, section titles, footer)

Moved to [Before launch](#before-launch-real-assets): the wording review and the CV.

Deferred to after the rebuild (agreed 2026-10-28): the profile photo, the founder's testimonial text and the portal screenshots. The build uses clearly marked placeholders for these until Abdullah sends them (see [Before launch](#before-launch-real-assets)).

**Exit:** met on 2026-10-28. Every section has a working draft with no invented numbers; the deferred assets have placeholders.

## Phase 3 — Rebuild foundation

A working Astro site with real content and a plain, temporary design.

- [x] Scaffold Astro with TypeScript and Tailwind v4, and remove the old React/Vite code
- [x] Content collections and schemas for services, projects, experience and site settings
- [x] i18n routing (`/` Arabic, `/en/` English, per D10), RTL, language switcher that keeps the current section
- [x] Theme toggle (system default plus remembered choice, no flash on load)
- [x] SEO: per-language titles and descriptions, `hreflang`, Open Graph image, sitemap, `robots.txt`
- [x] Icons inlined at build time, self-hosted fonts (D11)
- [x] GitHub Actions deploy workflow; `dist/` no longer committed
- [x] Rewrite README for the new stack
- [ ] Merge `rebuild` into `main` and switch the repo's Pages source to GitHub Actions (waiting for Abdullah's go-ahead)

Temporary in this phase: the font, the colors, the OG image (`public/og.png`, English text only) and the favicon. The identity phase replaces them. The old CV is still in `public/` but no longer linked; the CV buttons stay hidden until the new CVs exist.

**Exit:** live on GitHub Pages and meeting the [quality bar](brief.md#quality-bar), apart from motion.

## Before launch: real assets

One review session with Abdullah after the build and right before the site is shared publicly: final wording, then the real assets in place of the placeholders.

- [ ] Review the wording of every section and the site copy, in both languages, on the built site
- [ ] Rewrite the CV in English and Arabic from the final wording (no graduation year)

- [ ] Profile photo for About
- [ ] Founder's testimonial text for project 1 (remove `placeholder: true`)
- [ ] Portal screenshots, redrawn as a mockup with fictional data

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
