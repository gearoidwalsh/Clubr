"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FadeIn } from "@/components/FadeIn";

const items = [
  {
    title: "Club directory",
    description:
      "Dozens of orgs with student-written blurbs on selectivity and culture—verify anything official with the club.",
    link: "/clubs",
  },
  {
    title: "Guide",
    description:
      "Timeline-style writeup from info sessions through offers. Not a substitute for each club's own instructions.",
    link: "/guide",
  },
  {
    title: "Recruiting notes",
    description:
      "Practical notes on coffee chats, resumes, essays, and interviews. Keep open while you draft.",
    link: "/guide?tab=recruiting",
  },
  {
    title: "Transfers",
    description:
      "Less time on campus than four-year students; section focuses on fall recruiting and compressed planning.",
    link: "/your-path",
  },
  {
    title: "First years",
    description:
      "How sophomore-year recruiting fits into freshman year—calendar-focused, not a pep talk.",
    link: "/your-path?tab=first-years",
  },
  {
    title: "Community tips",
    description:
      "Short notes from other students—each post is one person&apos;s take, not a policy.",
    link: "/community",
  },
];

export function HomeFeatureSection() {
  return (
    <FadeIn>
      <section className="section-padding pt-0">
        <div className="container-width">
          <h2 className="font-display text-2xl font-semibold text-[#FDB515] md:text-3xl">Start here</h2>
          <p className="font-body mt-2 max-w-2xl text-sm leading-relaxed text-[#888888] md:text-base">
            Sections stand alone—use what applies and skip the rest.
          </p>
          <HoverEffect items={items} />
        </div>
      </section>
    </FadeIn>
  );
}
