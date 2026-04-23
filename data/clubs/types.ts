export type ClubCategory =
  | "Consulting"
  | "Finance"
  | "Technical"
  | "Fraternity"
  | "Other";

export type SelectivityLabel =
  | "Open"
  | "Moderately Selective"
  | "Highly Selective"
  | "Very Highly Selective";

/** Internal metadata only — never render in UI */
export type TierMeta =
  | "1A"
  | "1B"
  | "1C"
  | "2A"
  | "2B"
  | "3A"
  | "3B"
  | "Finance"
  | "Fraternity"
  | "Other";

export type Club = {
  id: string;
  name: string;
  abbreviation: string;
  category: ClubCategory;
  website: string;
  websiteUrl?: string;
  logoUrl?: string;
  overview: string;
  selectivity: SelectivityLabel;
  selectivityContext: string;
  careerFocus: string[];
  culture: string;
  bestFor: string[];
  /** Step-by-step; can include numbered lines */
  applicationProcess: string;
  alumniOutcomes?: string;
  insiderTips: string[];
  timeCommitment?: string;
  approximateSize: string;
  tier: TierMeta;
  transferFriendly: boolean | null;
  transferNotes?: string;
  deadline?: string | null;
  deadlineLabel?: string | null;
  updatedAt?: string;
  deadline_label?: string | null;
  transfer_friendly?: boolean;
  updated_at?: string;
};

export const DIRECTORY_CATEGORIES: Array<"All" | ClubCategory> = [
  "All",
  "Consulting",
  "Finance",
  "Technical",
  "Fraternity",
  "Other",
];

export function selectivityChipLabel(s: SelectivityLabel): string {
  switch (s) {
    case "Open":
      return "Open";
    case "Moderately Selective":
      return "Moderately selective";
    case "Highly Selective":
      return "Highly selective";
    case "Very Highly Selective":
      return "Very highly selective";
    default:
      return s;
  }
}
