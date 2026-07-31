import Link from "next/link";
import { Wordmark, Tagline } from "@/components/logo";
import { navLinks } from "@/lib/nav-links";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <div className="space-y-4">
        <Wordmark as="h1" className="text-5xl sm:text-6xl" />
        <Tagline className="text-sm sm:text-base" />
        <p className="text-ink-soft">Built for Managed Service Providers</p>
      </div>

      <div className="mt-14 rounded-sm border border-dashed border-stone-300 p-6 text-left text-sm text-ink-soft">
        Home page structure only — hero content pending review.
      </div>

      <nav aria-label="Site sections" className="mt-10">
        <ul className="grid grid-cols-2 gap-3 text-left sm:grid-cols-3">
          {navLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-sm border border-stone-200 bg-paper-raised px-4 py-3 text-sm text-ink transition-colors hover:border-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
