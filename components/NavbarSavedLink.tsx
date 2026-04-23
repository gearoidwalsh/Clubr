"use client";

import Link from "next/link";
import { useSavedClubs } from "@/hooks/useSavedClubs";

export function NavbarSavedLink() {
  const { count } = useSavedClubs();
  return (
    <Link
      href="/saved"
      className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#888888] transition hover:text-[#FF6B6B]"
    >
      Saved{count > 0 ? ` (${count})` : ""}
    </Link>
  );
}
