import Link from "next/link";
import { Wordmark, Tagline } from "@/components/logo";
import { Eyebrow, H2, Body, Caption } from "@/components/typography";
import { CapabilityStatus } from "@/components/capability-status";
import { Citation } from "@/components/citation";
import {
  KEEP_ARCHITECTURE,
  KEEP_MERLIN_ARCHITECTURE,
  KEEP_EVALUATION_PROGRAM,
} from "@/lib/citation-sources";

const explore = [
  {
    href: "/capabilities",
    label: "Capabilities",
    description: "What KEEP does today, labeled Validated, Evaluation, Planned, or Unknown.",
  },
  {
    href: "/merlin",
    label: "Merlin",
    description: "The single AI identity inside KEEP, and how it's governed.",
  },
  {
    href: "/evaluate",
    label: "Evaluate KEEP",
    description: "What to expect from an evaluation, start to finish.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Eyebrow>Vendor-agnostic MSP security &amp; compliance platform</Eyebrow>
          <h1 className="mt-3 max-w-[16ch] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            One view of every device on every client network.
          </h1>
          <Body className="mt-6 max-w-[56ch] text-lg text-ink-soft">
            MSPs run each client through a scatter of disconnected tools — one
            for monitoring, another for compliance evidence, another for
            assets, another for identity hygiene. KEEP replaces the scatter
            with a single platform and a continuous, defensible record of
            what was found and what was done about it.
          </Body>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/evaluate"
              className="rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-paper-raised transition-colors hover:bg-accent-strong"
            >
              Evaluate KEEP
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-sm border border-stone-300 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-stone-400"
            >
              See how it works
            </Link>
          </div>

          {/* Illustrative Merlin output — explicitly labeled, not a live badge */}
          <div className="mt-12 max-w-2xl rounded-sm border border-stone-200 bg-paper-raised">
            <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3">
              <span className="font-mono text-xs text-ink-soft">
                NORTHGATE LOGISTICS — DOMAIN CONTROLLER
              </span>
              <CapabilityStatus status="evaluation" />
            </div>
            <div className="px-5 py-5 font-mono text-sm leading-relaxed text-ink-soft">
              <p>
                <strong className="text-ink">OPEN INCIDENTS:</strong>{" "}
                UPS_ON_BATTERY (raised 4 min ago, 1 log entry)
              </p>
              <p className="mt-2">
                <strong className="text-ink">UPS STATUS:</strong>{" "}
                <span className="text-accent">
                  battery=41%, runtime=18min remaining
                </span>
              </p>
              <p className="mt-2">
                <strong className="text-ink">OTHER DEVICES UNREACHABLE:</strong>{" "}
                None — this device appears to be the only one affected.
              </p>
              <p className="mt-4">
                Most likely: utility power loss to the server-room UPS.
                Battery is discharging under load with no other device on
                this client currently affected, which rules out a wider
                circuit failure.
              </p>
            </div>
          </div>
          <Caption className="mt-2 max-w-2xl">
            Illustrative example of a Merlin AI device diagnosis, not a live
            result. Device Diagnosis is fully implemented and available
            today, still gathering real-world validation — see{" "}
            <Link href="/capabilities" className="underline underline-offset-2">
              Capabilities
            </Link>{" "}
            for current status. <Citation source={KEEP_MERLIN_ARCHITECTURE} />
          </Caption>
        </div>
      </section>

      {/* ---------- Architecture ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="max-w-[62ch]">
            <Eyebrow>Architecture</Eyebrow>
            <H2 className="mt-3">
              Deterministic first. AI where it earns its place.
            </H2>
            <Body className="mt-3 text-ink-soft">
              KEEP is built in three layers. Only one of them depends on an
              AI provider being reachable — and nothing else in the platform
              notices if it isn&apos;t. <Citation source={KEEP_ARCHITECTURE} />
            </Body>
          </div>

          <div className="mt-10 grid gap-4">
            <div className="grid gap-4 rounded-sm border border-stone-200 bg-paper-raised p-6 sm:grid-cols-[160px_1fr]">
              <div>
                <div className="text-lg font-semibold text-ink">KEEP</div>
                <span className="mt-2 inline-block rounded-sm bg-status-validated-bg px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-wide text-status-validated-fg">
                  Foundation
                </span>
              </div>
              <Body className="text-ink-soft">
                The deterministic platform: monitoring, compliance evidence,
                incident management, asset tracking, identity, environmental
                and power monitoring, and reporting. Runs completely on its
                own — no AI dependency anywhere in onboarding, deployment,
                monitoring, or the audit trail.
              </Body>
            </div>

            <div className="grid gap-4 rounded-sm border border-stone-200 bg-paper-raised p-6 sm:grid-cols-[160px_1fr]">
              <div>
                <div className="text-lg font-semibold text-ink">
                  Merlin Governance
                </div>
                <span className="mt-2 inline-block rounded-sm bg-status-validated-bg px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-wide text-status-validated-fg">
                  Included
                </span>
              </div>
              <Body className="text-ink-soft">
                The governance layer built into KEEP: policy enforcement,
                audit ownership, and rule-boundary checks that decide what
                any future automation is and isn&apos;t allowed to do. Ships
                with every install, at no additional cost, with no AI
                dependency at evaluation time.
              </Body>
            </div>

            <div className="grid gap-4 rounded-sm border border-stone-200 bg-paper-raised p-6 sm:grid-cols-[160px_1fr]">
              <div>
                <div className="text-lg font-semibold text-ink">
                  Merlin Narrative Layer
                </div>
                <span className="mt-2 inline-block rounded-sm bg-status-evaluation-bg px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-wide text-status-evaluation-fg">
                  AI-assisted
                </span>
              </div>
              <Body className="text-ink-soft">
                The narrative layer on top: reads what KEEP already gathered
                and explains it in plain language. Today that means a ranked
                device diagnosis and coordination guidance on an active
                incident — both fully built, still gathering real-world
                validation.
              </Body>
              <Body className="mt-3 text-ink-soft">
                A prioritized brief after an onboarding scan is also built,
                though it&apos;s not part of the current evaluation focus. On
                every surface, Merlin proposes; a person decides.{" "}
                <Citation source={KEEP_MERLIN_ARCHITECTURE} />
              </Body>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- What KEEP watches ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>What KEEP watches</Eyebrow>
          <H2 className="mt-3">
            The instruments an MSP actually needs in one place.
          </H2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Compliance &amp; monitoring</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A health score per client, cross-client pattern detection, and
                a full incident command view the moment something goes
                critical.
              </p>
            </div>
            <div className="bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Assets &amp; identity</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Hardware register, IT dependencies, warranty-versus-end-of-life
                gaps, and identity conflicts flagged before they become
                findings.
              </p>
            </div>
            <div className="bg-paper-raised p-6">
              <h3 className="font-medium text-ink">UPS &amp; power</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                UPS runtime and battery-degradation trending, watched
                continuously today. Temperature monitoring is built but not
                yet wired to a live sensor feed — see{" "}
                <Link href="/capabilities" className="underline underline-offset-2">
                  Capabilities
                </Link>
                .
              </p>
            </div>
            <div className="bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Network monitor</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Critical infrastructure — firewalls, core switches, domain
                controllers, UPS — with plain-English device and incident
                status for every client.
              </p>
            </div>
            <div className="bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Reporting</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Site assessments, quarterly compliance, and EOL exposure
                reports, generated from real data, not assembled by hand.
              </p>
            </div>
            <div className="bg-paper-raised p-6">
              <h3 className="font-medium text-ink">Decommissions &amp; records</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A signed chain of custody from first discovery through
                disposal, so &quot;what happened to this device&quot; always
                has an answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Merlin ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow>Merlin</Eyebrow>
              <H2 className="mt-3">Merlin explains. It never decides.</H2>
              <Body className="mt-3 text-ink-soft">
                Merlin is not a chatbot bolted onto KEEP. It&apos;s the same
                governed identity everywhere it appears, held to the same
                rules on every surface.
              </Body>
              <ul className="mt-6 space-y-4">
                <li className="grid grid-cols-[22px_1fr] gap-3 text-sm text-ink-soft">
                  <span className="font-mono text-xs text-accent">01</span>
                  <span>
                    <strong className="text-ink">No standing authority.</strong>{" "}
                    Merlin only ever acts within what the technician or
                    Director using it is already permitted to do.
                  </span>
                </li>
                <li className="grid grid-cols-[22px_1fr] gap-3 text-sm text-ink-soft">
                  <span className="font-mono text-xs text-accent">02</span>
                  <span>
                    <strong className="text-ink">Propose, then a person approves.</strong>{" "}
                    Every action Merlin suggests is confirmed by a human
                    before anything happens — no exceptions in Version 1.
                  </span>
                </li>
                <li className="grid grid-cols-[22px_1fr] gap-3 text-sm text-ink-soft">
                  <span className="font-mono text-xs text-accent">03</span>
                  <span>
                    <strong className="text-ink">Provider-independent.</strong>{" "}
                    Which AI model answers is a configuration choice, not
                    part of what Merlin is. Bring your own provider account,
                    or use KEEP&apos;s, at the same price either way.
                  </span>
                </li>
              </ul>
              <Body className="mt-6 text-xs text-ink-soft">
                <Citation source={KEEP_MERLIN_ARCHITECTURE} />
              </Body>
            </div>

            <div className="space-y-4">
              <div className="rounded-sm border border-stone-200 bg-paper-raised p-5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-medium text-ink">Device Diagnosis</h4>
                  <CapabilityStatus status="evaluation" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Reads open incidents, recent work log entries, event
                  history, and UPS or temperature state for a device, then
                  ranks the most likely explanations with the evidence behind
                  each one.
                </p>
              </div>
              <div className="rounded-sm border border-stone-200 bg-paper-raised p-5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-medium text-ink">Incident Coordination</h4>
                  <CapabilityStatus status="evaluation" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Reads the full incident thread across every technician
                  working it and suggests what&apos;s already been tried and
                  what to do next — logged permanently to the incident
                  record.
                </p>
              </div>
              <div className="rounded-sm border border-stone-200 bg-paper-raised p-5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-medium text-ink">
                    Onboarding Scan Analysis
                  </h4>
                  <CapabilityStatus status="evaluation" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Reads every completed onboarding scan for a new client —
                  the firewall and every discovered device — and correlates
                  the findings into a four-part remediation brief.
                </p>
                <p className="mt-2 text-xs text-ink-soft">
                  Built and available today; deprioritized relative to
                  Device Diagnosis and Incident Coordination for the current
                  evaluation focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Trust ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Trust</Eyebrow>
          <H2 className="mt-3">
            No lock-in, on the platform or on the AI behind it.
          </H2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-stone-200 bg-stone-200 sm:grid-cols-2">
            <div className="bg-paper-raised p-6">
              <div className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                Software foundation
              </div>
              <p className="mt-2 text-ink">
                <strong>No open-source licensing blocker</strong> was
                identified anywhere in KEEP&apos;s own codebase during a
                direct, package-by-package audit of every dependency.{" "}
                <Citation source={KEEP_ARCHITECTURE} />
              </p>
            </div>
            <div className="bg-paper-raised p-6">
              <div className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                AI provider
              </div>
              <p className="mt-2 text-ink">
                Bring your own AI provider account, or use KEEP&apos;s —{" "}
                <strong>same price either way.</strong> The model behind
                Merlin is a configuration choice, not a dependency.{" "}
                <Citation source={KEEP_MERLIN_ARCHITECTURE} />
              </p>
            </div>
            <div className="bg-paper-raised p-6">
              <div className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                Data handling
              </div>
              <p className="mt-2 text-ink">
                Device inventory, incidents, and credentials stay on your own
                Hub, always. When Merlin&apos;s narrative layer is on, it
                sees only the descriptive context one request needs —{" "}
                <strong>never a credential, key, or token</strong>, by
                construction. <Citation source={KEEP_MERLIN_ARCHITECTURE} />
              </p>
            </div>
            <div className="bg-paper-raised p-6">
              <div className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                Deployment
              </div>
              <p className="mt-2 text-ink">
                Runs at a client site or aggregated across an MSP&apos;s whole
                book of business — <strong>one platform</strong>, not a
                different product per deployment shape.{" "}
                <Citation source={KEEP_ARCHITECTURE} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Evaluation journey ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Evaluation Program</Eyebrow>
          <H2 className="mt-3">From first look to a working deployment.</H2>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <div className="font-mono text-xs text-accent">01</div>
              <h4 className="mt-2 font-medium text-ink">Request</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Tell us about your book of business. Evaluation access is
                still provisioned directly, not self-serve — though you can{" "}
                <Link href="/sign-up" className="underline underline-offset-2">
                  create a KEEP account
                </Link>{" "}
                yourself any time.
              </p>
            </li>
            <li>
              <div className="font-mono text-xs text-accent">02</div>
              <h4 className="mt-2 font-medium text-ink">Deploy</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Stand up a Hub for your MSP or a Spoke at a client site — the
                same install, the same platform, either way.
              </p>
            </li>
            <li>
              <div className="font-mono text-xs text-accent">03</div>
              <h4 className="mt-2 font-medium text-ink">Evaluate</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Full platform access from the start. Merlin&apos;s
                AI-dependent features need a provider key configured
                before they&apos;ll respond — everything else needs no
                separate setup step.
              </p>
            </li>
            <li>
              <div className="font-mono text-xs text-accent">04</div>
              <h4 className="mt-2 font-medium text-ink">Decide</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Move to a paid subscription once your evaluation term
                ends. No pressure while you&apos;re still finding out if
                it&apos;s a fit.
              </p>
            </li>
          </ol>
          <p className="mt-4 text-xs text-ink-soft">
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-sm border border-stone-200 bg-paper-raised p-8">
            <div>
              <h3 className="text-lg font-medium text-ink">
                Evaluate KEEP on your own network.
              </h3>
              <p className="mt-2 max-w-[40ch] text-sm text-ink-soft">
                Staff-provisioned, no charge during evaluation, Merlin
                included from day one.
              </p>
            </div>
            <Link
              href="/evaluate"
              className="shrink-0 rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-paper-raised transition-colors hover:bg-accent-strong"
            >
              Evaluate KEEP
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Continue exploring ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-8 space-y-1">
            <Wordmark />
            <Tagline />
          </div>
          <H2>Continue exploring</H2>
          <nav aria-label="Continue exploring" className="mt-6">
            <ol className="grid gap-3 sm:grid-cols-3">
              {explore.map((step, i) => (
                <li key={step.href}>
                  <Link
                    href={step.href}
                    className="flex h-full flex-col gap-1 rounded-sm border border-stone-200 bg-paper-raised px-4 py-3 transition-colors hover:border-accent"
                  >
                    <span className="font-mono text-xs text-ink-soft">
                      {i + 1}
                    </span>
                    <span className="font-medium text-ink">{step.label}</span>
                    <span className="text-sm text-ink-soft">
                      {step.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
    </div>
  );
}
