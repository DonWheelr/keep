import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "How KEEP Works" };

export default function HowItWorksPage() {
  return <PageShell section="How It Works" title="How KEEP Works" />;
}
