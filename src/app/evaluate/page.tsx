import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Evaluate KEEP" };

export default function EvaluatePage() {
  return (
    <PageShell section="Evaluate" title="Evaluate KEEP">
      Content pending review. A future evaluation application form on this
      page may call the Control Plane API; no such integration exists yet.
    </PageShell>
  );
}
