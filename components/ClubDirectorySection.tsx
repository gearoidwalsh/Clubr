"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ClubCard from "@/components/ClubCard";
import { ClubCardSkeleton } from "@/components/ClubCardSkeleton";
import { EmptyState } from "@/components/EmptyState";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { OnboardingModal } from "@/components/OnboardingModal";
import { PlaceholderVanishSearch } from "@/components/PlaceholderVanishSearch";
import { CommandPalette } from "@/components/CommandPalette";
import { clubs as clubsData } from "@/data/clubs";
import type { Club } from "@/data/clubs";
import { useSavedClubs } from "@/hooks/useSavedClubs";
import { analyticsEvents } from "@/lib/analytics";

const TYPE_FILTERS = [
  { id: "all", label: "All clubs" },
  { id: "Consulting", label: "Consulting" },
  { id: "Finance", label: "Finance" },
  { id: "Technical", label: "Technical" },
  { id: "Fraternity", label: "Business Frat" },
  { id: "Other", label: "Other" },
] as const;

const COMPLEXITY_FILTERS = [
  { id: "any", label: "Any process" },
  { id: "Resume only", label: "Resume only" },
  { id: "Resume + essays", label: "Resume + essays" },
  { id: "1 interview round", label: "1 interview" },
  { id: "2 interview rounds", label: "2 interviews" },
  { id: "Social round", label: "Social round" },
  { id: "Case interview", label: "Case interview" },
] as const;

const COMPLEXITY_MAP: Record<string, string> = {
  "Voyager Consulting": "2 interview rounds",
  "Berkeley Consulting": "2 interview rounds",
  "Berkeley Business Society": "2 interview rounds",
  "Net Impact at Berkeley": "1 interview round",
  "CMG Strategy Consulting": "1 interview round",
  "Valley Consulting Group": "Resume only",
  "The Berkeley Group": "1 interview round",
  "180 Degrees Consulting": "1 interview round",
  "Berkeley Investment Group": "1 interview round",
  "Capital Investments at Berkeley": "1 interview round",
  "Traders at Berkeley": "1 interview round",
  "Alpha Kappa Psi": "Social round",
  "Beta Alpha Psi": "Social round",
  "Delta Sigma Pi": "Social round",
  "Blockchain at Berkeley": "2 interview rounds",
  "Free Ventures": "Resume + essays",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function FilterPill({
  label,
  active,
  onClick,
  small = false,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full font-mono tracking-wider uppercase transition-all duration-200"
      style={{
        fontSize: small ? "9px" : "11px",
        padding: small ? "3px 10px" : "6px 16px",
        background: active ? "#FF6B6B" : "rgba(255,255,255,0.05)",
        color: active ? "#ffffff" : "#666666",
        border: active ? "1px solid #FF6B6B" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {label}
    </button>
  );
}

export function ClubDirectorySection({ clubs: clubsProp }: { clubs?: Club[] } = {}) {
  const clubs = clubsProp ?? clubsData;
  const ref = useRef(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [typeFilter, setTypeFilter] = useState<(typeof TYPE_FILTERS)[number]["id"]>("all");
  const [complexityFilter, setComplexityFilter] = useState<(typeof COMPLEXITY_FILTERS)[number]["id"]>("any");
  const [search, setSearch] = useState("");
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [segment, setSegment] = useState<string>("skip");
  const [isLoading, setIsLoading] = useState(true);
  const [showSearchHint, setShowSearchHint] = useState(true);
  const [shuffledClubs, setShuffledClubs] = useState<Club[]>(() => shuffle(clubs));
  const { saved } = useSavedClubs();

  const plugins = useMemo(
    () => [
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        playOnInit: true,
      }),
    ],
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
      loop: true,
    },
    plugins,
  );

  useEffect(() => {
    setShuffledClubs(shuffle(clubs));
    const t = window.setTimeout(() => setIsLoading(false), 650);
    const hint = window.setTimeout(() => setShowSearchHint(false), 3000);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(hint);
    };
  }, [clubs]);

  const displayClubs = useMemo(() => {
    const prioritized =
      segment === "transfer"
        ? [
            ...shuffledClubs.filter((c) => c.transferFriendly === true || c.transfer_friendly === true),
            ...shuffledClubs.filter((c) => c.transferFriendly !== true && c.transfer_friendly !== true),
          ]
        : shuffledClubs;

    return prioritized.filter((club) => {
      const passesType = typeFilter === "all" ? true : club.category === typeFilter;
      const passesComplexity =
        complexityFilter === "any" ? true : COMPLEXITY_MAP[club.name] === complexityFilter;
      const passesSearch =
        search.trim().length === 0
          ? true
          : club.name.toLowerCase().includes(search.toLowerCase()) ||
            club.abbreviation.toLowerCase().includes(search.toLowerCase());
      const passesSaved = showSavedOnly ? saved.has(club.id) : true;
      return passesType && passesComplexity && passesSearch && passesSaved;
    });
  }, [shuffledClubs, typeFilter, complexityFilter, search, showSavedOnly, saved, segment]);

  const resetFilters = useCallback(() => {
    setTypeFilter("all");
    setComplexityFilter("any");
    setSearch("");
    setShowSavedOnly(false);
  }, []);

  const stopAutoplay = useCallback(() => {
    const ap = emblaApi?.plugins()?.autoplay as { stop?: () => void } | undefined;
    ap?.stop?.();
  }, [emblaApi]);

  const playAutoplay = useCallback(() => {
    const ap = emblaApi?.plugins()?.autoplay as { play?: () => void } | undefined;
    ap?.play?.();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    stopAutoplay();
    emblaApi?.scrollPrev();
  }, [emblaApi, stopAutoplay]);

  const scrollNext = useCallback(() => {
    stopAutoplay();
    emblaApi?.scrollNext();
  }, [emblaApi, stopAutoplay]);

  const handleMouseLeave = useCallback(() => {
    playAutoplay();
  }, [playAutoplay]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        stopAutoplay();
        emblaApi?.scrollPrev();
      }
      if (e.key === "ArrowRight") {
        stopAutoplay();
        emblaApi?.scrollNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [emblaApi, stopAutoplay]);

  useEffect(() => {
    if (!search.trim()) return;
    analyticsEvents.searchQuery(search.trim());
  }, [search]);

  const updateTypeFilter = useCallback((id: (typeof TYPE_FILTERS)[number]["id"]) => {
    setTypeFilter(id);
    analyticsEvents.filterUsed(`type:${id}`);
  }, []);

  const updateComplexityFilter = useCallback((id: (typeof COMPLEXITY_FILTERS)[number]["id"]) => {
    setComplexityFilter(id);
    analyticsEvents.filterUsed(`complexity:${id}`);
  }, []);

  return (
    <section ref={ref} className="relative z-10 py-16" id="clubs">
      <OnboardingModal onSegmentSelect={setSegment} />
      <KeyboardShortcuts
        onSearchFocus={() => searchInputRef.current?.focus()}
        onEscape={() => {
          setSearch("");
          setShowSavedOnly(false);
        }}
      />
      <CommandPalette clubs={clubs} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-10 px-8">
          <span className="mb-3 block font-mono text-[10px] tracking-[0.25em] uppercase text-[#FF6B6B]">
            Directory
          </span>
          <h2 className="font-display text-3xl font-bold text-[#f0f0f0]">
            Club Directory
          </h2>
          <p className="mt-2 max-w-md font-body text-sm text-[#888888]">
            Filter by category and process. Profiles are student-sourced—confirm deadlines and requirements
            with each org.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 px-8">
          <div className="max-w-xl">
            <PlaceholderVanishSearch
              value={search}
              onChange={setSearch}
              inputRef={searchInputRef}
              hint={
                showSearchHint ? (
                  <span
                    className="rounded px-1.5 py-0.5 font-mono text-xs"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    /
                  </span>
                ) : null
              }
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {TYPE_FILTERS.map((f) => (
              <FilterPill
                key={f.id}
                label={f.label}
                active={typeFilter === f.id}
                onClick={() => updateTypeFilter(f.id)}
              />
            ))}
            <FilterPill
              label="Saved"
              active={showSavedOnly}
              onClick={() => {
                setShowSavedOnly((v) => {
                  const next = !v;
                  if (next) analyticsEvents.savedFilterUsed();
                  return next;
                });
              }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="font-mono text-[9px] tracking-widest uppercase"
              style={{ color: "#555555", marginRight: 4 }}
            >
              Process
            </span>
            {COMPLEXITY_FILTERS.map((f) => (
              <FilterPill
                key={f.id}
                label={f.label}
                active={complexityFilter === f.id}
                onClick={() => updateComplexityFilter(f.id)}
                small
              />
            ))}
          </div>
        </div>

        <div className="relative px-8" onMouseLeave={displayClubs.length > 0 ? handleMouseLeave : undefined}>
          {isLoading ? (
            <div className="mx-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <ClubCardSkeleton key={i} />
              ))}
            </div>
          ) : displayClubs.length === 0 ? (
            <div className="mx-14">
              <EmptyState query={search || "current filters"} onReset={resetFilters} />
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={scrollPrev}
                className="absolute top-1/2 left-0 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-[#FF6B6B] transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(255,107,107,0.1)",
                  border: "1px solid rgba(255,107,107,0.3)",
                }}
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div ref={emblaRef} className="mx-14 overflow-hidden">
                <div className="flex gap-5">
                  {displayClubs.map((club, index) => (
                    <motion.div
                      key={club.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.04,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="flex-none"
                      onMouseEnter={stopAutoplay}
                    >
                      <ClubCard club={club} onExpand={stopAutoplay} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={scrollNext}
                className="absolute top-1/2 right-0 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-[#FF6B6B] transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(255,107,107,0.1)",
                  border: "1px solid rgba(255,107,107,0.3)",
                }}
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <p className="mt-6 px-8 font-mono text-[11px] text-[#444444]">
          Showing {displayClubs.length} of {clubs.length} clubs
        </p>
      </motion.div>
    </section>
  );
}
