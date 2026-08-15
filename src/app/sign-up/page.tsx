import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { Callout } from "@/components/callout";
import { controlPlaneUrl } from "@/lib/control-plane-url";
import {
  KEEP_CONTROL_PLANE,
  KEEP_EVALUATION_PROGRAM,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create a KEEP account and what happens next — including the distinction between an account and Evaluation access.",
};

export default function SignUpPage() {
  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Sign Up</Eyebrow>
          <H1 className="mt-3">Create a KEEP account</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            This page explains what creating an account actually does, and —
            just as importantly — what it doesn&apos;t do on its own. It is a
            procedural reference, not a sales pitch, matching the same
            standard as{" "}
            <Link href="/evaluate" className="underline underline-offset-2">
              Evaluate KEEP
            </Link>
            .
          </Body>
        </div>
      </section>

      {/* ---------- What an account is ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Account Creation</Eyebrow>
          <H2 className="mt-3">What signing up actually creates</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Signing up creates a real account on KEEP&apos;s Control
            Plane — the separate service that handles accounts, licensing,
            and deployment identity, distinct from any KEEP deployment
            itself. This is a self-service step: email, a password, and an
            organization name is all it takes.{" "}
            <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Once your account exists, you land on an account dashboard where
            a paid tier can be selected directly, sized to how many client
            networks you expect to manage.{" "}
            <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
        </div>
      </section>

      {/* ---------- What it doesn't do ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Important Distinction</Eyebrow>
          <H2 className="mt-3">
            An account is not the same thing as Evaluation access
          </H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Creating an account here does not automatically grant Evaluation
            access. KEEP&apos;s Evaluation Program is staff-provisioned by
            design — a specific MSP or IT team is issued an Evaluation ID
            and deployment token directly, rather than getting one
            automatically at signup.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} /> If evaluating is
            what you&apos;re after, see{" "}
            <Link href="/evaluate" className="underline underline-offset-2">
              Evaluate KEEP
            </Link>{" "}
            for what that involves.
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            The sign-up form includes an optional checkbox — &quot;I&apos;m
            interested in evaluating KEEP&quot; — that flags this directly
            to KEEP staff at the moment you create your account.{" "}
            <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
          <div className="mt-4">
            <Callout variant="unknown">
              There is no published turnaround time for staff to act on
              that signal yet. Treat it as a deliberate, staff-mediated
              step rather than an instant unlock.
            </Callout>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Get Started</Eyebrow>
          <H2 className="mt-3">Create your account</H2>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-sm border border-stone-200 bg-paper-raised p-8">
            <div>
              <h3 className="text-lg font-medium text-ink">
                KEEP Control Plane
              </h3>
              <p className="mt-2 max-w-[40ch] text-sm text-ink-soft">
                Sign up or sign in on KEEP&apos;s own account portal — a
                separate application from this site.
              </p>
            </div>
            <a
              href={controlPlaneUrl}
              className="shrink-0 rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-paper-raised transition-colors hover:bg-accent-strong"
            >
              Go to KEEP Control Plane
            </a>
          </div>
          <p className="mt-3 text-xs text-ink-soft">
            <Citation source={KEEP_CONTROL_PLANE} />
          </p>
        </div>
      </section>

      {/* ---------- Continue ---------- */}
      <section className="border-t border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <H2>Continue</H2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/evaluate"
              className="rounded-sm border border-stone-200 bg-paper-raised p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium text-ink">Evaluate KEEP</span>
              <p className="mt-1 text-sm text-ink-soft">
                What evaluating KEEP actually involves, start to finish.
              </p>
            </Link>
            <Link
              href="/security"
              className="rounded-sm border border-stone-200 bg-paper-raised p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium text-ink">
                Security &amp; Data Ownership
              </span>
              <p className="mt-1 text-sm text-ink-soft">
                What KEEP&apos;s Control Plane does and doesn&apos;t
                receive.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
