"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink as NavLinkType } from "@/lib/nav-links";

export function NavListLink({
  link,
  variant = "default",
}: {
  link: NavLinkType;
  variant?: "default" | "cta" | "cta-compact";
}) {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  const current = isActive ? "page" : undefined;

  if (variant === "cta") {
    return (
      <Link
        href={link.href}
        aria-current={current}
        className="shrink-0 rounded-sm bg-accent px-4 py-2 text-sm font-medium text-paper-raised transition-colors hover:bg-accent-strong"
      >
        {link.label}
      </Link>
    );
  }

  if (variant === "cta-compact") {
    return (
      <Link
        href={link.href}
        aria-current={current}
        className="shrink-0 rounded-sm bg-accent px-3 py-1.5 text-xs font-medium text-paper-raised transition-colors hover:bg-accent-strong"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      aria-current={current}
      className={
        isActive
          ? "font-medium text-ink"
          : "text-ink-soft transition-colors hover:text-ink"
      }
    >
      {link.label}
    </Link>
  );
}
