"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function JourneyScrollStar() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (reduceMotion) {
    return (
      <div
        className="fixed top-0 bottom-0 left-4 z-30 hidden w-px bg-[#1C4C8A]/25 lg:left-8 lg:block"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="pointer-events-none fixed top-0 bottom-0 left-4 z-30 hidden w-px lg:left-8 lg:block"
      aria-hidden
    >
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(253,181,21,0.3)] to-[rgba(253,181,21,0.65)]"
      />
      <motion.div style={{ top: y }} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-3 w-3 rounded-full bg-[#FDB515] shadow-[0_0_12px_4px_rgba(253,181,21,0.7)]" />
        <div className="absolute top-full left-1/2 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-[#FDB515] to-transparent" />
      </motion.div>
    </div>
  );
}
