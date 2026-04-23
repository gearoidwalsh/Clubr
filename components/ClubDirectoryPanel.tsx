"use client";

import { useRef, useState } from "react";
import ClubCard from "@/components/ClubCard";
import { ConstellationLines } from "@/components/ConstellationLines";
import { PlaceholderVanishSearch } from "@/components/PlaceholderVanishSearch";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { clubs, DIRECTORY_CATEGORIES } from "@/data/clubs";
import { useClubFilters } from "@/hooks/useClubFilters";

type ClubDirectoryPanelProps = {
  includeConstellationLines?: boolean;
  showTitle?: boolean;
};

export function ClubDirectoryPanel({
  includeConstellationLines = true,
  showTitle = true,
}: ClubDirectoryPanelProps) {
  const {
    search,
    setSearch,
    category,
    setSelectedCategory,
    transferOnly,
    setTransferOnly,
    filtered,
    relatedIndices,
  } = useClubFilters();

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <>
      {includeConstellationLines && (
        <ConstellationLines
          activeCard={activeCard}
          cardRefs={cardRefs}
          relatedIndices={relatedIndices}
        />
      )}
      <div className="container-width relative space-y-6">
        {showTitle && (
          <div className="space-y-2">
            <span className="mb-3 block font-mono text-[10px] tracking-[0.25em] uppercase text-[#FDB515]">
              Clubs
            </span>
            <h1 className="font-display text-[40px] font-bold text-[#f0f0f0] md:text-5xl">
              Clubs on this site
            </h1>
            <p className="max-w-3xl font-body text-[15px] leading-[1.7] text-[#888888]">
              Dozens of organizations across consulting, finance, tech, and more. Filter by category,
              then confirm details on each club&apos;s site—this is a starting point, not official policy.
            </p>
          </div>
        )}
        <PlaceholderVanishSearch value={search} onChange={setSearch} className="max-w-lg" />
        <div className="flex flex-wrap gap-2">
          {DIRECTORY_CATEGORIES.map((item) => (
            <button key={item} type="button" onClick={() => setSelectedCategory(item)}>
              <Badge
                className={cn(
                  "cursor-pointer font-medium",
                  category === item
                    ? "border-0 bg-[#FDB515] text-black"
                    : "border border-[rgba(255,255,255,0.08)] bg-transparent text-[#888888] hover:bg-[rgba(253,181,21,0.08)]",
                )}
              >
                {item}
              </Badge>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setTransferOnly((v) => !v)}>
            <Badge
              className={cn(
                "cursor-pointer font-medium",
                transferOnly
                  ? "border-0 bg-[#FDB515] text-black"
                  : "border border-[rgba(255,255,255,0.08)] bg-transparent text-[#888888] hover:bg-[rgba(253,181,21,0.08)]",
              )}
            >
              Transfer-friendly
            </Badge>
          </button>
        </div>
        <p className="font-body text-[15px] leading-[1.7] text-[#888888]">
          Showing {filtered.length} of {clubs.length} clubs.
        </p>
        <div className="relative">
          <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((club, i) => (
              <div
                key={club.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                className="h-full"
              >
                <SpotlightCard>
                  <ClubCard club={club} />
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
