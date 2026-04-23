"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Star = { id: number; x: number; y: number; size: number; delay: number };

function buildStars(): Star[] {
  return Array.from({ length: 48 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    delay: Math.random() * 2,
  }));
}

type GlowingStarsBackgroundCardProps = {
  className?: string;
};

export function GlowingStarsBackgroundCard({ className }: GlowingStarsBackgroundCardProps) {
  const reduceMotion = useReducedMotion();
  const [stars] = useState<Star[]>(() => buildStars());

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(28,76,138,0.2),transparent_65%)]",
        className,
      )}
      aria-hidden
    >
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-[#FDB515]"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 10px 2px rgba(253,181,21,0.45)",
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.95, 0.25],
                  scale: [1, 1.35, 1],
                }
          }
          transition={{
            duration: 2.8 + s.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
