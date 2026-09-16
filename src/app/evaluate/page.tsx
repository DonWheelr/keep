import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { Callout } from "@/components/callout";
import { CapabilityStatus } from "@/components/capability-status";
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
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Evaluate</Eyebrow>
          <H1 className="mt-3">Evaluate KEEP</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            This page explains what evaluating KEEP actually involves, from
            before you start to how you&apos;d end it, so there&apos;s
            nothing left to guess. It is a procedural reference, not a sales
            pitch.
          </Body>
        </div>
      </section>

      {/* ---------- Is KEEP right for your MSP ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Fit</Eyebrow>
          <H2 className="mt-3">Is KEEP right for your MSP?</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            KEEP is built for managed service providers monitoring more than
            one client network, and for IT teams monitoring a single network
            of their own. It is not a helpdesk, a backup solution, or a
            compliance-certifying authority.{" "}
            <Citation source={KEEP_ARCHITECTURE} /> For the complete picture
            of who KEEP is designed for, and who it isn&apos;t, see{" "}
            <Link href="/why-keep" className="underline underline-offset-2">
              Why KEEP
            </Link>
            .
          </Body>
        </div>
      </section>

      {/* ---------- Evaluation Program vs. production ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>The Evaluation Program</Eyebrow>
          <H2 className="mt-3">
            Staff-provisioned, time-bounded, not a production commitment.
          </H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            An evaluation is its own bounded arrangement, not a quiet start
            to a paid deployment. It runs on a fixed-term license issued
            specifically for evaluation, and nothing about being in
            evaluation changes what data stays local or what reaches KEEP —
            see{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security &amp; Data Ownership
            </Link>
            . <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Moving to a paid subscription is a deliberate, separate step —
            it reuses the same deployment rather than starting over, but
            it does not happen automatically, and it isn&apos;t available
            until your evaluation term ends.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            If your evaluation term ends before you convert, the
            monitoring screens become unavailable until you do — you can
            still sign in to upgrade.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
        </div>
      </section>

      {/* ---------- Evaluation prerequisites ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Prerequisites</Eyebrow>
          <H2 className="mt-3">Evaluation prerequisites</H2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Hub deployment</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                At least 4 CPU cores, 8 GB of RAM, and 100 GB of disk.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">
                Spoke deployment <span className="text-ink-soft">(single client site)</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                At least 2 CPU cores, 4 GB of RAM, and 32 GB of storage.
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-ink-soft">
            <Citation source={KEEP_ARCHITECTURE} />
          </p>

          <Body className="mt-6 max-w-[62ch] text-ink-soft">
            KEEP runs as a containerized workload on a supported
            Linux/Docker host, physical or virtual — it isn&apos;t tied to
            a specific hardware vendor. The supported evaluation
            installation path today is Ubuntu 22.04 LTS with Docker and
            the documented Node v24 (via NVM) prerequisite the installer
            expects. Other stable Linux/Docker hosts may work, but
            they&apos;re outside the supported evaluation path.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>

          <Body className="mt-6 max-w-[62ch] text-ink-soft">
            Outbound internet access is required to activate and register
            the deployment before it begins normal operation.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Before installation begins, KEEP issues an Evaluation ID and a
            deployment token directly to you — this isn&apos;t a
            self-service signup. See{" "}
            <Link href="/how-it-works" className="underline underline-offset-2">
              How KEEP Works
            </Link>{" "}
            for how this fits into the broader evaluation flow.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
        </div>
      </section>

      {/* ---------- What is installed ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Installation</Eyebrow>
          <H2 className="mt-3">What is installed</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            A KEEP Hub is installed as a software deployment, either on
            hardware KEEP ships or on your own hardware or virtual machine.
            If you&apos;re monitoring more than one client site, one Spoke
            is installed at each additional site.{" "}
            <Citation source={KEEP_ARCHITECTURE} /> Nothing is installed on
            the individual devices KEEP monitors. See{" "}
            <Link href="/how-it-works" className="underline underline-offset-2">
              How KEEP Works
            </Link>{" "}
            for the full architecture.
          </Body>
        </div>
      </section>

      {/* ---------- What happens during evaluation ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>During Evaluation</Eyebrow>
          <H2 className="mt-3">What happens during evaluation</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Installation activates and registers the deployment before
            anything else happens — see{" "}
            <Link href="/how-it-works" className="underline underline-offset-2">
              How KEEP Works
            </Link>{" "}
            for that step in detail. Once registration succeeds, the
            deployment&apos;s first scan of a client network is treated as
            unverified evidence, not an accepted baseline, until a qualified
            person reviews and approves it.{" "}
            <Citation source={KEEP_ARCHITECTURE} /> Normal monitoring begins
            after that review.
          </Body>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-medium text-ink">
                  Device Diagnosis
                </h3>
                <CapabilityStatus status="evaluation" />
              </div>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-medium text-ink">
                  Incident Coordination
                </h3>
                <CapabilityStatus status="evaluation" />
              </div>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-medium text-ink">
                  Onboarding Scan Analysis
                </h3>
                <CapabilityStatus status="evaluation" />
              </div>
            </div>
          </div>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            All three of Merlin&apos;s AI-assisted surfaces are fully
            implemented but still gathering real-world validation, which is
            exactly what the Founding Evaluator Program exists to do. See{" "}
            <Link href="/merlin" className="underline underline-offset-2">
              Merlin
            </Link>{" "}
            for what it is, and{" "}
            <Link href="/capabilities" className="underline underline-offset-2">
              Capabilities
            </Link>{" "}
            for current status.
          </Body>
        </div>
      </section>

      {/* ---------- What data is collected ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Data</Eyebrow>
          <H2 className="mt-3">What data is collected</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Data collection during an evaluation works the same way it does
            in normal operation — nothing about being in evaluation changes
            what stays local or what reaches KEEP.{" "}
            <Citation source={KEEP_ARCHITECTURE} /> For the complete account
            of what stays on your own infrastructure and what reaches
            KEEP&apos;s Control Plane, see{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security &amp; Data Ownership
            </Link>
            .
          </Body>
        </div>
      </section>

      {/* ---------- Support ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Support</Eyebrow>
          <H2 className="mt-3">What support to expect</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Installation is designed to complete without KEEP&apos;s
            engineering team needing to intervene.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
          <div className="mt-4">
            <Callout variant="unknown">
              Specific support channels and response expectations during an
              evaluation aren&apos;t documented anywhere available to us
              yet. This page will be updated once that&apos;s defined.
            </Callout>
          </div>
        </div>
      </section>

      {/* ---------- Ending the evaluation ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Ending an Evaluation</Eyebrow>
          <H2 className="mt-3">Ending the evaluation</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            If you decide not to continue, a complete removal procedure
            exists for the software and data on your own infrastructure,
            and it has been verified against a real evaluation
            installation. <Citation source={KEEP_EVALUATION_PROGRAM} /> For
            the full removal process — including the one open question
            about your account record on KEEP&apos;s Control Plane — see{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security &amp; Data Ownership
            </Link>
            .
          </Body>
        </div>
      </section>

      {/* ---------- Next steps ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Next Steps</Eyebrow>
          <H2 className="mt-3">How an evaluation actually starts</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            The Evaluation Program is staff-provisioned by design, not a
            self-service signup — a specific MSP or IT team is selected and
            issued an Evaluation ID and deployment token directly, rather
            than requesting one through a form.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            A public{" "}
            <Link href="/sign-up" className="underline underline-offset-2">
              Sign Up
            </Link>{" "}
            now exists, where you can create a KEEP account and optionally
            flag interest in evaluating. Creating that account does not by
            itself grant Evaluation access — see Sign Up for exactly what it
            does and doesn&apos;t do.
          </Body>
          <div className="mt-4">
            <Callout variant="unknown">
              There is no published turnaround time for staff to act on that
              interest yet. Treat it as a deliberate, staff-mediated step
              rather than an instant unlock.
            </Callout>
          </div>
        </div>
      </section>
    </div>
  );
}
