"use client";

export function FirstYearsHero() {
  return (
    <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#00000f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#f0f4ff] md:text-5xl">
          First year sets up sophomore recruiting.
          <br />
          <span className="text-[#FDB515]">Calendar, not motivation speech.</span>
        </h1>
        <p className="font-body relative z-10 mt-5 text-base leading-relaxed text-[#8892a4] md:text-lg">
          Many consulting, finance, and tech-facing clubs run their main cycle in fall of sophomore
          year. Useful to know when you are choosing classes and clubs in year one.
        </p>
      </div>
    </div>
  );
}
