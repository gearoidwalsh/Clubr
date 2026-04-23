"use client";

import { motion } from "framer-motion";

interface PathProps {
  d: string;
  delay: number;
  duration: number;
}

const PATHS: PathProps[] = [
  { d: "M-200 400 C 100 200, 400 600, 800 300 S 1200 100, 1600 400", delay: 0, duration: 18 },
  { d: "M-100 600 C 200 400, 500 800, 900 500 S 1300 200, 1700 500", delay: 2, duration: 22 },
  { d: "M0 200 C 300 0, 600 400, 1000 200 S 1400 0, 1800 300", delay: 4, duration: 20 },
  { d: "M-300 700 C 100 500, 400 900, 800 600 S 1200 300, 1600 700", delay: 6, duration: 25 },
  { d: "M100 100 C 400 -100, 700 300, 1100 100 S 1500 -100, 1900 200", delay: 1, duration: 19 },
  { d: "M-150 800 C 150 600, 450 900, 850 700 S 1250 400, 1650 800", delay: 3, duration: 23 },
  { d: "M50 500 C 350 300, 650 700, 1050 500 S 1450 200, 1850 500", delay: 5, duration: 21 },
  { d: "M-250 300 C 50 100, 350 500, 750 300 S 1150 0, 1550 300", delay: 7, duration: 24 },
  { d: "M200 900 C 500 700, 800 1000, 1200 800 S 1600 500, 2000 800", delay: 2.5, duration: 26 },
  { d: "M-50 150 C 250 -50, 550 250, 950 150 S 1350 -100, 1750 150", delay: 4.5, duration: 17 },
  { d: "M300 650 C 600 450, 900 750, 1300 550 S 1700 300, 2100 600", delay: 1.5, duration: 20 },
  { d: "M-200 50 C 100 -150, 400 150, 800 50 S 1200 -200, 1600 100", delay: 6.5, duration: 22 },
];

export function BackgroundPaths() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          width: "100%",
          height: "100%",
          filter: "blur(0.8px)",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="coralFrost" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,107,107,0)" />
            <stop offset="30%" stopColor="rgba(255,140,140,0.18)" />
            <stop offset="70%" stopColor="rgba(255,107,107,0.12)" />
            <stop offset="100%" stopColor="rgba(255,107,107,0)" />
          </linearGradient>
          <linearGradient id="coralFrost2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,107,107,0)" />
            <stop offset="40%" stopColor="rgba(255,160,160,0.14)" />
            <stop offset="80%" stopColor="rgba(255,107,107,0.08)" />
            <stop offset="100%" stopColor="rgba(255,107,107,0)" />
          </linearGradient>
        </defs>

        {PATHS.map((path, i) => (
          <motion.path
            key={i}
            d={path.d}
            stroke={i % 2 === 0 ? "url(#coralFrost)" : "url(#coralFrost2)"}
            strokeWidth={i % 3 === 0 ? 1.2 : 0.8}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: path.duration,
              delay: path.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
