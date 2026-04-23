"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ShootingStarsProps = {
  className?: string;
  starColor?: string;
  trailColor?: string;
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
};

type Item = { id: number; left: string; duration: number; rotate: number };

function seedItems(minSpeed: number, maxSpeed: number): Item[] {
  return Array.from({ length: 3 }, (_, i) => ({
    id: i,
    left: `${15 + i * 28}%`,
    duration: (60 / maxSpeed + 60 / minSpeed) / 2 + Math.random() * 2,
    rotate: -18 - Math.random() * 20,
  }));
}

export function ShootingStars({
  className,
  starColor = "#FDB515",
  trailColor = "#1C4C8A",
  minSpeed = 8,
  maxSpeed = 16,
  minDelay = 1200,
  maxDelay = 4000,
}: ShootingStarsProps) {
  const reduceMotion = useReducedMotion();
  const [items, setItems] = useState<Item[]>(() => seedItems(minSpeed, maxSpeed));

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(() => {
      setItems((prev) => [
        ...prev.slice(-5),
        {
          id: Date.now(),
          left: `${Math.random() * 85}%`,
          duration: 60 / (minSpeed + Math.random() * (maxSpeed - minSpeed)) + 1,
          rotate: -12 - Math.random() * 28,
        },
      ]);
    }, minDelay + Math.random() * (maxDelay - minDelay));
    return () => clearInterval(t);
  }, [reduceMotion, minDelay, maxDelay, minSpeed, maxSpeed]);

  if (reduceMotion) return null;

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {items.map((s) => (
        <motion.span
          key={s.id}
          className="absolute top-0 h-px w-28 origin-left rounded-full"
          style={{
            left: s.left,
            background: `linear-gradient(90deg, transparent, ${trailColor}, ${starColor})`,
            rotate: s.rotate,
            boxShadow: `0 0 12px ${starColor}`,
          }}
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "110vh", opacity: [0, 0.9, 0.9, 0] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.05, 0.85, 1],
          }}
        />
      ))}
    </div>
  );
}
