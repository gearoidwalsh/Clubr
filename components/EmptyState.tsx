"use client";

export function EmptyState({ query, onReset }: { query: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="mb-6 text-5xl">◎</div>
      <p className="mb-2 text-lg font-semibold text-white">No clubs match "{query}"</p>
      <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
        Try a different search or browse by category.
      </p>
      <button
        onClick={onReset}
        className="rounded-full px-6 py-2.5 text-sm font-semibold transition-all"
        style={{ background: "#FF6B6B", color: "#000" }}
      >
        Clear search
      </button>
    </div>
  );
}
