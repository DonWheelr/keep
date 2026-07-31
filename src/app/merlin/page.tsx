import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import {
  KEEP_MERLIN_ARCHITECTURE,
  KEEP_ARCHITECTURE,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Merlin",
  description:
    "Merlin is the single AI identity inside KEEP — what it is, the philosophy that governs it, and how it's kept accountable to a human decision-maker.",
};

export default function MerlinPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow>Merlin</Eyebrow>
      <H1 className="mt-2">Merlin</H1>

      <Body className="mt-6">
        This page explains what Merlin is and the principles that govern it —
        not a feature list or a status report. For what Merlin can actually
        do today, and how thoroughly each surface has been validated, see{" "}
        <Link href="/capabilities" className="underline underline-offset-2">
          Capabilities
        </Link>
        .
      </Body>

      <H2 className="mt-12">What Merlin Is</H2>
      <Body className="mt-4">
        Merlin is not a chatbot added to KEEP. It&apos;s the single AI
        identity inside KEEP — the same name, the same authority model, and
        the same voice wherever it appears, so a Director or technician
        never has to learn a new mental model of what Merlin is allowed to
        do when it shows up on a new screen.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        Merlin exists to make the person who&apos;s already responsible for
        a decision faster and better-informed at making it — not to make
        the decision itself. That&apos;s consistent with KEEP&apos;s own
        positioning: KEEP is not a certification authority and does not
        substitute for human judgment, and Merlin inherits that constraint
        directly.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>

      <H2 className="mt-12">Philosophy</H2>
      <Body className="mt-4">
        One line, true on every surface Merlin appears on:{" "}
        <strong>Merlin discovers. The Director decides.</strong> The
        corollary governs every interaction without exception: Merlin is an
        advisor by default, and an executor only when a human authorizes
        it.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>

      <H2 className="mt-12">Independent of Any Single AI Provider</H2>
      <Body className="mt-4">
        Merlin is KEEP&apos;s governed orchestration and policy layer — not
        the underlying language model. The AI provider behind Merlin&apos;s
        reasoning is a replaceable implementation detail, not part of
        Merlin&apos;s identity. Replacing that provider never changes
        Merlin&apos;s identity, governance, authority, or the fact that
        every action it takes is logged.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>

      <H2 className="mt-12">Where Merlin Shows Up</H2>
      <Body className="mt-4">
        Merlin currently appears on three surfaces: reviewing a device&apos;s
        incident and event history to produce a plain-English diagnosis;
        reviewing a new client&apos;s onboarding scan results to produce a
        prioritized remediation brief; and reading an incident&apos;s full
        thread to suggest next steps and keep a Director informed. For
        current status and how each has been validated, see{" "}
        <Link href="/capabilities" className="underline underline-offset-2">
          Capabilities
        </Link>
        .
      </Body>

      <H2 className="mt-12">How Merlin Is Governed</H2>
      <Body className="mt-4">
        Merlin&apos;s reasoning never receives a password, key, or
        credential. When a human authorizes an action that actually
        requires one, the credential is entered directly into KEEP and used
        by KEEP&apos;s own server code — Merlin&apos;s reasoning and any
        credentialed action are always two separate steps.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        Merlin has no standing authority of its own. It only ever acts
        within whatever the requesting or authorizing person is already
        permitted to do — it never assumes broader access than that, and a
        Director decides, surface by surface, how much authority Merlin is
        granted.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        Some actions — altering or deleting an audit record, for example —
        Merlin is never permitted to take, regardless of who asks or what
        authority they hold.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        Every action Merlin performs is logged as part of KEEP&apos;s
        permanent record — no exception.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>

      <H2 className="mt-12">Frequently Asked Questions</H2>
      <Body className="mt-4">
        <strong>Is Merlin a chatbot?</strong> No. Merlin is an identity that
        appears across KEEP&apos;s existing screens — it doesn&apos;t
        compete with the rest of the product as a separate way of working,
        it reasons about the same real state those screens show.
      </Body>
      <Body className="mt-4">
        <strong>What AI does Merlin use, and can that change?</strong> The
        underlying provider is an implementation detail that can change
        without changing what Merlin is, how it&apos;s governed, or what
        it&apos;s allowed to do.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        <strong>
          Can Merlin take action on my network without my approval?
        </strong>{" "}
        No. Merlin is an advisor by default and only ever executes an action
        when a human has authorized it.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        <strong>Does Merlin ever see my passwords or keys?</strong> No.
        Merlin&apos;s reasoning only ever receives descriptive information —
        never a credential.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        <strong>What can Merlin do today?</strong> See{" "}
        <Link href="/capabilities" className="underline underline-offset-2">
          Capabilities
        </Link>{" "}
        for the current, conservatively classified list.
      </Body>

      <Body className="mt-12">
        For the architecture behind KEEP as a whole, see{" "}
        <Link href="/how-it-works" className="underline underline-offset-2">
          How KEEP Works
        </Link>
        . <Citation source={KEEP_ARCHITECTURE} />
      </Body>

      <H2 className="mt-12">Continue to Capabilities</H2>
      <Body className="mt-4">
        For what Merlin and the rest of KEEP can do today, and how
        thoroughly each capability has been validated, see{" "}
        <Link href="/capabilities" className="underline underline-offset-2">
          Capabilities
        </Link>
        .
      </Body>
    </div>
  );
}
