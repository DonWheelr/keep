# KEEP Website — V1 Completion Assessment

**Status: CLOSED, 2026-08-08.** This document is the permanent record of
the website V1 validation effort. It is a historical record, not a living
document — do not edit it to reflect later changes to the site. If the
site changes materially after this date, that's new work with its own
record, not a revision of this one.

**Conclusion:** the `keep-website` repository has reached V1 completion.
Every evidence-backed deficiency found across four independent review
passes has been corrected and committed. The repository's remaining open
items are Director business decisions that are explicitly outside this
repository's scope, not defects in it.

---

## 1. Scope of the investigation

Four independent passes were run against the live site, in this order:

1. **Evidence validation** — every page discussing Hub/Spoke communication,
   remote administration, Tech Workbench, Guacamole, Merlin, connectivity,
   architecture, or network access, checked claim-by-claim against
   repository evidence in `~/Developer/cdacs`.
2. **Full V1 readiness assessment** — a Director-level review of the
   entire site across technical accuracy, consistency, navigation,
   content completeness, missing pages/documentation, capability-status
   accuracy, visual consistency, evaluation journey, calls to action,
   trust-building content, product/technical/security/Merlin messaging,
   evidence alignment, and grammar.
3. **Corrections pass** — implementation of every finding from passes 1–2
   that did not require a Director business decision.
4. **Final business-decision-independent review** — a fresh, final pass
   asking one question only: with the evaluation contact path, production
   domain, hosting, and DNS assumed resolved, is the website itself — its
   content, architecture, messaging, and evaluator-readiness — V1 complete?

**Supporting evidence artifacts** (in `~/Developer/cdacs`, not part of this
repository, referenced as source evidence throughout all four passes):
- `documentation/research/headscale-dependency-investigation.md`
- `documentation/research/tech-workbench-client-scoped-routing-investigation.md`

Both are evidence-only architecture investigations, completed before this
validation effort began, used here strictly as citation sources — nothing
in this effort added to, revised, or extended either document.

---

## 2. Major findings

### Pass 1 — Evidence validation
Three claims no longer fully supported by repository evidence:
- Security page overstated the enrollment port-forward's scoping
  (implied network-level restriction to one Spoke; the repo's own roadmap
  lists that as a known, unbuilt gap — only a credential-level restriction
  exists today).
- Capabilities page's "Browser-based remote access" entry implied general
  applicability; repository evidence showed it only functions when Hub and
  target device share a network, not for the general multi-site MSP case.
- Merlin/Home page AI-provider wording implied a present-tense choice among
  multiple AI vendors; only one provider is implemented in code today.

### Pass 2 — Full V1 readiness assessment
Two Critical items (both Director business decisions, not website defects):
no functioning evaluation-request path; no resolved production
domain/hosting. Two High items: the citation system rendered as
unverifiable plain text with no link or specific source;
`WEBSITE_ARCHITECTURE.md` had drifted from the implemented site in three
places. Four Medium items: a phrasing tension between a "read-only"
architecture claim and an interactive remote-access capability; Merlin
"(Core)"/"(Intelligence)" terminology used only on the home page and
nowhere else on the site; no CI/CD gate (recommendation only, not
implemented); no Open Graph image (recommendation only, not implemented).
Two Low items: an illustrative example reused a real internal lab client
name; no legal/privacy page exists (left pending Director decision, no
repository action taken).

### Pass 3 — Corrections
Every item above that did not require a Director decision was corrected;
CI/CD and Open Graph remained recommendations only, per direct instruction
not to implement them ahead of the domain/hosting decision.

### Pass 4 — Final review
One remaining item: `WEBSITE_ARCHITECTURE.md`'s Site Map table and §2
banner still labeled every implemented page a content-less "shell,"
despite all pages having real, evidence-cited content. Corrected. No
further findings — the live, evaluator-facing site itself was confirmed
V1 complete at this point, pending only Director business decisions.

---

## 3. Corrections made during the investigation

| Area | Correction |
|---|---|
| `src/app/security/page.tsx` | Reworded the Hub-enrollment port-forward claim to state the actual mechanism (single-use enrollment key) rather than implying network-level device scoping that isn't built yet. |
| `src/app/capabilities/page.tsx` | Narrowed "Browser-based remote access" to state it works for a device on the same network as the Hub, and added a note that remote client-site access isn't supported yet. |
| `src/app/merlin/page.tsx` | Changed "bring your own supported AI provider" to "bring your own provider account," removing the implication of a present-tense multi-vendor choice. |
| `src/app/page.tsx` (home) | Same AI-provider wording fix; normalized "Merlin (Core)"/"Merlin (Intelligence)" to "Merlin Governance"/"Merlin Narrative Layer," matching language already used in the surrounding body copy; replaced an illustrative example's real internal lab client name ("Westlake") with a generic fictional one ("Northgate Logistics"). |
| `src/app/how-it-works/page.tsx` | Clarified that the "every other interaction is read-only" claim refers to Spoke-initiated network-hardware writes, distinct from a technician's own interactive browser-based remote-access session. |
| `src/app/docs/page.tsx` | Added a short explanation of what the site's "(Source: …)" citation markers mean — they name an internal document checked at the time of writing, not yet published externally, so the marker states what was verified rather than linking to it. |
| `WEBSITE_ARCHITECTURE.md` | Synchronized with the implemented site in two rounds: (1) corrected three specific stale claims — `not-found.tsx` now has real content, `PageShell` no longer exists, per-page metadata descriptions now exist; (2) replaced the remaining "[Current] shell" labels and the §2 banner's "content-less shell" framing with language reflecting that every page is implemented with real content, while retaining the still-accurate distinction that none of it has been validated against real visitor behavior. |

Two recommendations were produced and deliberately **not implemented**,
per direct instruction, pending the production domain/hosting decision:
a GitHub Actions CI/CD plan, and an Open Graph image specification. Both
remain available in this effort's conversation record for whoever
resolves the domain/hosting decision next.

---

## 4. Commits produced during this effort

All on branch `homepage-template-port`, none pushed.

| Commit | Date | Message | Files |
|---|---|---|---|
| `995025d` | 2026-08-08 | `docs: align website claims with repository evidence` | `src/app/capabilities/page.tsx`, `src/app/merlin/page.tsx`, `src/app/page.tsx`, `src/app/security/page.tsx` |
| `97ac9f0` | 2026-08-08 | `docs: resolve website V1 readiness findings` | `WEBSITE_ARCHITECTURE.md`, `src/app/docs/page.tsx`, `src/app/how-it-works/page.tsx`, `src/app/page.tsx` |
| `cf2aa2d` | 2026-08-08 | `docs: synchronize website architecture with implemented site` | `WEBSITE_ARCHITECTURE.md` |

Each commit passed `npm run lint`, `npx tsc --noEmit`, and a production
`npm run build` (the last run with a placeholder `NEXT_PUBLIC_SITE_URL` to
isolate the one pre-existing, documented, unrelated environment gap —
see §5) before being committed.

---

## 5. Remaining Director decisions — outside this repository's scope

None of the following are website defects. Each is a business decision
this repository's own content already correctly discloses as open, and no
repository code or content change can resolve them:

- **Evaluation contact path (C1).** No functioning way for an evaluator to
  reach KEEP exists yet — `/evaluate` already says so honestly. A Director
  Decision Brief comparing direct email, a website form, and the existing
  (unsuitable) Control Plane staff-outbound flow was delivered separately;
  no option was implemented.
- **Production domain and hosting (C2).** `NEXT_PUBLIC_SITE_URL` is unset
  by design (`WEBSITE_ARCHITECTURE.md` §8 — the production build fails
  closed rather than guessing a domain); no hosting platform is selected
  or configured. A Director Decision Brief comparing Vercel and Railway
  was delivered separately; no option was implemented.
- **DNS configuration** — downstream of the domain decision above.
- **Legal/privacy page determination (L2)** — whether one is required is a
  legal/business judgment this repository's evidence cannot answer either
  way; left explicitly pending, no repository action taken.

---

## 6. Final conclusion

**The `keep-website` repository is V1 complete.** Every evidence-backed
deficiency identified across four independent review passes — technical
accuracy, messaging consistency, architecture-documentation accuracy, and
a final pass excluding all Director business decisions — has been
corrected and committed. No further website-content, architecture, or
messaging deficiencies remain. The site is ready to go live the moment the
four external Director decisions above are resolved; nothing in the
repository itself blocks that.
