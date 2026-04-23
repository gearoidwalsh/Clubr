"use client";

import { track } from "@vercel/analytics";
import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

let posthogInitialized = false;

function ensurePosthog() {
  if (typeof window === "undefined" || posthogInitialized || !POSTHOG_KEY) return;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false,
    persistence: "localStorage",
  });
  posthogInitialized = true;
}

type AnalyticsPayload = Record<string, string | number | boolean | null>;

function emit(name: string, payload?: AnalyticsPayload) {
  track(name, payload);
  ensurePosthog();
  if (posthogInitialized) posthog.capture(name, payload);
}

export const analyticsEvents = {
  clubCardClick: (clubName: string) => emit("club_card_click", { club: clubName }),
  clubSaved: (clubName: string) => emit("club_saved", { club: clubName }),
  clubUnsaved: (clubName: string) => emit("club_unsaved", { club: clubName }),
  searchQuery: (query: string) => emit("search_query", { query }),
  filterUsed: (filter: string) => emit("filter_used", { filter }),
  savedFilterUsed: () => emit("saved_filter_used"),
  onboardingCompleted: (segment: string) => emit("onboarding_completed", { segment }),
  keyboardShortcutUsed: (shortcut: string) => emit("keyboard_shortcut", { shortcut }),
  abVariantSeen: (variant: "save" | "bookmark") => emit("ab_cta_seen", { variant }),
  abVariantClicked: (variant: "save" | "bookmark") => emit("ab_cta_clicked", { variant }),
};
