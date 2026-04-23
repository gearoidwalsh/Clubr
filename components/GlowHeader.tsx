"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function GlowHeader({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="relative inline-block">
      {isInView && !reduceMotion && (
        <motion.div
          initial={{ x: "-100%", opacity: 0.8 }}
          animate={{ x: "200%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(253,181,21,0.25)] to-transparent"
          style={{ zIndex: 1 }}
        />
      )}
      <span className="relative z-0 font-display font-bold text-[#e8edf5]">{children}</span>
    </div>
  );
}
