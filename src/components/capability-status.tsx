type Status = "validated" | "evaluation" | "planned" | "unknown" | "current";

const STATUS_WORD: Record<Status, string> = {
  validated: "Validated",
  evaluation: "Evaluation",
  planned: "Planned",
  unknown: "Unknown",
  // "current" predates the four-state capability model and is kept only
  // for the Documentation page's unrelated "page exists yet?" usage —
  // renders identically to "validated" so that page needs no change.
  current: "Current",
};

const STATUS_CLASSES: Record<Status, string> = {
  validated: "text-status-validated-fg bg-status-validated-bg",
  evaluation: "text-status-evaluation-fg bg-status-evaluation-bg",
  planned: "text-status-planned-fg bg-status-planned-bg",
  unknown: "text-status-unknown-fg bg-status-unknown-bg border border-dashed border-current",
  current: "text-status-validated-fg bg-status-validated-bg",
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
