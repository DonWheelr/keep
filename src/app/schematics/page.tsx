import type { Metadata } from "next";
import { Eyebrow, H1, H2, Body } from "@/components/typography";
import { Citation } from "@/components/citation";
import { KEEP_ARCHITECTURE, KEEP_MERLIN_ARCHITECTURE } from "@/lib/citation-sources";

export const metadata: Metadata = {
  title: "Schematics",
  description:
    "Technical diagrams of how KEEP is actually built — Hub/Spoke topology, authentication and sign-in, technician authorization and roles, Merlin's governance and decision model, signal intelligence, and Spoke trust — sourced from KEEP's own approved architecture documentation.",
};

function SchematicEmbed({
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
    <div className="rounded-sm border border-stone-200 bg-paper-raised p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-ink">{name}</span>
          <span className="font-mono text-[10px] uppercase tracking-wide text-ink-soft">
            {diagramCount} diagrams
          </span>
        </div>
        <a
          href={href}
          className="text-xs text-accent underline underline-offset-2"
        >
          Open full schematic →
        </a>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {description}
      </p>
      <div className="mt-4 overflow-hidden rounded-sm border border-stone-200">
        <iframe
          src={href}
          title={`${name} — embedded schematic`}
          loading="lazy"
          className="h-[75vh] max-h-[900px] min-h-[420px] w-full bg-white"
        />
      </div>
    </div>
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

      {/* ---------- The two schematic sets, embedded directly ---------- */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Eyebrow>Diagram Sets</Eyebrow>
          <H2 className="mt-3">Two schematic sets, nine diagrams total</H2>
          <Body className="mt-4 max-w-[70ch] text-ink-soft">
            Embedded below, not summarized — each frame loads the exact same
            HTML file that &quot;Open full schematic&quot; opens full-size.
            Update either file and both views update together.
          </Body>
          <div className="mt-8 flex flex-col gap-8">
            <SchematicEmbed
              name="How KEEP Is Built"
              href="/schematics/how-keep-is-built.html"
              diagramCount={7}
              description="Merlin's governance and decision model, Hub/Spoke system architecture, the Merlin layer stack, incident and signal intelligence, Spoke enrollment's root of trust, authentication and sign-in, and technician authorization and roles."
            />
            <SchematicEmbed
              name="Merlin Architecture — Current State & Proposed Direction"
              href="/schematics/merlin-architecture.html"
              diagramCount={2}
              description="What's actually live today — routes, the LLM provider path, audit destinations — plus the proposed correlation/knowledge-engine pipeline, with an explicit findings section checking the diagram's own claims against the architecture docs."
            />
          </div>
          <Body className="mt-8 max-w-[62ch] text-xs text-ink-soft">
            Each embed carries its own legend, its own light/dark theme, and
            its own findings sections calling out exactly where a claim in
            the underlying architecture documentation didn&apos;t hold up
            under direct code inspection, corrected rather than smoothed
            over. &quot;Open full schematic&quot; opens the same document
            full-size, with in-page section navigation, and links back here.
          </Body>
        </div>
      </section>
    </div>
  );
}
