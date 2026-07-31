import { navLinks } from "@/lib/nav-links";
import { NavListLink } from "@/components/nav-link";
import { HeaderLogo } from "@/components/logo";

const evaluateLink = navLinks.find((link) => link.href === "/evaluate")!;
const mobileLinks = navLinks.filter((link) => link.href !== "/evaluate");

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-paper-raised">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <HeaderLogo />
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-6 text-sm">
            {navLinks
              .filter((link) => link.href !== "/" && link.href !== "/evaluate")
              .map((link) => (
                <li key={link.href}>
                  <NavListLink link={link} />
                </li>
              ))}
          </ul>
        </nav>
        <div className="hidden shrink-0 md:block">
          <NavListLink link={evaluateLink} variant="cta" />
        </div>
      </div>
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  return (
    <nav aria-label="Primary (mobile)" className="border-t border-stone-200 md:hidden">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-3">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {mobileLinks.map((link) => (
            <li key={link.href}>
              <NavListLink link={link} />
            </li>
          ))}
        </ul>
        <NavListLink link={evaluateLink} variant="cta-compact" />
      </div>
    </nav>
  );
}
