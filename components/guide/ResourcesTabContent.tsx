"use client";

import { useMemo, useState } from "react";
import ResourceCard, { type Resource } from "@/components/ResourceCard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Resumes",
  "Cover Letters",
  "Interview Prep",
  "Coffee Chat Scripts",
  "Case Studies",
  "Finance",
  "Product Management",
] as const;

const resources: Resource[] = [
  {
    category: "Resumes",
    title: "Berkeley Consulting Resume Template",
    description: "ATS-friendly format plus bullet rewrites from recent club admits.",
  },
  {
    category: "Cover Letters",
    title: "Club-Specific Cover Letter Starter Kit",
    description: "Framework and examples to tailor your narrative quickly.",
  },
  {
    category: "Interview Prep",
    title: "Behavioral Story Bank Worksheet",
    description: "Build concrete STAR stories for recruiting interviews.",
  },
  {
    category: "Coffee Chat Scripts",
    title: "Warm Intro and Follow-Up Scripts",
    description: "Message templates for outreach, scheduling, and thank-you notes.",
  },
  {
    category: "Case Studies",
    title: "Case Interview Prompt Pack",
    description: "15 consulting-style prompts with structure examples and debriefs.",
  },
  {
    category: "Finance",
    title: "Finance Technicals Crash Guide",
    description: "Core accounting, valuation, and market concepts for interviews.",
  },
  {
    category: "Product Management",
    title: "Product Sense Practice Deck",
    description: "PM mock prompts, user segmentation drills, and answer rubrics.",
  },
  {
    category: "Interview Prep",
    title: "Mock Interview Scorecard",
    description: "Standardized rubric to improve answer clarity and confidence.",
  },
];

export function ResourcesTabContent() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(
    "All",
  );

  const filtered = useMemo(() => {
    if (activeCategory === "All") return resources;
    return resources.filter((resource) => resource.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-padding">
      <div className="container-width space-y-6">
        <div className="space-y-2">
          <span className="mb-3 block font-mono text-[10px] tracking-[0.25em] uppercase text-[#FDB515]">
            Resources
          </span>
          <h1 className="font-display text-[40px] font-bold text-[#f0f0f0] md:text-5xl">
            Resource Library
          </h1>
          <p className="max-w-3xl font-body text-[15px] leading-[1.7] text-[#888888]">
            Checklists and starters. Treat anything date-sensitive as a draft until you verify it on
            the club&apos;s official page.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setActiveCategory(category)}>
              <Badge
                className={cn(
                  "cursor-pointer",
                  activeCategory === category
                    ? "border-0 bg-[#FDB515] text-black"
                    : "border border-[rgba(255,255,255,0.08)] bg-transparent text-[#888888] hover:bg-[rgba(253,181,21,0.08)]",
                )}
              >
                {category}
              </Badge>
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
