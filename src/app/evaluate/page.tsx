import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { Callout } from "@/components/callout";
import {
  KEEP_ARCHITECTURE,
  KEEP_EVALUATION_PROGRAM,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Evaluate KEEP",
  description:
    "What to expect from a KEEP evaluation, start to finish: prerequisites, what gets installed, what data is collected, and how to end the evaluation.",
};

export default function EvaluatePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow>Evaluate</Eyebrow>
      <H1 className="mt-2">Evaluate KEEP</H1>

      <Body className="mt-6">
        This page explains what evaluating KEEP actually involves, from
        before you start to how you&apos;d end it, so there&apos;s nothing
        left to guess. It is a procedural reference, not a sales pitch.
      </Body>

      <H2 className="mt-12">Is KEEP right for your MSP?</H2>
      <Body className="mt-4">
        KEEP is built for managed service providers monitoring more than one
        client network, and for IT teams monitoring a single network of
        their own. It is not a helpdesk, a backup solution, or a
        compliance-certifying authority.{" "}
        <Citation source={KEEP_ARCHITECTURE} />{" "}
        For the complete picture of
        who KEEP is designed for, and who it isn&apos;t, see{" "}
        <Link href="/why-keep" className="underline underline-offset-2">
          Why KEEP
        </Link>
        .
      </Body>

      <H2 className="mt-12">Evaluation prerequisites</H2>
      <Body className="mt-4">
        A Hub deployment needs at least 4 CPU cores, 8 GB of RAM, and 100 GB
        of disk. A Spoke deployment (for monitoring a single client site)
        needs at least 2 CPU cores, 4 GB of RAM, and 32 GB of storage.{" "}
        <Citation source={KEEP_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        Outbound internet access is required to activate and register the
        deployment before it begins normal operation.{" "}
        <Citation source={KEEP_EVALUATION_PROGRAM} />
      </Body>
      <Body className="mt-4">
        Before installation begins, KEEP issues an Evaluation ID and a
        deployment token directly to you — this isn&apos;t a self-service
        signup. See{" "}
        <Link href="/how-it-works" className="underline underline-offset-2">
          How KEEP Works
        </Link>{" "}
        for how this fits into the broader evaluation flow.{" "}
        <Citation source={KEEP_EVALUATION_PROGRAM} />
      </Body>

      <H2 className="mt-12">What is installed</H2>
      <Body className="mt-4">
        A KEEP Hub is installed as a software deployment, either on hardware
        KEEP ships or on your own hardware or virtual machine. If
        you&apos;re monitoring more than one client site, one Spoke is
        installed at each additional site.{" "}
        <Citation source={KEEP_ARCHITECTURE} />{" "}
        Nothing is installed on the
        individual devices KEEP monitors. See{" "}
        <Link href="/how-it-works" className="underline underline-offset-2">
          How KEEP Works
        </Link>{" "}
        for the full architecture.
      </Body>

      <H2 className="mt-12">What happens during evaluation</H2>
      <Body className="mt-4">
        Installation activates and registers the deployment before anything
        else happens — see{" "}
        <Link href="/how-it-works" className="underline underline-offset-2">
          How KEEP Works
        </Link>{" "}
        for that step in detail. Once registration succeeds, the
        deployment&apos;s first scan of a client network is treated as
        unverified evidence, not an accepted baseline, until a qualified
        person reviews and approves it.{" "}
        <Citation source={KEEP_ARCHITECTURE} />{" "}
        Normal monitoring begins
        after that review.
      </Body>
      <Body className="mt-4">
        Several of Merlin&apos;s AI-assisted surfaces — device diagnosis,
        onboarding scan analysis, and incident coordination — are fully
        implemented but still gathering real-world validation, which is
        exactly what the Founding Evaluator Program exists to do. See{" "}
        <Link href="/merlin" className="underline underline-offset-2">
          Merlin
        </Link>{" "}
        for what it is, and{" "}
        <Link href="/capabilities" className="underline underline-offset-2">
          Capabilities
        </Link>{" "}
        for its current status.
      </Body>

      <H2 className="mt-12">What data is collected</H2>
      <Body className="mt-4">
        Data collection during an evaluation works the same way it does in
        normal operation — nothing about being in evaluation changes what
        stays local or what reaches KEEP.{" "}
        <Citation source={KEEP_ARCHITECTURE} />{" "}
        For the complete account of
        what stays on your own infrastructure and what reaches KEEP&apos;s
        Control Plane, see{" "}
        <Link href="/security" className="underline underline-offset-2">
          Security &amp; Data Ownership
        </Link>
        .
      </Body>

      <H2 className="mt-12">What support to expect</H2>
      <Body className="mt-4">
        Installation is designed to complete without KEEP&apos;s engineering
        team needing to intervene.{" "}
        <Citation source={KEEP_EVALUATION_PROGRAM} />
      </Body>
      <Callout variant="unknown">
        Specific support channels and response expectations during an
        evaluation aren&apos;t documented anywhere available to us yet. This
        page will be updated once that&apos;s defined.
      </Callout>

      <H2 className="mt-12">Ending the evaluation</H2>
      <Body className="mt-4">
        If you decide not to continue, a complete removal procedure exists
        for the software and data on your own infrastructure.{" "}
        <Citation source={KEEP_EVALUATION_PROGRAM} />{" "}
        For the full removal
        process — including the one open question about your account
        record on KEEP&apos;s Control Plane — see{" "}
        <Link href="/security" className="underline underline-offset-2">
          Security &amp; Data Ownership
        </Link>
        .
      </Body>

      <H2 className="mt-12">Next steps</H2>
      <Callout variant="unknown">
        There is no self-service way to request an evaluation on this site
        yet. How to actually initiate one isn&apos;t defined here — this
        page will be updated once that process exists.
      </Callout>
    </div>
  );
}
