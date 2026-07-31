import Link from "next/link";
import { Wordmark, Tagline } from "@/components/logo";
import { Body, H2 } from "@/components/typography";

const journey = [
  {
    href: "/why-keep",
    label: "Why KEEP",
    description: "The problem KEEP addresses, and who it's built for.",
  },
  {
    href: "/how-it-works",
    label: "How KEEP Works",
    description:
      "The Hub/Spoke architecture, evaluation flow, and trust boundaries.",
  },
  {
    href: "/merlin",
    label: "Merlin",
    description: "The single AI identity inside KEEP, and how it's governed.",
  },
  {
    href: "/security",
    label: "Security & Data Ownership",
    description: "What stays on your own infrastructure, and what reaches KEEP.",
  },
  {
    href: "/capabilities",
    label: "Capabilities",
    description:
      "What KEEP does today, labeled Validated, Evaluation, Planned, or Unknown.",
  },
  {
    href: "/evaluate",
    label: "Evaluate KEEP",
    description: "What to expect from an evaluation, start to finish.",
  },
  {
    href: "/docs",
    label: "Documentation",
    description: "Technical reference material, organized by what exists today.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <div className="space-y-4">
        <Wordmark as="h1" className="text-5xl sm:text-6xl" />
        <Tagline className="text-sm sm:text-base" />
        <p className="text-ink-soft">Built for Managed Service Providers</p>
      </div>

      <Body className="mt-10">
        This site is organized as one path for evaluating KEEP, in order: why
        it exists, how it works, what happens to your data, what it does
        today, and how to start — and end — an evaluation.
      </Body>

      <H2 className="mt-12 text-left">Start here</H2>
      <nav aria-label="Evaluator journey" className="mt-4">
        <ol className="space-y-3 text-left">
          {journey.map((step, i) => (
            <li key={step.href}>
              <Link
                href={step.href}
                className="flex gap-4 rounded-sm border border-stone-200 bg-paper-raised px-4 py-3 transition-colors hover:border-accent"
              >
                <span className="font-mono text-sm text-ink-soft">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-medium text-ink">
                    {step.label}
                  </span>
                  <span className="block text-sm text-ink-soft">
                    {step.description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
