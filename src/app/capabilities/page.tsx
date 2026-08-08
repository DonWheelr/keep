import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { CapabilityStatus } from "@/components/capability-status";
import { Citation, type CitationSource } from "@/components/citation";
import { KEEP_ARCHITECTURE, KEEP_MERLIN_ARCHITECTURE } from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "What KEEP does today, grouped by area, each item labeled Validated, Evaluation, Planned, or Unknown.",
};

function Capability({
  status,
  name,
  description,
  source = KEEP_ARCHITECTURE,
}: {
  status: "validated" | "evaluation" | "planned" | "unknown";
  name: string;
  description: string;
  source?: CitationSource;
}) {
  return (
    <li className="border-t border-stone-200 py-4 first:border-t-0">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-medium text-ink">{name}</span>
        <CapabilityStatus status={status} />
      </div>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
        {description} <Citation source={source} />
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
        KEEP is intentionally conservative when classifying capabilities. A
        capability is only marked Validated after it has been proven in the
        environment that matters for that capability. Capabilities marked
        Evaluation are fully implemented and available today but are still
        gathering real-world validation through the Founding Evaluator
        Program.
      </Body>
      <Body className="mt-4">
        Every capability below is labeled Validated, Evaluation, Planned, or
        Unknown.
      </Body>
      <Body className="mt-4">
        Validated means proven in the environment that matters for it — real
        hardware or a live deployment for hardware-dependent capabilities,
        real persisted data through the intended workflow for software-only
        ones.
      </Body>
      <Body className="mt-4">
        Evaluation means fully implemented and usable today, but not yet
        proven in a real target environment. This is exactly what the
        Founding Evaluator Program exists to validate.
      </Body>
      <Body className="mt-4">
        Planned means designed, scaffolded, or partially built, but not yet
        usable end-to-end.
      </Body>
      <Body className="mt-4">
        Unknown is used only where the evidence itself is insufficient to
        classify.
      </Body>
      <div className="mt-4 flex flex-wrap gap-2">
        <CapabilityStatus status="validated" />
        <CapabilityStatus status="evaluation" />
        <CapabilityStatus status="planned" />
        <CapabilityStatus status="unknown" />
      </div>

      <H2 className="mt-12">Network & Device Discovery</H2>
      <ul>
        <Capability
          status="validated"
          name="Automated network discovery"
          description="Scans a client network to identify devices and services, tuned to avoid disrupting live traffic on production networks."
        />
        <Capability
          status="validated"
          name="Passive device discovery"
          description="Identifies devices present on a network segment without actively probing them."
        />
        <Capability
          status="validated"
          name="Docker container and topology discovery"
          description="Identifies containers running on a Docker host and maps the network relationships between them."
        />
      </ul>

      <H2 className="mt-12">Connectivity & Infrastructure</H2>
      <ul>
        <Capability
          status="validated"
          name="Self-hosted secure tunnel networking"
          description="Provides a self-hosted, encrypted tunnel connecting each Spoke to its Hub, without relying on a third-party VPN provider."
        />
      </ul>

      <H2 className="mt-12">Device Health & Power Monitoring</H2>
      <ul>
        <Capability
          status="validated"
          name="NUT UPS monitoring"
          description="Tracks battery status, runtime, and power events for UPS hardware polled via Network UPS Tools (NUT)."
        />
        <Capability
          status="evaluation"
          name="APC/SNMP UPS monitoring"
          description="Tracks APC UPS status via SNMP trap ingestion, including on-battery and low-battery events."
        />
        <Capability
          status="planned"
          name="Temperature monitoring"
          description="Monitors server and network-closet temperature via supported sensors."
        />
        <Capability
          status="evaluation"
          name="Printer monitoring"
          description="Tracks toner, paper, and error states on networked printers."
        />
        <Capability
          status="evaluation"
          name="Storage and disk monitoring"
          description="Tracks disk health and capacity on supported Windows devices."
        />
        <Capability
          status="evaluation"
          name="Unauthorized device detection on switch ports"
          description="Flags a device connecting to a previously idle switch port."
        />
        <Capability
          status="evaluation"
          name="Uptime Kuma availability monitoring"
          description="Tracks uptime and availability for monitored services and devices via an integrated availability-monitoring instance."
        />
      </ul>

      <H2 className="mt-12">Compliance & Security Tracking</H2>
      <ul>
        <Capability
          status="validated"
          name="Antivirus compliance tracking"
          description="Tracks AV coverage and definition currency across monitored devices."
        />
        <Capability
          status="validated"
          name="Patch and end-of-life exposure reporting"
          description="Classifies devices by patch and operating-system support status, including Windows end-of-life exposure."
        />
        <Capability
          status="validated"
          name="Identity conflict detection"
          description="Cross-references directory and endpoint activity to surface stale accounts and related identity mismatches."
        />
        <Capability
          status="evaluation"
          name="Vulnerability scanning"
          description="Runs network vulnerability scans and links findings to incident tracking for remediation evidence."
        />
      </ul>

      <H2 className="mt-12">Asset & License Management</H2>
      <ul>
        <Capability
          status="validated"
          name="Hardware asset register"
          description="Tracks hardware inventory, warranty, and end-of-life dates, flagging coverage gaps."
        />
        <Capability
          status="validated"
          name="Software license and agreement tracking"
          description="Tracks license seat utilization and vendor agreement expiration with configurable advance alerts."
        />
        <Capability
          status="validated"
          name="Device decommission records"
          description="Produces a signed record of asset removal, including data sanitization method and sign-off."
        />
        <Capability
          status="evaluation"
          name="Repair vs. replace decision support"
          description="Compares incident repair cost against replacement cost to support hardware lifecycle decisions."
        />
      </ul>

      <H2 className="mt-12">Incident Management & Reporting</H2>
      <ul>
        <Capability
          status="validated"
          name="Incident detection and alerting"
          description="Opens and tracks incidents from device conditions, with escalation and response logging."
        />
        <Capability
          status="validated"
          name="SLA tracking"
          description="Tracks response and resolution deadlines against configurable per-client service targets."
        />
        <Capability
          status="validated"
          name="Compliance and operational reporting"
          description="Produces recurring reports, including site assessment, quarterly compliance, and end-of-life exposure reports, with reports available to support relevant IT general control evidence."
        />
        <Capability
          status="validated"
          name="Knowledge base"
          description="Captures resolution guidance tied to specific device conditions, drawn from prior incident work."
        />
        <Capability
          status="evaluation"
          name="SOX IT general controls reporting"
          description="Maps vulnerability management, endpoint protection, access monitoring, and change control activity to SOX IT general control categories."
        />
        <Capability
          status="evaluation"
          name="Merlin AI device diagnosis"
          description="Reviews a device's open incidents, work log, and event history to produce a plain-English diagnosis. Analysis only — it does not take action."
          source={KEEP_MERLIN_ARCHITECTURE}
        />
        <Capability
          status="evaluation"
          name="Onboarding Scan Analysis"
          description="Reads every completed onboarding scan for a new client — the firewall and every discovered device — and correlates the findings into a four-part brief: Must Fix Before Onboarding, Defer Post-Onboarding, Investigate Further, and Overall Assessment. Built and available today; deprioritized relative to Device Diagnosis and Incident Coordination for the current evaluation focus."
          source={KEEP_MERLIN_ARCHITECTURE}
        />
        <Capability
          status="evaluation"
          name="Incident Coordination"
          description="Reads an incident's full thread and device state to suggest next steps, synthesize status for a Director, and prompt technicians who haven't logged an update."
          source={KEEP_MERLIN_ARCHITECTURE}
        />
      </ul>

      <H2 className="mt-12">Notifications & Integrations</H2>
      <ul>
        <Capability
          status="evaluation"
          name="Chat notifications"
          description="Sends incident and SLA-breach notifications to a configured team chat channel."
        />
        <Capability
          status="evaluation"
          name="Professional Services Automation (PSA) integration"
          description="Pushes qualifying incidents to a connected PSA platform."
        />
        <Capability
          status="evaluation"
          name="Cloud-managed network integration"
          description="Reads device and connectivity status from a cloud-managed network platform."
        />
        <Capability
          status="evaluation"
          name="Browser-based remote access"
          description="Opens an authenticated remote session (RDP, SSH, or VNC) to a device on the same network as your Hub, directly from the browser. A device at a remote client site behind a Spoke isn't reachable this way yet."
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
