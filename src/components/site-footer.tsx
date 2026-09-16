import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import { NavListLink } from "@/components/nav-link";
import { Wordmark, Tagline } from "@/components/logo";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <Wordmark />
            <Tagline />
            <p className="text-sm text-ink-soft">
              Built for Managed Service Providers
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavListLink link={link} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            {`© ${new Date().getFullYear()} KEEP. This site describes KEEP's public, evaluator-facing information only and holds no customer operational data.`}
          </p>
          <nav aria-label="Legal">
            <ul className="flex gap-4 text-xs">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-soft underline underline-offset-2 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
