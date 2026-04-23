"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: x * 6, y: y * 6 });
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className={cn("h-full", className)} style={{ perspective: 800 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        animate={reduceMotion ? undefined : { rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full overflow-hidden rounded-lg transition-transform duration-200"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(253,181,21,0.08) 0%, transparent 60%)`,
          }}
        />
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    </div>
  );
}
