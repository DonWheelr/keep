import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { CapabilityStatus } from "@/components/capability-status";
import { Citation } from "@/components/citation";
import { Callout } from "@/components/callout";
import type { CitationSource } from "@/components/citation";
import {
  KEEP_ARCHITECTURE,
  KEEP_MERLIN_ARCHITECTURE,
  KEEP_CONTROL_PLANE,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "An index of the technical material available today, and a clear list of documentation that does not exist yet.",
};

function DocCard({
  status,
  name,
  description,
  href,
  citation,
}: {
  status: "current" | "planned" | "unknown";
  name: string;
  description: string;
  href?: string;
  citation?: CitationSource;
}) {
  const content = (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-medium text-ink">{name}</span>
        <CapabilityStatus status={status} noun="Documentation" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {description}
        {citation && (
          <>
            {" "}
            <Citation source={citation} />
          </>
        )}
      </p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="rounded-sm border border-stone-200 bg-paper-raised p-6 transition-colors hover:border-accent"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
      {content}
    </div>
  );
}

export default function DocsPage() {
  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Documentation</Eyebrow>
          <H1 className="mt-3">Documentation</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            This page organizes the technical material available today and
            lists what doesn&apos;t exist yet. It does not pretend an
            installation guide, configuration reference, or troubleshooting
            guide already exists — none of them do.
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Every page below traces back to KEEP&apos;s implemented product
            and its approved architecture — the same evidence standard
            applied everywhere on this site, not a separate marketing track.
            For what&apos;s actually built and how thoroughly it&apos;s been
            validated, start at{" "}
            <Link href="/capabilities" className="underline underline-offset-2">
              Capabilities
            </Link>
            .
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            A note on the &quot;(Source: …)&quot; markers throughout this
            site: each names the specific internal KEEP document a claim was
            checked against at the time it was written. That documentation
            isn&apos;t published externally yet, so the marker states what
            was verified rather than linking to it — if you need a claim
            confirmed directly, ask us.
          </Body>
        </div>
      </section>

      {/* ---------- Available now ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Available Now</Eyebrow>
          <H2 className="mt-3">Available now</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <DocCard
              status="current"
              name="How KEEP Works"
              href="/how-it-works"
              description="The Hub/Spoke architecture, evaluation flow, data flow, and trust boundaries."
            />
            <DocCard
              status="current"
              name="Security & Data Ownership"
              href="/security"
              description="What stays local, what reaches the Control Plane, authentication, and evaluation removal."
            />
            <DocCard
              status="current"
              name="Capabilities"
              href="/capabilities"
              description="What KEEP does today, grouped by area and labeled Validated, Evaluation, Planned, or Unknown."
            />
            <DocCard
              status="current"
              name="Evaluate KEEP"
              href="/evaluate"
              description="Evaluation prerequisites, what gets installed, what data is collected, and how to end an evaluation."
            />
            <DocCard
              status="current"
              name="Sign Up"
              href="/sign-up"
              description="What creating a KEEP account actually does — and the distinction between an account and Evaluation access."
              citation={KEEP_CONTROL_PLANE}
            />
            <DocCard
              status="current"
              name="Merlin — Technical Reference"
              href="/docs/merlin"
              description="Merlin's capability classes, the credential boundary, and how approval works before anything executes."
              citation={KEEP_MERLIN_ARCHITECTURE}
            />
            <DocCard
              status="current"
              name="Schematics"
              href="/schematics"
              description="Eleven diagrams of how KEEP is actually built — boxes, arrows, and trust boundaries, not narrative — with an explicit findings section for where a claim didn't hold up under code inspection."
              citation={KEEP_ARCHITECTURE}
            />
          </div>
        </div>
      </section>

      {/* ---------- Planned Documentation ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Planned</Eyebrow>
          <H2 className="mt-3">Planned documentation</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <DocCard
              status="planned"
              name="Installation & Deployment Guide"
              description="Step-by-step setup for Hub and Spoke deployments, beyond the prerequisites already summarized on Evaluate KEEP."
              citation={KEEP_ARCHITECTURE}
            />
            <DocCard
              status="planned"
              name="Configuration Reference"
              description="How to configure SLA targets, alerting, and integrations once a deployment is running."
              citation={KEEP_ARCHITECTURE}
            />
            <DocCard
              status="planned"
              name="Troubleshooting & Operations Guide"
              description="How to diagnose and resolve common operational issues after deployment."
            />
          </div>

          <div className="mt-8">
            <Callout variant="unknown">
              Whether future documentation will be organized as individual
              pages, a searchable reference, or something else has not been
              decided. This page will be restructured if and when that
              decision is made — it isn&apos;t assumed here.
            </Callout>
          </div>
        </div>
      </section>
    </div>
  );
}
