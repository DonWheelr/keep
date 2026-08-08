import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { Callout } from "@/components/callout";
import {
  KEEP_ARCHITECTURE,
  KEEP_CONTROL_PLANE,
  KEEP_SECURITY_ARCHITECTURE,
  KEEP_BACKUP_DR,
  KEEP_EVALUATION_PROGRAM,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Security & Data Ownership",
  description:
    "What data KEEP keeps local, what reaches the Control Plane, how authentication and trust boundaries work, who is responsible for backups, and how to remove an evaluation deployment.",
};

export default function SecurityPage() {
  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Security</Eyebrow>
          <H1 className="mt-3">Security &amp; Data Ownership</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            This page answers the questions a technical evaluator asks
            before installing KEEP on a live network: what data stays on
            your own infrastructure, what KEEP as a vendor ever sees, who is
            responsible for backups, and how to remove an evaluation
            deployment if you decide not to continue.
          </Body>
        </div>
      </section>

      {/* ---------- What data remains local ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Data Ownership</Eyebrow>
          <H2 className="mt-3">What data remains local</H2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Body className="text-ink-soft">
              The software KEEP installs at a client site keeps no database
              of its own. It discovers and polls devices on that network,
              then sends what it finds to your own Hub — the central server
              your organization runs. Nothing meaningful is retained on the
              client-site device itself between polling cycles.{" "}
              <Citation source={KEEP_ARCHITECTURE} />
            </Body>
            <Body className="text-ink-soft">
              Your Hub&apos;s database is the system of record for
              everything KEEP discovers about your clients&apos;
              networks — device inventories, incidents, scan results — and
              it runs on infrastructure you control, not on servers KEEP
              operates. <Citation source={KEEP_ARCHITECTURE} />
            </Body>
          </div>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            If you manage more than one client site, each site reports only
            to your own Hub — never to KEEP directly, and never to another
            organization&apos;s Hub. <Citation source={KEEP_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- What reaches the Control Plane ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Control Plane</Eyebrow>
          <H2 className="mt-3">What reaches the Control Plane</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            KEEP&apos;s Control Plane — the service that handles evaluation
            access, accounts, and licensing — is designed to receive only
            account, licensing, and deployment-identity information. It does
            not receive the operational data your network monitoring
            produces: no device inventories, no incidents, no scan results.{" "}
            <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Where setting up a deployment requires network configuration
            details, those details are used only to prepare your
            installation package and are not retained afterward.{" "}
            <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
        </div>
      </section>

      {/* ---------- Authentication and trust boundaries ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Trust</Eyebrow>
          <H2 className="mt-3">Authentication and trust boundaries</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Every device that joins your network is explicitly authorized
            by your own administrator before it can connect — KEEP&apos;s
            Control Plane has no ability to authorize a device on your
            network by itself. <Citation source={KEEP_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Your team signs in through your own identity provider — Active
            Directory, LDAP, or single sign-on — or through a KEEP-native
            account. Multi-factor authentication is available for KEEP
            accounts. <Citation source={KEEP_SECURITY_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- Network footprint ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Network Footprint</Eyebrow>
          <H2 className="mt-3">What touches your firewall, and what doesn&apos;t</H2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Spoke connections — outbound only</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A Spoke always initiates its own connection outward to reach
                your Hub. There is nothing to open on a client site&apos;s
                firewall for this — outbound traffic is already permitted by
                default on virtually any network.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Hub enrollment — one scoped exception</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                If your Hub runs on-premises behind NAT and you&apos;re
                enrolling a Spoke at a different physical site, one specific
                port must be forwarded so that new Spoke can reach it and
                enroll using a single-use key issued only for it. The port
                itself isn&apos;t yet IP-restricted to that Spoke — that&apos;s
                a planned hardening step, not shipped today. Leaving that port
                open between onboardings, or closing and reopening it each
                time, is your call. Without it forwarded, the Spoke still
                works — it falls back to a direct connection instead of
                joining the mesh.
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-ink-soft">
            <Citation source={KEEP_ARCHITECTURE} />
          </p>
        </div>
      </section>

      {/* ---------- Data storage responsibilities ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Backups</Eyebrow>
          <H2 className="mt-3">Data storage responsibilities</H2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Encrypted, owner-held</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Your Hub&apos;s database is backed up automatically, and
                backups are encrypted so that only you — or whoever you
                designate — can decrypt them. KEEP does not hold a copy of
                your backups and plays no role in your disaster recovery.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Your responsibility</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                You are responsible for securely storing your own recovery
                key and for keeping a copy of your backup somewhere other
                than the Hub itself.
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-ink-soft">
            <Citation source={KEEP_BACKUP_DR} />
          </p>
        </div>
      </section>

      {/* ---------- Evaluation removal process ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Evaluation Removal</Eyebrow>
          <H2 className="mt-3">Evaluation removal process</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            If you decide not to continue after evaluating KEEP, a complete
            removal procedure exists for the software and data on your own
            infrastructure, and it has been verified against a real
            evaluation installation.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
          <div className="mt-4">
            <Callout variant="unknown">
              What happens to your account and licensing record on
              KEEP&apos;s own Control Plane after you remove your local
              deployment is not yet documented. We will update this page
              once that process is defined.
            </Callout>
          </div>
        </div>
      </section>

      {/* ---------- Open questions ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Open Questions</Eyebrow>
          <H2 className="mt-3">Evaluation considerations</H2>
          <div className="mt-4">
            <Callout variant="unknown">
              This page will be extended as open questions are resolved and
              confirmed. If you have a specific security or data-handling
              question not answered here, ask before you evaluate — see{" "}
              <Link href="/evaluate" className="underline underline-offset-2">
                Evaluate KEEP
              </Link>
              .
            </Callout>
          </div>
        </div>
      </section>

      {/* ---------- Continue ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <H2>Continue</H2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
            <Link
              href="/evaluate"
              className="rounded-sm border border-stone-200 bg-paper-raised p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium text-ink">Evaluate KEEP</span>
              <p className="mt-1 text-sm text-ink-soft">
                What evaluating KEEP actually involves, start to finish.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
