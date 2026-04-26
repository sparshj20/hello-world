# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sparsh Jain's personal portfolio — a minimal, text-forward site built to land PM interviews at Anthropic and similar. Aesthetic reference: [mitchellh.com](https://mitchellh.com/). Owner is a Lead PM who is new to development.

---

## Tech Stack and Core Rules

| Area | Choice |
|---|---|
| Framework | Next.js 14 App Router + TypeScript |
| Styling | Tailwind CSS + `@tailwindcss/typography` |
| Hosting | Vercel free tier, auto-deploys from `main` |
| Content | Markdown files in `content/work/*.md` |
| Videos | YouTube unlisted embeds only (no self-hosted MP4s) |

**Commands:**
```bash
npm run dev       # local dev at http://localhost:3000
npm run build     # production build — run before pushing
npm run lint      # ESLint
```

**Styling constraints (do not deviate):**
- Palette: bg `#fafafa`, text `#1a1a1a`, muted `#6b6b6b`, accent `#0055cc`, border `#e5e5e5`
- Font: system stack only — no Google Fonts
- Layout: `max-w-2xl` for prose, `max-w-3xl` for index pages
- Keep `globals.css` under ~20 lines

---

## File Map

```
app/
  layout.tsx              # Nav + Footer + global styles
  page.tsx                # Landing: intro + experience list
  globals.css
  work/
    page.tsx              # Case study index (reads frontmatter only)
    [slug]/page.tsx       # Full case study from markdown
  misc/page.tsx           # Personal + experiments sections
components/
  Nav.tsx                 # Three text links: home, work, misc
  Footer.tsx              # Name + year + LinkedIn + mailto
  ProjectCard.tsx         # Title + year + summary (text-first, no cover image on index)
  ExperienceItem.tsx      # Year range + role + company + description
  VideoEmbed.tsx          # 16:9 responsive YouTube/Vimeo iframe
  MarkdownRenderer.tsx    # react-markdown + remark-gfm + rehype-raw; auto-converts YouTube URLs
lib/
  content.ts              # listProjects() and getProject(slug)
content/
  work/<slug>.md          # One file per case study
public/
  work/<slug>/            # Images for each case study
  misc/photos/
```

**Content pipeline:** `gray-matter` parses frontmatter → `lib/content.ts` reads files → `react-markdown` renders body. No build-time codegen, no CMS, no hidden cache.

**Frontmatter schema** (`content/work/<slug>.md`):
```yaml
---
title: ""
summary: ""      # one-line shown on /work index
role: ""
year: 2024
cover: "/work/<slug>/cover.jpg"
order: 1         # sort order
draft: false     # true = hidden from listing
---
```

**Video embeds:** paste a bare YouTube URL on its own line in markdown — `MarkdownRenderer` detects it and renders `<VideoEmbed />` automatically.

**Images:** stored in `public/work/<slug>/`, referenced as `![alt](/work/<slug>/image.png)`.

**Do not add:** analytics, dark mode, contact form, search/filtering, RSS, animations beyond `:hover`, CMS, i18n, sitemap, tests, pre-commit hooks.

---
# Feature Development Workflow
When I say "I want to build [feature]":

- **New feature:** run `/feature` skill
- **Run code locally** run `/start-dev` skill
- **Committing:** run `/commit` skill
- **PR:** run `/pr` skill

## Workflow Orchestration 

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions).
- If something goes sideways, **STOP** and re-plan immediately – don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity. 
- With plan mode - do not create duplicate files and skip spec, research and plan in `/feature` skill.

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes – don't over-engineer
- Challenge your own work before presenting it
- Match existing style, even if you'd do it differently.
- Touch only what you must. Clean up only your own mess.If you notice unrelated dead code, mention it - don't delete it.

---
## What Claude Should Never Do Without My Approval
- Delete files
- Change environment variables or secrets | Merge branches | Push to master
- Install new dependencies without explaining them first
- Improve adjacent code, comments, or formatting.
- refactor things that aren't broken