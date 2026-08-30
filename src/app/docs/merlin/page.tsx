import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { KEEP_MERLIN_ARCHITECTURE } from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Merlin — Technical Reference",
  description:
    "How Merlin technically operates: its capability classes, the credential boundary, and how approval works before anything executes.",
};

export default function MerlinTechnicalReferencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow>Documentation</Eyebrow>
      <H1 className="mt-2">Merlin — Technical Reference</H1>

      <Body className="mt-6">
        This page describes how Merlin technically operates — its
        capability classes, the credential boundary, and how approval works
        before anything executes. For what Merlin is and the philosophy
        behind it, see{" "}
        <Link href="/merlin" className="underline underline-offset-2">
          Merlin
        </Link>
        . For current capability status, see{" "}
        <Link href="/capabilities" className="underline underline-offset-2">
          Capabilities
        </Link>
        .
      </Body>

      <H2 className="mt-12">Capability Classes</H2>
      <Body className="mt-4">
        Everything Merlin does falls into one of four capability classes.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        <strong>Observe</strong> — gathering real KEEP state (incidents,
        logs, scans, telemetry) that Merlin reasons about. Merlin never
        originates this data itself; it&apos;s the same real state visible
        elsewhere in KEEP.
      </Body>
      <Body className="mt-4">
        <strong>Analyze</strong> — reasoning over observed state to produce
        a diagnosis or explanation.
      </Body>
      <Body className="mt-4">
        <strong>Correlate</strong> — connecting observations across
        devices, incidents, or time to surface a pattern a single
        observation wouldn&apos;t show on its own.
      </Body>
      <Body className="mt-4">
        <strong>Recommend</strong> — stating a conclusion and a suggested
        action, traceable back to what was observed, analyzed, or
        correlated.
      </Body>

      <H2 className="mt-12">The Credential Boundary</H2>
      <Body className="mt-4">
        Merlin&apos;s reasoning calls only ever receive descriptive
        information — a device&apos;s condition history, an event log
        excerpt, a CVE name and severity score — never a password, key, or
        credential. When a human authorizes an action that actually
        requires one, the credential is entered directly into KEEP and used
        by KEEP&apos;s own server code to carry it out. Merlin&apos;s
        reasoning and any credentialed action are always two separate
        steps, never a single combined call.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>

      <H2 className="mt-12">Approval Mechanics</H2>
      <Body className="mt-4">
        Two shapes exist for authorizing an action Merlin proposes, plus one
        narrow, named exception.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        <strong>Live confirmation</strong> (the default): Merlin proposes an
        action, a human explicitly approves it in the moment, and only then
        does KEEP execute it.
      </Body>
      <Body className="mt-4">
        <strong>Standing pre-authorization</strong> (opt-in): a Director
        configures a rule in advance, in plain language, and signs off on it
        once. From that point on, KEEP evaluates the stored rule
        deterministically at the moment it&apos;s triggered — it does not
        re-invoke the AI model live. This is a reliability requirement
        (latency, cost, and misinterpretation risk are all wrong for a
        live-triggered decision), not a style preference.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        <strong>Duress</strong> (one named exception): a duress-PIN trigger
        is immediate and automatic, with no confirmation step and no visible
        difference from a normal PIN entry — the one case where live human
        confirmation does not apply first.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>

      <H2 className="mt-12">Continue Reading</H2>
      <Body className="mt-4">
        For Merlin&apos;s identity and the philosophy that governs it, see{" "}
        <Link href="/merlin" className="underline underline-offset-2">
          Merlin
        </Link>
        . For what&apos;s built today and how thoroughly it&apos;s been
        validated, see{" "}
        <Link href="/capabilities" className="underline underline-offset-2">
          Capabilities
        </Link>
        .
      </Body>
    </div>
  );
}
