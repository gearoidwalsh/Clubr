"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  COUNTDOWN_DISCLAIMER,
  getCountdownLabel,
  getCountdownTargetDate,
} from "@/lib/recruiting";
import { CONTENT_LAST_REVIEWED, RECRUITING_SEASON_FOCUS } from "@/lib/site-meta";

export function RecruitingCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = getCountdownTargetDate();
    const tick = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const label = getCountdownLabel();

  return (
    <motion.section
      id="recruiting-countdown"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mx-auto mb-6 max-w-3xl px-8 py-8"
    >
      <div
        className="rounded-2xl px-8 py-6"
        style={{
          background: "rgba(45,212,191,0.05)",
          border: "1px solid rgba(45,212,191,0.2)",
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p
              className="mb-1 font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "rgba(45,212,191,0.6)" }}
            >
              Countdown
            </p>
            <p className="font-display text-lg font-semibold text-[#f0f0f0]">{label}</p>
            <p className="mt-2 font-mono text-[10px] leading-relaxed text-[#555555]">
              Focus: {RECRUITING_SEASON_FOCUS}. Copy last reviewed {CONTENT_LAST_REVIEWED}.
            </p>
            <p className="mt-1 max-w-md font-body text-[11px] leading-relaxed text-[#666666]">
              {COUNTDOWN_DISCLAIMER}{" "}
              <Link href="/guide#freshness" className="text-[#2DD4BF] underline-offset-2 hover:underline">
                How we set this date
              </Link>
            </p>
          </div>
          <div className="flex gap-4">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Min" },
              { value: timeLeft.seconds, label: "Sec" },
            ].map(({ value, label: l }) => (
              <div key={l} className="text-center">
                <div className="w-16 text-center font-mono text-3xl font-semibold tabular-nums text-[#2DD4BF]">
                  {String(value).padStart(2, "0")}
                </div>
                <div
                  className="mt-1 font-mono text-[9px] tracking-widest uppercase"
                  style={{ color: "rgba(45,212,191,0.5)" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
