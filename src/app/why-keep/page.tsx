import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Why KEEP" };

export default function WhyKeepPage() {
  return <PageShell section="Why KEEP" title="Why KEEP" />;
}
