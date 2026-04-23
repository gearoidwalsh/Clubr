export function ClubCardSkeleton() {
  return (
    <div
      className="animate-pulse rounded-2xl p-5"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        height: "460px",
        width: "340px",
      }}
    >
      <div className="mb-3 h-3 w-16 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="mb-2 h-5 w-3/4 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="mb-1 h-3 w-full rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
      <div className="h-3 w-2/3 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
    </div>
  );
}
