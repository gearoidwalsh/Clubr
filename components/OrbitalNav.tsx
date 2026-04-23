"use client";

import {
  IconBriefcase,
  IconChartBar,
  IconCode,
  IconUsers,
} from "@tabler/icons-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const NODE_STYLE = {
  glow: "rgba(255, 107, 107, 0.25)",
  border: "rgba(255, 107, 107, 0.45)",
  iconColor: "#FF6B6B",
  background:
    "radial-gradient(circle at center, rgba(255,107,107,0.2) 0%, rgba(0,0,0,0.85) 70%)",
  boxShadow: "0 0 24px rgba(255,107,107,0.2), inset 0 0 20px rgba(255,107,107,0.1)",
} as const;

const ORBIT_RADIUS = 465;
const NODE_SIZE = 160;
const CENTER_SIZE = 340;
const CANVAS = 1200;

const CATEGORY_NODES = [
  {
    label: "Consulting",
    sublabel: "Strategy, case work, client projects",
    href: "/clubs?category=Consulting",
    icon: IconBriefcase,
    angle: 315,
  },
  {
    label: "Finance",
    sublabel: "Investing, trading, IB, quant",
    href: "/clubs?category=Finance",
    icon: IconChartBar,
    angle: 45,
  },
  {
    label: "Technical",
    sublabel: "Product, engineering, data, crypto",
    href: "/clubs?category=Technical",
    icon: IconCode,
    angle: 135,
  },
  {
    label: "Biz Frat",
    sublabel: "Business fraternities & professional orgs",
    href: "/clubs?category=Fraternity",
    icon: IconUsers,
    angle: 225,
  },
];

export function OrbitalNav() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focusedCategory, setFocusedCategory] = useState(0);
  const categoryBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [warping, setWarping] = useState(false);
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const SIZE = CANVAS;
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const scale = Math.min(1, (windowWidth - 32) / SIZE);

  const handleNodeClick = async (href: string) => {
    if (reduceMotion) {
      router.push(href);
      return;
    }
    setWarping(true);
    await new Promise((resolve) => setTimeout(resolve, 260));
    router.push(href);
    setWarping(false);
  };

  const focusCategory = (index: number) => {
    const len = CATEGORY_NODES.length;
    const next = ((index % len) + len) % len;
    setFocusedCategory(next);
    queueMicrotask(() => categoryBtnRefs.current[next]?.focus());
  };

  const onCategoryKeyDown = (i: number, e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusCategory(i + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusCategory(i - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusCategory(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusCategory(CATEGORY_NODES.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      void handleNodeClick(CATEGORY_NODES[i].href);
    }
  };

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: "100%", maxWidth: SIZE, height: SIZE * scale }}
    >
      <div
        className="relative"
        role="group"
        aria-label="Club categories"
        style={{
          width: SIZE,
          height: SIZE,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          aria-hidden
        >
          <circle
            cx={cx}
            cy={cy}
            r={ORBIT_RADIUS}
            fill="none"
            stroke="rgba(255,107,107,0.08)"
            strokeWidth="1"
            strokeDasharray="4 12"
          />
        </svg>

        <div
          className="absolute"
          style={{
            left: cx - CENTER_SIZE / 2,
            top: cy - CENTER_SIZE / 2,
            width: CENTER_SIZE,
            height: CENTER_SIZE,
          }}
        >
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    boxShadow: [
                      "0 0 60px rgba(255,107,107,0.15), 0 0 120px rgba(255,107,107,0.06), inset 0 0 40px rgba(255,107,107,0.08)",
                      "0 0 80px rgba(255,107,107,0.22), 0 0 140px rgba(255,107,107,0.1), inset 0 0 48px rgba(255,107,107,0.12)",
                      "0 0 60px rgba(255,107,107,0.15), 0 0 120px rgba(255,107,107,0.06), inset 0 0 40px rgba(255,107,107,0.08)",
                    ],
                  }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex flex-col items-center justify-center rounded-full text-center"
            style={{
              width: CENTER_SIZE,
              height: CENTER_SIZE,
              background:
                "radial-gradient(circle at 40% 40%, rgba(255,107,107,0.18) 0%, rgba(0,0,0,0.92) 65%)",
              border: "1px solid rgba(255,107,107,0.3)",
              boxShadow:
                "0 0 60px rgba(255,107,107,0.15), 0 0 120px rgba(255,107,107,0.06), inset 0 0 40px rgba(255,107,107,0.08)",
            }}
          >
            <div className="mb-2">
              <span className="font-display font-bold" style={{ fontSize: 36, color: "#ffffff" }}>
                Club
              </span>
              <span className="font-display font-bold" style={{ fontSize: 36, color: "#FF6B6B" }}>
                r
              </span>
            </div>
            <p
              className="font-mono uppercase tracking-[0.15em]"
              style={{
                fontSize: 10,
                color: "#ffffff",
                maxWidth: 180,
                lineHeight: 1.6,
                opacity: 0.85,
              }}
            >
              Berkeley club recruiting
            </p>
            <p
              className="font-mono mt-3 uppercase tracking-widest"
              style={{ fontSize: 8, color: "rgba(255,107,107,0.5)" }}
            >
              Pick a category
            </p>
          </motion.div>
        </div>

        {CATEGORY_NODES.map((node, i) => {
          const Icon = node.icon;
          const isHovered = hovered === i;
          const cos = Math.cos((node.angle * Math.PI) / 180);
          const sin = Math.sin((node.angle * Math.PI) / 180);
          const ox = ORBIT_RADIUS * cos - NODE_SIZE / 2;
          const oy = ORBIT_RADIUS * sin - NODE_SIZE / 2;

          return (
            <motion.div
              key={node.href}
              className="absolute"
              style={{
                left: `${cx}px`,
                top: `${cy}px`,
                width: 0,
                height: 0,
              }}
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  left: ox,
                  top: oy,
                }}
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <button
                  type="button"
                  ref={(el) => {
                    categoryBtnRefs.current[i] = el;
                  }}
                  tabIndex={focusedCategory === i ? 0 : -1}
                  onFocus={() => setFocusedCategory(i)}
                  onKeyDown={(e) => onCategoryKeyDown(i, e)}
                  onClick={() => void handleNodeClick(node.href)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  aria-label={`${node.label}: ${node.sublabel}`}
                  className="relative flex cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B6B] focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.96]"
                >
                  <motion.div
                    className="flex items-center justify-center rounded-full"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            boxShadow:
                              "0 0 44px rgba(255,107,107,0.4), inset 0 0 30px rgba(255,107,107,0.2)",
                            scale: 1.08,
                          }
                    }
                    style={{
                      width: NODE_SIZE,
                      height: NODE_SIZE,
                      background: NODE_STYLE.background,
                      border: `1px solid ${isHovered || focusedCategory === i ? "rgba(255,107,107,0.55)" : NODE_STYLE.border}`,
                      boxShadow: NODE_STYLE.boxShadow,
                      transition: "border-color 0.25s ease",
                    }}
                  >
                    <Icon size={52} color={NODE_STYLE.iconColor} strokeWidth={1.4} aria-hidden />
                  </motion.div>
                  <div
                    className="pointer-events-none absolute text-center"
                    style={{
                      top: NODE_SIZE + 16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      className="mt-2 block font-mono text-[12px] tracking-wider uppercase"
                      style={{ color: "#FF6B6B" }}
                    >
                      {node.label}
                    </span>
                  </div>
                </button>

                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="pointer-events-none absolute z-30"
                    style={{
                      top: NODE_SIZE + 8,
                      left: "50%",
                      transform: "translateX(-50%)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div
                      className="rounded-lg px-3 py-2"
                      style={{
                        background: "#111111",
                        border: "1px solid rgba(255,107,107,0.35)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
                      }}
                    >
                      <p className="font-body text-[11px] text-[#f0f0f0]">{node.sublabel}</p>
                      <p className="mt-1 font-mono text-[10px] text-[#FF6B6B]">
                        View {node.label} clubs →
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
        <AnimatePresence>
          {warping && !reduceMotion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none fixed inset-0 z-50"
              style={{
                background: "radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, transparent 70%)",
              }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 0.3, 0] }}
                  transition={{ duration: 0.26, delay: i * 0.018 }}
                  className="absolute top-1/2 left-1/2 h-px origin-left bg-white"
                  style={{
                    width: "50vw",
                    transform: `translateY(-50%) rotate(${i * 36}deg)`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
