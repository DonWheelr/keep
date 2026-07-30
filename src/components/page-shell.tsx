export function PageShell({
  title,
  section,
  children,
}: {
  title: string;
  section: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
        {section}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <div className="mt-8 rounded-sm border border-dashed border-stone-300 p-6 text-sm text-ink-soft">
        {children ?? "Content pending review. Page structure only."}
      </div>
    </div>
  );
}
