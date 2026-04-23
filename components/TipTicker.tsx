"use client";

import Link from "next/link";

const TIPS = [
  "Coffee chats before you submit. Order matters.",
  "Read the club site before you write “why us.”",
  "Deadlines are shorter than they look in September.",
];

export function TipTicker() {
  return (
    <div
      className="border-y border-[rgba(255,107,107,0.12)] bg-[rgba(10,10,10,0.35)] py-3 backdrop-blur-sm"
      style={{ borderColor: "rgba(255, 107, 107, 0.12)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 text-center">
        {TIPS.map((tip) => (
          <p
            key={tip}
            className="font-mono text-[11px] uppercase tracking-[0.12em]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {tip}
          </p>
        ))}
        <Link
          href="/community"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#FF6B6B] transition-opacity hover:opacity-80"
        >
          Submit a tip →
        </Link>
      </div>
    </div>
  );
}
