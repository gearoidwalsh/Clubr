import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "gold" | "muted";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] uppercase",
        variant === "default" &&
          "border-[rgba(253,181,21,0.2)] bg-[rgba(253,181,21,0.08)] text-[#FDB515]",
        variant === "gold" &&
          "border-[rgba(253,181,21,0.2)] bg-[rgba(253,181,21,0.08)] text-[#FDB515]",
        variant === "muted" && "border-[rgba(255,255,255,0.06)] bg-[#111111] text-[#888888]",
        className,
      )}
      {...props}
    />
  );
}
