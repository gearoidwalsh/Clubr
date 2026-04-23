"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function SpotlightCard({
  children,
  accentColor = "#FDB515",
}: {
  children: React.ReactNode;
  accentColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });
  const reduceMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      visible: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight((s) => ({ ...s, visible: false }));
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden rounded-xl"
      style={{
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(
            circle 160px at ${spotlight.x}% ${spotlight.y}%,
            ${accentColor}12 0%,
            transparent 70%
          )`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          boxShadow: "inset 0 0 0 1px rgba(253,181,21,0.2)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
