"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ClubCard, type ClubData } from "./club-card"

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
      "Berkeley's oldest undergraduate investment club. Manages a real portfolio using deep-value investing principles. Point72-sponsored.",
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
      "Berkeley's premier product management club. Works on real product challenges with tech companies and runs structured PM education programs.",
    members: "~40 members",
    selectivity: "Moderately Selective",
    transferFriendly: true,
    categoryColor: "#a78bfa",
  },
  {
    name: "Alpha Kappa Psi",
    category: "Business Fraternity",
    tagline: "Professional business fraternity",
    description:
      "Co-ed professional business fraternity focused on developing business acumen, professional networks, and leadership skills.",
    members: "~80 members",
    selectivity: "Moderately Selective",
    transferFriendly: false,
    categoryColor: "#34d399",
  },
]

export function ClubCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-white tracking-tight">
              Clubr
            </h1>
            <p className="text-xs text-white/40 mt-0.5 font-medium tracking-wide">
              BERKELEY CLUB DIRECTORY
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <span className="font-mono text-[#FDB515]">{clubsData.length}</span>
            <span>organizations</span>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="absolute inset-0 flex items-center">
        <div ref={emblaRef} className="overflow-hidden w-full">
          <div className="flex gap-6 pl-8 pr-24 md:pl-16 md:pr-32">
            {clubsData.map((club, index) => (
              <ClubCard
                key={club.name}
                club={club}
                isActive={index === selectedIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 transition-all hover:border-[#FDB515]/50 hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!canScrollPrev}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5 text-[#FDB515]" />
      </motion.button>

      <motion.button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 transition-all hover:border-[#FDB515]/50 hover:bg-black/60 disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={!canScrollNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5 text-[#FDB515]" />
      </motion.button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {clubsData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className="group p-1"
          >
            <motion.div
              className="rounded-full transition-colors"
              initial={false}
              animate={{
                width: index === selectedIndex ? 24 : 8,
                height: 8,
                backgroundColor:
                  index === selectedIndex
                    ? "#FDB515"
                    : "rgba(255, 255, 255, 0.2)",
              }}
              whileHover={{
                backgroundColor:
                  index === selectedIndex
                    ? "#FDB515"
                    : "rgba(253, 181, 21, 0.5)",
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />
    </div>
  )
}
