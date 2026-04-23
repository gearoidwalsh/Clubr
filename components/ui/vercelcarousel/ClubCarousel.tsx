"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ClubCard, type ClubData } from "./ClubCard";

const clubsData: ClubData[] = [
  {
    name: "Voyager Consulting",
    category: "Consulting",
    tagline: "Fortune 500 clients, rigorous recruiting",
    description:
      "Growth-stage and large corporate client work. Known for an extremely selective process and high-quality project delivery.",
    members: "~45-55 members",
    selectivity: "Very Highly Selective",
    transferFriendly: true,
    categoryColor: "#FDB515",
  },
  {
    name: "Berkeley Investment Group",
    category: "Finance",
    tagline: "Real portfolio, fundamental analysis",
    description:
      "Berkeley's oldest undergraduate investment club. Manages a real portfolio using deep-value investing principles.",
    members: "~60 members",
    selectivity: "Highly Selective",
    transferFriendly: false,
    categoryColor: "#3b82f6",
  },
  {
    name: "Product Buds",
    category: "Technical",
    tagline: "Product management focused org",
    description:
      "A product-focused org that runs PM education, cross-functional workshops, and project-based learning.",
    members: "~40 members",
    selectivity: "Moderately Selective",
    transferFriendly: true,
    categoryColor: "#a78bfa",
  },
];

export function ClubCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-black py-14">
      <div className="mb-8 flex items-center justify-between px-6 md:px-10">
        <div>
          <h2 className="text-xl font-semibold text-white tracking-tight">Club Carousel</h2>
          <p className="text-xs text-white/40 mt-0.5 font-medium tracking-wide">BERKELEY ORGS SNAPSHOT</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/50">
          <span className="font-mono text-[#FDB515]">{clubsData.length}</span>
          <span>organizations</span>
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6 pl-6 pr-10 md:pl-10 md:pr-16">
          {clubsData.map((club, index) => (
            <ClubCard key={club.name} club={club} isActive={index === selectedIndex} />
          ))}
        </div>
      </div>

      <motion.button
        onClick={scrollPrev}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 transition-all hover:border-[#FDB515]/50 hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!canScrollPrev}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5 text-[#FDB515]" />
      </motion.button>

      <motion.button
        onClick={scrollNext}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 transition-all hover:border-[#FDB515]/50 hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!canScrollNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5 text-[#FDB515]" />
      </motion.button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {clubsData.map((_, index) => (
          <button key={index} onClick={() => scrollTo(index)} className="group p-1" aria-label={`Go to slide ${index + 1}`}>
            <motion.div
              className="rounded-full transition-colors"
              initial={false}
              animate={{
                width: index === selectedIndex ? 24 : 8,
                height: 8,
                backgroundColor: index === selectedIndex ? "#FDB515" : "rgba(255, 255, 255, 0.2)",
              }}
              whileHover={{
                backgroundColor: index === selectedIndex ? "#FDB515" : "rgba(253, 181, 21, 0.5)",
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
