"use client";

import { Suspense } from "react";
import { ScrollDepthBackground } from "@/components/ScrollDepthBackground";
import { ClubDirectoryPanel } from "@/components/ClubDirectoryPanel";
import { ClubCarousel } from "@/components/ui/vercelcarousel";

function ClubsContent() {
  return (
    <main className="section-padding relative min-h-screen pt-24" style={{ background: "transparent" }}>
      <ScrollDepthBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ClubDirectoryPanel includeConstellationLines />
        <div className="mt-20">
          <ClubCarousel />
        </div>
      </div>
    </main>
  );
}

export default function ClubsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 text-center font-body text-[#888888]">Loading directory…</div>}>
      <ClubsContent />
    </Suspense>
  );
}
