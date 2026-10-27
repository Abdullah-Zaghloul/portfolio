# Project brief

The personal portfolio of Abdullah Mahmoud Zaghloul. It's one page with a few optional detail pages, in English and Arabic.

Status: planning. The identity and visual design below are still open. See [roadmap.md](roadmap.md) for the current phase.

## Owner

- Builds internal systems for businesses: management portals, self-updating dashboards and reporting, automation, and websites for organizations.
- Works remotely in content operations and growth for a professional consulting firm, and takes system projects on a project basis.
- Long-term aim: products and subscription tools that earn independently of hours worked. The portal built for an online academy is a candidate for the first one.
- What the site leaves out or limits (client names, AI, the city; education only in About) is listed in [content.md](content.md#0-ground-rules-from-abdullah-2026-10-28).

## What the site is for

1. **Get commissioned.** A business owner should understand what Abdullah builds and how to start a project in under a minute.
2. **Show proof.** Real projects, each with the problem, what was built, and what it changed.
3. **Make a strong first impression.** The site itself is a work sample. It should feel crafted, fast and smooth.

## Audience

- **Clients first:** business owners and organizations that need a system for their work, such as an academy or a clinic. Mostly in the Gulf, often on mobile and often in Arabic.
- **Companies hiring second:** they may offer a remote role, and they're more often on desktop and in English.
- Fellow developers who open the source on GitHub.

## Requirements

- **Bilingual.** Arabic and English, each at its own URL (`/` for Arabic, `/en/` for English, see D10), with full RTL support and `hreflang` links between the two. Arabic is first-class, not a translation afterthought.
- **Content separated from layout.** Adding, removing or rewording a project, service or role means editing one content file, never a component. Nothing is written twice: each fact lives in one place and the pages read it from there.
- **Site settings in one file.** Availability (on or off, with an optional note per language), contact links, the CV and the main call to action change there without touching code.
- **Light and dark themes.** It follows the system setting and remembers a manual choice.
- **Downloadable CV** in both languages if available.
- **Easy contact.** WhatsApp is the main call to action. Email, LinkedIn and GitHub are one tap away.
- **SEO and sharing.** Real HTML at load, page titles and descriptions per language, Open Graph image, sitemap.

## Quality bar

These are acceptance criteria, checked before each release.

| Area | Target |
|------|--------|
| Lighthouse (mobile) | 95+ in Performance, Accessibility, Best Practices, SEO |
| Largest Contentful Paint | under 2.0 s on a mid-range phone over 4G |
| Cumulative Layout Shift | under 0.05 |
| JavaScript on the home page | under 50 KB gzipped, including animation code |
| Accessibility | keyboard-navigable, visible focus, WCAG AA contrast in both themes |
| Motion | every animation respects `prefers-reduced-motion`; content is readable without JS |
| Dependencies | every runtime dependency has a written reason in [decisions.md](decisions.md) |

## Identity and design (open)

These will be decided in the design phase, after content is settled:

- Visual identity: palette, type, logo mark, tone of voice.
- Motion language: what moves, when, and why. The aim is a few memorable, orchestrated moments rather than effects on everything.
- Page structure, which follows from the content.

**Reference so far:** veracode.com. The user liked its dark, high-contrast feel, its signal-yellow actions, glass cards, centered statements and the closing "Start your journey_" banner. A quick React prototype of that direction is on the `prototype-v1` branch. It's a reference for ideas, not an approved design, and the final identity should be Abdullah's own rather than a copy of Veracode's palette.

## Non-goals

- A blog or CMS, for now. The stack should allow adding one later without a rewrite.
- Contact forms that need a backend. Direct links are enough.
- Tracking cookies. If analytics are added, they should be cookie-less (for example Cloudflare Web Analytics).
