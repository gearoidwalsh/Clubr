"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function TransfersHero() {
  const reduceMotion = useReducedMotion();

  return (
    <AuroraBackground className="min-h-[22rem] md:min-h-[26rem]">
      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center md:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-[rgba(52,211,153,0.25)] bg-[rgba(52,211,153,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#34d399]">
            For transfer students
          </span>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#f0f4ff] md:text-4xl">
            Two years on campus: less runway, same fall recruiting crunch.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#8892a4] md:text-lg">
            Most handbooks assume four years and a slow build. This page assumes you land in fall and
            may be interviewing within weeks—alongside housing, registration, and a social scene that
            already has history. Work experience and age-mixed classes are advantages some four-year
            students do not have; the tradeoff is time.
          </p>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
