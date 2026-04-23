"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { analyticsEvents } from "@/lib/analytics";

const STORAGE_KEY = "clubr_saved";

function getAbVariant(): "save" | "bookmark" {
  if (typeof window === "undefined") return "save";
  const stored = localStorage.getItem("clubr_ab_cta");
  if (stored === "save" || stored === "bookmark") return stored;
  const variant = Math.random() > 0.5 ? "save" : "bookmark";
  localStorage.setItem("clubr_ab_cta", variant);
  return variant;
}

export function useSavedClubs() {
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [ctaVariant, setCtaVariant] = useState<"save" | "bookmark">("save");

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setSaved(new Set(JSON.parse(raw) as string[]));
      } catch {
        setSaved(new Set());
      }
    }
    const variant = getAbVariant();
    setCtaVariant(variant);
    analyticsEvents.abVariantSeen(variant);
  }, []);

  const toggle = useCallback(
    (clubId: string, clubName: string) => {
      setSaved((prev) => {
        const next = new Set(prev);
        if (next.has(clubId)) {
          next.delete(clubId);
          analyticsEvents.clubUnsaved(clubName);
        } else {
          next.add(clubId);
          analyticsEvents.clubSaved(clubName);
          analyticsEvents.abVariantClicked(ctaVariant);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
        return next;
      });
    },
    [ctaVariant],
  );

  const ids = useMemo(() => [...saved], [saved]);
  const has = useCallback((id: string) => saved.has(id), [saved]);

  const clear = useCallback(() => {
    setSaved(new Set());
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }, []);

  return { saved, ids, count: saved.size, toggle, has, clear, ctaVariant };
}
