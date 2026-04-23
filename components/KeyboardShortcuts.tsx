"use client";

import { useEffect } from "react";
import { analyticsEvents } from "@/lib/analytics";

interface KeyboardShortcutsProps {
  onSearchFocus: () => void;
  onEscape: () => void;
  onCommandPalette?: () => void;
}

export function KeyboardShortcuts({
  onSearchFocus,
  onEscape,
  onCommandPalette,
}: KeyboardShortcutsProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isCmdK = e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey);
      const isSlash = e.key === "/";

      if ((isCmdK || isSlash) && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        if (isCmdK && onCommandPalette) {
          onCommandPalette();
        } else {
          onSearchFocus();
        }
        analyticsEvents.keyboardShortcutUsed(isSlash ? "slash" : "cmd-k");
      }

      if (e.key === "Escape") onEscape();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onSearchFocus, onEscape, onCommandPalette]);

  return null;
}
