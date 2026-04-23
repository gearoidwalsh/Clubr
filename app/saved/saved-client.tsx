"use client";

import Link from "next/link";
import { IconHeart, IconTrash } from "@tabler/icons-react";
import { clubs } from "@/data/clubs";
import type { Club } from "@/data/clubs";
import { useSavedClubs } from "@/hooks/useSavedClubs";

export function SavedClient() {
  const { ids, toggle, clear } = useSavedClubs();
  const saved = ids
    .map((id) => clubs.find((c) => c.id === id))
    .filter((c): c is Club => c != null);
  const compareHref =
    ids.length >= 2 ? `/compare?ids=${encodeURIComponent(ids.slice(0, 6).join(","))}` : null;

  if (ids.length === 0) {
    return (
      <div className="soft-card mx-auto max-w-lg p-8 text-center">
        <p className="font-body text-sm text-[#888888]">
          No clubs saved yet. Open the directory and tap the heart on a card to shortlist.
        </p>
        <Link
          href="/clubs"
          className="font-mono mt-6 inline-flex h-10 items-center justify-center rounded-md border border-[rgba(255,107,107,0.35)] px-4 text-xs uppercase tracking-widest text-[#FF6B6B] transition hover:bg-[rgba(255,107,107,0.08)]"
        >
          Browse clubs
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#666666]">
          {saved.length} saved
        </p>
        <div className="flex flex-wrap gap-2">
          {compareHref && (
            <Link
              href={compareHref}
              className="font-mono inline-flex h-9 items-center justify-center rounded-md border border-[rgba(255,107,107,0.35)] bg-[rgba(255,107,107,0.06)] px-3 text-[11px] uppercase tracking-widest text-[#FF6B6B] transition hover:bg-[rgba(255,107,107,0.12)]"
            >
              Compare
            </Link>
          )}
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined" && window.confirm("Remove all saved clubs?")) clear();
            }}
            className="font-mono inline-flex h-9 items-center gap-1.5 rounded-md border border-[rgba(255,255,255,0.1)] px-3 text-[11px] uppercase tracking-widest text-[#888888] transition hover:border-[rgba(255,107,107,0.25)] hover:text-[#FF6B6B]"
          >
            <IconTrash size={14} aria-hidden />
            Clear
          </button>
        </div>
      </div>

      <ul className="space-y-3">
        {saved.map((club) => (
          <li key={club.id}>
            <div className="soft-card flex flex-wrap items-center justify-between gap-4 p-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#555555]">
                  {club.category}
                </p>
                <p className="font-display text-lg font-semibold text-[#f0f0f0]">{club.name}</p>
                <Link
                  href={`/clubs/${club.id}`}
                  className="font-mono mt-1 inline-block text-[11px] uppercase tracking-widest text-[#FF6B6B] hover:underline"
                >
                  Full profile →
                </Link>
              </div>
              <button
                type="button"
                onClick={() => toggle(club.id, club.name)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,107,107,0.35)] text-[#FF6B6B] transition hover:bg-[rgba(255,107,107,0.12)]"
                aria-label={`Remove ${club.name} from saved`}
              >
                <IconHeart size={20} fill="currentColor" aria-hidden />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
