"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Users, X } from "lucide-react";
import Link from "next/link";
import { clubs, selectivityChipLabel } from "@/data/clubs";
import type { Club, ClubCategory } from "@/data/clubs";

function categoryTint(category: ClubCategory): string {
  switch (category) {
    case "Consulting":
      return "#FDB515";
    case "Finance":
      return "#3b82f6";
    case "Technical":
      return "#a78bfa";
    case "Fraternity":
      return "#34d399";
    default:
      return "#888888";
  }
}

function headerStyle(category: ClubCategory): { background: string; borderBottom: string } {
  switch (category) {
    case "Consulting":
      return {
        background: "linear-gradient(135deg, rgba(253,181,21,0.08) 0%, rgba(253,181,21,0.03) 100%)",
        borderBottom: "1px solid rgba(253,181,21,0.15)",
      };
    case "Finance":
      return {
        background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.03) 100%)",
        borderBottom: "1px solid rgba(59,130,246,0.12)",
      };
    case "Technical":
      return {
        background: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(167,139,250,0.03) 100%)",
        borderBottom: "1px solid rgba(167,139,250,0.12)",
      };
    case "Fraternity":
      return {
        background: "linear-gradient(135deg, rgba(52,211,153,0.08) 0%, rgba(52,211,153,0.03) 100%)",
        borderBottom: "1px solid rgba(52,211,153,0.12)",
      };
    default:
      return {
        background: "linear-gradient(135deg, rgba(253,181,21,0.05) 0%, rgba(0,0,0,0.02) 100%)",
        borderBottom: "1px solid rgba(253,181,21,0.15)",
      };
  }
}

function oneLineTeaser(overview: string): string {
  const line = overview.split("\n")[0].trim();
  if (line.length <= 160) return line;
  return `${line.slice(0, 157)}…`;
}

function CarouselClubCard({ club, isActive }: { club: Club; isActive: boolean }) {
  const tint = categoryTint(club.category);
  const transferPositive = club.transferFriendly === true;
  const header = headerStyle(club.category);

  return (
    <motion.div
      className="relative mx-auto h-[480px] min-h-[480px] w-[calc(100vw-48px)] max-w-[380px] cursor-grab overflow-hidden rounded-2xl border border-[rgba(253,181,21,0.3)] bg-white active:cursor-grabbing md:h-[520px] md:min-h-[520px] md:w-[380px]"
      initial={false}
      animate={{
        y: isActive ? -4 : 0,
        boxShadow: isActive
          ? "0 16px 60px rgba(0,0,0,0.7), 0 0 0 2px rgba(253,181,21,0.5)"
          : "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(253,181,21,0.15)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        borderRadius: 16,
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 16px 60px rgba(0,0,0,0.7), 0 0 0 2px rgba(253,181,21,0.5)",
        transition: { duration: 0.25 },
      }}
    >
      <div
        className="relative h-[40%] overflow-hidden"
        style={header}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${tint} 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-5 left-5">
          <span
            className="rounded-md bg-[#FDB515] px-[10px] py-1 font-mono text-[10px] font-semibold tracking-[0.12em] text-black uppercase"
            style={{
              borderRadius: 6,
            }}
          >
            {club.category}
          </span>
        </div>
        <div className="absolute top-5 right-5">
          <span
            className="rounded-md px-[10px] py-1 font-mono text-[10px] text-[#333333]"
            style={{
              background: "rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 6,
            }}
          >
            {selectivityChipLabel(club.selectivity)}
          </span>
        </div>
        <div
          className="absolute right-0 bottom-0 left-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${tint}55 50%, transparent 100%)`,
          }}
        />
      </div>

      <div className="flex h-[60%] flex-col bg-white px-6 py-6">
        <h3 className="font-display text-[20px] font-bold leading-tight text-[#0a0a0a]">{club.name}</h3>
        <p className="mt-2 font-mono text-[11px] text-[#888888]">{club.abbreviation}</p>
        <p className="mt-4 line-clamp-4 font-body text-[14px] leading-[1.65] text-[#333333]">{oneLineTeaser(club.overview)}</p>

        <div className="my-5 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <div className="flex flex-wrap items-center gap-2">
          <div
            className="flex items-center gap-2 rounded-md px-[10px] py-1"
            style={{
              background: "rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: 6,
            }}
          >
            <Users className="h-3.5 w-3.5 text-[#444444]" />
            <span className="font-mono text-[11px] text-[#444444]">{club.approximateSize}</span>
          </div>
          <div
            className="flex items-center gap-2 rounded-md px-[10px] py-1"
            style={{
              background: transferPositive ? "rgba(34,197,94,0.1)" : "rgba(0,0,0,0.05)",
              border: transferPositive
                ? "1px solid rgba(34,197,94,0.25)"
                : "1px solid rgba(0,0,0,0.1)",
              borderRadius: 6,
            }}
          >
            {transferPositive ? (
              <Check className="h-3.5 w-3.5 text-[#16a34a]" />
            ) : (
              <X className="h-3.5 w-3.5 text-[#444444]" />
            )}
            <span className={`font-mono text-[11px] ${transferPositive ? "text-[#16a34a]" : "text-[#444444]"}`}>
              {club.transferFriendly === null
                ? "Transfer TBD"
                : transferPositive
                  ? "Transfer-friendly"
                  : "Transfer limited"}
            </span>
          </div>
        </div>

        <div className="mt-auto flex justify-end pt-4">
          <Link
            href={`/clubs/${club.id}`}
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] text-[#FDB515] uppercase transition-colors hover:text-[#c49010]"
          >
            View club
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ClubCarousel({ items = clubs }: { items?: Club[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const sync = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);
    const t = window.setTimeout(sync, 0);

    return () => {
      window.clearTimeout(t);
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden px-6 md:px-[60px]">
      <div ref={emblaRef} className="mx-0 overflow-hidden md:mx-14">
        <div className="flex touch-pan-y">
          {items.map((club, index) => (
            <div
              key={club.id}
              className="min-w-0 shrink-0 grow-0 basis-[83.333333%] pl-4 md:basis-[40%] md:pl-4"
            >
              <CarouselClubCard club={club} isActive={index === selectedIndex} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute top-1/2 left-2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-[#FDB515] transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"
        style={{
          background: "rgba(253,181,21,0.12)",
          border: "1px solid rgba(253,181,21,0.35)",
        }}
        aria-label="Previous clubs"
      >
        <ChevronLeft className="h-[22px] w-[22px]" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute top-1/2 right-2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-[#FDB515] transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"
        style={{
          background: "rgba(253,181,21,0.12)",
          border: "1px solid rgba(253,181,21,0.35)",
        }}
        aria-label="Next clubs"
      >
        <ChevronRight className="h-[22px] w-[22px]" />
      </button>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className="p-1"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === selectedIndex}
          >
            <span
              className="block rounded-full transition-all duration-200"
              style={{
                width: i === selectedIndex ? 24 : 8,
                height: 8,
                backgroundColor: i === selectedIndex ? "#FDB515" : "rgba(255,255,255,0.2)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
