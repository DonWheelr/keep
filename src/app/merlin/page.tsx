import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { CapabilityStatus } from "@/components/capability-status";
import {
  KEEP_MERLIN_ARCHITECTURE,
  KEEP_ARCHITECTURE,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Merlin",
  description:
    "Merlin is the single AI identity inside KEEP — what it is, the philosophy that governs it, and how it's kept accountable to a human decision-maker.",
};

const principles = [
  {
    num: "01",
    title: "Credentials never reach Merlin's reasoning.",
    body: "When a human authorizes an action that actually requires one, the credential is entered directly into KEEP and used by KEEP's own server code — Merlin's reasoning and any credentialed action are always two separate steps.",
  },
  {
    num: "02",
    title: "No standing authority of its own.",
    body: "Merlin only ever acts within whatever the requesting or authorizing person is already permitted to do — it never assumes broader access than that, and a Director decides, surface by surface, how much authority Merlin is granted.",
  },
  {
    num: "03",
    title: "Some actions are never permitted.",
    body: "Altering or deleting an audit record, for example — Merlin is never permitted to take, regardless of who asks or what authority they hold.",
  },
  {
    num: "04",
    title: "Changing anything is logged, no exception.",
    body: "Any action that changes something outside KEEP's own logs — shutting down a port, for example — is recorded as part of KEEP's permanent record. Producing information, like a diagnosis or a brief, doesn't carry that same requirement, since nothing on the network changed.",
  },
];

const faqs = [
  {
    q: "Is Merlin a chatbot?",
    a: "No. Merlin is an identity that appears across KEEP's existing screens — it doesn't compete with the rest of the product as a separate way of working, it reasons about the same real state those screens show.",
  },
  {
    q: "What AI does Merlin use, and can that change?",
    a: "The underlying provider is an implementation detail that can change without changing what Merlin is, how it's governed, or what it's allowed to do.",
  },
  {
    q: "Can Merlin take action on my network without my approval?",
    a: "No. Merlin is an advisor by default and only ever executes an action when a human has authorized it, in the moment, every time.",
  },
  {
    q: "Does Merlin ever see my passwords or keys?",
    a: "No. Merlin's reasoning only ever receives descriptive information — never a credential.",
  },
];

export default function MerlinPage() {
  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Merlin</Eyebrow>
          <H1 className="mt-3">Merlin</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            This page explains what Merlin is and the principles that govern
            it — not a feature list or a status report. For what Merlin can
            actually do today, and how thoroughly each surface has been
            validated, see{" "}
            <Link href="/capabilities" className="underline underline-offset-2">
              Capabilities
            </Link>
            .
          </Body>
        </div>
      </section>

      {/* ---------- What Merlin Is ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>What Merlin Is</Eyebrow>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Body className="text-ink-soft">
              Merlin is not a chatbot added to KEEP. It&apos;s the single AI
              identity inside KEEP — the same name, the same authority model,
              and the same voice wherever it appears, so a Director or
              technician never has to learn a new mental model of what
              Merlin is allowed to do when it shows up on a new screen.{" "}
              <Citation source={KEEP_MERLIN_ARCHITECTURE} />
            </Body>
            <Body className="text-ink-soft">
              Merlin exists to make the person who&apos;s already responsible
              for a decision faster and better-informed at making it — not
              to make the decision itself. That&apos;s consistent with
              KEEP&apos;s own positioning: KEEP is not a certification
              authority and does not substitute for human judgment, and
              Merlin inherits that constraint directly.{" "}
              <Citation source={KEEP_MERLIN_ARCHITECTURE} />
            </Body>
          </div>
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Philosophy</Eyebrow>
          <div className="mt-6 rounded-sm border border-stone-200 bg-paper-raised p-8">
            <p className="text-2xl font-semibold text-ink">
              Merlin discovers. The Director decides.
            </p>
            <Body className="mt-4 text-ink-soft">
              True on every surface Merlin appears on. The corollary governs
              every interaction without exception: Merlin is an advisor by
              default, and an executor only when a human authorizes it.{" "}
              <Citation source={KEEP_MERLIN_ARCHITECTURE} />
            </Body>
          </div>
        </div>
      </section>

      {/* ---------- Independent of Any Single AI Provider ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Independent of Any Single AI Provider</Eyebrow>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Merlin is KEEP&apos;s governed orchestration and policy layer —
            not the underlying language model. The AI provider behind
            Merlin&apos;s reasoning is a replaceable implementation detail,
            not part of Merlin&apos;s identity. Replacing that provider never
            changes Merlin&apos;s identity, governance, authority, or its
            audit requirements — a provider swap is an implementation
            update, not a governance event.{" "}
            <Citation source={KEEP_MERLIN_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            That independence extends to how it&apos;s purchased: bring your
            own provider account, or use KEEP-managed AI, at the same
            price either way. The provider is a configuration choice, not a
            product dependency.{" "}
            <Citation source={KEEP_MERLIN_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- Where Merlin Shows Up ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Where Merlin Shows Up</Eyebrow>
          <H2 className="mt-3">Two surfaces today, a third built and waiting.</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Merlin&apos;s current focus is Device Diagnosis and Incident
            Coordination. Onboarding Scan Analysis is also built and
            available, but deprioritized relative to the other two for the
            current evaluation focus.
          </Body>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium text-ink">Device Diagnosis</h3>
                <CapabilityStatus status="evaluation" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Reviews a device&apos;s open incidents, work log, and event
                history to produce a plain-English diagnosis. Analysis
                only — it does not take action.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium text-ink">Incident Coordination</h3>
                <CapabilityStatus status="evaluation" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Reads an incident&apos;s full thread to suggest next steps
                and keep a Director informed, logged permanently to the
                incident record.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium text-ink">
                  Onboarding Scan Analysis
                </h3>
                <CapabilityStatus status="evaluation" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Reads every completed onboarding scan for a new client and
                correlates the findings into a prioritized remediation
                brief.
              </p>
              <p className="mt-2 text-xs text-ink-soft">
                Built and available today; deprioritized for the current
                evaluation focus.
              </p>
            </div>
          </div>

          <Body className="mt-6 text-sm text-ink-soft">
            For current status and how each has been validated, see{" "}
            <Link href="/capabilities" className="underline underline-offset-2">
              Capabilities
            </Link>
            . <Citation source={KEEP_MERLIN_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- How Merlin Is Governed ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>How Merlin Is Governed</Eyebrow>
          <H2 className="mt-3">Authority always belongs to the human.</H2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {principles.map((p) => (
              <li key={p.num} className="grid grid-cols-[28px_1fr] gap-3">
                <span className="font-mono text-xs text-accent">{p.num}</span>
                <span>
                  <strong className="text-ink">{p.title}</strong>{" "}
                  <span className="text-sm text-ink-soft">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-ink-soft">
            <Citation source={KEEP_MERLIN_ARCHITECTURE} />
          </p>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-stone-200 bg-stone-200 sm:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="bg-paper-raised p-6">
                <h3 className="font-medium text-ink">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </div>
            ))}
            <div className="bg-paper-raised p-6 sm:col-span-2">
              <h3 className="font-medium text-ink">
                What can Merlin do today?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                See{" "}
                <Link href="/capabilities" className="underline underline-offset-2">
                  Capabilities
                </Link>{" "}
                for the current, conservatively classified list.
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            <Citation source={KEEP_MERLIN_ARCHITECTURE} />
          </p>
        </div>
      </section>

      {/* ---------- Continue ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <H2>Continue</H2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/how-it-works"
              className="rounded-sm border border-stone-200 bg-paper-raised p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium text-ink">How KEEP Works</span>
              <p className="mt-1 text-sm text-ink-soft">
                The architecture behind KEEP as a whole.{" "}
                <Citation source={KEEP_ARCHITECTURE} />
              </p>
            </Link>
            <Link
              href="/capabilities"
              className="rounded-sm border border-stone-200 bg-paper-raised p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium text-ink">Capabilities</span>
              <p className="mt-1 text-sm text-ink-soft">
                What Merlin and the rest of KEEP can do today, and how
                thoroughly each capability has been validated.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
