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
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>How It Works</Eyebrow>
          <H1 className="mt-3">How KEEP Works</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            This page explains the architecture behind KEEP: how a
            deployment is structured, how an evaluation gets set up, how
            data moves between the parts of the system, and who is
            responsible for authorizing what. For the specific claims about
            data ownership, see{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security &amp; Data Ownership
            </Link>
            .
          </Body>
        </div>
      </section>

      {/* ---------- Hub/Spoke architecture ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Architecture</Eyebrow>
          <H2 className="mt-3">Hub/Spoke architecture</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            A KEEP deployment has two shapes — the same platform either way.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Solo deployment</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A single Hub discovers and monitors its own network
                directly, using the same collector logic a Spoke runs at a
                client site.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">MSP deployment</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                One Hub serves as the central server for the organization,
                and one Spoke is deployed at each client site it monitors.
              </p>
            </div>
          </div>

          <Body className="mt-6 max-w-[62ch] text-ink-soft">
            A Hub can run in the cloud or on the organization&apos;s own
            premises. A cloud-hosted Hub communicates with its Spokes over
            standard HTTPS. An on-premises Hub — one running behind its own
            firewall with no public address — uses a private, self-hosted
            mesh network for that same connectivity instead.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Either way, KEEP ships as a standard Linux container — the same
            container technology that runs on Linux, and, through
            Docker&apos;s own VM-backed execution, technically on macOS or
            Windows too. The currently validated, supported deployment
            path is Ubuntu 22.04 LTS on physical or virtual Linux
            infrastructure — see{" "}
            <Link href="/evaluate" className="underline underline-offset-2">
              Evaluate KEEP
            </Link>{" "}
            for the currently supported evaluation installation path.
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            A Hub and a Spoke run the identical discovery and monitoring
            logic against their own network — a Hub watches its own
            network exactly the way a Spoke watches a client site&apos;s,
            using the same collector code either way. What differs is
            where the data goes next: a Hub&apos;s own findings write
            straight into its database; a Spoke&apos;s findings are
            relayed to the Hub, which writes them in. The Hub also carries
            responsibilities a Spoke doesn&apos;t: aggregating every client
            into one view, running the dashboard, and holding the database
            itself.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            The one deliberate write operation to customer network
            hardware: a technician can explicitly request a switch port be
            shut down or re-enabled. Every other interaction is read-only —
            a technician&apos;s own browser-based remote-access session to
            a device (see{" "}
            <Link href="/capabilities" className="underline underline-offset-2">
              Capabilities
            </Link>
            ) is the technician directly operating that device, not KEEP
            acting on your network on its own.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            When a Spoke is deployed to a new site, its first scan is
            treated as unverified evidence rather than an accepted baseline,
            until a qualified team member reviews and approves it.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Merlin, KEEP&apos;s single AI identity, reasons about the state
            this architecture produces — it doesn&apos;t change how any of
            it works. See{" "}
            <Link href="/merlin" className="underline underline-offset-2">
              Merlin
            </Link>{" "}
            for what it is and how it&apos;s governed.{" "}
            <Citation source={KEEP_MERLIN_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- Evaluation flow ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Evaluation</Eyebrow>
          <H2 className="mt-3">Evaluation flow</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            An evaluation deployment is prepared and issued directly to the
            person evaluating it — this is not a self-service signup form.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Installing an evaluation activates it and confirms the
            deployment before anything else happens. A KEEP deployment does
            not begin normal operation until this confirmation step
            succeeds. <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Once active, you set up sign-in for your own team, including
            multi-factor authentication. For how sign-in and authentication
            work, see{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security &amp; Data Ownership
            </Link>
            . For what happens when you decide to stop evaluating, see that
            same page&apos;s evaluation removal section.
          </Body>
        </div>
      </section>

      {/* ---------- Data flow ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Data</Eyebrow>
          <H2 className="mt-3">Data flow</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            A Spoke discovers and polls the devices on the network
            it&apos;s deployed to, then sends what it finds to your own Hub.
            Separately, your Hub exchanges only account, licensing, and
            deployment-identity information with KEEP&apos;s Control
            Plane — the service that handles evaluation access and
            licensing. <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            A Spoke also keeps its own third channel: a direct connection to
            the Control Plane, separate from and not relayed through the
            Hub, confirming its own license/entitlement status and sending a
            network fingerprint used only to detect a cloned or duplicated
            device.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Across all three channels, nothing your Spokes discover about a
            client&apos;s network — device inventories, incidents, scan
            results — ever reaches the Control Plane. For the detailed
            account of exactly what stays local and what reaches it, see{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security &amp; Data Ownership
            </Link>
            .
          </Body>
        </div>
      </section>

      {/* ---------- Trust boundaries ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Trust</Eyebrow>
          <H2 className="mt-3">Trust boundaries</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Adding a device to a network involves two decisions, and both
            belong to your own organization, not to KEEP. Someone from your
            organization has to be able to reach and configure the device
            on your network in the first place, and someone from your
            organization has to explicitly authorize that specific device to
            join. <Citation source={KEEP_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            KEEP&apos;s Control Plane cannot authorize a device on your
            network by itself — it issues licenses and deployment
            identities, not network access.{" "}
            <Citation source={KEEP_CONTROL_PLANE} />{" "}
            For how account-level authentication works, see{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security &amp; Data Ownership
            </Link>
            .
          </Body>
        </div>
      </section>

      {/* ---------- Related reading ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <H2>Related reading</H2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/security"
              className="rounded-sm border border-stone-200 bg-paper-raised p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium text-ink">
                Security &amp; Data Ownership
              </span>
              <p className="mt-1 text-sm text-ink-soft">
                What stays local, what reaches the Control Plane,
                authentication, and evaluation removal.
              </p>
            </Link>
            <Link
              href="/merlin"
              className="rounded-sm border border-stone-200 bg-paper-raised p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium text-ink">Merlin</span>
              <p className="mt-1 text-sm text-ink-soft">
                What Merlin is and the principles that govern it.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
