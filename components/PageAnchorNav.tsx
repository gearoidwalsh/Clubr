"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type AnchorItem = { id: string; label: string };

type PageAnchorNavProps = {
  items: AnchorItem[];
  className?: string;
};

export function PageAnchorNav({ items, className }: PageAnchorNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <nav
        className={cn(
          "hidden shrink-0 lg:block lg:w-[200px] xl:w-[220px]",
          "lg:sticky lg:top-24 lg:self-start",
          className,
        )}
        aria-label="On this page"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#4a5568]">
          On this page
        </p>
        <ul className="space-y-1 border-l border-[rgba(253,181,21,0.12)] pl-3">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block py-1 text-sm font-medium transition-colors",
                  activeId === item.id
                    ? "text-[#FDB515]"
                    : "text-[#8892a4] hover:text-[#f0f4ff]",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-8 lg:hidden">
        <label htmlFor="anchor-jump" className="sr-only">
          Jump to section
        </label>
        <select
          id="anchor-jump"
          defaultValue=""
          onChange={(e) => {
            const id = e.target.value;
            if (!id) return;
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            e.target.value = "";
          }}
          className="w-full rounded-md border border-[rgba(255,255,255,0.08)] bg-[#0a1628] px-3 py-2.5 text-sm font-medium text-[#f0f4ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB515]/30"
        >
          <option value="">Jump to section…</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
