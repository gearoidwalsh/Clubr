"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { toast } from "sonner";

interface SaveButtonProps {
  isSaved: boolean;
  onToggle: () => void;
  variant: "save" | "bookmark";
  clubName: string;
}

export function SaveButton({ isSaved, onToggle, variant, clubName }: SaveButtonProps) {
  const label = variant === "save" ? "Save" : "Bookmark";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
    if (!isSaved) {
      toast.success(`${label}d to your list`, {
        description: clubName,
        duration: 2500,
        style: { background: "#FF6B6B", color: "#000", border: "none" },
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-3 left-3 z-20 rounded-full p-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      style={{
        backgroundColor: isSaved ? "#FF6B6B" : "rgba(255,255,255,0.1)",
        color: isSaved ? "#000" : "#fff",
      }}
      aria-label={isSaved ? `Remove ${clubName} from saved` : `${label} ${clubName}`}
    >
      {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
    </button>
  );
}
