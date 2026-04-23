"use client";

import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ScrollDepthBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0.08]);
  const hue = useTransform(scrollYProgress, [0, 1], [35, 48]);
  const background = useMotionTemplate`radial-gradient(ellipse 80% 60% at 50% 30%, hsl(${hue}, 70%, 9%) 0%, transparent 70%)`;

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed inset-0"
      style={{
        background,
        opacity: bgOpacity,
        zIndex: 0,
      }}
    />
  );
}
