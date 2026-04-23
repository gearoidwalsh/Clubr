"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarSavedLink } from "@/components/NavbarSavedLink";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/clubs", label: "Clubs" },
  { href: "/guide", label: "Guide" },
  { href: "/links", label: "Links" },
] as const;

function navLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/clubs") return pathname === "/clubs" || pathname.startsWith("/clubs/");
  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.85)] backdrop-blur-xl" : "bg-transparent"
      }`}
      style={{ zIndex: 40 }}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-display text-xl font-bold">
            <span style={{ color: "#ffffff" }}>Club</span>
            <span style={{ color: "#FF6B6B" }}>r</span>
          </span>
          <div className="h-1.5 w-1.5 animate-pulse rounded-full opacity-50" style={{ background: "#FF6B6B" }} />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = navLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-mono uppercase tracking-[0.18em] transition-colors duration-150 hover:text-[#FF6B6B]"
                style={{
                  fontSize: 13,
                  fontWeight: active ? 600 : 500,
                  color: active ? "#FF6B6B" : "#ffffff",
                }}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute right-0 -bottom-px left-0 h-px bg-[#FF6B6B]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-5 sm:flex">
          <NavbarSavedLink />
          <Link
            href="/community"
            className="rounded-lg border border-[rgba(255,107,107,0.3)] bg-[rgba(255,107,107,0.1)] px-4 py-2 font-mono text-[11px] tracking-wider uppercase text-[#FF6B6B] transition-all duration-200 hover:bg-[rgba(255,107,107,0.16)]"
          >
            Submit a tip
          </Link>
        </div>
      </div>
    </nav>
  );
}
