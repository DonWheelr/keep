# KEEP Website — Architecture

Architecture only. No page copy is drafted or implied by this document —
see the repository's own content rule in [Content Governance](#5-content-governance),
which this document follows for its own claims.

Status key used throughout: **[Current]** exists in the repo today,
**[Planned]** is designed but not built, **[Unknown]** is an open decision
with no recommendation locked yet.

---

## 1. Site Map

### Pages

| Page | URL | Nav placement | Status |
|---|---|---|---|
| Home | `/` | Logo-only on desktop; text link on mobile/footer (see note below) | [Current] |
| Why KEEP | `/why-keep` | Primary nav | [Current] |
| How KEEP Works | `/how-it-works` | Primary nav | [Current] |
| Security & Data Ownership | `/security` | Primary nav | [Current] |
| Capabilities | `/capabilities` | Primary nav | [Current] |
| Evaluate KEEP | `/evaluate` | Primary nav + header CTA | [Current] |
| Documentation | `/docs` | Primary nav | [Current] |
| Not Found (404) | *(any unmatched route)* | Not in nav — error boundary only | [Current] default |

**[Current]** `src/app/not-found.tsx` exists with real, tailored content —
a 404 heading, a short explanation, and direct links to Home,
Capabilities, and Documentation, rather than Next's bare built-in
fallback. Still wrapped by the root layout — `SiteHeader` and
`SiteFooter` both render around it — so a lost visitor sees the same
header/footer/nav as everywhere else on the site.

### Navigation hierarchy

- Single global primary nav, rendered in `SiteHeader`
  (`src/components/site-header.tsx`), sourced from one array —
  `src/lib/nav-links.ts` — so header, footer, and (later) sitemap
  generation never drift out of sync. **[Current]**
- Desktop: horizontal nav lists all pages **except Home** (filtered out,
  since the header's logo/wordmark already links to `/`) + a pinned
  "Evaluate KEEP" CTA button, separate from the CTA's own nav entry.
  Mobile: a second `<nav aria-label="Primary (mobile)">` below the header
  bar listing **all** links, including Home — mobile has no equivalent
  logo-as-home-link affordance, so Home needs an explicit entry there
  that desktop doesn't have. **[Current]**
- Footer nav (`SiteFooter`) also lists all links including Home, for the
  same reason as mobile, repeating the set for redundancy/SEO rather than
  expressing a distinct hierarchy. **[Current]**
- **Home carries a third, page-local nav construct**, distinct from the
  two above: a card-grid `<nav aria-label="Site sections">` inlined in
  `src/app/page.tsx` itself (not a shared component — see
  [Component Architecture](#3-component-architecture)), linking to the
  other six pages. Practically, a Home visitor is looking at up to three
  overlapping link groups to the same destinations — header nav, this
  grid, and footer nav — depending on viewport. This redundancy exists
  today as a byproduct of the shell build, not as a deliberated design
  decision; it's documented here as a known duplication rather than a
  recommended pattern. **[Current, undocumented until this revision]**
- The nav is intentionally flat — one level, seven entries. No dropdown
  or mega-menu exists or is currently planned; if Documentation grows
  nested sub-pages (see [Future Expansion](#7-future-expansion)), the
  primary nav entry continues to point at `/docs` as a landing/index page
  rather than exposing a submenu. **[Planned decision, low complexity]**
  Note this doesn't yet address what happens if Blog/Updates, Release
  Notes, and Changelog (also [Future Expansion](#7-future-expansion))
  each want their own top-level nav slot — at 7 entries the header already
  wraps on narrow viewports; 2–3 more is an open scalability question, not
  a solved one. **[Unknown]**

### URL structure

- Flat, kebab-case, no trailing slash, no locale prefix. **[Current]**
- Nesting is reserved for content that is genuinely hierarchical
  (documentation articles, future release notes) — e.g. `/docs/[slug]`.
  **[Planned]**
- No query-string-driven pages exist or are planned; if the future
  evaluation form needs multi-step state, that should be client-side
  component state on `/evaluate`, not separate routes. **[Unknown —
  depends on the eventual form's complexity]**

---

## 2. Information Architecture

> **This section describes each page's intended purpose and audience,
> matched against real, implemented content.** Every page listed here is
> now built with real copy, not a placeholder (see the Site Map table
> above), so "Purpose," "Questions answered," "Audience," and "Entry/exit
> paths" below describe pages that exist and function as written — not a
> hypothesis. What remains genuinely unvalidated, and worth keeping
> distinct from that: none of this has been confirmed against actual
> visitor behavior — real traffic, real conversion, real drop-off points.
> Treat the content described here as current and real; treat its
> effectiveness as still unproven, and revisit this section once real
> traffic exists.

For each page: purpose, the question(s) it answers, its primary audience,
and how visitors arrive at / leave from it. This section describes the
*intended job* of each page, not its content.

### Home (`/`)
- **Purpose:** orientation and routing — confirm the visitor is in the
  right place and point them to the section matching their intent.
- **Questions answered:** "What is KEEP?" (at the identity level only —
  wordmark, tagline, audience statement) and "Where do I go next?"
- **Audience:** first-time visitor, unknown intent — could be an MSP
  decision-maker, a technical evaluator, or someone referred by a link.
- **Entry paths:** direct navigation, search, external referral (MSP
  communities, partner links).
- **Exit paths:** any of the six other primary pages; no dead end.

### Why KEEP (`/why-keep`)
- **Purpose:** problem/solution framing — why an MSP would consider
  adopting KEEP at all, before any mechanism detail.
- **Questions answered:** "What problem does this solve for my business?"
  "Why does this exist?"
- **Audience:** evaluator early in awareness, possibly non-technical
  (owner, ops lead) — this is the persuasion-adjacent page, so it is also
  the page with the highest scrutiny under [Content Governance](#5-content-governance).
- **Entry paths:** Home, primary nav, external links pointing at value
  proposition content specifically.
- **Exit paths:** How KEEP Works (wants mechanism) or Evaluate KEEP
  (already convinced).

### How KEEP Works (`/how-it-works`)
- **Purpose:** explain the operating model at a conceptual level (roles,
  boundaries, data flow shape) without exposing implementation detail
  that belongs in Documentation.
- **Questions answered:** "How does this actually function?" "What
  touches my network and what doesn't?"
- **Audience:** technical evaluator (MSP technician or technical
  decision-maker) doing due diligence before recommending adoption.
- **Entry paths:** Why KEEP (natural next step), primary nav, direct
  links from technical discussions.
- **Exit paths:** Security & Data Ownership (the boundary questions this
  page will raise), Capabilities (concrete feature list), Documentation
  (implementation depth).

### Security & Data Ownership (`/security`)
- **Purpose:** state the trust boundary explicitly — what KEEP can see,
  what it cannot, and who owns what data. This is the page most likely to
  be cited back at KEEP, so it carries the strictest citation bar.
- **Questions answered:** "Where does my data live?" "What can KEEP's
  vendor see about my clients?" "What happens if KEEP is compromised or
  KEEP the company disappears?"
- **Audience:** security-conscious decision-maker, compliance/legal
  reviewer, technical evaluator doing risk assessment.
- **Entry paths:** How KEEP Works, direct search ("KEEP security"),
  compliance-driven referral.
- **Exit paths:** Evaluate KEEP (satisfied), Documentation (wants
  architecture-level proof), or exit the site (unsatisfied — this page
  should not force a funnel).

### Capabilities (`/capabilities`)
- **Purpose:** enumerate what KEEP does, each item labeled Current /
  Planned / Unknown per [Content Governance](#5-content-governance). This
  is the feature-comparison page.
- **Questions answered:** "What can it do today?" "What's roadmap, not
  reality?" "Does it do X?"
- **Audience:** technical evaluator doing feature-level comparison against
  incumbent tools.
- **Entry paths:** How KEEP Works, primary nav, direct search for a
  specific feature.
- **Exit paths:** Evaluate KEEP, Documentation (wants operational detail
  on a specific capability).

### Evaluate KEEP (`/evaluate`)
- **Purpose:** conversion — give a ready evaluator a concrete next step.
- **Questions answered:** "How do I start?" "What does evaluating KEEP
  involve — cost, time, commitment?"
- **Audience:** evaluator who has already formed intent, arriving from
  any other page or the header CTA.
- **Entry paths:** header CTA (present on every page), any page's exit
  path, direct search ("KEEP trial" / "KEEP demo").
- **Exit paths:** this is the primary funnel terminus. Future state: a
  form submission that calls the Control Plane API
  (`[[project_keep_website_repo]]` boundary — this repo does not embed
  that logic, only calls it). **[Planned]** Today, exit paths are
  undefined — no form exists yet. **[Current gap]**

### Documentation (`/docs`)
- **Purpose:** self-serve technical reference for evaluators who want
  primary-source depth and, later, for implementers post-decision.
- **Questions answered:** "How is this installed/operated?" "What are the
  exact mechanics behind a claim made elsewhere on the site?"
- **Audience:** technical implementer or a technical evaluator who
  doesn't trust marketing framing and wants the underlying detail —
  Documentation is where [Content Governance](#5-content-governance)'s
  citation requirement is most load-bearing.
- **Entry paths:** any marketing page's "see the detail" link, direct
  search, primary nav.
- **Exit paths:** Evaluate KEEP, or exit (documentation is often a
  terminal, bookmarked destination rather than a funnel step).

---

## 3. Component Architecture

### Technology Alignment

The public website should stay aligned with the KEEP application's own
engineering technology wherever practical, rather than accumulating an
independent stack by default. This subsection covers framework, language,
styling *mechanism*, linting/formatting, project structure, component
conventions, naming conventions, and build tooling.

**This subsection deliberately does not cover the visual design system
itself** (design tokens, typography, spacing, components, iconography,
interaction patterns) — that is governed the other way around, by the
website, per
[KEEP Design System Authority](#keep-design-system-authority) at the top
of Section 4.

**Rationale:** a second, divergent engineering stack is a second set of
tooling, conventions, and upgrade paths for whoever maintains both. That
cost should only be paid when the website gets a specific benefit for it
in return — alignment is the default, not something that has to justify
itself case by case.

**Rule:** the website should follow the KEEP application's engineering
technology choices wherever practical, across every dimension listed
above.

**Rule:** any divergence from the application's engineering technology
must be intentional, documented in this subsection, and justified by a
requirement specific to the website. A difference adopted by default, by
habit, or without a stated website-specific reason does not meet this
bar.

### Global components **[Current]**
- `SiteHeader` (`src/components/site-header.tsx`) — logo, desktop nav,
  CTA button, separate mobile nav block.
- `SiteFooter` (`src/components/site-footer.tsx`) — wordmark, tagline,
  repeated nav, legal/scope line.
- `Logo` module (`src/components/logo.tsx`) — exports `Wordmark`,
  `Tagline`, and `HeaderLogo`, kept as separate exports so the wordmark
  and tagline can be recomposed (e.g. Home's large hero treatment vs. the
  header's compact lockup) without duplicating markup. `Wordmark` takes
  an `as` prop (`"span"` default, `"h1"` on Home) so the one component
  can be both the header/footer's inline brand mark and Home's page
  heading — see [Accessibility standards](#accessibility-standards).
- `src/lib/nav-links.ts` — single source of truth for nav entries,
  consumed by header, footer, and (once built) sitemap generation.

### Shared layouts **[Current]**
- Root layout (`src/app/layout.tsx`) — fonts (Geist Sans/Mono), default
  metadata (title template `"%s — KEEP"`), wraps every route — including
  the default not-found page — in `SiteHeader` / `<main>` / `SiteFooter`.
- `PageShell` no longer exists. **[Current]** Every non-Home page now
  composes its own real content directly (section-by-section, in its own
  `page.tsx`) rather than through a shared placeholder layout — the
  per-page divergence anticipated below (Why KEEP's narrative layout vs.
  Documentation's reference layout) is already true in practice, so no
  single shared shell component remained a good fit and none is used
  today.
- Not-found (404) has its own dedicated component, `src/app/not-found.tsx`.
  **[Current]** See [Site Map](#1-site-map) for its content.

### Content components
- `CapabilityStatus` (`src/components/capability-status.tsx`) —
  **[Current]** the only content-governance component built so far;
  renders the Current/Planned/Unknown badge (see
  [Design System Architecture](#4-design-system-architecture) for the
  visual rule).
- Home's page-section link grid — **[Current]**, but inlined directly in
  `src/app/page.tsx` rather than extracted as a shared component. It's a
  one-off "site index" card grid, distinct from `SiteHeader`/`SiteFooter`
  nav (see [Navigation hierarchy](#navigation-hierarchy) for the
  resulting overlap). If a
  similar "related pages" grid is ever needed on another page, extract
  this into a shared component instead of re-implementing it inline —
  don't let a second copy diverge from this one. **[Planned decision, not
  yet needed]**
- Not yet built, needed once real content lands: **[Planned]**
  - **Citation** — inline source reference for a Verified Fact claim
    (e.g. a footnote-style marker linking to an internal doc reference or
    external evidence).
  - **Callout/Admonition** — for caveats, especially adjacent to
    Reasonable Inference claims.
  - **ComparisonTable** — structured feature-vs-competitor or
    tier-vs-tier layout for Capabilities.
  - **FAQAccordion** — if FAQ content is added to Why KEEP or Evaluate.
  - **CTABlock** — a reusable "next step" component so every page's exit
    path (see Information Architecture) is rendered consistently rather
    than hand-built per page.

### MDX component strategy
- `mdx-components.tsx` at the repo root **[Current]** — required by
  `@next/mdx` for the App Router; currently exports an empty component
  map.
- Recommended split, not yet implemented: **[Planned]**
  - **Marketing pages** (Why KEEP, How KEEP Works, Security,
    Capabilities, Evaluate) stay as `.tsx` pages composed from typed
    content components (`CapabilityStatus`, the future `Citation`,
    etc.). This is deliberate: TypeScript can enforce that a capability
    claim *has* a status prop and a citation *has* a source at
    compile time, which raw Markdown/MDX text cannot guarantee. Given
    the "no unsupported marketing claims" rule, the pages under the
    strictest scrutiny should be the ones the type system can help
    police.
  - **Documentation** (`/docs` and its future nested articles) uses
    `.mdx` files under a content directory (e.g. `src/content/docs/`),
    imported by route components per the dynamic-import pattern Next's
    own docs describe (`app/docs/[slug]/page.tsx` +
    `generateStaticParams`). This is the appropriate place for MDX's
    freeform-prose strength, since Documentation is reference material
    rather than claim-dense marketing copy.
  - Global MDX component overrides (headings, code blocks, tables) should
    be added to `mdx-components.tsx` once Documentation content begins,
    styled to match the design tokens in
    [Design System Architecture](#4-design-system-architecture) rather
    than introducing a separate visual language for docs.

---

## 4. Design System Architecture

### KEEP Design System Authority

The KEEP website is the reference implementation of the KEEP Design
System. The KEEP application should progressively adopt that design
system over time. This is the opposite direction from
[Technology Alignment](#technology-alignment) in Section 3, which governs
engineering technology (framework, tooling, structure) and deliberately
does not cover the visual design system — the two subsections divide the
same cross-project relationship along different axes rather than
disagreeing with each other.

**Evidence this decision was based on** (a comparative assessment of this
repo against `/Users/donwheeler/Developer/cdacs`, branch `control-plane-v1`,
read-only, no dev server run — see that assessment for full detail): the
application's `globals.css` still carries an unused, dead `create-next-app`
scaffold; its real, rendered UI is built almost entirely from inline
`style={{}}` hex/rgba literals rather than any token system; its intended
typefaces (DM Sans/DM Mono) are referenced by name but never actually
loaded anywhere (no `next/font`, no `@font-face`, no font link — a real,
verified bug, not a stylistic choice); and neither project has a shared
Button, Card, Form, or Table component today. The website, by contrast,
already has a real, consistently-applied token system
(`src/app/globals.css`'s `@theme inline` block) and correctly loads its
fonts via `next/font/google`. Design authority follows the project that
actually has working practice, not the project with more operational
history.

**This is a long-term architectural direction, not an immediate
implementation task.** No timeline is set here, and nothing in the KEEP
application changes as a result of this entry alone — adoption happens
progressively, application-side, in future work scoped separately from
this document. This document does not modify, and has no authority over,
the KEEP application's own repository or its canonical architecture
documents (per that repo's own `CLAUDE.md`, which reserves those to a
different process).

**Design goals** guiding that eventual adoption:
- Premium, modern appearance.
- Ease of use.
- Consistent spacing.
- High-quality typography.
- Shared component language.
- Shared design tokens.
- Shared iconography.
- Shared interaction patterns.

**Preserved operational semantics — permanent exceptions, not temporary
ones:**
- Severity colors remain application-specific. The application's locked
  six-state severity system (`CRITICAL`/`HIGH_RISK`/`WARNING`/`INFO`/
  `UNKNOWN`/`OK`, `src/lib/severity.ts` in the application repo) carries
  real operational meaning this design system was never built to serve,
  and is not being replaced or renamed to match this site's
  Current/Planned/Unknown vocabulary. The word "Unknown" is allowed to
  keep meaning two different things in the two systems — see
  [Status badge rules](#status-badge-rules-current-extends-into-governance).
- Operational urgency (blinking, alerts, and similar motion) remains
  application-specific. The application's urgency-driven motion is
  intentional signal, not decoration, and this site's restrained-motion
  posture is not a template it should be forced into.
- The website itself remains calm and informational — adopting a shared
  design system does not mean importing the application's urgency
  patterns onto marketing/evaluation pages. See
  [Icons](#icons-unknown) and the rest of this section for the website's
  own current (deliberately minimal) motion and iconography posture,
  which stays the website's own default regardless of what the
  application eventually adopts.

**Technical goals for the application, over time — [Planned], application-side,
not tracked as work in this repository:**
- Eliminate inline color literals.
- Replace raw styling with shared design tokens.
- Introduce shared Button, Card, Form, and Table components. Neither
  project has these today (see [Component Architecture](#3-component-architecture)) —
  this is new shared infrastructure to build, not an existing website
  component set to port. How "shared" is actually distributed between two
  separate repositories — a published package, a monorepo, or another
  mechanism — is **[Unknown]**, not decided here. The application
  repository's own architecture already has one precedent worth
  considering when that decision is made: a small internal package
  consumed as a real `file:` dependency by more than one app in that
  repo — but adopting that specific pattern for design-system sharing is
  a future decision, not something this entry settles.
- Load fonts correctly via Next.js (`next/font`) — this alone fixes the
  application's current silent font-fallback bug regardless of any
  broader token work.
- Move toward a unified visual identity with the website.

### Typography **[Current]**
- Single sans family — Geist Sans (`--font-sans`) — for all UI and body
  text; Geist Mono (`--font-mono`) reserved for small-caps-style labels:
  the tagline, section eyebrows (`PageShell`'s section label), and status
  badges.
- No second display typeface. The wordmark uses Geist Sans at bold weight
  with wide letter-tracking (`tracking-[0.08em]`) rather than a serif or
  slab face — deliberate, to keep the system to one family as directed
  when the visual identity was first established.
- No formal type scale is defined yet, and the one `<h1>` size already
  diverges by page: `PageShell`'s H1 (the six non-Home pages) is
  `text-3xl`/`text-4xl`, while Home's H1 — `Wordmark` rendered with
  `as="h1"` — is `text-5xl`/`text-6xl`, since it doubles as the hero
  brand mark. `text-xs` is used for eyebrows/mono labels on both. This
  divergence is real, not a placeholder inconsistency to "fix" toward a
  single H1 size — Home's H1 is deliberately larger because it functions
  as a hero, not a section title. **[Planned]** a documented scale (H1–H4,
  body, caption) should still be fixed before long-form content pages are
  designed, so Why KEEP's prose and Documentation's reference text share
  the same rhythm — but it should account for Home's H1 being a distinct,
  larger case rather than force one H1 size everywhere.

### Color usage **[Current]**
Tokens are defined once in `src/app/globals.css` under `@theme inline`,
with light values in `:root` and dark overrides under
`prefers-color-scheme: dark`. Three families, each with a single job:

- **Surface/text** — `paper` / `paper-raised` (backgrounds) and `ink` /
  `ink-soft` (text). Used everywhere; not brand-specific.
- **Stone neutral scale** (`stone-100` … `stone-800`) — borders, dividers,
  dashed placeholder outlines. Warm-gray, ties to the "keep" masonry
  motif rather than a generic cool gray.
- **Accent** (`accent` / `accent-strong` / `accent-soft`) — bronze,
  reserved *exclusively* for brand emphasis and the primary CTA (the
  "Evaluate KEEP" button, the small square mark next to the header
  wordmark). Rule: accent never appears on a status badge or anywhere
  claim-related, so it can't be mistaken for a capability signal.
- **Status** (`status-current-*`, `status-planned-*`, `status-unknown-*`)
  — reserved *exclusively* for `CapabilityStatus`. Never reused
  decoratively. This separation from Accent is intentional: a reader
  should never wonder whether a colored badge means "brand highlight" or
  "capability claim."

### Status badge rules **[Current, extends into governance]**
- Every capability-adjacent claim renders through `CapabilityStatus`, not
  ad hoc color or text — enforced by convention today, not by lint rule.
  **[Planned]** consider an ESLint rule or content-lint script that flags
  the words "current," "planned," or "coming soon" appearing as plain
  text near capability content outside the component, once real content
  exists to check.
- The three states are differentiated by more than hue: Current and
  Planned use solid fills, Unknown uses a dashed border — so the
  distinction survives grayscale/color-blind viewing, not just the color
  channel. See [Accessibility standards](#accessibility-standards) below.

### Spacing **[Current / Planned]**
- No custom spacing tokens — Tailwind's default scale is used directly
  (`px-6`, `py-16`, `gap-6`, etc.) with no documented rhythm beyond what's
  visible in the shipped shells.
- **[Planned]** once pages carry real sections (hero, body, callouts,
  CTA), fix a small set of vertical-rhythm conventions (e.g. section
  padding, max content width per page type) so marketing pages and
  Documentation don't drift into inconsistent density.

### Icons **[Unknown]**
- No icon set is in use today — the system is deliberately
  typography/color-only at this stage (the header's brand mark is a
  solid square, not an icon).
- If icons are introduced (e.g. for Capabilities entries or Security
  boundary diagrams), the recommendation is a single consistent set
  (e.g. Lucide, which pairs cleanly with Tailwind projects) rather than
  mixing sources — but no decision has been made, and none should be
  assumed by content authors yet.

### Accessibility standards
- Target: **WCAG 2.1 AA**. **[Planned formal audit]** — no contrast
  audit or screen-reader pass has been run against the shipped tokens
  yet; this should happen before real content ships, not after.
- Structural accessibility already in place **[Current]**: semantic
  landmarks (`<header>`, `<main>`, `<footer>`, and — depending on page and
  viewport — up to three distinct `<nav>` elements, each with its own
  `aria-label`: header desktop ("Primary"), header mobile ("Primary
  (mobile)"), footer ("Footer"), plus Home's own ("Site sections") — see
  [Navigation hierarchy](#navigation-hierarchy)). Every page carries
  exactly one real `<h1>`: six pages get it from `PageShell`; Home gets it
  from `Wordmark` rendered with `as="h1"` (`src/components/logo.tsx`) —
  previously Home had no heading element at all, found and fixed in this
  revision.
- Status badges do not rely on color alone (see above) — this satisfies
  WCAG 1.4.1 (Use of Color) by construction, but should be re-verified
  once real capability content is written, since color-plus-shape only
  holds if future authors keep using the component rather than inline
  styling.
- Not yet addressed **[Planned]**: focus-visible states beyond browser
  defaults, keyboard nav testing of the mobile nav block, and alt-text
  conventions for any imagery introduced later (none exists today beyond
  the default Next.js favicon).

---

## 5. Content Governance

Every claim on this site that describes what KEEP *does* — a capability,
a security property, an architectural fact — must resolve to exactly one
of three states. This extends the Current/Planned/Unknown rule already
built into `CapabilityStatus` to all prose, not just the Capabilities
page.

### Verified Fact
A claim backed by a checkable source: this codebase, a tested behavior,
an internal architecture document that is itself current (not aspirational),
or a citable external source. Verified Facts are the only claims that may
be stated without hedging language ("KEEP does X"), and only because the
citation requirement below makes the claim checkable.

### Reasonable Inference
A claim that follows logically from one or more Verified Facts but has
not itself been independently confirmed (e.g. inferring a performance or
scaling property from an architecture decision, without a benchmark
verifying it). Reasonable Inferences must be visually and textually
distinguishable from Verified Facts — worded with appropriate hedging
("this is designed to...", "in principle...") — never presented with the
same confidence as a Verified Fact. **[Planned]** a visual treatment
(e.g. the future `Callout` component) should make this distinction
legible at a glance, not rely on word choice alone.

### Unknown
A property or capability that has not been determined, tested, or
decided. Unknown must be stated, not omitted — silence on a question a
reader would reasonably ask (e.g. "does KEEP detect outbound C2 traffic?")
is treated as a governance failure, not a neutral choice. This mirrors
the `unknown` state already built into `CapabilityStatus`.

### Citation requirements
- Every Verified Fact about product capability, security posture, or
  architecture must reference its source — internal (a doc, a code path,
  a tested behavior — described in terms a reader can trust without
  necessarily seeing the source itself) or external.
- Reasonable Inferences must carry inline language marking them as such;
  they do not need a citation in the same sense, but must not borrow a
  Verified Fact's citation to imply more confidence than warranted.
- No page ships a capability or security claim without one of the three
  labels attached, directly or via surrounding context (e.g. an entire
  page section framed under one status).

### Planned feature labeling
- Anything not yet built renders as **Planned Capability**, never as an
  unlabeled future-tense claim.
- Verb discipline: "will" is acceptable for Planned items ("KEEP will
  support X"); present-tense capability verbs ("does," "supports,"
  "detects") are reserved for Current Capability only. This is the
  concrete mechanism behind the standing "no unsupported marketing
  claims" rule.

---

## 6. SEO Architecture

### Metadata strategy
- **[Current]** Next's Metadata API is already in use: the root layout
  sets a title template (`"%s — KEEP"`) and a default title/description.
  Every page other than Home sets its own `title` via a page-level
  `metadata` export; Home relies on the root default as-is, since that
  default already states the full brand identity.
- **[Current]** Every page's `metadata` export now sets its own real
  `description` string alongside its `title`, authored with its actual
  content rather than as a placeholder.
- **[Planned]** canonical URLs (`metadata.alternates.canonical`) should
  be set once the production domain is finalized, to avoid duplicate-
  content issues between `keepmsp.io` and any preview/staging deployment
  URL.

### Structured data **[Planned — none implemented]**
- **Organization** JSON-LD on Home — name, logo (once a graphic mark
  exists beyond the text wordmark), and same-as links.
- **SoftwareApplication** or **Product** JSON-LD, scoped carefully: only
  fields backed by Verified Facts should populate structured data, since
  search engines surface this directly — the citation requirement in
  [Content Governance](#5-content-governance) applies here with zero
  slack.
- **BreadcrumbList** once Documentation gains nested routes.
- **FAQPage** only if/when FAQ content is actually added — not a default
  assumption.

### Open Graph **[Planned — none implemented]**
- `openGraph` fields (title, description, type, url) via the Metadata
  API, per page.
- A shared OG image strategy is needed before this is useful — either a
  single static brand image or a generated one (Next's `ImageResponse` /
  `opengraph-image` file convention) built from the same design tokens
  (paper/ink/accent) rather than a one-off Figma export, so the social
  card matches the site's actual visual system. **[Unknown]** which
  approach, pending whether a graphic mark is designed beyond the text
  wordmark.

### Sitemap **[Planned — none implemented]**
- `app/sitemap.ts` (Next's file convention) generating entries from a
  central route registry. Today `src/lib/nav-links.ts` only lists
  *navigable* pages; a sitemap needs all indexable routes including ones
  that may not appear in nav (e.g. a future `/docs/[slug]` article that
  isn't itself a nav entry). Recommend extending — not replacing —
  `nav-links.ts` with a superset registry once non-nav routes exist,
  rather than maintaining two disconnected lists.

### robots.txt **[Planned — none implemented]**
- `app/robots.ts` allowing full crawl of all public marketing/doc pages —
  this repo holds no customer operational data and no authenticated
  routes, so there's nothing to disallow today.
- If an evaluation form later calls the Control Plane API from
  `/evaluate`, the API calls themselves live on the Control Plane's own
  domain/routes, not this site's — so this site's `robots.txt` shouldn't
  need an exclusion for that reason alone. **[Unknown]** revisit if a
  server-side route handler is ever added to this repo itself.

---

## 7. Future Expansion

### Documentation
- Grow `/docs` from a single index page into `/docs/[slug]` articles
  authored in MDX (see [MDX component strategy](#mdx-component-strategy)),
  with the current `/docs` page becoming a generated index/listing.

### Blog / Updates
- A company-level announcements section (`/updates` or similar) is
  **[Unknown]** in scope and distinct from Release Notes/Changelog below
  — a decision is needed on whether company news and product change
  history live in one section or two before either is built.

### Release Notes
- **[Planned]** `/release-notes` or nested under Documentation — should
  reuse Capabilities' Current/Planned language conventions, since a
  release note is definitionally about capabilities moving from Planned
  to Current.

### Changelog
- **[Planned]** a technical, chronological change log — likely the
  section of the entire site with the highest proportion of Verified
  Fact content, since it is inherently retrospective ("this shipped on
  this date") rather than forward-looking.

### Evaluation resources
- **[Planned]** supporting material under `/evaluate` — a security
  questionnaire response set, a comparison sheet, a downloadable
  one-pager — intended to load once the evaluation form itself
  (Control-Plane-backed, per the architecture rule that this repo only
  calls that API rather than embedding its logic) is built. Sequencing:
  the form is the higher-priority gap (today `/evaluate` has no exit
  path at all — see [Information Architecture](#evaluate-keep-evaluate)),
  and these resources should follow it, not precede it.

---

## 8. Deployment & Hosting Architecture

- **No deployment configuration exists in this repo today** — verified:
  no `vercel.json`, no `railway.toml`, no `.github/` workflows directory.
  **[Current — verified absence]**
- **One environment variable exists today: `NEXT_PUBLIC_SITE_URL`**
  (`src/lib/site-url.ts`), consumed by `sitemap.ts`, `robots.ts`, and root
  layout metadata. It fails closed — a production build throws if it's
  unset — rather than falling back to a placeholder domain. No value has
  been set yet; that's blocked on the hosting/domain decision below, not
  on anything in this repo. If a future evaluation form needs a Control
  Plane API base URL, that will be the second env var this repo requires.
  **[Current — verified]**
- **Hosting requirements are minimal today.** This repo has no
  server-side routes — no `middleware.ts`, no `route.ts` handlers — and
  `next build` prerenders every page as static content (confirmed in the
  build output). Any static-capable or Next-compatible host works as-is.
  That changes only if a server-side route is ever added directly to
  this repo, which isn't currently planned — the evaluation form is
  expected to call the Control Plane's own API, not host that logic here.
- **Hosting platform: [Unknown].** No decision has been made. Vercel is
  the most direct fit for a Next.js app; the existing `keepmsp.io`
  surface currently runs elsewhere, which may or may not be a reason to
  match platforms — that tradeoff hasn't been evaluated.
- **Relationship to the existing `keepmsp.io` production site is
  [Unknown] / out of scope for this repo to resolve.** Per prior
  institutional context (not verified by inspecting that repository
  directly from within this one — it isn't part of this working tree), a
  separate, non-website KEEP repository already serves `keepmsp.io`
  today, and a prior architecture review of that deployment flagged it
  for bundling a product demo, signup flow, and control-plane candidate
  work on one surface — part of why `keep-website` was started as a
  clean, separate repository (see this repo's own `README.md`). The
  actual DNS/traffic cutover from that existing surface
  to this repo is a domain-ownership decision this document doesn't make
  and shouldn't be read as having settled.
- **CI/CD: [Planned] — none exists yet.** `npm run lint`, `npx tsc
  --noEmit`, and `npm run build` are today run manually before any
  commit; these should become an automated gate before this repo is
  trusted to serve production traffic.
