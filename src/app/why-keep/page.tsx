import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import {
  KEEP_ARCHITECTURE,
  KEEP_PRODUCT_POSITIONING,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Why KEEP",
  description:
    "The problem KEEP was built to address, the operational challenges behind it, the principles that guided its design, and who it is and isn't intended for.",
};

const challenges = [
  {
    title: "Systems that don't talk to each other",
    body: "Antivirus tooling, hardware and license records, directory services, and network infrastructure were never designed to share information. Reconciling them into one trustworthy picture typically requires manual, recurring effort.",
  },
  {
    title: "Evidence is its own separate task",
    body: "Producing documented evidence of that work — for a client review, an insurance renewal, or an audit — is a recurring task layered on top of doing the work in the first place.",
  },
  {
    title: "One picture, many networks",
    body: "An organization responsible for more than one network needs this picture for each one individually, and a way to see all of them at once without losing the separation between one client's data and another's.",
  },
];

const principles = [
  {
    title: "Vendor-agnostic",
    body: "Designed to work across different underlying network equipment and tooling, rather than depending on a single vendor's ecosystem.",
  },
  {
    title: "Minimal footprint",
    body: "Designed to avoid installing software on the devices being monitored, relying instead on standard network protocols and a single collector per site.",
  },
  {
    title: "Evidence over assumption",
    body: "A newly deployed collector's first scan is treated as unverified evidence, not an accepted baseline, until a qualified person reviews it.",
    href: "/how-it-works",
    linkLabel: "How this applies to onboarding",
  },
  {
    title: "Stated boundaries",
    body: "Designed to produce supporting evidence for compliance and audit processes, not to certify compliance itself. Compliance determinations remain the responsibility of qualified auditors and legal counsel.",
  },
];

const forWhom = [
  {
    title: "Multi-client MSPs",
    body: "Managed service providers monitoring more than one client network, who need a single place to see all of them without mixing data between clients.",
    source: KEEP_ARCHITECTURE,
  },
  {
    title: "Single-network IT teams",
    body: "IT teams or organizations monitoring a single network of their own, without needing a separate client-management layer.",
    source: KEEP_ARCHITECTURE,
  },
  {
    title: "Anyone needing documented evidence",
    body: "Organizations that need documented, reviewable evidence of their security and compliance posture — for internal use, client reporting, or audit and insurance purposes.",
    source: KEEP_PRODUCT_POSITIONING,
  },
];

const notForWhom = [
  "Not a helpdesk or ticketing system.",
  "Not a backup solution — it does not replace dedicated backup tooling.",
  "Does not certify compliance with any standard. Organizations that need formal certification need a qualified auditor — KEEP is not a substitute for that process.",
  "Not a large-enterprise IT service-management platform — scoped for MSPs and IT teams managing a bounded set of client networks.",
];

export default function WhyKeepPage() {
  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Why KEEP</Eyebrow>
          <H1 className="mt-3">Why KEEP</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            This page explains the problem KEEP was built to address and the
            thinking behind its design — not a feature list. For what KEEP
            does today, see{" "}
            <Link href="/capabilities" className="underline underline-offset-2">
              Capabilities
            </Link>
            ; for how it&apos;s built, see{" "}
            <Link href="/how-it-works" className="underline underline-offset-2">
              How KEEP Works
            </Link>
            .
          </Body>
        </div>
      </section>

      {/* ---------- Why KEEP Exists ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>The Problem</Eyebrow>
          <div className="mt-6 rounded-sm border border-stone-200 bg-paper-raised p-8">
            <p className="text-xl font-semibold leading-snug text-ink">
              Knowing what devices exist on a network is a different
              question from knowing whether that network is in a
              known-good, documented state — and whether that can be shown
              to whoever needs to see it.
            </p>
            <Body className="mt-4 text-ink-soft">
              KEEP was built to answer the second question, not just the
              first. <Citation source={KEEP_PRODUCT_POSITIONING} />
            </Body>
          </div>
        </div>
      </section>

      {/* ---------- Operational challenges ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>The Challenges</Eyebrow>
          <H2 className="mt-3">
            The operational challenges KEEP was designed to address
          </H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="rounded-sm border border-stone-200 bg-paper-raised p-6"
              >
                <h3 className="font-medium text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            <Citation source={KEEP_PRODUCT_POSITIONING} />
          </p>
        </div>
      </section>

      {/* ---------- Design principles ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Design Principles</Eyebrow>
          <H2 className="mt-3">Design principles that guided KEEP</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="grid grid-cols-[28px_1fr] gap-3 rounded-sm border border-stone-200 bg-paper-raised p-6"
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="text-ink">{p.title}.</strong>{" "}
                  <span className="text-sm text-ink-soft">{p.body}</span>
                  {p.href && (
                    <>
                      {" "}
                      <Link
                        href={p.href}
                        className="text-sm underline underline-offset-2"
                      >
                        {p.linkLabel}
                      </Link>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            <Citation source={KEEP_PRODUCT_POSITIONING} />
          </p>
        </div>
      </section>

      {/* ---------- Who KEEP is intended for ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Fit</Eyebrow>
          <H2 className="mt-3">Who KEEP is intended for</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {forWhom.map((f) => (
              <div
                key={f.title}
                className="rounded-sm border border-stone-200 bg-paper-raised p-6"
              >
                <h3 className="font-medium text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.body} <Citation source={f.source} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Who KEEP is not intended for ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Boundaries</Eyebrow>
          <H2 className="mt-3">Who KEEP is not intended for</H2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {notForWhom.map((line) => (
              <li
                key={line}
                className="rounded-sm border border-stone-200 bg-paper-raised p-6 text-sm leading-relaxed text-ink-soft"
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-soft">
            <Citation source={KEEP_PRODUCT_POSITIONING} />
          </p>
        </div>
      </section>

      {/* ---------- Continue ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <H2>Continue</H2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/how-it-works"
              className="rounded-sm border border-stone-200 bg-paper-raised p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium text-ink">How KEEP Works</span>
              <p className="mt-1 text-sm text-ink-soft">
                The Hub/Spoke model, evaluation flow, data flow, and trust
                boundaries behind these principles.
              </p>
            </Link>
            <Link
              href="/capabilities"
              className="rounded-sm border border-stone-200 bg-paper-raised p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium text-ink">Capabilities</span>
              <p className="mt-1 text-sm text-ink-soft">
                What KEEP does today, labeled Validated, Evaluation,
                Planned, or Unknown.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
