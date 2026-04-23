"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type TestButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
};

/**
 * Simple demo button with motion hover / tap feedback.
 */
export function TestButton({ className, children, disabled, ...props }: TestButtonProps) {
  return (
    <motion.button
      type="button"
      disabled={disabled}
      whileHover={disabled ? undefined : { y: -2, scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-[#1C4C8A] px-4 text-sm font-medium text-white shadow-sm",
        "hover:bg-[#163d72] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A020]/60",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
