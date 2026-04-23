import type { Metadata } from "next";
import { SavedClient } from "./saved-client";

export const metadata: Metadata = {
  title: "Saved clubs",
  description: "Your shortlist of Berkeley clubs on Clubr.",
};

export default function SavedPage() {
  return (
    <main className="section-padding pt-24" style={{ background: "transparent" }}>
      <div className="container-width">
        <header className="mb-10 space-y-2">
          <h1 className="font-display text-3xl font-bold text-[#f0f0f0] md:text-4xl">Saved clubs</h1>
          <p className="font-body max-w-2xl text-sm text-[#888888]">
            Stored only in this browser. Use compare when you have two or more picks.
          </p>
        </header>
        <SavedClient />
      </div>
    </main>
  );
}
