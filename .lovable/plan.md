# RobiData Documentation Site

A dark-themed, multi-page documentation site for RobiData built in the Robi Labs design language (near-black surfaces, `#6E7BFF` blue-violet accent, Inter + Red Hat Mono typography).

## Layout

```text
┌──────────────────────────────────────────────────────┐
│  Top bar: RobiData wordmark · GitHub · robiai.com    │
├────────────┬─────────────────────────────────────────┤
│            │                                         │
│  Sidebar   │   Content (max-w prose, dark surface)   │
│  (sticky)  │                                         │
│            │   - Page title + meta label             │
│  Sections: │   - Sections with copyable code blocks  │
│  Intro     │   - Callouts, tables, dividers          │
│  Install   │                                         │
│  CLI       │   "On this page" right rail (lg+)       │
│  Guides    │                                         │
│  API       │                                         │
│  ...       │                                         │
└────────────┴─────────────────────────────────────────┘
```

Mobile: sidebar collapses into a sheet/drawer triggered from the top bar.

## Pages (routes)

- `/` — Introduction: what RobiData is, features, badges, "Quick start" CTA
- `/installation` — pip install, optional extras (`[pdf]`, `[all]`)
- `/quick-start` — 5-step walkthrough (scrape → transform → validate → stats → publish)
- `/cli` — Full CLI overview (`scrape`, `transform`, `validate`, `publish`, `stats`)
- `/cli/scrape` — All `scrape` options as a reference table
- `/cli/transform` — All `transform` options
- `/firecrawl` — Firecrawl backend, both API-key and `.env` setups
- `/python-api` — `DatasetPipeline` example with full code block
- `/project-structure` — File tree of `src/datasetforge/` and `webapp/`
- `/web-app` — Local web app MVP instructions
- `/notes` — ToS / licensing / secrets guidance
- 404 page in matching dark style

All routes added to `src/App.tsx` above the catch-all.

## Components

- `DocsLayout` — sticky top bar + sidebar + main + optional right rail
- `Sidebar` — grouped nav (Getting Started, CLI Reference, Guides, Reference) with active-route highlighting in `#6E7BFF`
- `CodeBlock` — dark `#0D0D1A` surface, Red Hat Mono font, copy-to-clipboard button, optional language label
- `Callout` — left border `#6E7BFF`, dark tinted surface, used for "Recommended" / "Note" tips
- `OptionTable` — table of CLI flags (flag · type · description)
- `MetaLabel` — small uppercase Red Hat Mono label (e.g. "GETTING STARTED")
- `PageHeader` — meta label + h1 + lead paragraph
- `Footer` — minimal, "Built by Robi Team · robiai.com"

## Visual design

- Background `#06060F`, surfaces `#0D0D1A` / `#0A0A16`
- Primary text `#E6E9F2`, muted `#8A90A6` / `#B8BCC9`
- Single accent `#6E7BFF` (links, active nav, code keywords-area accent border, focus rings); hover `#8B94FF`
- Borders: `rgba(255,255,255,0.08)`, hover `rgba(110,123,255,0.35)`
- Selection: bg `#BECCED`, text `#06060F`
- Subtle grain overlay on body (low-opacity SVG noise) and a faint top radial gradient toward `#0D0D1A`
- Inter for UI/body/headings, Red Hat Mono for labels and code
- Container `max-w-7xl`, gutters `px-6 lg:px-10`
- No bright whites, no extra accent colors, no heavy shadows

## Technical notes

- Update `src/index.css` to override the design tokens in HSL: set `--background`, `--card`, `--foreground`, `--muted-foreground`, `--primary`, `--border`, `--ring` to the Robi palette so all shadcn components inherit the dark theme automatically. Apply the `.dark` class to `<html>` (or set the `:root` values directly) so existing components render correctly.
- Load Inter and Red Hat Mono via `<link>` in `index.html`; extend `tailwind.config.ts` `fontFamily` with `sans: ['Inter', ...]` and `mono: ['"Red Hat Mono"', ...]`.
- Add the new routes to `src/App.tsx` above the `*` catch-all.
- Use existing shadcn primitives where helpful: `Sheet` (mobile sidebar), `ScrollArea` (sidebar), `Separator`, `Badge` (for the README-style status badges on the home page), `Tooltip` (copy button feedback), `Sonner` toast on copy.
- Syntax highlighting kept lightweight: a custom `CodeBlock` with manual token coloring is sufficient — no heavy highlighter dependency needed for shell/python snippets.
- All content lives in typed arrays/objects per page (no CMS / no backend needed).

## Out of scope

- No search, no versioning, no i18n, no auth, no backend
- No live "try it" sandbox for CLI commands
