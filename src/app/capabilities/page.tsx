import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { CapabilityStatus } from "@/components/capability-status";

export const metadata: Metadata = { title: "Capabilities" };

export default function CapabilitiesPage() {
  return (
    <PageShell section="Capabilities" title="Capabilities">
      <div className="space-y-3">
        <p>
          Every capability listed on this page will be labeled with one of the
          following statuses. No entry ships without a label.
        </p>
        <div className="flex flex-wrap gap-2">
          <CapabilityStatus status="current" />
          <CapabilityStatus status="planned" />
          <CapabilityStatus status="unknown" />
        </div>
      </div>
    </PageShell>
  );
}
