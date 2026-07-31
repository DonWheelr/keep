import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { CapabilityStatus } from "@/components/capability-status";
import { Citation } from "@/components/citation";
import { KEEP_ARCHITECTURE } from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "What KEEP does today, grouped by area, each item labeled Current, Planned, or Unknown.",
};

function Capability({
  status,
  name,
  description,
}: {
  status: "current" | "planned" | "unknown";
  name: string;
  description: string;
}) {
  return (
    <li className="border-t border-stone-200 py-4 first:border-t-0">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-medium text-ink">{name}</span>
        <CapabilityStatus status={status} />
      </div>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
        {description} <Citation source={KEEP_ARCHITECTURE} />
      </p>
    </li>
  );
}

export default function CapabilitiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Eyebrow>Capabilities</Eyebrow>
      <H1 className="mt-2">Capabilities</H1>

      <Body className="mt-6">
        Every capability below is labeled Current, Planned, or Unknown. No
        entry ships without a label. Current means confirmed working;
        Planned means designed and built but not yet confirmed against
        real-world conditions; Unknown is used only where a capability&apos;s
        status is genuinely unresolved.
      </Body>
      <div className="mt-4 flex flex-wrap gap-2">
        <CapabilityStatus status="current" />
        <CapabilityStatus status="planned" />
        <CapabilityStatus status="unknown" />
      </div>

      <H2 className="mt-12">Network & Device Discovery</H2>
      <ul>
        <Capability
          status="current"
          name="Automated network discovery"
          description="Scans a client network to identify devices and services, tuned to avoid disrupting live traffic on production networks."
        />
        <Capability
          status="current"
          name="Passive device discovery"
          description="Identifies devices present on a network segment without actively probing them."
        />
      </ul>

      <H2 className="mt-12">Device Health & Power Monitoring</H2>
      <ul>
        <Capability
          status="current"
          name="UPS and power monitoring"
          description="Tracks battery status, runtime, and power events for supported UPS hardware."
        />
        <Capability
          status="planned"
          name="Temperature monitoring"
          description="Monitors server and network-closet temperature via supported sensors."
        />
        <Capability
          status="planned"
          name="Printer monitoring"
          description="Tracks toner, paper, and error states on networked printers."
        />
        <Capability
          status="planned"
          name="Storage and disk monitoring"
          description="Tracks disk health and capacity on supported Windows devices."
        />
        <Capability
          status="planned"
          name="Unauthorized device detection on switch ports"
          description="Flags a device connecting to a previously idle switch port."
        />
      </ul>

      <H2 className="mt-12">Compliance & Security Tracking</H2>
      <ul>
        <Capability
          status="current"
          name="Antivirus compliance tracking"
          description="Tracks AV coverage and definition currency across monitored devices."
        />
        <Capability
          status="current"
          name="Patch and end-of-life exposure reporting"
          description="Classifies devices by patch and operating-system support status, including Windows end-of-life exposure."
        />
        <Capability
          status="current"
          name="Identity conflict detection"
          description="Cross-references directory and endpoint activity to surface stale accounts and related identity mismatches."
        />
        <Capability
          status="planned"
          name="Vulnerability scanning"
          description="Runs network vulnerability scans and links findings to incident tracking for remediation evidence."
        />
      </ul>

      <H2 className="mt-12">Asset & License Management</H2>
      <ul>
        <Capability
          status="current"
          name="Hardware asset register"
          description="Tracks hardware inventory, warranty, and end-of-life dates, flagging coverage gaps."
        />
        <Capability
          status="current"
          name="Software license and agreement tracking"
          description="Tracks license seat utilization and vendor agreement expiration with configurable advance alerts."
        />
        <Capability
          status="current"
          name="Device decommission records"
          description="Produces a signed record of asset removal, including data sanitization method and sign-off."
        />
      </ul>

      <H2 className="mt-12">Incident Management & Reporting</H2>
      <ul>
        <Capability
          status="current"
          name="Incident detection and alerting"
          description="Opens and tracks incidents from device conditions, with escalation and response logging."
        />
        <Capability
          status="current"
          name="SLA tracking"
          description="Tracks response and resolution deadlines against configurable per-client service targets."
        />
        <Capability
          status="current"
          name="Compliance and operational reporting"
          description="Produces recurring reports, including site assessment, quarterly compliance, and end-of-life exposure reports, with reports available to support relevant IT general control evidence."
        />
        <Capability
          status="current"
          name="Knowledge base"
          description="Captures resolution guidance tied to specific device conditions, drawn from prior incident work."
        />
      </ul>

      <H2 className="mt-12">Notifications & Integrations</H2>
      <ul>
        <Capability
          status="current"
          name="Chat notifications"
          description="Sends incident and SLA-breach notifications to a configured team chat channel."
        />
        <Capability
          status="planned"
          name="Professional Services Automation (PSA) integration"
          description="Pushes qualifying incidents to a connected PSA platform."
        />
        <Capability
          status="planned"
          name="Cloud-managed network integration"
          description="Reads device and connectivity status from a cloud-managed network platform."
        />
        <Capability
          status="planned"
          name="Browser-based remote access"
          description="Opens an authenticated remote session (RDP, SSH, or VNC) to a monitored device directly from the browser."
        />
      </ul>

      <Body className="mt-12">
        For how sign-in, multi-factor authentication, and trust boundaries
        work, see{" "}
        <Link href="/security" className="underline underline-offset-2">
          Security &amp; Data Ownership
        </Link>
        . For the architecture behind these capabilities, see{" "}
        <Link href="/how-it-works" className="underline underline-offset-2">
          How KEEP Works
        </Link>
        .
      </Body>

      <H2 className="mt-12">Continue to Evaluate KEEP</H2>
      <Body className="mt-4">
        For what evaluating KEEP actually involves, start to finish, see{" "}
        <Link href="/evaluate" className="underline underline-offset-2">
          Evaluate KEEP
        </Link>
        .
      </Body>
    </div>
  );
}
