"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconBriefcase,
  IconChartBar,
  IconCode,
  IconLayoutGrid,
  IconUsers,
} from "@tabler/icons-react";

const MOBILE_CATEGORIES = [
  {
    label: "Consulting",
    sublabel: "Strategy, case work, client projects",
    href: "/clubs?category=Consulting",
    color: "#FF6B6B",
    icon: IconBriefcase,
  },
  {
    label: "Finance",
    sublabel: "Investing, trading, IB, quant",
    href: "/clubs?category=Finance",
    color: "#60a5fa",
    icon: IconChartBar,
  },
  {
    label: "Technical",
    sublabel: "Product, engineering, data, crypto",
    href: "/clubs?category=Technical",
    color: "#a78bfa",
    icon: IconCode,
  },
  {
    label: "Biz Frat",
    sublabel: "Business fraternities & professional orgs",
    href: "/clubs?category=Fraternity",
    color: "#34d399",
    icon: IconUsers,
  },
  {
    label: "Browse all clubs",
    sublabel: "See the full directory",
    href: "/clubs",
    color: "#f0f0f0",
    icon: IconLayoutGrid,
  },
];

export function MobileNav() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-2 px-4 pt-4">
      {MOBILE_CATEGORIES.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
          >
            <Link href={node.href}>
              <div
                className="flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.08)] p-4 transition-all duration-150 hover:border-[rgba(255,255,255,0.12)] active:scale-[0.98]"
                style={{ background: "rgba(10,10,10,0.8)" }}
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(255,107,107,0.1)",
                    border: "1px solid rgba(255,107,107,0.28)",
                  }}
                >
                  <Icon size={18} color={node.color} />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-[#f0f0f0]">{node.label}</p>
                  <p className="mt-0.5 font-body text-xs text-[#888888]">{node.sublabel}</p>
                </div>
                <span className="ml-auto text-sm text-[#444444]">→</span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
