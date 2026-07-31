type Status = "current" | "planned" | "unknown";

const STATUS_WORD: Record<Status, string> = {
  current: "Current",
  planned: "Planned",
  unknown: "Unknown",
};

const STATUS_CLASSES: Record<Status, string> = {
  current: "text-status-current-fg bg-status-current-bg",
  planned: "text-status-planned-fg bg-status-planned-bg",
  unknown: "text-status-unknown-fg bg-status-unknown-bg border border-dashed border-current",
};

export function CapabilityStatus({
  status,
  noun = "Capability",
}: {
  status: Status;
  noun?: string;
}) {
  const label =
    status === "unknown" ? STATUS_WORD.unknown : `${STATUS_WORD[status]} ${noun}`;

  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-xs uppercase tracking-wide ${STATUS_CLASSES[status]}`}
    >
      {label}
    </span>
  );
}
