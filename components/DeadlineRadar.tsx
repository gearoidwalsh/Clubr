"use client";

import { differenceInDays, parseISO } from "date-fns";
import { Clock } from "lucide-react";

interface DeadlineRadarProps {
  deadline: string | null | undefined;
}

export function DeadlineRadar({ deadline }: DeadlineRadarProps) {
  if (!deadline) return null;

  const daysLeft = differenceInDays(parseISO(deadline), new Date());
  if (daysLeft < 0 || daysLeft > 14) return null;

  const isCritical = daysLeft <= 7;
  const color = isCritical ? "#FF6B6B" : "#2DD4BF";
  const label = daysLeft === 0 ? "Due today" : `${daysLeft}d left`;

  return (
    <div
      className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold"
      style={{
        backgroundColor: `${color}18`,
        border: `1px solid ${color}40`,
        color,
      }}
    >
      {isCritical && (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: color }} />
      )}
      <Clock size={10} />
      {label}
    </div>
  );
}
