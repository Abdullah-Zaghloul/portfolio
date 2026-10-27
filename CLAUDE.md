# CLAUDE.md

The personal portfolio of Abdullah Zaghloul, bilingual (English/Arabic). It's being rebuilt from scratch on Astro.

## Start here

1. [docs/roadmap.md](docs/roadmap.md): the current phase and what's next. Check it first.
2. [docs/brief.md](docs/brief.md): goals, audience, requirements and the quality bar.
3. [docs/decisions.md](docs/decisions.md): the stack and the reasons for it. Don't change the stack or add a runtime dependency without adding a decision entry and getting the user's agreement.
4. [docs/content.md](docs/content.md): content inventory and open questions.

## State of the repo

- `main` still holds the old React + Vite site. It's what is live on GitHub Pages, deployed with `npm run deploy`.
- `rebuild` is the working branch for the Astro rebuild and holds the docs.
- `prototype-v1` holds a Veracode-inspired React redesign. It's a reference only and won't be merged.

## Working with the user

- The user writes in Egyptian Arabic. Reply in Egyptian Arabic and keep code, commits and docs in English.
- The user wants to plan before building, and in this order: content, then the technical rebuild, then design and motion.
- Avoid unnecessary libraries. Performance, smoothness and a polished, high-impact visual experience all matter.
- Never invent facts, metrics, clients or testimonials for the site. Ask instead.
- Update docs/roadmap.md when a phase or task finishes.
