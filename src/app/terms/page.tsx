import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import {
  KEEP_ARCHITECTURE,
  KEEP_EVALUATION_PROGRAM,
  KEEP_SECURITY_ARCHITECTURE,
} from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing use of this website, KEEP's Control Plane, and the Evaluation Program — including account responsibility, environment/backup responsibility, and evaluation-to-paid conversion.",
};

export default function TermsPage() {
  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Terms</Eyebrow>
          <H1 className="mt-3">Terms of Use</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            These terms govern your use of this website, KEEP&apos;s Control
            Plane (account, licensing, and entitlement service), and the
            KEEP software you deploy under an account or evaluation. By
            creating an account or using KEEP, you agree to these terms and
            to the{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            , which is incorporated here by reference.
          </Body>
        </div>
      </section>

      {/* ---------- Accounts ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Accounts</Eyebrow>
          <H2 className="mt-3">Account registration and responsibility</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            You must provide accurate information when creating an account
            and keep it current. You&apos;re responsible for keeping your
            password confidential and for all activity that happens under
            your account. Tell us promptly if you believe your account has
            been accessed without authorization.
          </Body>
        </div>
      </section>

      {/* ---------- The service ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>The Service</Eyebrow>
          <H2 className="mt-3">What you&apos;re getting</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            An active account gives you a license to use KEEP&apos;s
            software and Control Plane services according to your account
            tier — it doesn&apos;t transfer ownership of the software to
            you. KEEP is installed as a Hub (and, for multi-site
            deployments, one Spoke per additional client site) on hardware
            KEEP ships, your own hardware, or a virtual machine.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- Evaluation access ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Evaluation Access</Eyebrow>
          <H2 className="mt-3">
            Evaluation is staff-provisioned and time-bounded
          </H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Creating an account does not by itself grant Evaluation access.
            The Evaluation Program is staff-provisioned by design — a
            specific MSP or IT team is selected and issued an Evaluation ID
            and deployment token directly, rather than unlocking
            automatically. An evaluation runs on a fixed-term license issued
            specifically for evaluation, not a production commitment.{" "}
            <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            Moving from evaluation to a paid subscription is a deliberate,
            separate step that reuses the same deployment rather than
            starting over — it does not happen automatically, and it
            isn&apos;t available until your evaluation term ends. If your
            evaluation term ends before you convert, monitoring screens
            become unavailable until you do; you can still sign in to
            upgrade. <Citation source={KEEP_EVALUATION_PROGRAM} />
          </Body>
        </div>
      </section>

      {/* ---------- Your environment ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Your Environment</Eyebrow>
          <H2 className="mt-3">
            You&apos;re responsible for your own deployment and its backups
          </H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            You&apos;re responsible for the infrastructure your KEEP
            deployment runs on, for authorizing which devices join your own
            network, and for the technicians and roles you grant access to
            KEEP within your organization.{" "}
            <Citation source={KEEP_SECURITY_ARCHITECTURE} />
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            KEEP does not provide built-in backup or disaster recovery for
            the durable data store your deployment uses. As the deployment
            owner, you&apos;re responsible for protecting and backing up
            that infrastructure and storage, the same way you would for any
            other system of record you operate.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- Acceptable use ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Acceptable Use</Eyebrow>
          <H2 className="mt-3">What you agree not to do</H2>
          <ul className="mt-4 max-w-[62ch] list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft">
            <li>Use KEEP for any unlawful purpose.</li>
            <li>
              Attempt to gain unauthorized access to KEEP&apos;s Control
              Plane, another customer&apos;s account or data, or KEEP&apos;s
              underlying systems.
            </li>
            <li>
              Circumvent, disable, or interfere with KEEP&apos;s licensing,
              entitlement, or device-enforcement mechanisms.
            </li>
            <li>
              Reverse engineer, decompile, or disassemble KEEP&apos;s
              software, except to the extent applicable law expressly
              permits despite this restriction.
            </li>
            <li>
              Resell or sublicense access to KEEP without our prior written
              agreement.
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Intellectual property ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Intellectual Property</Eyebrow>
          <H2 className="mt-3">Ownership</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            KEEP and its underlying software remain our property (or that
            of our licensors). These terms grant you a limited, non-exclusive
            license to use KEEP under your account, nothing more. You retain
            ownership of the data your own deployment discovers and
            generates — device inventories, incidents, scan results, and the
            rest of what stays on your own infrastructure.{" "}
            <Citation source={KEEP_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- Fees ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Fees</Eyebrow>
          <H2 className="mt-3">Payment</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            Evaluation access is provided at no charge for its term. Paid
            subscriptions are billed and processed through Stripe; your use
            of Stripe&apos;s payment processing is also subject to
            Stripe&apos;s own terms. KEEP does not receive or store your
            card number.
          </Body>
        </div>
      </section>

      {/* ---------- Changes and termination ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Changes &amp; Termination</Eyebrow>
          <H2 className="mt-3">Service changes and ending your account</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            We may modify or discontinue features of the website or Control
            Plane over time. We don&apos;t currently commit to a specific
            uptime or service-level guarantee.
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            If you decide not to continue, a complete removal procedure
            exists for the KEEP software and data on your own
            infrastructure. <Citation source={KEEP_EVALUATION_PROGRAM} />{" "}
            What happens to your account and licensing record on
            KEEP&apos;s own Control Plane after that isn&apos;t formalized
            yet.
          </Body>
        </div>
      </section>

      {/* ---------- Warranty and liability ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Warranty &amp; Liability</Eyebrow>
          <H2 className="mt-3">Disclaimer and limitation of liability</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            KEEP is provided &quot;as is&quot; and &quot;as available,&quot;
            without warranties of any kind, express or implied, except
            where applicable law doesn&apos;t allow that exclusion. To the
            maximum extent permitted by applicable law, we won&apos;t be
            liable for indirect, incidental, or consequential damages
            arising from your use of KEEP.
          </Body>
        </div>
      </section>

      {/* ---------- Governing law ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Governing Law</Eyebrow>
          <H2 className="mt-3">Which law applies</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            These Terms are governed by the laws of the State of Arizona,
            without regard to its conflict-of-laws principles.
          </Body>
        </div>
      </section>

      {/* ---------- Changes to these terms ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Changes</Eyebrow>
          <H2 className="mt-3">Changes to these terms</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            If we make a material change to these terms, we&apos;ll update
            this page and change the date below.
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
          <H2 className="mt-3">Questions about these terms</H2>
          <Body className="mt-3 max-w-[62ch] text-ink-soft">
            For questions about these Terms, contact{" "}
            <a
              href="mailto:legal@keepmsp.io"
              className="underline underline-offset-2"
            >
              legal@keepmsp.io
            </a>
            .
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            See also our{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </Body>
        </div>
      </section>
    </div>
  );
}
