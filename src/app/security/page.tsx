import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
  title: "Security & Data Ownership",
  description:
    "What data KEEP keeps local, what reaches the Control Plane, how authentication and trust boundaries work, who is responsible for backups, and how to remove an evaluation deployment.",
};

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow>Security</Eyebrow>
      <H1 className="mt-2">Security & Data Ownership</H1>

      <Body className="mt-6">
        This page answers the questions a technical evaluator asks before
        installing KEEP on a live network: what data stays on your own
        infrastructure, what KEEP as a vendor ever sees, who is responsible
        for backups, and how to remove an evaluation deployment if you
        decide not to continue.
      </Body>

      <H2 className="mt-12">What data remains local</H2>
      <Body className="mt-4">
        The software KEEP installs at a client site keeps no database of its
        own. It discovers and polls devices on that network, then sends what
        it finds to your own Hub — the central server your organization
        runs. Nothing meaningful is retained on the client-site device
        itself between polling cycles.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP architecture documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        Your Hub&apos;s database is the system of record for everything KEEP
        discovers about your clients&apos; networks — device inventories,
        incidents, scan results — and it runs on infrastructure you control,
        not on servers KEEP operates.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP architecture documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        If you manage more than one client site, each site reports only to
        your own Hub — never to KEEP directly, and never to another
        organization&apos;s Hub.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP architecture documentation",
          }}
        />
      </Body>

      <H2 className="mt-12">What reaches the Control Plane</H2>
      <Body className="mt-4">
        KEEP&apos;s Control Plane — the service that handles evaluation
        access, accounts, and licensing — is designed to receive only
        account, licensing, and deployment-identity information. It does not
        receive the operational data your network monitoring produces: no
        device inventories, no incidents, no scan results.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP Control Plane architecture documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        Where setting up a deployment requires network configuration
        details, those details are used only to prepare your installation
        package and are not retained afterward.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP Control Plane architecture documentation",
          }}
        />
      </Body>

      <H2 className="mt-12">Authentication and trust boundaries</H2>
      <Body className="mt-4">
        Every device that joins your network is explicitly authorized by
        your own administrator before it can connect — KEEP&apos;s Control
        Plane has no ability to authorize a device on your network by
        itself.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP architecture documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        Your team signs in through your own identity provider — Active
        Directory, LDAP, or single sign-on — or through a KEEP-native
        account. Multi-factor authentication is available for KEEP
        accounts.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP application security architecture",
          }}
        />
      </Body>

      <H2 className="mt-12">Data storage responsibilities</H2>
      <Body className="mt-4">
        Your Hub&apos;s database is backed up automatically, and backups are
        encrypted so that only you — or whoever you designate — can decrypt
        them. KEEP does not hold a copy of your backups and plays no role in
        your disaster recovery.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP backup and disaster recovery architecture",
          }}
        />
      </Body>
      <Body className="mt-4">
        You are responsible for securely storing your own recovery key and
        for keeping a copy of your backup somewhere other than the Hub
        itself.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP backup and disaster recovery architecture",
          }}
        />
      </Body>

      <H2 className="mt-12">Evaluation removal process</H2>
      <Body className="mt-4">
        If you decide not to continue after evaluating KEEP, a complete
        removal procedure exists for the software and data on your own
        infrastructure, and it has been verified against a real evaluation
        installation.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP Evaluation Program documentation",
          }}
        />
      </Body>
      <Callout variant="unknown">
        What happens to your account and licensing record on KEEP&apos;s own
        Control Plane after you remove your local deployment is not yet
        documented. We will update this page once that process is defined.
      </Callout>

      <H2 className="mt-12">Evaluation Considerations</H2>
      <Callout variant="unknown">
        This page will be extended as open questions are resolved and
        confirmed. If you have a specific security or data-handling question
        not answered here, ask before you evaluate — see{" "}
        <Link href="/evaluate" className="underline underline-offset-2">
          Evaluate KEEP
        </Link>
        .
      </Callout>
    </div>
  );
}
