"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ConstellationLinesProps = {
  activeCard: number | null;
  cardRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  relatedIndices: Record<number, number[]>;
};

export function ConstellationLines({
  activeCard,
  cardRefs,
  relatedIndices,
}: ConstellationLinesProps) {
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>(
    [],
  );

  useEffect(() => {
    const compute = () => {
      if (activeCard === null) {
        setLines([]);
        return;
      }
      const originEl = cardRefs.current[activeCard];
      if (!originEl) {
        setLines([]);
        return;
      }
      const related = relatedIndices[activeCard] ?? [];
      const origin = originEl.getBoundingClientRect();
      const next = related
        .map((idx) => {
          const target = cardRefs.current[idx]?.getBoundingClientRect();
          if (!target) return null;
          return {
            x1: origin.left + origin.width / 2,
            y1: origin.top + origin.height / 2,
            x2: target.left + target.width / 2,
            y2: target.top + target.height / 2,
          };
        })
        .filter(Boolean) as Array<{ x1: number; y1: number; x2: number; y2: number }>;
      setLines(next);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [activeCard, cardRefs, relatedIndices]);

  return (
    <AnimatePresence>
      {lines.map((line, i) => (
        <motion.svg
          key={`${activeCard}-${i}`}
          className="pointer-events-none fixed inset-0 z-20 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.path
            d={`M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`}
            fill="none"
            stroke="rgba(253,181,21,0.25)"
            strokeWidth="1"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4 }}
          />
          <circle cx={line.x2} cy={line.y2} r="3" fill="#FDB515" opacity="0.55" />
        </motion.svg>
      ))}
    </AnimatePresence>
  );
}
