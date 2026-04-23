"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
};

export function MagneticButton({ children, className = "", onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const inner = href ? (
    <Link href={href} className={cn("inline-flex", className)} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button type="button" className={cn("inline-flex", className)} onClick={onClick}>
      {children}
    </button>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="inline-flex"
    >
      {inner}
    </motion.div>
  );
}
