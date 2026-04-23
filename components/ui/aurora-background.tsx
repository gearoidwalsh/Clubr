"use client";

import { cn } from "@/lib/utils";

type AuroraBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "[--aurora:repeating-linear-gradient(100deg,#0f2040_10%,#1C4C8A_20%,#020817_30%,#1a3a6b_40%,#34d399_50%,#020817_60%)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-[-40%] opacity-60 blur-3xl"
        style={{
          background:
            "repeating-linear-gradient(100deg, #0f2040 10%, #1C4C8A 20%, #020817 30%, #1a3a6b 40%, #34d399 50%, #020817 60%)",
          backgroundSize: "300% 300%",
          animation: "aurora-shift 18s ease infinite",
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
