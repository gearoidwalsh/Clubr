"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { analyticsEvents } from "@/lib/analytics";

const SEGMENTS = [
  {
    id: "transfer",
    label: "Transfer Student",
    description: "I transferred from another school",
  },
  {
    id: "firstgen",
    label: "First-Generation",
    description: "I'm the first in my family at a 4-year university",
  },
  {
    id: "returning",
    label: "Returning Student",
    description: "I'm in my second year or beyond",
  },
] as const;

export function OnboardingModal({ onSegmentSelect }: { onSegmentSelect: (seg: string) => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const done = localStorage.getItem("clubr_onboarded");
    if (!done) {
      const timeout = window.setTimeout(() => setOpen(true), 600);
      return () => window.clearTimeout(timeout);
    }
  }, []);

  const handleSelect = (segmentId: string) => {
    localStorage.setItem("clubr_onboarded", segmentId);
    analyticsEvents.onboardingCompleted(segmentId);
    onSegmentSelect(segmentId);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl p-8"
          style={{ background: "#0a0a0a", border: "1px solid rgba(255,107,107,0.2)" }}
        >
          <p className="mb-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "#FF6B6B" }}>
            Welcome to Clubr
          </p>
          <Dialog.Title className="mb-2 text-2xl font-bold text-white">
            Which best describes you?
          </Dialog.Title>
          <Dialog.Description className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            We’ll show you the most relevant clubs first.
          </Dialog.Description>
          <div className="flex flex-col gap-3">
            {SEGMENTS.map((seg) => (
              <button
                key={seg.id}
                onClick={() => handleSelect(seg.id)}
                className="rounded-xl p-4 text-left transition-all duration-200 hover:border-[#FF6B6B]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-sm font-semibold text-white">{seg.label}</p>
                <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {seg.description}
                </p>
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              localStorage.setItem("clubr_onboarded", "skip");
              setOpen(false);
            }}
            className="mt-4 w-full text-center text-xs"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Skip
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
