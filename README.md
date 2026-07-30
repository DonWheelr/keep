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

```
src/
  app/                 route segments (one folder per page)
  components/          shared layout + UI (header, footer, badges)
  lib/                 nav config and other shared data
mdx-components.tsx     required by @next/mdx for the App Router
```

## Content rules

- Every capability claim must be labeled Current Capability, Planned
  Capability, or Unknown — see `src/components/capability-status.tsx`.
- No unsupported marketing claims.
- Evaluation forms may call the Control Plane API in the future; this repo
  does not embed Control Plane logic itself.
