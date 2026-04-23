"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { JourneyTabContent } from "@/components/guide/JourneyTabContent";
import { ResourcesTabContent } from "@/components/guide/ResourcesTabContent";
import { RecruitingClient } from "@/app/recruiting/recruiting-client";
import { CONTENT_LAST_REVIEWED, RECRUITING_SEASON_FOCUS } from "@/lib/site-meta";

const TABS = [
  { id: "journey", label: "The Journey" },
  { id: "recruiting", label: "Recruiting Advice" },
  { id: "resources", label: "Resources" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function GuideClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("journey");

  useEffect(() => {
    const t = searchParams.get("tab");
    if (t === "recruiting" || t === "resources" || t === "journey") {
      setActiveTab(t);
    }
  }, [searchParams]);

  const goTab = (id: TabId) => {
    setActiveTab(id);
    const next = new URLSearchParams(searchParams.toString());
    if (id === "journey") {
      next.delete("tab");
    } else {
      next.set("tab", id);
    }
    const q = next.toString();
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
  };

  return (
    <main className="min-h-screen pt-24" style={{ background: "transparent" }}>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <span className="mb-3 block font-mono text-[10px] tracking-[0.25em] uppercase text-[#FDB515]">
          Guide
        </span>
        <h1 className="font-display text-[40px] font-bold text-[#f0f0f0] md:text-5xl">The Guide</h1>
        <p className="font-body mt-3 max-w-2xl text-[15px] leading-[1.7] text-[#888888]">
          Timeline, recruiting notes, and links. Skip what you do not need.
        </p>
        <p className="font-mono mt-2 text-[10px] uppercase tracking-[0.12em] text-[#555555]">
          Season focus {RECRUITING_SEASON_FOCUS}. Last reviewed {CONTENT_LAST_REVIEWED}.
        </p>
        <div
          id="freshness"
          className="mt-8 rounded-xl border border-[rgba(253,181,21,0.15)] bg-[rgba(253,181,21,0.04)] px-4 py-3"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FDB515]">Freshness</p>
          <p className="font-body mt-1 text-[13px] leading-relaxed text-[#888888]">
            The home page countdown uses a single illustrative target date in code (
            <code className="rounded bg-[#111] px-1 text-[11px] text-[#ccc]">lib/recruiting.ts</code>
            ). It is not an official Berkeley calendar. Update that file at the start of each cycle, and bump{" "}
            <code className="rounded bg-[#111] px-1 text-[11px]">site-meta</code> when you revise guide copy.
          </p>
        </div>

        <div className="mb-12 mt-10 flex gap-1 border-b border-[rgba(255,255,255,0.08)]">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => goTab(tab.id)}
              className="-mb-px border-b-2 px-5 py-3 font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-200"
              style={{
                color: activeTab === tab.id ? "#FDB515" : "#444444",
                borderBottomColor: activeTab === tab.id ? "#FDB515" : "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "journey" && <JourneyTabContent />}
        {activeTab === "recruiting" && <RecruitingClient />}
        {activeTab === "resources" && <ResourcesTabContent />}
      </div>
    </main>
  );
}
