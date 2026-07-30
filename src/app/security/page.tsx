import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Security & Data Ownership" };

export default function SecurityPage() {
  return (
    <PageShell section="Security" title="Security & Data Ownership" />
  );
}
