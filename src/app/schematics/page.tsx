import type { Metadata } from "next";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { KEEP_ARCHITECTURE, KEEP_MERLIN_ARCHITECTURE } from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Schematics",
  description:
    "Technical diagrams of how KEEP is actually built — Hub/Spoke topology, authentication and sign-in, Merlin's governance and decision model, signal intelligence, backup/DR, and Spoke trust — sourced from KEEP's own approved architecture documentation.",
};

function SchematicCard({
  name,
  description,
  href,
  diagramCount,
}: {
  name: string;
  description: string;
  href: string;
  diagramCount: number;
}) {
  return (
    <a
      href={href}
      className="flex flex-col gap-2 rounded-sm border border-stone-200 bg-paper-raised p-6 transition-colors hover:border-accent"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-medium text-ink">{name}</span>
        <span className="font-mono text-[10px] uppercase tracking-wide text-ink-soft">
          {diagramCount} diagrams
        </span>
      </div>
      <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
      <span className="mt-1 text-xs text-accent">Open schematic →</span>
    </a>
  );
}

export default function SchematicsPage() {
  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Schematics</Eyebrow>
          <H1 className="mt-3">How KEEP is actually built</H1>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            The same architecture described in prose on{" "}
            <a href="/how-it-works" className="underline underline-offset-2">
              How KEEP Works
            </a>{" "}
            and{" "}
            <a href="/merlin" className="underline underline-offset-2">
              Merlin
            </a>
            , here as diagrams — the actual boxes, arrows, and trust
            boundaries, not a simplified narrative. Every component is
            labeled Current, Planned, or Future; nothing built is drawn as
            if it were still theoretical, and nothing unbuilt is drawn as
            if it already shipped.
          </Body>
          <Body className="mt-4 max-w-[62ch] text-ink-soft">
            <Citation source={KEEP_ARCHITECTURE} />
            <Citation source={KEEP_MERLIN_ARCHITECTURE} />
          </Body>
        </div>
      </section>

      {/* ---------- The two schematic sets ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Diagram Sets</Eyebrow>
          <H2 className="mt-3">Two schematic sets, nine diagrams total</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <SchematicCard
              name="How KEEP Is Built"
              href="/schematics/how-keep-is-built.html"
              diagramCount={7}
              description="Merlin's governance and decision model, Hub/Spoke system architecture, the Merlin layer stack, incident and signal intelligence, backup and disaster recovery, Spoke enrollment's root of trust, and authentication and sign-in."
            />
            <SchematicCard
              name="Merlin Architecture — Current State & Proposed Direction"
              href="/schematics/merlin-architecture.html"
              diagramCount={2}
              description="What's actually live today — routes, the LLM provider path, audit destinations — plus the proposed correlation/knowledge-engine pipeline, with an explicit findings section checking the diagram's own claims against the architecture docs."
            />
          </div>
          <Body className="mt-8 max-w-[62ch] text-xs text-ink-soft">
            Each schematic opens as its own page, outside this site&apos;s
            usual layout — that&apos;s deliberate, not a broken link. They
            carry their own legend, their own light/dark theme, and their
            own findings sections calling out exactly where a claim in the
            underlying architecture documentation didn&apos;t hold up under
            direct code inspection, corrected rather than smoothed over.
          </Body>
        </div>
      </section>
    </div>
  );
}
