"use client";

import Link from "next/link";

const LINKS = [
  { href: "/guide", label: "The Guide", sub: "Recruiting, timeline, resources" },
  { href: "/clubs", label: "Clubs", sub: "Directory and filters" },
  { href: "/your-path", label: "Your Path", sub: "Transfers & first years" },
  { href: "/community", label: "Community", sub: "Tips from students" },
];

export function MobileHomeNav() {
  return (
    <nav className="w-full max-w-md space-y-2 px-4" aria-label="Site navigation">
      {LINKS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="bg-space-card block rounded-xl border border-[var(--border-subtle)] px-4 py-3 transition-colors hover:border-[var(--border-default)]"
        >
          <span className="block text-sm font-semibold text-[var(--text-primary)]">{item.label}</span>
          <span className="mt-0.5 block text-xs text-[var(--text-secondary)]">{item.sub}</span>
        </Link>
      ))}
    </nav>
  );
}
