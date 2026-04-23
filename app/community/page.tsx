import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

const tips = [
  {
    title: "Ask how people chose between clubs—not just which club is “best” on paper.",
    source: "Upperclassman contributor",
    category: "Recruiting",
  },
  {
    title: "Similar names and logos online; you learn culture by talking to members.",
    source: "Consulting club member",
    category: "Networking",
  },
  {
    title: "You do not need a business org for every career path—but some paths still lean on them heavily.",
    source: "Finance org member",
    category: "Transfers",
  },
  {
    title: "A no from one club does not predict the next application; timelines and readers differ.",
    source: "Recent admit",
    category: "Interview prep",
  },
  {
    title: "If officers cannot describe weekly hours and expectations, assume the club may not either.",
    source: "Transfer student",
    category: "Community",
  },
  {
    title: "After a few years, who coached you on projects often matters more than the club logo.",
    source: "Multi-club senior",
    category: "Execution",
  },
];

export default function CommunityPage() {
  return (
    <main className="section-padding relative min-h-screen pt-24" style={{ background: "transparent" }}>
      <div style={{ position: "relative", zIndex: 10 }}>
        <section className="max-w-6xl mx-auto px-6 space-y-8 py-20">
          <FadeIn>
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#FDB515] block mb-3">
                Community
              </span>
              <h1 className="font-display text-[40px] font-bold text-[#f0f0f0] md:text-5xl">
                Tips from other students
              </h1>
              <p className="font-body max-w-3xl text-[15px] leading-[1.7] text-[#888888]">
                Submitted by Berkeley students. Minimal editing—treat each note as one person&apos;s
                experience, not a rule.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tips.map((tip, i) => (
              <FadeIn key={tip.title} delay={i * 0.06}>
                <article className="soft-card h-full p-6">
                  <Badge variant="muted">{tip.category}</Badge>
                  <h3 className="font-display mt-3 text-xl font-medium text-[#f0f0f0]">{tip.title}</h3>
                  <p className="font-body mt-3 text-[15px] leading-[1.7] text-[#888888]">{tip.source}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.12}>
            <div className="soft-card p-6 md:p-6">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#FDB515] block mb-3">
                Links
              </span>
              <h2 className="font-display text-2xl font-semibold text-[#FDB515]">Broken club website?</h2>
              <p className="font-body mt-2 max-w-xl text-[15px] leading-[1.7] text-[#888888]">
                Official URLs change. If something on the{" "}
                <a href="/links" className="text-[#FDB515] underline-offset-2 hover:underline">
                  links page
                </a>{" "}
                fails to load, tell us so we can fix it.
              </p>
              <a
                href="mailto:?subject=Clubr%20broken%20club%20link&body=Club%20name%3A%0AWhat%20you%20saw%20(404%2C%20wrong%20site%2C%20etc.)%3A%0A"
                className="font-mono mt-4 inline-flex text-[11px] uppercase tracking-wider text-[#FDB515] underline-offset-2 hover:underline"
              >
                Report a broken link →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="soft-card p-6 md:p-6">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#FDB515] block mb-3">
                Share
              </span>
              <h2 className="font-display text-2xl font-semibold text-[#FDB515]">Submit a tip</h2>
              <label className="mt-4 block">
                <span className="sr-only">Your tip</span>
                <textarea
                  placeholder="What do you wish you had known going in?"
                  rows={4}
                  className="mt-2 w-full max-w-xl rounded-md border border-[rgba(255,255,255,0.08)] bg-black px-3 py-2 text-sm text-[#f0f0f0] placeholder:text-[#888888]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB515]/30"
                />
              </label>
              <Button className="mt-5">Submit your tip</Button>
              <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-[#444444]">Submissions are reviewed before publishing.</p>
            </div>
          </FadeIn>
        </section>
      </div>
    </main>
  );
}
