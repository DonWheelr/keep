import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import {
  KEEP_ARCHITECTURE,
  KEEP_CONTROL_PLANE,
  KEEP_DATA_HANDLING,
  KEEP_EVALUATION_PROGRAM,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What KEEP collects, what it doesn't, what stays on your own infrastructure, and what a small number of third-party services KEEP relies on ever see.",
};

export default function PrivacyPage() {
  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Privacy</Eyebrow>
          <H1 className="mt-3">Privacy Policy</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            This describes what information KEEP collects across this
            website and the separate Control Plane application, what it
            doesn&apos;t collect, and what stays entirely on infrastructure
            you or your MSP control. It matches the same evidence
            discipline as the rest of this site — see{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security &amp; Data Ownership
            </Link>{" "}
            for the full architectural detail this page summarizes for a
            privacy audience specifically.
          </Body>
        </div>
      </section>

      {/* ---------- Scope ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Scope</Eyebrow>
          <H2 className="mt-3">What this policy covers</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Three distinct surfaces, each handled differently:
          </Body>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">This website</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Public, informational, static. It collects nothing about
                you directly.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">
                KEEP&apos;s Control Plane
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The separate account, licensing, and entitlement service
                this policy covers in the most detail below.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
              <h3 className="font-medium text-ink">
                Your KEEP deployment
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Software that runs on your own or your MSP&apos;s
                infrastructure — see{" "}
                <Link
                  href="/security"
                  className="underline underline-offset-2"
                >
                  Security &amp; Data Ownership
                </Link>{" "}
                for what it does and doesn&apos;t send anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- What this site collects ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>This Website</Eyebrow>
          <H2 className="mt-3">What this website collects</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Nothing, directly. This site has no forms and no analytics or
            tracking scripts. It links out to KEEP&apos;s Control Plane for
            account creation and sign-in — the sections below cover what
            that separate application collects and the one cookie it sets.
          </Body>
        </div>
      </section>

      {/* ---------- Cookies and sessions ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Cookies &amp; Sessions</Eyebrow>
          <H2 className="mt-3">Cookies, and how sign-in works</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            This website sets no cookies of its own — no analytics,
            advertising, or tracking cookies, and none from any third
            party.
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            When you sign in on KEEP&apos;s Control Plane, it sets exactly
            one cookie: a signed, HttpOnly session cookie that keeps you
            signed in for up to 8 hours. It exists solely to authenticate
            you to your own account — it isn&apos;t used for tracking,
            advertising, or analytics, and it&apos;s the only cookie the
            Control Plane sets. <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
        </div>
      </section>

      {/* ---------- Account registration ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Account Registration</Eyebrow>
          <H2 className="mt-3">Information collected when you create an account</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Creating an account on KEEP&apos;s Control Plane collects:
          </Body>
          <ul className="mt-4 max-w-[62ch] list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft">
            <li>Your organization / account name</li>
            <li>Account type (MSP or Solo)</li>
            <li>Your email address</li>
            <li>A password you choose</li>
            <li>
              Optionally, a checkbox signal that you&apos;re interested in
              evaluating KEEP, with the time it was recorded
            </li>
          </ul>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            When you register, KEEP takes the password you supply and
            immediately converts it into a one-way bcrypt hash before
            anything is stored. The plaintext password you typed is never
            saved — not in your account record, not anywhere else in
            KEEP&apos;s systems.
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            That&apos;s the complete set collected at registration.{" "}
            <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
        </div>
      </section>

      {/* ---------- What KEEP receives from your deployment ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Your Deployment</Eyebrow>
          <H2 className="mt-3">
            What KEEP&apos;s Control Plane receives from a running deployment
          </H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Once a Hub or Spoke is running, it periodically checks in with
            the Control Plane directly to confirm license and entitlement
            status, and — once per boot — reports a network fingerprint: the
            MAC address of your gateway device and the MAC addresses of
            neighboring devices on that same network segment, used only to
            detect a cloned or duplicated device. Nothing about what those
            neighboring devices are or do is included, only their MAC
            addresses. <Citation source={KEEP_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            <strong className="font-medium text-ink">
              KEEP&apos;s Control Plane does not receive your device
              inventory, incident history, scan results, or any other
              operational data your deployment produces.
            </strong>{" "}
            That data stays on your own Hub&apos;s database, which you or
            your MSP control. <Citation source={KEEP_CONTROL_PLANE} />
          </Body>
        </div>
      </section>

      {/* ---------- Optional AI processing ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Optional AI Features</Eyebrow>
          <H2 className="mt-3">
            Merlin(Intelligence) — only if you turn it on
          </H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            If you enable Merlin(Intelligence), specific features send only
            the descriptive context that feature needs to an external AI
            provider — Anthropic (Claude) by default, or a provider you
            configure yourself. Credentials are never included, and your
            full device inventory or database is never sent. If
            Merlin(Intelligence) is disabled, nothing leaves your
            environment for AI purposes at all — this is an architectural
            guarantee, not a setting KEEP has to remember to honor.{" "}
            <Citation source={KEEP_DATA_HANDLING} />
          </Body>
        </div>
      </section>

      {/* ---------- Third-party infrastructure ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Third Parties</Eyebrow>
          <H2 className="mt-3">Infrastructure KEEP relies on</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            A small, fixed set of infrastructure providers process account
            and billing data on KEEP&apos;s behalf, each for a specific
            purpose:
          </Body>
          <ul className="mt-4 max-w-[62ch] list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft">
            <li>This website is hosted on Vercel.</li>
            <li>
              KEEP&apos;s Control Plane application runs on Railway, backed
              by a Neon-hosted PostgreSQL database.
            </li>
            <li>
              Paid subscriptions are processed by Stripe. KEEP does not
              receive or store your card number — Stripe collects payment
              details directly.
            </li>
            <li>
              Account verification emails are sent through Resend.
            </li>
            <li>
              If you enable Merlin(Intelligence), Anthropic (or your own
              configured AI provider) receives the descriptive context
              described above.
            </li>
          </ul>
          <p className="mt-3 text-xs text-ink-soft">
            <Citation source={KEEP_CONTROL_PLANE} />
          </p>
        </div>
      </section>

      {/* ---------- Retention ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Retention</Eyebrow>
          <H2 className="mt-3">How long information is kept</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            We keep your account information for as long as your account
            remains active. We haven&apos;t formalized a broader
            data-retention schedule beyond that yet.
          </Body>
        </div>
      </section>

      {/* ---------- Evaluation-specific note ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Evaluators</Eyebrow>
          <H2 className="mt-3">If you&apos;re evaluating KEEP</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Data collection during an evaluation works the same way it does
            for any account — nothing about being in evaluation changes
            what stays local or what reaches KEEP. See{" "}
            <Link href="/evaluate" className="underline underline-offset-2">
              Evaluate KEEP
            </Link>{" "}
            for the full evaluation lifecycle, and{" "}
            <Link href="/security" className="underline underline-offset-2">
              Security &amp; Data Ownership
            </Link>{" "}
            for the removal process if you decide not to continue.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
        </div>
      </section>

      {/* ---------- Your choices ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Your Choices</Eyebrow>
          <H2 className="mt-3">Accessing or updating your information</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            You can review and update your account information directly on
            your Control Plane account dashboard. There is no self-serve
            way to delete your account today.
          </Body>
        </div>
      </section>

      {/* ---------- Children's privacy ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Children&apos;s Privacy</Eyebrow>
          <H2 className="mt-3">Not directed to children</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            KEEP is a business tool for managed service providers and IT
            teams. It is not directed to children, and we do not knowingly
            collect information from anyone under 16.
          </Body>
        </div>
      </section>

      {/* ---------- Changes ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Changes</Eyebrow>
          <H2 className="mt-3">Changes to this policy</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            If this policy changes in a way that materially affects how we
            handle your information, we&apos;ll update this page and change
            the date below.
          </Body>
          <p className="mt-4 text-sm text-ink-soft">
            Last updated: September 16, 2026
          </p>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Contact</Eyebrow>
          <H2 className="mt-3">Questions about this policy</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            For privacy questions or requests, contact{" "}
            <a
              href="mailto:privacy@keepmsp.io"
              className="underline underline-offset-2"
            >
              privacy@keepmsp.io
            </a>
            .
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            See also{" "}
            <Link href="/terms" className="underline underline-offset-2">
              Terms of Use
            </Link>
            , which governs use of this website and the KEEP service.
          </Body>
        </div>
      </section>
    </div>
  );
}
