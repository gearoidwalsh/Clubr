"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FirstYearsContent } from "@/components/your-path/FirstYearsContent";
import { TransfersContent } from "@/components/your-path/TransfersContent";

const TABS = [
  { id: "transfers", label: "Transfers" },
  { id: "first-years", label: "First Years" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function YourPathClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("transfers");

  useEffect(() => {
    const t = searchParams.get("tab");
    if (t === "first-years" || t === "transfers") {
      setActiveTab(t === "first-years" ? "first-years" : "transfers");
    }
  }, [searchParams]);

  const goTab = (id: TabId) => {
    setActiveTab(id);
    const next = new URLSearchParams(searchParams.toString());
    if (id === "transfers") {
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
          Your path
        </span>
        <h1 className="font-display text-[40px] font-bold text-[#f0f0f0] md:text-5xl">Your Path</h1>
        <p className="font-body mt-3 text-[15px] leading-[1.7] text-[#888888]">Tailored guidance for where you are right now.</p>

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

        {activeTab === "transfers" && <TransfersContent />}
        {activeTab === "first-years" && <FirstYearsContent />}
      </div>
    </main>
  );
}
