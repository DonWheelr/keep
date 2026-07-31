export type CitationSource =
  | { type: "internal-doc"; label: string }
  | { type: "repo-path"; label: string; path: string }
  | { type: "external"; label: string; href: string };

export function Citation({ source }: { source: CitationSource }) {
  return (
    <span className="text-xs text-ink-soft">
      {" (Source: "}
      {source.type === "internal-doc" && (
        <cite className="not-italic">{source.label}</cite>
      )}
      {source.type === "repo-path" && (
        <>
          <cite className="not-italic">{source.label}</cite>,{" "}
          <code className="font-mono text-[0.9em]">{source.path}</code>
        </>
      )}
      {source.type === "external" && (
        <a
          href={source.href}
          className="text-ink-soft underline underline-offset-2 hover:text-ink"
        >
          {source.label}
        </a>
      )}
      {") "}
    </span>
  );
}
