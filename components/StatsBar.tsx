"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const display = reduceMotion ? target : count;

  useEffect(() => {
    if (reduceMotion || !isInView) return;
    const duration = 1800;
    const start = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, reduceMotion]);

  return (
    <span ref={ref} className="font-mono font-stat text-[30px] font-normal text-[#f0f0f0]">
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 48, suffix: "", label: "clubs documented" },
  { target: 2, suffix: "", label: "years to make count" },
  { target: 100, suffix: "%", label: "student built" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-transparent py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-10 text-center font-mono text-[10px] tracking-[0.25em] uppercase text-[#FDB515]">Signal check</p>
      </div>
      <div className="max-w-6xl mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
            <Counter target={stat.target} suffix={stat.suffix} />
            <p className="font-mono mt-2 text-[10px] tracking-[0.2em] uppercase text-[#444444]">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
