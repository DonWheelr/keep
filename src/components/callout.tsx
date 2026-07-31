import type { ReactNode } from "react";
import { Eyebrow } from "@/components/typography";

export type CalloutVariant = "reasonable-inference" | "unknown";

const VARIANT_LABEL: Record<CalloutVariant, string> = {
  "reasonable-inference": "Reasonable Inference",
  unknown: "Unknown",
};

const VARIANT_BORDER: Record<CalloutVariant, string> = {
  "reasonable-inference": "border-solid",
  unknown: "border-dashed",
};

export function Callout({
  variant,
  children,
}: {
  variant: CalloutVariant;
  children: ReactNode;
}) {
  return (
    <div
      role="note"
      className={`my-4 rounded-sm border ${VARIANT_BORDER[variant]} border-stone-300 bg-paper-raised p-4`}
    >
      <Eyebrow>{VARIANT_LABEL[variant]}</Eyebrow>
      <div className="mt-2 text-sm leading-relaxed text-ink">{children}</div>
    </div>
  );
}
