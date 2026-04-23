"use client"

import { motion } from "framer-motion"
import { Users, ArrowRight, Check, X } from "lucide-react"

export interface ClubData {
  name: string
  category: string
  tagline: string
  description: string
  members: string
  selectivity: string
  transferFriendly: boolean
  categoryColor: string
}

interface ClubCardProps {
  club: ClubData
  isActive: boolean
}

export function ClubCard({ club, isActive }: ClubCardProps) {
  return (
    <motion.div
      className="relative h-[85vh] w-[380px] flex-shrink-0 cursor-grab rounded-xl overflow-hidden active:cursor-grabbing"
      initial={false}
      animate={{
        scale: isActive ? 1.02 : 1,
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 0 0 1px rgba(253,181,21,0.3), 0 25px 50px -12px rgba(0,0,0,0.5)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        boxShadow: isActive
          ? "0 25px 50px -12px rgba(0,0,0,0.4)"
          : "0 10px 30px -10px rgba(0,0,0,0.3)",
      }}
    >
      {/* Header Area - Top 45% */}
      <motion.div
        className="relative h-[45%] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${club.categoryColor}15 0%, ${club.categoryColor}08 50%, #0a0a0a 100%)`,
        }}
        whileHover={{
          background: `linear-gradient(135deg, ${club.categoryColor}25 0%, ${club.categoryColor}12 50%, #0a0a0a 100%)`,
        }}
      >
        {/* Geometric Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${club.categoryColor} 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Diagonal Lines Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              ${club.categoryColor} 10px,
              ${club.categoryColor} 11px
            )`,
          }}
        />

        {/* Category Badge */}
        <div className="absolute top-5 left-5">
          <span
            className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm"
            style={{
              color: "#FDB515",
              backgroundColor: "rgba(253, 181, 21, 0.1)",
              border: "1px solid rgba(253, 181, 21, 0.2)",
            }}
          >
            {club.category}
          </span>
        </div>

        {/* Selectivity Indicator */}
        <div className="absolute top-5 right-5">
          <span className="text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full border border-white/20 text-white/60">
            {club.selectivity}
          </span>
        </div>

        {/* Decorative Accent Line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${club.categoryColor}40 50%, transparent 100%)`,
          }}
        />
      </motion.div>

      {/* Body Area - Bottom 55% */}
      <div className="h-[55%] bg-[#0a0a0a] px-6 py-6 flex flex-col">
        {/* Club Name */}
        <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight">
          {club.name}
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-sm text-[#888888] font-medium">
          {club.tagline}
        </p>

        {/* Description */}
        <p className="mt-4 text-[13px] text-[#666666] leading-relaxed line-clamp-3">
          {club.description}
        </p>

        {/* Divider */}
        <div className="mt-auto mb-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Stats Row */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5">
            <Users className="w-3.5 h-3.5 text-white/40" />
            <span className="text-xs text-white/60 font-medium">
              {club.members}
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5">
            {club.transferFriendly ? (
              <Check className="w-3.5 h-3.5 text-emerald-400/70" />
            ) : (
              <X className="w-3.5 h-3.5 text-red-400/50" />
            )}
            <span className="text-xs text-white/60 font-medium">
              Transfer {club.transferFriendly ? "Friendly" : "Limited"}
            </span>
          </div>
        </div>

        {/* View Club Link */}
        <div className="mt-4 flex justify-end">
          <motion.a
            href="#"
            className="group flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "#FDB515" }}
            whileHover={{ x: 2 }}
          >
            View club
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
