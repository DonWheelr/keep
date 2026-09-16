# CLAUDE — KEEP V1 EXTERNAL ROLLOUT PLAN

**Status:** Approved 2026-08-14. Living document — update phase status as
exit criteria are met; don't re-litigate closed phases.

## Objective

Operational plan for rolling KEEP V1 out to its first external users.
This is a rollout plan only — no product inspection, testing, validation,
or modification is in scope. V1 is treated as closed and ready.
Architecture docs (`hub-spoke.md`, `monitor.md`, `incident.md`,
`merlin.md` in `cdacs/documentation/`) were read only to ground downstream
*messaging* accuracy (evidence-based claims requirement, per
`PROJECT_RULES.md` §7 / `WEBSITE_ARCHITECTURE.md` §5), not to re-audit
the product.

## Rollout Model

Two distinct audiences, never conflated in messaging:
1. **Initial users / proving ground** — technically literate homelab
   operators (Proxmox, Docker, Pi, VLAN/firewall-heavy, self-hosted
   stacks, sophisticated home/small-business labs).
2. **Downstream commercial audience** — MSP Directors/ops leads (~4–30
   client networks), internal IT leads (single network).

Homelab users are the adoption/learning channel, not the customer.

---

## PHASE 0 — Public-facing readiness

**Goal:** the minimum external package for someone to discover KEEP and
take a next step.

**Launch gate status — RESOLVED 2026-08-14.** `cdacs/documentation/
LAUNCH_READINESS.md` now reads **GO**, Don-confirmed (personally reviewed
and affirmed, not just mechanically computed). Verified independently
against source: Control Plane live in production since 2026-08-12, T22
Hit 3 substantively executed, both cross-checked against
`control-plane/app/api/v1/heartbeat/route.ts` and
`CONTROL_PLANE_V1_ARCHITECTURE.md` §4c. **Not yet committed** in `cdacs`
as of this writing — sits as uncommitted working-tree changes across 7
files (`LAUNCH_READINESS.md`, `KEEP_V1_LAUNCH_GAP_ASSESSMENT.md`,
`KEEP_V1_EVALUATION_EXECUTION_PLAN.md`, `ROADMAP.md`, `DECISIONS.md`,
`TASKS.md`, `CLAUDE.md`) — commit before Phase 1 starts, so the launch
decision is part of the permanent record, not sitting in a working tree.

**Two residual risks, named non-gating by the document itself, carried
into Phase 1 rather than dropped:** the reconciliation cron service
hasn't been checked against the branch-connection bug that broke the main
deploy; a real Hub-to-Hub `hub/register` response has still never been
observed end-to-end (distinct from the self-serve `/register` flow, which
has been). Neither blocks Phase 0/1 starting, but both should be closed
out before Phase 1's cohort actually depends on this path working.

**Required assets and current status:**

| Asset | Status |
|---|---|
| Production website | Content complete (`WEBSITE_V1_COMPLETION.md`, 2026-08-08); **domain/hosting undecided** (`NEXT_PUBLIC_SITE_URL` unset, no platform chosen) |
| Concise KEEP explanation | Built — homepage, `/why-keep` |
| V1 capability description | Built — `/capabilities`, four-state Validated/Evaluation/Planned/Unknown labeling |
| Evaluation/access path | Built — `/evaluate` (prerequisites, program terms, data handling) |
| Installation/documentation path | Built — `/evaluate`, `/docs`, `/docs/merlin` |
| **Contact or registration path** | **Decided 2026-08-15, not yet implemented in `keep-website`.** Superseded the prior "direct email" recommendation below — see the correction note immediately after this table. |
| Statement of what V1 is/isn't | Built — `/why-keep` `forWhom`/`notForWhom`, `/capabilities` status labels |
| Evaluator expectations | Built — `/evaluate` "what happens during evaluation," "ending an evaluation" |

**Corrected 2026-08-15** — the contact-path gap this table names is
resolved *as a decision*, not yet as shipped `keep-website` code. Don
decided (cdacs session, `control-plane-v1` branch, same day
`control-plane/`'s real self-serve Sign Up page went live and was
accepted): Evaluate routes through that real Sign Up flow, with explicit
copy stating account creation does not automatically grant Evaluation
access — KEEP staff grants Evaluation access afterward, matching the
existing staff-outbound Evaluation Program architecture
(`cdacs/documentation/architecture/evaluation-program.md`, unchanged).
This **replaces** the "direct email, smallest V1 fix" recommendation
below, which predates the Sign Up page's existence and is now stale, kept
here struck through in spirit for the reasoning trail, not deleted:
~~direct email, smallest V1 fix — a named address, routed to Don, no
form/backend required~~. The actual `keep-website` implementation (wiring
`/evaluate`'s CTA and copy, and the landing page's CTAs, to this decision)
is planned but **not started** — held pending a live coordination check
with whatever session is concurrently active on this repo. Domain/hosting
remains exactly as undecided as before this correction; this note touches
only the contact-path item. **The legal/privacy page item below is
superseded by the 2026-09-16 correction immediately following this note —
it is no longer an open Director decision.**

**Owner:** Don (domain/hosting remains his open business decision;
contact-path mechanism itself is now decided, build work remains;
legal/privacy is no longer a Director decision — see the 2026-09-16
correction below).

**Corrected 2026-09-16** — the legal/privacy page item this table and the
note above describe as "undecided"/"a Director decision" is not actually
a product decision at all: baseline-benchmarked against three current
comparable products (NinjaOne, N-able, Atera), all of which publish a
separate Privacy Policy and Terms of Use, footer-linked, with signup
acknowledgment — this is now treated as the ordinary minimum baseline, not
something requiring Don's judgment call. `/privacy` and `/terms` pages
have been built in `keep-website` (real content, describing KEEP as it
actually works today, sourced from `documentation/evaluation/
data-handling.md` and `documentation/architecture/evaluation-program.md`),
the public footer links to both, and the real Control Plane signup form
(`control-plane/app/page.tsx`) now links to them and requires a checked
acknowledgment before account creation — replacing the prior dead
`<span>` placeholders that referenced Terms/Privacy documents which didn't
exist. **Resolved 2026-09-16 (same session, later):** contact address
(`privacy@keepmsp.io` / `legal@keepmsp.io`, Namecheap Email Forwarding —
recorded as configured; Don has not separately confirmed a test message
arrived), governing jurisdiction (State of Arizona, no county-level
venue), and effective date (September 16, 2026) are all live on both
pages, no `[[PLACEHOLDER]]` tokens remain. **Legal entity name and a
notice address are explicitly NOT required for Phase 0** — Don-decided:
KEEP has no LLC/corporation yet, pages identify the product/business
simply as "KEEP," no personal legal name or residential address is
published, and this is not a launch blocker (see "LLC formation trigger"
below). Not yet done: deploying this to production (the live
`keepmsp.io` site is still serving the stale `main` branch, a
pre-existing, separate gap — see this document's own Phase 0 asset
table's "Production website" row).

**LLC formation trigger (internal business-readiness milestone, not
published on the website):** do not form an LLC merely to begin the
Reddit/evaluation rollout. First validate KEEP with external Reddit/
evaluation users. If that rollout produces strong positive validation
and KEEP is moving toward real paying customers, Don will form the LLC
before normal commercial operation. If the rollout fails or KEEP isn't
worth continuing commercially, no LLC expense is incurred.

**Exit criteria to Phase 1:** contact path live, domain resolves,
legal-page question closed one way or the other, `cdacs` launch-readiness
changes committed.

---

## PHASE 1 — Private invite cohort

**Goal:** controlled initial adoption, direct communication with actual
users — not a customer relationship yet.

**Pre-flight, before the first real tester Hub boots:** close out the two
residual risks named in Phase 0 — confirm the reconciliation cron service
is on the correct branch, and observe one real Hub-to-Hub `hub/register`
response end-to-end (the evaluation Hub's boot flow blocks on this exact
call; it's never been watched succeed against the now-live production
Control Plane). Cheap to check, and directly load-bearing for whether the
first cohort's install actually completes — worth doing once, deliberately,
before five people try it independently.

**Recruit:** 5–10, for environment diversity, not volume: Proxmox/VM,
Docker, Pi/physical, VLAN/firewall, self-hosted stack, small-business/
MSP-style lab, one outlier/unusual environment.

**Assets needed:** evaluator introduction (built), installation path
(built), a defined disclosure of current V1 boundaries so unbuilt
features aren't reported as broken. Concrete disclosure candidates:
- mDNS local access (`keep-pyx.local`) doesn't cross VLAN/subnet
  boundaries — relevant to the VLAN/firewall-heavy recruit.
- Install requires an Ubuntu 22.04 LTS host + NVM-installed Node v24,
  not a bare `docker-compose up`.
- Hardware minimums: Hub 4 CPU/8GB RAM/100GB disk; Spoke-only 2 CPU/4GB
  RAM/32GB — a 4GB Pi 4 works Spoke-only, not Hub.
- Merlin is pull-triggered (Device Diagnosis, Incident Coordination,
  Onboarding Scan Analysis) — not ambient/continuous.

**Owner:** Don (recruiting, direct comms). **Exit criteria to Phase 2:**
cohort onboarded, direct line of communication established, no P0
(security/data-loss/blocking) defects outstanding.

---

## PHASE 2 — Reddit / homelab outreach

**Goal:** acquisition channel for Phase 1's cohort.

**Communities:** homelab, self-hosted, sysadmin, networking, Proxmox,
Docker, Raspberry Pi, MSP/small-business IT — each gets its own framing,
each post respects that community's rules. Not a shotgun post.

**Framing:** *"Looking for 5 homelab operators to try a new
evidence/monitoring system"* — not a launch announcement. Message covers
what KEEP is, who it's for, why it might be useful, what participation
involves, where to learn more, how to request access. No exaggerated
claims — ties directly to the site's own evidence-labeling discipline.

**Owner:** Don. **Exit criteria to Phase 3:** first cohort filled from
this channel, or channel judged insufficient and reconsidered.

---

## PHASE 3 — Expand access

**Goal:** move from a single controlled cohort to a repeatable pipeline,
without chasing mass adoption yet.

- Open evaluation access more broadly.
- Continue Reddit/community outreach.
- Establish a **repeatable** evaluation signup path (Phase 0's
  single-email contact path likely needs to evolve into something more
  structured — a lightweight form or triage process — but only once
  volume actually requires it, not preemptively).
- Collect inbound interest, maintain manageable onboarding load.
- Identify strong candidates for longer-term/MSP-adjacent use.

**Owner:** Don, possibly delegating triage once volume justifies it.
**Exit criteria to Phase 4:** enough active/retained evaluators to
credibly demonstrate value to an MSP audience.

---

## PHASE 4 — MSP outreach

**Goal:** commercial-audience transition, once homelab adoption gives
something real to point to.

**Target:** MSP owners, Directors, ops leads, senior technicians, small
internal IT teams.

**Positioning — operational problems, not implementation.** Grounded in
what's actually built:
- **Visibility** — one view across compliance, assets, identity, UPS/
  power, network, across every client (Compliance/Network Monitor split;
  Incident Command Mode for critical infrastructure).
- **Evidence** — condition-policy-driven incident classification with
  defined SLA windows (Operational vs. Security categories), a
  documented Compound Risk signal, and reporting output — not ad hoc.
- **Discovery** — Pre-Trust nmap/SNMP scanning, reviewed and signed off
  by a Director before it becomes the trusted baseline, not silently
  auto-accepted.
- **Operational history / incident investigation** — every incident logs
  first response, tools opened, notes, escalations; this also drives the
  Repair-vs-Replace signal.
- **Multi-network management** — Hub/Spoke model, one Hub aggregating an
  MSP's whole book of business.
- **Reduced uncertainty during troubleshooting** — "the monitor is the
  alert," Director gets status without a phone call.

**Do not lead with AI.** Merlin is one part of the platform (currently:
Device Diagnosis, Incident Coordination, Onboarding Scan Analysis, all
analysis-only, human-approved) — present as part of the story, not the
headline.

**Owner:** Don. **Exit criteria to Phase 5:** MSP conversations
converting into named pilot commitments.

---

## PHASE 5 — MSP pilot

**Goal:** structured, bounded commercial-adjacent trials.

Each pilot needs: a defined organization, a defined number of
networks/devices, a defined evaluation period, a named operational
owner, a real onboarding process, a support/contact channel, and an
explicit evaluation-to-paid transition point. No scale optimization yet
— this stays hand-managed like Phase 1.

**Owner:** Don. **Exit criteria to Phase 6:** at least one pilot
converts to paid, and the conversion process itself is repeatable, not
one-off.

---

## PHASE 6 — Commercial rollout

**Goal:** repeatable commercial motion.

Establish: pricing, formal onboarding, support expectations, customer
documentation, acquisition channels, referral/community strategy.
Convert successful pilots to paying customers. Keep homelab/community
users running as an ongoing adoption/awareness channel — that funnel
doesn't get shut off once MSP outreach starts.

**Owner:** Don + whoever pricing/commercial decisions route through
(not yet defined in either repo).

---

## Rollout funnel

```
KEEP website → Reddit/technical communities → interested evaluator →
controlled V1 access → active external user → repeat evaluator →
MSP introduction → MSP pilot → paying MSP/customer
```

## Positioning rule

Lead with the operational problem, not "AI." Merlin is part of the
capability, presented where relevant — never framed as the whole
product. This matches the site's existing framing already (`/merlin`:
"This page explains what Merlin is... not a feature list"; the
homepage's three-layer KEEP / Merlin-Governance / Merlin-Narrative
structure keeps Merlin visually and narratively subordinate to the
deterministic KEEP layer already).

## Communication principles

Technical credibility over marketing hype. Evidence-based claims only —
this is not a new rule, it's the same Verified Fact / Reasonable
Inference / Unknown discipline already governing the site
(`WEBSITE_ARCHITECTURE.md` §5, `PROJECT_RULES.md` §7). Explicit about V1
boundaries. No roadmap-feature promises. Never imply homelab users are
the commercial target. No manufactured urgency. No volume push before
the onboarding path is repeatable.

---

## Rollout deliverables — status and owner

| # | Deliverable | Status | Owner / next action |
|---|---|---|---|
| 1 | V1 evaluation landing/access path | Built (`/evaluate`) | none |
| 2 | Evaluation signup/contact mechanism | **Decided 2026-08-15 (Sign Up → staff-granted Evaluation); `keep-website` wiring not yet started** | Implementation held pending coordination check with the concurrently active session on `keep-website` |
| 3 | Short evaluator introduction | Built (`/why-keep`) | none |
| 4 | Installation/onboarding path | Built (`/evaluate` prerequisites + steps) | none |
| 5 | Evaluator expectations | Built, needs Phase-1 disclosure additions above | small content addition when Phase 1 starts |
| 6 | Reddit/community outreach strategy | Defined above (Phase 2) | Don executes |
| 7 | First-cohort recruitment criteria | Defined above (Phase 1) | Don executes |
| 8 | MSP outreach strategy | Defined above (Phase 4) | Don executes when Phase 3 exit criteria met |
| 9 | MSP pilot structure | Defined above (Phase 5) | Don executes when Phase 4 exit criteria met |
| 10 | Evaluation → customer conversion path | Defined in funnel + Phase 5's transition point; partially real as of 2026-08-15 — `control-plane/`'s Sign Up → `/account` → tier selection → Stripe checkout is a working account-to-paid mechanism, though not yet an Evaluation-specifically-to-paid one | remaining gap: an existing *Evaluation* account's specific upgrade-to-paid path, not the general mechanism, which now exists |
| 11 | Rollout metrics | See below | tracking mechanism not yet built |

## Rollout metrics (to track, mechanism not yet built)

Interested users → evaluation signups → activated users → retained
evaluators → MSP conversations → MSP pilots → conversions. No current
instrumentation exists for any of these in either repo — this is a gap
to close before Phase 2 generates volume worth measuring, not before
Phase 0/1.

---

## Sequencing and dependencies (summary)

Phase 0 blocks everything — nothing downstream is reachable without a
resolved domain, a working contact path, and a legal-page decision.
Phase 1 and 2 are mutually dependent (need the cohort criteria before
posting, need the outreach channel to fill the cohort) but can be
prepared in parallel. Phases 3 onward are strictly sequential, each
gated on the prior phase's stated exit criteria — no phase is time-boxed,
each ends when its criteria are met, not on a calendar.

## Verification

- Phase 0 status table: re-check `/evaluate`, `/why-keep`,
  `/capabilities` against `keep-website/src/app/*/page.tsx` and
  `NEXT_PUBLIC_SITE_URL`'s current state in `src/lib/site-url.ts`.
- Phase 4 positioning claims: `cdacs/documentation/architecture/incident.md`
  (SLA/evidence model), `monitor.md` (visibility model), `merlin.md` §4
  (current Merlin scope).
- Phase 0 launch-gate status: `cdacs/documentation/LAUNCH_READINESS.md`
  Section F; `git status` in `cdacs` to confirm whether the 7 listed
  files have since been committed.
