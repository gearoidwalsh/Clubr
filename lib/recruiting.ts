/**
 * Single source for countdown target + copy. Adjust `COUNTDOWN_TARGET_ISO` at term start.
 * Dates are illustrative; clubs set real deadlines independently.
 */
export const COUNTDOWN_TARGET_ISO = "2026-09-01T08:00:00-07:00";

export const COUNTDOWN_DISCLAIMER =
  "Illustrative milestone only. Confirm application windows with each club every semester.";

/** Narrative label for what the timer is counting toward (edit with site-meta season copy). */
export function getCountdownLabel(now: Date = new Date()): string {
  const m = now.getMonth();
  if (m < 1) return "Spring recruiting window";
  if (m < 8) return "Fall recruiting window";
  return "Next recruiting cycle";
}

export function getCountdownTargetDate(): Date {
  return new Date(COUNTDOWN_TARGET_ISO);
}
