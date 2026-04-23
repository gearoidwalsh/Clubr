export const CLUB_THEMES: Record<string, { gradient: string; accent: string }> = {
  "Voyager Consulting": {
    gradient: "linear-gradient(160deg, #1a1a1a 0%, #4a4a4a 60%, #f0f0f0 100%)",
    accent: "#555555",
  },
  "Berkeley Consulting": {
    gradient: "linear-gradient(160deg, #111827 0%, #374151 60%, #f0f0f0 100%)",
    accent: "#94a3b8",
  },
  "Berkeley Business Society": {
    gradient: "linear-gradient(160deg, #0a1628 0%, #1e3a5f 55%, #f0f0f0 100%)",
    accent: "#f59e0b",
  },
  "Net Impact at Berkeley": {
    gradient: "linear-gradient(160deg, #052e16 0%, #166534 55%, #f0f0f0 100%)",
    accent: "#16a34a",
  },
  "CMG Strategy Consulting": {
    gradient: "linear-gradient(160deg, #0c1222 0%, #1e40af 55%, #f0f0f0 100%)",
    accent: "#3b82f6",
  },
  "Valley Consulting Group": {
    gradient: "linear-gradient(160deg, #1a0533 0%, #6d28d9 55%, #f0f0f0 100%)",
    accent: "#8b5cf6",
  },
  "The Berkeley Group": {
    gradient: "linear-gradient(160deg, #071a0e 0%, #15803d 55%, #f0f0f0 100%)",
    accent: "#22c55e",
  },
  "180 Degrees Consulting": {
    gradient: "linear-gradient(160deg, #1c0f00 0%, #c2410c 55%, #f0f0f0 100%)",
    accent: "#f97316",
  },
  "Phoenix Consulting Group": {
    gradient: "linear-gradient(160deg, #1f0505 0%, #b91c1c 55%, #f0f0f0 100%)",
    accent: "#ef4444",
  },
  "Berkeley Investment Group": {
    gradient: "linear-gradient(160deg, #03111f 0%, #1d4ed8 55%, #f0f0f0 100%)",
    accent: "#3b82f6",
  },
  "Capital Investments at Berkeley": {
    gradient: "linear-gradient(160deg, #050f1a 0%, #1e40af 55%, #f0f0f0 100%)",
    accent: "#60a5fa",
  },
  "Traders at Berkeley": {
    gradient: "linear-gradient(160deg, #001a1f 0%, #0e7490 55%, #f0f0f0 100%)",
    accent: "#06b6d4",
  },
  "Berkeley Finance Club": {
    gradient: "linear-gradient(160deg, #0a0e2a 0%, #3730a3 55%, #f0f0f0 100%)",
    accent: "#6366f1",
  },
  "Women on Wall Street": {
    gradient: "linear-gradient(160deg, #1f0015 0%, #9d174d 55%, #f0f0f0 100%)",
    accent: "#ec4899",
  },
  "Microfinance at Berkeley": {
    gradient: "linear-gradient(160deg, #031a15 0%, #0f766e 55%, #f0f0f0 100%)",
    accent: "#14b8a6",
  },
  "Blackskies Investments": {
    gradient: "linear-gradient(160deg, #0d0820 0%, #5b21b6 55%, #f0f0f0 100%)",
    accent: "#7c3aed",
  },
  "Scholars of Finance": {
    gradient: "linear-gradient(160deg, #1a1200 0%, #b45309 55%, #f0f0f0 100%)",
    accent: "#d97706",
  },
  "Blockchain at Berkeley": {
    gradient: "linear-gradient(160deg, #0d1117 0%, #4c1d95 45%, #0e7490 75%, #f0f0f0 100%)",
    accent: "#2dd4bf",
  },
  "Free Ventures": {
    gradient: "linear-gradient(160deg, #001a00 0%, #166534 55%, #f0f0f0 100%)",
    accent: "#4ade80",
  },
  "AI Entrepreneurs at Berkeley": {
    gradient: "linear-gradient(160deg, #1a0a00 0%, #c2410c 55%, #f0f0f0 100%)",
    accent: "#f97316",
  },
  "Alpha Kappa Psi": {
    gradient: "linear-gradient(160deg, #1a0505 0%, #991b1b 55%, #f0f0f0 100%)",
    accent: "#fbbf24",
  },
  "Beta Alpha Psi": {
    gradient: "linear-gradient(160deg, #030d1f 0%, #1e3a8a 55%, #f0f0f0 100%)",
    accent: "#fbbf24",
  },
  "Delta Sigma Pi": {
    gradient: "linear-gradient(160deg, #0d0d0d 0%, #4c1d95 55%, #f0f0f0 100%)",
    accent: "#a78bfa",
  },
};

export const CATEGORY_FALLBACKS: Record<string, { gradient: string; accent: string }> = {
  Consulting: {
    gradient: "linear-gradient(160deg, #1a0808 0%, #9f1239 55%, #f0f0f0 100%)",
    accent: "#FF6B6B",
  },
  Finance: {
    gradient: "linear-gradient(160deg, #050f1a 0%, #1e40af 55%, #f0f0f0 100%)",
    accent: "#60a5fa",
  },
  Technical: {
    gradient: "linear-gradient(160deg, #100a1a 0%, #5b21b6 55%, #f0f0f0 100%)",
    accent: "#a78bfa",
  },
  Fraternity: {
    gradient: "linear-gradient(160deg, #0a1a12 0%, #14532d 55%, #f0f0f0 100%)",
    accent: "#34d399",
  },
  Other: {
    gradient: "linear-gradient(160deg, #111111 0%, #374151 55%, #f0f0f0 100%)",
    accent: "#94a3b8",
  },
};

export function getClubTheme(clubName: string, category: string) {
  return CLUB_THEMES[clubName] || CATEGORY_FALLBACKS[category] || CATEGORY_FALLBACKS.Other;
}
