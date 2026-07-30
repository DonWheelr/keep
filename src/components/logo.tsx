import Link from "next/link";

const TAGLINE_PARTS = ["Know", "Evaluate", "Enforce", "Protect"];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-sans text-xl font-bold tracking-[0.08em] text-ink ${className}`}
    >
      KEEP
    </span>
  );
}

export function Tagline({ className = "" }: { className?: string }) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.15em] text-ink-soft ${className}`}
    >
      {TAGLINE_PARTS.join(" · ")}
    </p>
  );
}

export function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="inline-block h-2 w-2 rounded-[2px] bg-accent" aria-hidden />
      <Wordmark />
    </Link>
  );
}
