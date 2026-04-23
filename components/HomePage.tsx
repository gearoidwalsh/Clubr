"use client";

import { motion } from "framer-motion";
import { AuthorsNote } from "@/components/AuthorsNote";
import { ClubDirectorySection } from "@/components/ClubDirectorySection";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { HomeQuotes } from "@/components/HomeQuotes";
import { RecruitingCountdown } from "@/components/RecruitingCountdown";
import { clubs } from "@/data/clubs";

function FadeSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function HomePage() {
  return (
    <main className="relative min-h-screen" style={{ background: "transparent" }}>
      <div style={{ position: "relative", zIndex: 10 }}>
        <FadeSection className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center pt-20 pb-8 md:pb-12">
          <HomeHeroSection />
          <HomeQuotes />
        </FadeSection>

        <AuthorsNote />

        <FadeSection className="pt-16">
          <ClubDirectorySection clubs={clubs} />
        </FadeSection>

        <FadeSection className="pb-24 pt-8">
          <RecruitingCountdown />
        </FadeSection>
      </div>
    </main>
  );
}
