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
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "An index of the technical material available today, and a clear list of documentation that does not exist yet.",
};

function DocEntry({
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
  return (
    <li className="border-t border-stone-200 py-4 first:border-t-0">
      <div className="flex flex-wrap items-center gap-2">
        {href ? (
          <Link
            href={href}
            className="font-medium text-ink underline underline-offset-2"
          >
            {name}
          </Link>
        ) : (
          <span className="font-medium text-ink">{name}</span>
        )}
        <CapabilityStatus status={status} noun="Documentation" />
      </div>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
        {description}
        {citation && (
          <>
            {" "}
            <Citation source={citation} />
          </>
        )}
      </p>
    </li>
  );
}

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow>Documentation</Eyebrow>
      <H1 className="mt-2">Documentation</H1>

      <Body className="mt-6">
        This page organizes the technical material available today and lists
        what doesn&apos;t exist yet. It does not pretend an installation
        guide, configuration reference, or troubleshooting guide already
        exists — none of them do.
      </Body>

      <H2 className="mt-12">Available now</H2>
      <ul>
        <DocEntry
          status="current"
          name="How KEEP Works"
          href="/how-it-works"
          description="The Hub/Spoke architecture, evaluation flow, data flow, and trust boundaries."
        />
        <DocEntry
          status="current"
          name="Security & Data Ownership"
          href="/security"
          description="What stays local, what reaches the Control Plane, authentication, backup responsibilities, and evaluation removal."
        />
        <DocEntry
          status="current"
          name="Capabilities"
          href="/capabilities"
          description="What KEEP does today, grouped by area and labeled Validated, Evaluation, Planned, or Unknown."
        />
        <DocEntry
          status="current"
          name="Evaluate KEEP"
          href="/evaluate"
          description="Evaluation prerequisites, what gets installed, what data is collected, and how to end an evaluation."
        />
        <DocEntry
          status="current"
          name="Merlin — Technical Reference"
          href="/docs/merlin"
          description="Merlin's capability classes, the credential boundary, and how approval works before anything executes."
          citation={KEEP_MERLIN_ARCHITECTURE}
        />
      </ul>

      <H2 className="mt-12">Planned Documentation</H2>
      <ul>
        <DocEntry
          status="planned"
          name="Installation & Deployment Guide"
          description="Step-by-step setup for Hub and Spoke deployments, beyond the prerequisites already summarized on Evaluate KEEP."
          citation={KEEP_ARCHITECTURE}
        />
        <DocEntry
          status="planned"
          name="Configuration Reference"
          description="How to configure SLA targets, alerting, and integrations once a deployment is running."
          citation={KEEP_ARCHITECTURE}
        />
        <DocEntry
          status="planned"
          name="Troubleshooting & Operations Guide"
          description="How to diagnose and resolve common operational issues after deployment."
        />
      </ul>

      <Callout variant="unknown">
        Whether future documentation will be organized as individual pages,
        a searchable reference, or something else has not been decided.
        This page will be restructured if and when that decision is made —
        it isn&apos;t assumed here.
      </Callout>
    </div>
  );
}
