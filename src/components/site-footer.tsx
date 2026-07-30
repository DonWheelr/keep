import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import { Wordmark, Tagline } from "@/components/logo";

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
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-ink-soft sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-xs text-ink-soft">
          {`© ${new Date().getFullYear()} KEEP. This site describes KEEP's public, evaluator-facing information only and holds no customer operational data.`}
        </p>
      </div>
    </footer>
  );
}
