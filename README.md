# KEEP Website

Public, evaluator-facing website for KEEP (keepmsp.io).

This repository is intentionally separate from the KEEP product and Control
Plane repositories. It serves public marketing/evaluation content only and
holds no customer operational data.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- MDX (`@next/mdx`) for evidence-based long-form content

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

Quick orientation only — see `WEBSITE_ARCHITECTURE.md` for anything more
than this:

```
src/
  app/                 route segments (one folder per page)
  components/          shared layout + UI (header, footer, badges)
  lib/                 nav config and other shared data
mdx-components.tsx     required by @next/mdx for the App Router
```

## Architecture

`WEBSITE_ARCHITECTURE.md` is the single source of truth for this
repository's site map, information architecture, component architecture,
design system, content governance (including the Current/Planned/Unknown
capability rule and the "no unsupported marketing claims" rule), SEO
architecture, future expansion planning, and deployment/hosting
architecture. Read it before making structural changes; don't restate its
rules here — update it there instead, so this README can't drift out of
sync with the rules it's describing.
