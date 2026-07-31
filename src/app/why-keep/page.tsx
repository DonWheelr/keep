import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";

export const metadata: Metadata = {
  title: "Why KEEP",
  description:
    "The problem KEEP was built to address, the operational challenges behind it, the principles that guided its design, and who it is and isn't intended for.",
};

export default function WhyKeepPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow>Why KEEP</Eyebrow>
      <H1 className="mt-2">Why KEEP</H1>

      <Body className="mt-6">
        This page explains the problem KEEP was built to address and the
        thinking behind its design — not a feature list. For what KEEP does
        today, see Capabilities; for how it&apos;s built, see{" "}
        <Link href="/how-it-works" className="underline underline-offset-2">
          How KEEP Works
        </Link>
        .
      </Body>

      <H2 className="mt-12">Why KEEP Exists</H2>
      <Body className="mt-4">
        Knowing what devices exist on a network is a different question from
        knowing whether that network is in a known-good, documented state —
        and whether that can be shown to whoever needs to see it, whether
        that&apos;s an MSP&apos;s own management, a client, or an auditor.
        KEEP was built to answer the second question, not just the first.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>

      <H2 className="mt-12">
        The operational challenges KEEP was designed to address
      </H2>
      <Body className="mt-4">
        Organizations responsible for network security and compliance
        visibility are often working across systems that were not designed
        to share information with each other — antivirus tooling, hardware
        and license records, directory services, and network infrastructure.
        Reconciling those into one trustworthy picture typically requires
        manual, recurring effort.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        Producing documented evidence of that work — for a client review, an
        insurance renewal, or an audit — is itself a separate, recurring
        task layered on top of doing the work in the first place.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        An organization responsible for more than one network needs this
        picture for each one individually, and a way to see all of them at
        once without losing the separation between one client&apos;s data
        and another&apos;s.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP architecture documentation",
          }}
        />
      </Body>

      <H2 className="mt-12">Design principles that guided KEEP</H2>
      <Body className="mt-4">
        Vendor-agnostic: designed to work across different underlying
        network equipment and tooling, rather than depending on a single
        vendor&apos;s ecosystem.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        Minimal footprint: designed to avoid installing software on the
        devices being monitored, relying instead on standard network
        protocols and a single collector per site.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        Evidence over assumption: a newly deployed collector&apos;s first
        scan is treated as unverified evidence, not an accepted baseline,
        until a qualified person reviews it. See{" "}
        <Link href="/how-it-works" className="underline underline-offset-2">
          How KEEP Works
        </Link>{" "}
        for how this applies to onboarding a new site.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP architecture documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        Stated boundaries: KEEP is designed to produce supporting evidence
        for compliance and audit processes, not to certify compliance
        itself. Compliance determinations remain the responsibility of
        qualified auditors and legal counsel.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>

      <H2 className="mt-12">Who KEEP is intended for</H2>
      <Body className="mt-4">
        Managed service providers monitoring more than one client network,
        who need a single place to see all of them without mixing data
        between clients.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP architecture documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        IT teams or organizations monitoring a single network of their own,
        without needing a separate client-management layer.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP architecture documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        Organizations that need documented, reviewable evidence of their
        security and compliance posture — for internal use, client
        reporting, or audit and insurance purposes.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>

      <H2 className="mt-12">Who KEEP is not intended for</H2>
      <Body className="mt-4">
        KEEP is not a helpdesk or ticketing system.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        KEEP is not a backup solution and does not replace dedicated backup
        tooling.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        KEEP does not certify compliance with any standard. Organizations
        that need formal certification against a specific standard need a
        qualified auditor — KEEP is not a substitute for that process.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>
      <Body className="mt-4">
        KEEP is not designed as a large-enterprise IT service-management
        platform — it is scoped for MSPs and IT teams managing a bounded set
        of client networks.{" "}
        <Citation
          source={{
            type: "internal-doc",
            label: "KEEP product positioning documentation",
          }}
        />
      </Body>

      <H2 className="mt-12">Continue to How KEEP Works</H2>
      <Body className="mt-4">
        For the architecture behind these principles — the Hub/Spoke model,
        evaluation flow, data flow, and trust boundaries — see{" "}
        <Link href="/how-it-works" className="underline underline-offset-2">
          How KEEP Works
        </Link>
        .
      </Body>
    </div>
  );
}
