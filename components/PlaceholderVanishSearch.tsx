"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PLACEHOLDERS = [
  "Search for Voyager Consulting…",
  "Search for Berkeley Investment Group…",
  "Search for Product Buds…",
  "Find a transfer-friendly club…",
];

export function PlaceholderVanishSearch({
  value,
  onChange,
  className,
  inputRef,
  hint,
}: {
  value: string;
  onChange: (v: string) => void;
  className?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  hint?: React.ReactNode;
}) {
  const [ix, setIx] = useState(0);
  const localRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIx((i) => (i + 1) % PLACEHOLDERS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={cn("relative max-w-lg", className)}>
      <Input
        ref={inputRef ?? localRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=""
        className="peer relative z-10 bg-[#0a1628] pr-9"
        aria-label="Search clubs"
      />
      {hint ? <div className="absolute top-1/2 right-2 z-20 -translate-y-1/2">{hint}</div> : null}
      {!value && (
        <span
          className="pointer-events-none absolute left-3 top-1/2 z-0 max-w-[calc(100%-1.5rem)] -translate-y-1/2 truncate text-sm text-[#8892a4]/70 transition-opacity duration-300 peer-focus:opacity-0"
          aria-hidden
        >
          {PLACEHOLDERS[ix]}
        </span>
      )}
    </div>
  );
}
