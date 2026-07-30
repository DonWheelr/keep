import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Documentation" };

export default function DocsPage() {
  return (
    <PageShell section="Documentation" title="Documentation">
      Content pending review. Long-form evidence-based documentation will be
      authored in MDX under <code>src/content/docs/</code>.
    </PageShell>
  );
}
