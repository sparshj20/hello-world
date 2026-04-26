# Personal Portfolio Website — Implementation Plan

## Context

Build a minimal, text-forward personal portfolio for Sparsh Jain (Lead PM) to land interviews at Anthropic and similar. Aesthetic reference: [mitchellh.com](https://mitchellh.com/) and [shivanimatlapudi.com](https://www.shivanimatlapudi.com/) — short prose, system fonts, no decoration, content speaks for itself. The site signals three things: (1) PM craft via case studies, (2) design/prototype sense via clean visual storytelling, (3) "I can code now" via the fact that the site itself is a Next.js project the owner maintains.

The repo is currently empty (just this `README.md` and the new `PLAN.md`). Clean slate.

## Decisions (locked with the user)

| Area | Choice |
|---|---|
| Stack | Next.js (App Router) + TypeScript + Tailwind |
| Hosting | Vercel free tier, auto-deploy from `main` |
| Content | Markdown files in the repo (`content/work/*.md`) |
| Videos | Embed YouTube unlisted (no self-hosted MP4s) |
| Landing page | Minimal: intro paragraph + chronological experience + nav to `/work` and `/misc` |
| Case studies | Long-form scroll, prose + inline images + YouTube embeds |
| Misc page | One page, two sections: Personal (hobbies, photos), Experiments / prototypes |
| Domain | Free `*.vercel.app` for v1 (custom domain later) |
| Confidentiality | Public-only; user redacts what they can't share |

## File / Folder Structure

```
hello-world/
├── app/
│   ├── layout.tsx                  # Nav + Footer + font + global styles
│   ├── page.tsx                    # Landing: intro + experience
│   ├── globals.css                 # Tailwind directives + ~10 lines custom
│   ├── work/
│   │   ├── page.tsx                # Index of case studies
│   │   └── [slug]/page.tsx         # Renders one case study from markdown
│   └── misc/page.tsx               # Personal + experiments (one page)
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ExperienceItem.tsx
│   ├── VideoEmbed.tsx              # YouTube iframe in 16:9 wrapper
│   └── MarkdownRenderer.tsx        # react-markdown w/ custom link handler
├── content/
│   └── work/
│       ├── project-one.md
│       └── project-two.md
├── lib/
│   └── content.ts                  # listProjects(), getProject(slug)
├── public/
│   ├── work/<slug>/                # Each case study's images live here
│   └── misc/photos/
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md                       # Keep existing
```

**Why content lives in `/content` not `/app`**: keeps markdown out of the route tree so files don't accidentally become pages; case-study folder layout stays predictable.

## Markdown Pipeline

**Libraries**: `gray-matter` + `react-markdown` + `remark-gfm` + `rehype-raw`.

Why these (low-magic, well-documented, easy to debug for a PM new to dev):
- `gray-matter` parses frontmatter in 3 lines.
- `react-markdown` renders markdown to React with no build step or hidden cache.
- Skip `next-mdx-remote` / `contentlayer` / `@next/mdx` — they're more powerful but introduce magic that's painful when something breaks.

**Frontmatter for each `content/work/<slug>.md`:**

```yaml
---
title: "Reorder Discovery on Blinkit"
summary: "Cut reorder friction; +6% repeat rate."
role: "Lead PM"
year: 2024
cover: "/work/reorder-discovery/cover.jpg"
order: 1
draft: false
---
```

**Embedding videos**: paste a YouTube URL on its own line in the markdown. `MarkdownRenderer` detects YouTube/Vimeo URLs and swaps in `<VideoEmbed />`. No MDX, no shortcodes.

## Styling

- **Tailwind** as base + `@tailwindcss/typography` for case study `prose`.
- **Font**: system stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...`) — zero network requests, instant load, exactly the Mitchell aesthetic.
- **Palette** (in `tailwind.config.ts`):
  - bg `#fafafa`, text `#1a1a1a`, muted `#6b6b6b`, accent `#0055cc`, border `#e5e5e5`
- **Layout**: single centered column, `max-w-2xl` (~640px) for prose, `max-w-3xl` for index pages.
- Custom CSS in `globals.css` stays under ~20 lines.

## Components (5 small ones + 1 renderer)

| Component | What it does |
|---|---|
| `Nav.tsx` | Three text links: `home`, `work`, `misc`. No logo. |
| `Footer.tsx` | Name + year + LinkedIn + `mailto:` link. |
| `ProjectCard.tsx` | Title + year + one-line summary on `/work` index. Text-first, no cover image on the index. |
| `ExperienceItem.tsx` | Year range + role + company + one-line description. |
| `VideoEmbed.tsx` | Responsive 16:9 iframe wrapper for YouTube/Vimeo. |
| `MarkdownRenderer.tsx` | Wraps `react-markdown` with `remark-gfm` + `rehype-raw` and the YouTube-link → `VideoEmbed` swap. |

## Deployment Flow (one-time)

1. Scaffold Next.js in a temp dir to avoid clobbering existing `README.md`:
   `npx create-next-app@latest /tmp/scaffold` → TypeScript yes, Tailwind yes, App Router yes, `src/` no, default alias.
   Then copy files (except `/tmp/scaffold/README.md`) into the repo.
2. `npm i gray-matter react-markdown remark-gfm rehype-raw @tailwindcss/typography`
3. Build out the structure above with one real seed case study.
4. `git add . && git commit -m "initial portfolio scaffold" && git push origin main`
5. On vercel.com: **Add New → Project → Import `hello-world`**. Framework auto-detected. Production branch `main`. No env vars. Deploy.
6. Resulting URL: roughly `hello-world-<username>.vercel.app`. Every push to `main` auto-deploys in ~60 seconds.

## Maintenance Flow — Adding a New Case Study

The user does exactly this every time:

1. `mkdir public/work/<slug>` and drop image files in.
2. Create `content/work/<slug>.md`, copy frontmatter from a prior file, edit fields.
3. Write the case study body in markdown. Reference images as `![caption](/work/<slug>/screen-1.png)`. Paste a YouTube URL on its own line to embed a video.
4. `npm run dev` and open `http://localhost:3000/work/<slug>` to preview.
5. `git add . && git commit -m "add <slug> case study" && git push`.
6. Wait ~60s; refresh production URL.

No CMS. No admin UI. No build commands beyond `git push`.

## Verification

**Local**: `npm run dev` → `http://localhost:3000`.

**Pre-push checklist (60 seconds)**:
- `/`, `/work`, `/misc` all render
- Each case study link from `/work` opens the right page
- Images load (no 404s in Network tab)
- One YouTube embed plays
- Resize to ~375px width — text wraps, no horizontal scroll
- `npm run build` succeeds locally (catches errors before Vercel does)

## Out of Scope — Do Not Add (yet)

Guarding against feature creep:
- Analytics (GA, Plausible, Vercel Analytics)
- Dark mode toggle
- Contact form (use `mailto:` in footer)
- Search / tag filtering / RSS
- Animations beyond `:hover` color shifts
- A CMS, headless or otherwise
- i18n, sitemap, advanced SEO
- Tests (Jest, Playwright)
- Husky / pre-commit hooks
- Image optimization beyond plain `<img>` in v1 (Next `<Image>` optional later)

If tempted to add any of these: revisit only after the first interview is booked.

## Critical Files to Create

- `app/layout.tsx`
- `app/page.tsx`
- `app/work/page.tsx`
- `app/work/[slug]/page.tsx`
- `app/misc/page.tsx`
- `lib/content.ts`
- `components/MarkdownRenderer.tsx`, `VideoEmbed.tsx`, `Nav.tsx`, `Footer.tsx`, `ProjectCard.tsx`, `ExperienceItem.tsx`
- `tailwind.config.ts`
- `content/work/<one-seed-project>.md`

## Estimated Effort

One focused 3–4 hour session: scaffold (30m), components & pages (90m), one real case study end-to-end (45m), Vercel deploy (15m), polish (30m).
