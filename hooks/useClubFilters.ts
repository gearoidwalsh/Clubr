"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { clubs, DIRECTORY_CATEGORIES } from "@/data/clubs";
import type { ClubCategory } from "@/data/clubs";
import { analyticsEvents } from "@/lib/analytics";

export function useClubFilters(options?: { syncQuery?: boolean }) {
  const searchParams = useSearchParams();
  const syncQuery = options?.syncQuery ?? true;

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof DIRECTORY_CATEGORIES)[number] | null>(null);
  const [transferOnly, setTransferOnly] = useState(false);

  const categoryFromQuery = useMemo(() => {
    if (!syncQuery) return null;
    const cat = searchParams.get("category");
    if (!cat) return null;
    const validCategories = ["All", "Consulting", "Finance", "Technical", "Fraternity", "Other"];
    const matched = validCategories.find((c) => c.toLowerCase() === cat.toLowerCase());
    return matched ? (matched as (typeof DIRECTORY_CATEGORIES)[number]) : null;
  }, [searchParams, syncQuery]);

  const category = selectedCategory ?? categoryFromQuery ?? "All";

  useEffect(() => {
    if (search.trim()) analyticsEvents.searchQuery(search.trim());
  }, [search]);

  useEffect(() => {
    analyticsEvents.filterUsed(`category:${category}`);
  }, [category]);

  useEffect(() => {
    if (transferOnly) analyticsEvents.filterUsed("transfer_only");
  }, [transferOnly]);

  const filtered = useMemo(() => {
    return clubs.filter((club) => {
      const matchesCategory =
        category === "All" || club.category === (category as ClubCategory);
      const matchesSearch =
        club.name.toLowerCase().includes(search.toLowerCase()) ||
        club.abbreviation.toLowerCase().includes(search.toLowerCase());
      const matchesTransfer = !transferOnly || club.transferFriendly === true;
      return matchesCategory && matchesSearch && matchesTransfer;
    });
  }, [category, search, transferOnly]);

  const relatedIndices = useMemo(() => {
    const record: Record<number, number[]> = {};
    filtered.forEach((club, i) => {
      const peers = filtered
        .map((c, j) => ({ c, j }))
        .filter(({ c, j }) => j !== i && c.category === club.category)
        .slice(0, 3)
        .map(({ j }) => j);
      record[i] = peers;
    });
    return record;
  }, [filtered]);

  return {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    transferOnly,
    setTransferOnly,
    category,
    filtered,
    relatedIndices,
  };
}
