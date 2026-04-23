"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tabs: { id: string; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "coffee", label: "Coffee chats" },
  { id: "resume", label: "Resume" },
  { id: "essays", label: "Essays" },
  { id: "interviews", label: "Interviews" },
  { id: "strategy", label: "Strategy" },
];

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-[15px] leading-[1.7] text-[#888888]">{children}</p>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display mt-6 text-xl font-medium text-[#f0f0f0]">{children}</h3>;
}

export function RecruitingClient() {
  const [active, setActive] = useState("overview");

  return (
    <div className="section-padding" style={{ background: "transparent" }}>
      <section className="container-width space-y-10">
        <div className="space-y-3">
          <span className="mb-3 block font-mono text-[10px] tracking-[0.25em] uppercase text-[#FDB515]">
            Recruiting
          </span>
          <h1 className="font-display text-[40px] font-bold text-[#f0f0f0] md:text-5xl">Recruiting notes</h1>
          <p className="font-body max-w-2xl text-[15px] leading-[1.7] text-[#888888] md:text-[15px]">
            Stages where applications and interviews usually break—use while you are drafting and
            scheduling.
          </p>
        </div>

        <div className="soft-card overflow-hidden p-6">
          <div
            className="flex flex-wrap gap-2 border-b border-[rgba(253,181,21,0.08)] pb-4"
            role="tablist"
            aria-label="Recruiting topics"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
                className={`font-mono rounded-md px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-colors ${
                  active === t.id
                    ? "bg-[#FDB515] text-[#020817]"
                    : "bg-[#111111] text-[#888888] hover:bg-[rgba(253,181,21,0.08)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative min-h-[12rem] pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-4"
              >
                {active === "overview" && (
                  <div className="space-y-4">
                    <P>
                      Processes vary by club and year. People who do well often front-load coffee chats,
                      then tighten resumes and essays before interviews—order matters more than hustle
                      posts suggest.
                    </P>
                    <P>
                      Coffee chats before you ship apps. Apps before you walk into interviews. Skip
                      the early layer and the later rounds get expensive fast.
                    </P>
                  </div>
                )}

                {active === "coffee" && (
                  <div className="space-y-2">
                    <H3>How to get one</H3>
                    <P>
                      People bail because DMing feels cringe. The ask is smaller than the story you
                      tell yourself. Short LinkedIn note or a face-to-face ask after an info session.
                      Example: you went to their session, you are applying, could they do twenty
                      minutes before the deadline. Specific, low drama, no three-paragraph fan mail.
                    </P>
                    <H3>What to actually talk about</H3>
                    <P>
                      &quot;What do you look for&quot; gets a polished non-answer. Ask about their
                      term instead. A few that work:
                    </P>
                    <ul className="ml-4 list-disc space-y-2 text-sm leading-relaxed text-[#8892a4]">
                      <li>
                        &quot;What did your first semester in the club actually look like week to
                        week?&quot;
                      </li>
                      <li>
                        &quot;What do you think differentiates people who thrive here from people who
                        struggle?&quot;
                      </li>
                      <li>
                        &quot;Is there anything about my background I should frame differently when I
                        apply?&quot;
                      </li>
                    </ul>
                    <P>
                      You get useful detail without sounding like you memorized the website.
                    </P>
                    <H3>How to close</H3>
                    <P>
                      Lock a next step. &quot;Cool if I ping you after I submit?&quot; keeps the
                      thread from dying without you having to grovel.
                    </P>
                    <H3>How many</H3>
                    <P>
                      Two to four per club you might actually join. If every chat feels flat, that
                      is data. Do not ignore it.
                    </P>
                  </div>
                )}

                {active === "resume" && (
                  <div className="space-y-4">
                    <P>
                      Resume job here is narrow: get the interview. Not your autobiography. Not every
                      club you ever joined. Interview.
                    </P>
                    <P>
                      Each line should state what you did, with scope and outcome. &quot;Helped with
                      marketing&quot; is filler next to a line with real responsibility and a result
                      you can explain.
                    </P>
                    <P>
                      Tilt the framing by club lane. Consulting wants structured problem solving with
                      proof. Finance wants numbers and rigor. PM wants how-you-build instinct. Same
                      gigs, different emphasis.
                    </P>
                    <P>
                      Get it reviewed by at least two people who will tell you the truth about it.
                      The Career Center is useful. An older student in your target club is more
                      useful. Both is best.
                    </P>
                    <P>
                      Keep it to one page. The version that feels a little short is usually better
                      than the one that is trying to fill space.
                    </P>
                  </div>
                )}

                {active === "essays" && (
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-[#f0f4ff]">The &quot;why this club&quot; question</h3>
                    <P>
                      This prompt sinks more packets than anything else. Good answers do not recycle.
                      Name a project you actually read about. Name a member and a detail from a chat.
                      Name a skill you want that this club can plausibly teach. If you can swap the
                      club label and resubmit, start over.
                    </P>
                    <h3 className="mt-6 text-base font-semibold text-[#f0f4ff]">Other common prompts</h3>
                    <P>
                      Challenge prompts tempt hero stories. Pick something that actually broke. Say
                      what you did after it broke. Readers have seen the shiny version a thousand
                      times. They remember the messy one with receipts.
                    </P>
                    <P>
                      Proud-project prompts are really about how you judge your own work. Problem,
                      your slice, calls you made, how you would grade the output. The self-critique
                      matters as much as the brag.
                    </P>
                    <h3 className="mt-6 text-base font-semibold text-[#f0f4ff]">A resource most students forget they have</h3>
                    <P>
                      UC PIQs often overlap with club prompts—reuse beats if the facts still match.
                      Paste a PIQ next to the prompt and rewrite; you still own the facts.
                    </P>
                  </div>
                )}

                {active === "interviews" && (
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-[#f0f4ff]">Behavioral interviews</h3>
                    <P>
                      Bank five or six stories that stretch: you led, you broke something and fixed it,
                      team friction, a build you still like. Drill until it feels conversational, not
                      memorized. Those are different, and people can hear it.
                    </P>
                    <P>
                      Specificity is what separates the answers that land from the ones that do not.
                      Numbers, real details, actual outcomes. The more precisely you can describe what
                      happened, the more credible the story becomes.
                    </P>
                    <h3 className="mt-6 text-base font-semibold text-[#f0f4ff]">Case interviews</h3>
                    <P>
                      Say the framework before you sprint. Narrate while you work. They grade the
                      path, not only the number at the end. Stuck means say you are stuck and revisit
                      the frame, not go silent. Practice out loud, on a clock, with a human in the
                      room. Head-can rehearsal is not the same sport.
                    </P>
                    <P>
                      Common prep: CaseCoach, PrepLounge, Victor Cheng&apos;s YouTube. After you join,
                      most clubs add their own internal materials.
                    </P>
                    <h3 className="mt-6 text-base font-semibold text-[#f0f4ff]">After each round</h3>
                    <P>
                      Thank-you within a day with one specific callback from the conversation. Skip
                      asking for results in the same email.
                    </P>
                  </div>
                )}

                {active === "strategy" && (
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-[#f0f4ff]">How many clubs to apply to</h3>
                    <P>
                      Rough mix that works: one or two reaches you actually want, plus two or three
                      targets you would still say yes to. Spamming six reaches yields six mid packets.
                      Prep bandwidth is the cap, not form count.
                    </P>
                    <P>
                      Do not apply places you would not join. Practice is not a good enough reason to
                      burn a reader&apos;s night.
                    </P>
                    <h3 className="mt-6 text-base font-semibold text-[#f0f4ff]">Tracking deadlines</h3>
                    <P>
                      Start a simple spreadsheet in September with every club you are considering,
                      their application deadline, and their interview timeline. Missing a deadline
                      because you lost track of it is the most avoidable mistake in the process. Most
                      recruiting windows are narrow, often a week or two from open to close.
                    </P>
                    <h3 className="mt-6 text-base font-semibold text-[#f0f4ff]">When you get rejected</h3>
                    <P>
                      Most people do not get the nod, even in a good year. Short thank-you plus one
                      pointed request for feedback often gets a reply. Useful, and the line stays warm.
                    </P>
                    <P>
                      Cycle two beats cycle one if you note what flopped. That part is close to
                      automatic.
                    </P>
                    <h3 className="mt-6 text-base font-semibold text-[#f0f4ff]">For transfer students</h3>
                    <P>
                      Two years on campus, not four. Fall of year one here is the main recruiting
                      window, and it starts before you are fully unpacked. A plan matters more for
                      transfers than for people who got a slow runway. Details live in the{" "}
                      <Link
                        href="/your-path"
                        className="font-medium text-[#FDB515] underline underline-offset-2 hover:text-[#fcc94a]"
                      >
                        Transfers
                      </Link>{" "}
                      page.
                    </P>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
