"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useEffect, useRef, useState } from "react";
import type { Club } from "@/data/clubs";
import { useSavedClubs } from "@/hooks/useSavedClubs";
import { getClubTheme } from "@/lib/clubThemes";
import { SaveButton } from "@/components/SaveButton";
import { DeadlineRadar } from "@/components/DeadlineRadar";
import { analyticsEvents } from "@/lib/analytics";

function overviewToBullets(text: string): string[] {
  return text
    .split(/(?<=\.)\s+/)
    .filter((s) => s.trim().length > 10)
    .slice(0, 4);
}

function toText(content: string | string[] | undefined) {
  if (!content) return "";
  return Array.isArray(content) ? content.join(" ") : content;
}

function ClubDrawer({
  club,
  theme,
  onClose,
}: {
  club: Club;
  theme: { gradient: string; accent: string };
  onClose: () => void;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        drawerRef.current?.scrollBy({ top: 120, behavior: "smooth" });
      }
      if (e.key === "ArrowUp") {
        drawerRef.current?.scrollBy({ top: -120, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40"
        style={{ background: "rgba(0,0,0,0.6)" }}
        onClick={onClose}
      />

      <motion.div
        ref={drawerRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="fixed top-0 right-0 bottom-0 z-50 flex flex-col"
        style={{
          width: "min(520px, 92vw)",
          background: "#ffffff",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.4)",
          overflowY: "auto",
          overscrollBehavior: "contain",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative p-8 pb-6"
          style={{
            background: theme.gradient,
            minHeight: 160,
          }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-70"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
          >
            ×
          </button>

          <h2 className="font-display text-2xl font-bold leading-tight text-[#ffffff]">{club.name}</h2>

          <span
            className="mt-2 inline-block rounded-md px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase"
            style={{
              background: `${theme.accent}25`,
              color: theme.accent,
              border: `1px solid ${theme.accent}40`,
            }}
          >
            {club.category}
          </span>
        </div>

        <div className="p-8" style={{ background: "#FF6B6B" }}>
          <Link
            href={`/clubs/${club.id}`}
            className="font-mono mb-6 inline-flex items-center gap-1 text-[11px] tracking-wider uppercase text-white/95 underline-offset-4 hover:underline"
          >
            Open full page →
          </Link>
          <div className="mb-6 flex flex-wrap gap-3">
            {club.transferFriendly && (
              <span
                className="rounded-lg px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                Transfer-friendly
              </span>
            )}
            {club.timeCommitment && (
              <span
                className="rounded-lg px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                {club.timeCommitment}
              </span>
            )}
          </div>

          {[
            { label: "Overview", content: toText(club.overview) },
            { label: "Culture", content: toText(club.culture) },
            { label: "Best for", content: toText(club.bestFor) },
            { label: "Application process", content: toText(club.applicationProcess) },
            { label: "Alumni outcomes", content: toText(club.alumniOutcomes) },
          ]
            .filter((s) => s.content)
            .map((section) => (
              <div key={section.label} className="mb-6">
                <h4
                  className="mb-2 font-mono text-[10px] tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {section.label}
                </h4>
                <p
                  className="font-body text-[14px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.95)" }}
                >
                  {section.content}
                </p>
              </div>
            ))}

          {club.insiderTips?.length > 0 && (
            <div className="mb-6">
              <h4
                className="mb-3 font-mono text-[10px] tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Insider tips
              </h4>
              <div className="flex flex-col gap-2">
                {club.insiderTips.map((tip, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-3 font-body text-[13px] leading-relaxed"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#ffffff",
                    }}
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          )}

          {(club.websiteUrl ?? club.website) && (
            <a
              href={club.websiteUrl ?? club.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase"
              style={{ color: "#ffffff" }}
            >
              Visit website →
            </a>
          )}
        </div>
      </motion.div>
    </>
  );
}

const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

export default function ClubCard({ club, onExpand }: { club: Club; onExpand?: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const theme = getClubTheme(club.name, club.category);
  const { saved, toggle, ctaVariant } = useSavedClubs();
  const isSaved = saved.has(club.id);
  const updatedAt = club.updatedAt ?? club.updated_at;
  const deadline = club.deadline ?? undefined;

  return (
    <>
      <motion.div
        onClick={() => {
          analyticsEvents.clubCardClick(club.name);
          onExpand?.();
          setExpanded(true);
        }}
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="group relative flex flex-none cursor-pointer flex-col overflow-hidden rounded-2xl"
        style={{
          width: 340,
          height: 460,
          background: theme.gradient,
          border: "1px solid rgba(255,107,107,0.35)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: NOISE_BG,
            opacity: 0.6,
            zIndex: 1,
          }}
        />

        <div
          className="pointer-events-none absolute right-4 bottom-4 select-none font-display leading-none font-black"
          style={{
            fontSize: 120,
            color: theme.accent,
            opacity: 0.07,
            zIndex: 1,
            lineHeight: 1,
          }}
        >
          {club.name[0]}
        </div>

        <SaveButton
          isSaved={isSaved}
          onToggle={() => toggle(club.id, club.name)}
          variant={ctaVariant}
          clubName={club.name}
        />
        <DeadlineRadar deadline={deadline} />

        <div className="relative z-10 flex h-full flex-col p-6">
          <div className="mb-auto flex items-start justify-between gap-2">
            <span
              className="rounded-md px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {club.category}
            </span>
          </div>

          <div className="mt-auto mb-4">
            <h3
              className="font-display leading-tight font-bold"
              style={{
                color: "#ffffff",
                fontSize: "clamp(17px, 2.5vw, 22px)",
                textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                maxWidth: "95%",
              }}
            >
              {club.name}
            </h3>
          </div>

          <ul className="mb-4 space-y-1.5">
            {overviewToBullets(club.overview)
              .slice(0, 3)
              .map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                    style={{ background: "rgba(255,255,255,0.5)" }}
                  />
                  <span
                    className="font-body text-[12px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
          </ul>

          <div className="pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {updatedAt ? (
              <span className="block text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Updated {formatDistanceToNow(parseISO(updatedAt), { addSuffix: true })}
              </span>
            ) : null}
            <div className="mt-1 flex items-center justify-between">
              <span
                className="font-mono text-[9px] tracking-wider uppercase"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Click to expand
              </span>
              <span
                className="font-mono text-[10px] tracking-wider uppercase"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                Full profile →
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {expanded && <ClubDrawer club={club} theme={theme} onClose={() => setExpanded(false)} />}
      </AnimatePresence>
    </>
  );
}
