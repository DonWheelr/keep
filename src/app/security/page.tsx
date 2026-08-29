import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { Callout } from "@/components/callout";
import {
  KEEP_ARCHITECTURE,
  KEEP_CONTROL_PLANE,
  KEEP_SECURITY_ARCHITECTURE,
  KEEP_EVALUATION_PROGRAM,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Security & Data Ownership",
  description:
    "What data KEEP keeps local, what reaches the Control Plane, how authentication and trust boundaries work, and how to remove an evaluation deployment.",
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
            your own infrastructure, what KEEP as a vendor ever sees, and
            how to remove an evaluation deployment if you decide not to
            continue.
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
              The software KEEP installs at a client site keeps a local
              working cache of what it discovers — not a system of record.
              It discovers and polls devices on that network, then sends
              what it finds to your own Hub — the central server your
              organization runs. That local cache is fully re-derivable
              from a fresh scan; the authoritative copy always lives on
              your Hub.{" "}
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
            If you manage more than one client site, what a Spoke discovers
            about that client&apos;s network — device inventories,
            incidents, scan results — is reported only to your own Hub,
            never to KEEP directly, and never to another organization&apos;s
            Hub. Separately, each Hub and each Spoke also keeps its own
            direct connection to KEEP&apos;s Control Plane for license and
            entitlement enforcement — a different channel, carrying none of
            that operational network data. See{" "}
            <span className="italic">What reaches the Control Plane</span>,
            below. <Citation source={KEEP_ARCHITECTURE} />
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
            account, licensing, deployment-identity, and device-enforcement
            information. It does not receive the operational data your
            network monitoring produces: no device inventories, no
            incidents, no scan results.{" "}
            <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            The device-enforcement piece: each Hub and each Spoke
            periodically checks in with the Control Plane directly — not
            relayed through each other — confirming license/entitlement
            status and, once per boot, a network fingerprint (the gateway
            device&apos;s MAC address and the MAC addresses of neighboring
            devices on that segment) used only to detect a cloned or
            duplicated device. Nothing about what those neighboring devices
            are or do is included — just their MAC addresses.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
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
            Your team signs in one of three ways: through your own Active
            Directory or LDAP-speaking directory, through your
            organization&apos;s OIDC/SSO identity provider (Microsoft Entra
            ID, Google Workspace, Okta, JumpCloud, and similar), or through a
            KEEP-native local account.{" "}
            <Citation source={KEEP_SECURITY_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Signing in through your directory or SSO provider establishes who
            someone is — it does not, by itself, grant them any authority
            inside KEEP. KEEP controls authorization separately: what a
            signed-in person can actually do is determined by the KEEP
            role(s) associated with their account, never by which sign-in
            method they used to get in.{" "}
            <Citation source={KEEP_SECURITY_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            For OIDC/SSO sign-ins specifically: the first time someone signs in with an
            email address KEEP doesn&apos;t already recognize, KEEP creates
            an inactive record and denies sign-in — authenticating with the
            identity provider does not activate the account. A Director or
            Senior Technician has to actively approve the person before that
            account can access anything. Your identity provider vouching for
            an email is never, by itself, enough to get in.{" "}
            <Citation source={KEEP_SECURITY_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Multi-factor authentication applies to KEEP-native local
            accounts. Active Directory/LDAP and OIDC/SSO sign-ins are
            governed by your own identity provider&apos;s security policy,
            not KEEP&apos;s. <Citation source={KEEP_SECURITY_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- Authorization: roles and permissions ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Authorization</Eyebrow>
          <H2 className="mt-3">Technician roles and permissions</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Once someone is signed in, what they can actually do inside KEEP
            is controlled by the role or roles a Director or Senior
            Technician has assigned them — not by which sign-in method they
            used. A technician can hold more than one role at the same time;
            what they&apos;re able to do is the combination of everything
            every role they hold grants. There&apos;s no deny-list and no
            conflicting-role restriction in this version — assigning a role
            only ever adds access, never removes it.{" "}
            <Citation source={KEEP_SECURITY_ARCHITECTURE} />
          </Body>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Predefined roles</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Technician, Senior Technician, and Director are the general
                access levels most organizations start with — each is
                defined as its own ordinary role, like any other, and each
                happens to include everything the level before it does, plus
                more. If your team was already using KEEP, existing
                technicians carried forward into whichever of these three
                matches what they already had, automatically — no one lost
                or gained anything in the transition.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Composable roles</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Remote-Access Specialist, Onboarding Coordinator, Compliance
                Reviewer, and Security Administrator each grant one specific
                area of access and can be assigned in any combination,
                alongside a predefined role or on their own — for example, a
                technician who only ever handles new client onboarding
                doesn&apos;t need to also be made a Senior Technician just to
                get that one capability.
              </p>
            </div>
          </div>
          <Body className="mt-6 max-w-[62ch] text-ink-soft">
            When your team signs in through Active Directory or an
            LDAP-speaking directory, KEEP can also map your existing
            directory groups directly to KEEP roles — belonging to more than
            one mapped group grants more than one KEEP role. That mapping is
            re-checked every time the person signs in: remove them from the
            directory group and KEEP revokes the role that group granted on
            their next login. A role a KEEP administrator assigned directly,
            rather than through a directory group, is never affected by that
            directory-driven check — the two coexist independently, and
            either can grant the same role without the other one deleting
            it. <Citation source={KEEP_SECURITY_ARCHITECTURE} />
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
                your Hub, and separately initiates its own outward
                connection directly to KEEP&apos;s Control Plane for its
                device-enforcement heartbeat. There is nothing to open on a
                client site&apos;s firewall for either — outbound traffic is
                already permitted by default on virtually any network.
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
