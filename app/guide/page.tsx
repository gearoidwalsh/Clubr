import type { Metadata } from "next";
import { Suspense } from "react";
import { GuideClient } from "./guide-client";

export const metadata: Metadata = {
  title: "The Guide",
  description: "Recruiting timeline, practical notes, and resource links for Berkeley students.",
};

export default function GuidePage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 text-center text-[#888888]">Loading…</div>}>
      <GuideClient />
    </Suspense>
  );
}
