type Status = "current" | "planned" | "unknown";

const STATUS_LABEL: Record<Status, string> = {
  current: "Current Capability",
  planned: "Planned Capability",
  unknown: "Unknown",
};

const STATUS_CLASSES: Record<Status, string> = {
  current: "text-status-current-fg bg-status-current-bg",
  planned: "text-status-planned-fg bg-status-planned-bg",
  unknown: "text-status-unknown-fg bg-status-unknown-bg border border-dashed border-current",
};

export function CapabilityStatus({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-xs uppercase tracking-wide ${STATUS_CLASSES[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
