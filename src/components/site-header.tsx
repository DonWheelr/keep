import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import { HeaderLogo } from "@/components/logo";

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-paper-raised">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <HeaderLogo />
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-6 text-sm text-ink-soft">
            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <Link
          href="/evaluate"
          className="hidden shrink-0 rounded-sm bg-accent px-4 py-2 text-sm font-medium text-paper-raised transition-colors hover:bg-accent-strong md:inline-block"
        >
          Evaluate KEEP
        </Link>
      </div>
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  return (
    <nav aria-label="Primary (mobile)" className="border-t border-stone-200 md:hidden">
      <ul className="flex flex-wrap gap-x-4 gap-y-2 px-6 py-3 text-sm text-ink-soft">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
