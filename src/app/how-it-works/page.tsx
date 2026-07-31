import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import {
  KEEP_ARCHITECTURE,
  KEEP_EVALUATION_PROGRAM,
  KEEP_CONTROL_PLANE,
  KEEP_MERLIN_ARCHITECTURE,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "How KEEP Works",
  description:
    "The Hub/Spoke architecture, how an evaluation deployment is provisioned, how data moves through the system, and how trust boundaries are enforced.",
};

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow>How It Works</Eyebrow>
      <H1 className="mt-2">How KEEP Works</H1>

      <Body className="mt-6">
        This page explains the architecture behind KEEP: how a deployment is
        structured, how an evaluation gets set up, how data moves between the
        parts of the system, and who is responsible for authorizing what.
        For the specific claims about data ownership and backups, see{" "}
        <Link href="/security" className="underline underline-offset-2">
          Security &amp; Data Ownership
        </Link>
        .
      </Body>

      <H2 className="mt-12">Hub/Spoke architecture</H2>
      <Body className="mt-4">
        A KEEP deployment has two shapes. In a Solo deployment, a single Hub
        monitors one network directly. In an MSP deployment, one Hub serves
        as the central server for the organization, and one Spoke is
        deployed at each client site it monitors.{" "}
        <Citation source={KEEP_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        A Hub can run in the cloud or on the organization&apos;s own
        premises. A cloud-hosted Hub communicates with its Spokes over
        standard HTTPS. An on-premises Hub — one running behind its own
        firewall with no public address — uses a private, self-hosted mesh
        network for that same connectivity instead.{" "}
        <Citation source={KEEP_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        A Spoke&apos;s job is read-only discovery and monitoring of the
        devices on the network it&apos;s deployed to. It does not make
        configuration changes to the devices it watches.{" "}
        <Citation source={KEEP_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        When a Spoke is deployed to a new site, its first scan is treated as
        unverified evidence rather than an accepted baseline, until a
        qualified team member reviews and approves it.{" "}
        <Citation source={KEEP_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        Merlin, KEEP&apos;s single AI identity, reasons about the state this
        architecture produces — it doesn&apos;t change how any of it works.
        See{" "}
        <Link href="/merlin" className="underline underline-offset-2">
          Merlin
        </Link>{" "}
        for what it is and how it&apos;s governed.{" "}
        <Citation source={KEEP_MERLIN_ARCHITECTURE} />
      </Body>

      <H2 className="mt-12">Evaluation flow</H2>
      <Body className="mt-4">
        An evaluation deployment is prepared and issued directly to the
        person evaluating it — this is not a self-service signup form.{" "}
        <Citation source={KEEP_EVALUATION_PROGRAM} />
      </Body>
      <Body className="mt-4">
        Installing an evaluation activates it and confirms the deployment
        before anything else happens. A KEEP deployment does not begin
        normal operation until this confirmation step succeeds.{" "}
        <Citation source={KEEP_EVALUATION_PROGRAM} />
      </Body>
      <Body className="mt-4">
        Once active, you set up sign-in for your own team, including
        multi-factor authentication. For how sign-in and authentication
        work, see{" "}
        <Link href="/security" className="underline underline-offset-2">
          Security &amp; Data Ownership
        </Link>
        . For what happens when you decide to stop evaluating, see that same
        page&apos;s evaluation removal section.
      </Body>

      <H2 className="mt-12">Data flow</H2>
      <Body className="mt-4">
        A Spoke discovers and polls the devices on the network it&apos;s
        deployed to, then sends what it finds to your own Hub. Separately,
        your Hub exchanges only account, licensing, and deployment-identity
        information with KEEP&apos;s Control Plane — the service that
        handles evaluation access and licensing.{" "}
        <Citation source={KEEP_CONTROL_PLANE} />
      </Body>
      <Body className="mt-4">
        These are two separate channels. Nothing your Spokes discover about
        a client&apos;s network passes through the second one. For the
        detailed account of exactly what stays local and what reaches the
        Control Plane, see{" "}
        <Link href="/security" className="underline underline-offset-2">
          Security &amp; Data Ownership
        </Link>
        .
      </Body>

      <H2 className="mt-12">Trust boundaries</H2>
      <Body className="mt-4">
        Adding a device to a network involves two decisions, and both belong
        to your own organization, not to KEEP. Someone from your
        organization has to be able to reach and configure the device on
        your network in the first place, and someone from your organization
        has to explicitly authorize that specific device to join.{" "}
        <Citation source={KEEP_ARCHITECTURE} />
      </Body>
      <Body className="mt-4">
        KEEP&apos;s Control Plane cannot authorize a device on your network
        by itself — it issues licenses and deployment identities, not
        network access.{" "}
        <Citation source={KEEP_CONTROL_PLANE} />{" "}
        For how account-level authentication works, see{" "}
        <Link href="/security" className="underline underline-offset-2">
          Security &amp; Data Ownership
        </Link>
        .
      </Body>

      <H2 className="mt-12">Continue to Security &amp; Data Ownership</H2>
      <Body className="mt-4">
        For the specific claims about what stays local, what reaches the
        Control Plane, authentication, backups, and evaluation removal, see{" "}
        <Link href="/security" className="underline underline-offset-2">
          Security &amp; Data Ownership
        </Link>
        .
      </Body>
    </div>
  );
}
