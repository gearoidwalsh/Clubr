import { consultingClubs } from "./consulting";
import { otherClubs } from "./rest";
import { CLUB_ENRICHMENTS } from "./enrichments";

export { DIRECTORY_CATEGORIES, selectivityChipLabel } from "./types";
export type {
  Club,
  ClubCategory,
  SelectivityLabel,
  TierMeta,
} from "./types";

const baseClubs = [...consultingClubs, ...otherClubs];

export const clubs = baseClubs.map((club) => {
  const patch = CLUB_ENRICHMENTS[club.id];
  if (!patch) return club;
  return {
    ...club,
    ...patch,
    websiteUrl: patch.websiteUrl ?? club.website,
  };
});
