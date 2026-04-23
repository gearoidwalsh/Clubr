"use client";

import Link from "next/link";
import { OrbitalNav } from "@/components/OrbitalNav";
import { MobileNav } from "@/components/MobileNav";

export function HomeHeroSection() {
  return (
    <div className="w-full">
      <div className="md:hidden">
        <div className="mx-auto flex max-w-sm flex-col items-center px-4 pb-6">
          <div className="mb-6 text-center">
            <span className="font-display font-bold" style={{ fontSize: 28 }}>
              <span style={{ color: "#ffffff" }}>Club</span>
              <span style={{ color: "#FF6B6B" }}>r</span>
            </span>
            <p
              className="font-mono mt-2 text-[10px] uppercase tracking-[0.15em]"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Berkeley club recruiting
            </p>
          </div>
          <MobileNav />
        </div>
      </div>
      <div className="hidden md:block">
        <OrbitalNav />
      </div>

      <p className="mx-auto mt-6 max-w-lg px-4 text-center font-body text-sm leading-relaxed text-[#888888] md:mt-8">
        New here?{" "}
        <Link href="/guide" className="font-medium text-[#FF6B6B] underline-offset-2 hover:underline">
          Start with the Guide
        </Link>
        , browse{" "}
        <Link href="/clubs" className="font-medium text-[#FF6B6B] underline-offset-2 hover:underline">
          all clubs
        </Link>
        , or pick a category above.
      </p>
    </div>
  );
}
