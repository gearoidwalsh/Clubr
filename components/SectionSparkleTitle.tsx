"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { GlowHeader } from "@/components/GlowHeader";
import { cn } from "@/lib/utils";

export function SectionSparkleTitle({
  children,
  className,
  particleColor = "#34d399",
}: {
  children: React.ReactNode;
  className?: string;
  particleColor?: string;
}) {
  return (
    <h2 className={cn("font-display relative mb-6 inline-block text-2xl font-semibold text-[#f0f4ff]", className)}>
      <SparklesCore
        background="transparent"
        minSize={0.3}
        maxSize={0.8}
        particleDensity={20}
        className="absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)]"
        particleColor={particleColor}
        speed={0.25}
      />
      <span className="relative z-10">
        <GlowHeader>{children}</GlowHeader>
      </span>
    </h2>
  );
}
