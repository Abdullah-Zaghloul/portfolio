# Project brief

The personal portfolio of Abdullah Mahmoud Zaghloul. It's one page with a few optional detail pages, in English and Arabic.

Status: planning. The identity and visual design below are still open. See [roadmap.md](roadmap.md) for the current phase.

## Owner

- Software Industry & Multimedia student at the Faculty of Science, Alexandria University. Expected to graduate in 2027.
- Work so far: automation and AI workflows (n8n, Python), content and YouTube scripting, AI voiceover, and project and financial operations.
- Skills and experience have grown since the first version of the site. The full inventory gets collected in the content phase ([content.md](content.md)).

## What the site is for

1. **Get hired or commissioned.** A recruiter or client should understand what Abdullah does and how to get in touch in under a minute.
2. **Show proof.** Real projects, each with what it does, what it was built with, and a link or demo where possible.
3. **Make a strong first impression.** The site itself is a work sample. It should feel crafted, fast and smooth.

## Audience

- Recruiters and hiring managers, mostly on desktop and in English.
- Freelance clients in Egypt and the Gulf, often on mobile and often in Arabic.
- Fellow developers who open the source on GitHub.

## Requirements

- **Bilingual.** English and Arabic, each at its own URL (`/` and `/ar/`), with full RTL support and `hreflang` links between the two. Arabic is first-class, not a translation afterthought.
- **Content separated from layout.** Adding a project or a skill means editing a content file, never a component.
- **Light and dark themes.** It follows the system setting and remembers a manual choice.
- **Downloadable CV** in both languages if available.
- **Easy contact.** WhatsApp, email, LinkedIn and GitHub, one tap away.
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
