"use client";

import { PageAnchorNav } from "@/components/PageAnchorNav";
import { JourneyScrollStar } from "@/components/JourneyScrollStar";
import { JourneyNarrative } from "@/app/journey/journey-narrative";

const toc = [
  { id: "discovery", label: "Phase 1: Discovery" },
  { id: "info-sessions", label: "Phase 2: Info sessions" },
  { id: "coffee-chats", label: "Phase 3: Coffee chats" },
  { id: "application", label: "Phase 4: The application" },
  { id: "interviews", label: "Phase 5: Interviews" },
  { id: "offer", label: "Phase 6: The offer" },
  { id: "new-member", label: "Phase 7: Life as a new member" },
];

export function JourneyTabContent() {
  return (
    <>
      <JourneyScrollStar />
      <section className="border-b border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,10,0.6)] py-16 backdrop-blur-sm md:py-20">
        <div className="container-width mx-auto max-w-2xl text-center">
          <span className="mb-3 block font-mono text-[10px] tracking-[0.25em] uppercase text-[#FDB515]">
            Journey
          </span>
          <h1 className="font-display text-[40px] font-bold leading-tight text-[#f0f0f0] md:text-5xl">
            Recruiting from first info session to offer
          </h1>
          <p className="font-body mx-auto mt-5 text-[15px] leading-[1.7] text-[#888888] md:text-[15px]">
            Rough order of operations for competitive clubs: discovery, chats, applications, interviews.
            Details vary by org and year.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-width flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <PageAnchorNav items={toc} />
          <div className="min-w-0 flex-1">
            <div className="relative mx-auto max-w-2xl border-l border-[rgba(253,181,21,0.12)] pl-6 md:pl-10">
              <JourneyNarrative />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
