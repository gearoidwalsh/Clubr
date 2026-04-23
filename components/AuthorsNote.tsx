export function AuthorsNote() {
  return (
    <section
      className="mx-auto w-full max-w-7xl border-t border-[rgba(255,255,255,0.07)] px-8 py-8"
      aria-label="Editor's note"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="max-w-2xl font-serif text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          <p>
            <span className="font-semibold text-white">Berkeley club recruiting runs on who you know.</span>{" "}
            The students who understand the process — which clubs are selective, what applications actually
            look like, where to spend their time — are almost always the ones who already have a contact on
            the inside. This site exists to make that information available to everyone.
          </p>
        </div>
        <div className="shrink-0 text-left font-sans text-xs tracking-wide md:text-right">
          <p style={{ color: "rgba(255,255,255,0.35)" }}>
            A Voyager Consulting <span className="font-normal text-[#FF6B6B]">×</span> Cal project
          </p>
          <p className="mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
            Gearóid Walsh <span className="mx-1.5">·</span> Haas &apos;27
          </p>
        </div>
      </div>
    </section>
  );
}
