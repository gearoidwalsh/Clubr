"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduceMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-transparent via-[#FF6B6B] to-[#ff8c8c]"
      />
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-transparent via-[#FF6B6B] to-[#ff8c8c] blur-sm"
      />
    </>
  );
}
