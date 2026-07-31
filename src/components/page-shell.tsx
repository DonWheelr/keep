import { Eyebrow, H1 } from "@/components/typography";

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
      <Eyebrow>{section}</Eyebrow>
      <H1 className="mt-2">{title}</H1>
      <div className="mt-8 rounded-sm border border-dashed border-stone-300 p-6 text-sm text-ink-soft">
        {children ?? "Content pending review. Page structure only."}
      </div>
    </div>
  );
}
