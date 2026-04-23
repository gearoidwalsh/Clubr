import type { Metadata } from "next";
import { Suspense } from "react";
import { CompareClient } from "./compare-client";

export const metadata: Metadata = {
  title: "Compare clubs",
  description: "Side-by-side comparison of Berkeley clubs you shortlist on Clubr.",
};

function CompareFallback() {
  return (
    <div className="soft-card mx-auto max-w-lg animate-pulse p-8 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-[#444444]">Loading…</p>
    </div>
  );
}

export default function ComparePage() {
  return (
    <main className="section-padding pt-24" style={{ background: "transparent" }}>
      <div className="container-width">
        <header className="mb-10 space-y-2">
          <h1 className="font-display text-3xl font-bold text-[#f0f0f0] md:text-4xl">Compare</h1>
          <p className="font-body max-w-2xl text-sm text-[#888888]">
            Up to five clubs. Pass <code className="rounded bg-[#111] px-1 text-[12px]">?ids=a,b,c</code> or use
            saved → compare.
          </p>
        </header>
        <Suspense fallback={<CompareFallback />}>
          <CompareClient />
        </Suspense>
      </div>
    </main>
  );
}
