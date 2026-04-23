"use client";

import { clubs } from "@/data/clubs";

const categories = ["Consulting", "Finance", "Technical", "Fraternity", "Other"] as const;

export default function LinksPage() {
  return (
    <main className="relative z-10 mx-auto max-w-5xl px-6 py-24">
      <h1 className="font-display mb-2 text-3xl font-bold" style={{ color: "#f0f0f0" }}>
        Club Website Directory
      </h1>
      <p className="font-body mb-12 text-sm" style={{ color: "#888888" }}>
        Direct links to every club&apos;s official site.
      </p>

      {categories.map((cat) => {
        const catClubs = clubs.filter(
          (c) => c.category === cat && (c.websiteUrl ?? c.website),
        );
        if (catClubs.length === 0) return null;
        return (
          <div key={cat} className="mb-10">
            <h2
              className="mb-4 font-mono text-[11px] tracking-widest uppercase"
              style={{ color: "#FF6B6B" }}
            >
              {cat}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {catClubs.map((club) => {
                const href = club.websiteUrl ?? club.website;
                return (
                  <a
                    key={club.id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl p-4 transition-all duration-[250ms]"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,107,107,0.1)";
                      e.currentTarget.style.borderColor = "rgba(255,107,107,0.3)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,107,107,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.2)";
                    }}
                  >
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold"
                      style={{
                        background: "rgba(255,107,107,0.12)",
                        border: "1px solid rgba(255,107,107,0.2)",
                        color: "#FF6B6B",
                      }}
                    >
                      {club.name[0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className="truncate font-body text-[13px] leading-tight transition-colors duration-150 group-hover:text-white"
                        style={{ color: "#cccccc" }}
                      >
                        {club.name}
                      </p>
                      <p
                        className="mt-0.5 font-mono text-[9px] uppercase tracking-wider"
                        style={{ color: "rgba(255,107,107,0.5)" }}
                      >
                        {club.category}
                      </p>
                    </div>
                    <span
                      className="flex-shrink-0 font-mono text-[11px] opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                      style={{ color: "#FF6B6B" }}
                    >
                      →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}
