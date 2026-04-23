"use client";

import { PageAnchorNav } from "@/components/PageAnchorNav";
import { FirstYearsHero } from "@/components/first-years-hero";
import { FadeIn } from "@/components/FadeIn";
import { GlowHeader } from "@/components/GlowHeader";
import { cn } from "@/lib/utils";

const toc = [
  { id: "ecosystem", label: "The club ecosystem" },
  { id: "where", label: "Where to find clubs" },
  { id: "checklist", label: "Freshman checklist" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "sophomore", label: "Setting up for sophomore year" },
];

function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("font-body text-base leading-[1.75] text-[#888888]", className)}>{children}</p>
  );
}

export function FirstYearsContent() {
  return (
    <>
      <FirstYearsHero />

      <div className="section-padding">
        <div className="container-width flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <PageAnchorNav items={toc} />
          <div className="min-w-0 flex-1 space-y-16">
            <div className="mx-auto max-w-2xl space-y-16">
              <FadeIn>
                <section id="ecosystem" className="scroll-mt-28">
                  <h2 className="mb-6 font-display text-2xl font-semibold text-[#f0f0f0]"><GlowHeader>The club ecosystem</GlowHeader></h2>
                  <P>
                    Berkeley has hundreds of student organizations. The ones that carry the most weight
                    for professional recruiting are a smaller subset, and they have structured
                    competitive processes that feel closer to a job application than a club sign-up.
                    Most freshmen find out these processes exist sometime in fall semester. The ones
                    who find out in September have a different year than the ones who find out in
                    October.
                  </P>
                  <P className="mt-4">
                    The ecosystem breaks roughly into three groups. Open organizations are clubs where
                    anyone can join — no application, no interview, just showing up. These are worth
                    joining early because they let you do real work and build a track record before the
                    more selective recruiting cycles open. Semi-selective clubs have an application
                    process but are genuinely accessible to motivated freshmen. Highly selective clubs
                    run multi-round processes similar to a competitive internship, and most of them
                    recruit primarily in fall of sophomore year.
                  </P>
                  <P className="mt-4">
                    That last point is the one that changes how you should think about freshman year.
                    The students who get into competitive clubs as sophomores are almost never the
                    ones who were grinding applications in September of freshman year. They are the
                    ones who spent their first year building a real track record — one or two genuine
                    experiences, real ownership of something, a story they could actually tell. That
                    is the bar. It is achievable, and freshman year is long enough to clear it if you
                    start with some intention.
                  </P>
                </section>
              </FadeIn>

              <FadeIn delay={0.1}>
                <section id="where" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <h2 className="mb-6 font-display text-2xl font-semibold text-[#f0f0f0]"><GlowHeader>Where to find clubs</GlowHeader></h2>
                  <P>
                    Week 1 and 2 of fall semester are the most active tabling weeks of the year. Walk
                    through Sproul multiple times. Introduce yourself at tables that seem interesting.
                    Take flyers from clubs you want to research later. The energy in those first two
                    weeks is different from anything that follows — more open, more exploratory, lower
                    stakes.
                  </P>
                  <P className="mt-4">
                    Beyond Sproul: CalLink (callink.berkeley.edu) is Berkeley&apos;s official RSO
                    directory. Every registered organization is there, searchable by category. Most
                    active recruiting clubs post application dates and info session times on Instagram
                    first — follow every club you are considering. And ask one or two upperclassmen in
                    your program what clubs they are in and what they heard was worth joining. Word of
                    mouth from someone one year ahead of you is consistently the most useful signal.
                  </P>
                  <P className="mt-4">
                    Go to four to six info sessions in your first two weeks — not to apply, just to
                    see what the culture feels like. What is the energy in the room? Who shows up? What
                    do the members seem like? You are forming impressions before you commit to
                    anything serious.
                  </P>
                </section>
              </FadeIn>

              <FadeIn delay={0.1}>
                <section id="checklist" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <h2 className="mb-6 font-display text-2xl font-semibold text-[#f0f0f0]"><GlowHeader>Freshman checklist</GlowHeader></h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="soft-card p-6">
                      <h3 className="font-display font-mono text-sm font-semibold uppercase tracking-wide text-[#FDB515]">
                        Fall semester
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#888888]">
                        <li>Walk through Sproul tabling in Weeks 1 and 2</li>
                        <li>Attend four to six info sessions across different categories</li>
                        <li>Join one or two open organizations and do real work in them</li>
                        <li>Protect your GPA — competitive clubs will ask about it</li>
                        <li>Start building your resume even if it feels premature to do so</li>
                      </ul>
                    </div>
                    <div className="soft-card p-6">
                      <h3 className="font-display font-mono text-sm font-semibold uppercase tracking-wide text-[#FDB515]">
                        Spring semester
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#888888]">
                        <li>Research the three to five clubs you want to target sophomore year</li>
                        <li>Reach out to two or three current members for coffee chats</li>
                        <li>Take on a real leadership role or project in your current org</li>
                        <li>
                          Refine your resume — Career Center, then an upperclassman who will actually
                          give you honest feedback
                        </li>
                        <li>Start thinking about the stories you will use in behavioral interviews</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.1}>
                <section id="mistakes" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <h2 className="mb-6 font-display text-2xl font-semibold text-[#f0f0f0]"><GlowHeader>The most common freshman mistakes</GlowHeader></h2>
                  <P>
                    The most common one is applying to highly selective clubs before you have built
                    any track record and then concluding, after getting rejected, that you are not
                    competitive. The rejection is usually about timing, not about your ceiling. Highly
                    selective clubs expect applicants to have done something real outside of classes.
                    Most freshmen have not had time to build that yet, and they are competing against
                    sophomores and juniors who have. The mismatch is structural.
                  </P>
                  <P className="mt-4">
                    The second most common mistake is spending the whole year in an academic mode and
                    arriving at sophomore year with no extracurricular story to tell. One real project,
                    one thing you actually owned and can describe specifically — that is all you need
                    to have a conversation. Freshman year is long enough to build that if you start
                    early.
                  </P>
                  <P className="mt-4">
                    The third one is spreading too thin. Seven clubs in Week 2 sounds like hedge-your-bets
                    logic. In practice it produces someone who is marginally involved in seven things
                    rather than someone who actually built something in one. Depth compounds. Breadth
                    does not.
                  </P>
                  <P className="mt-4">
                    The last one is worth saying directly: recruiting takes real time, and balancing it
                    with academics is a genuine challenge. The students who manage it well are not the
                    ones who are better at time management in the abstract — they are the ones who made
                    explicit decisions about what they were prioritizing and when. The tradeoff, for the
                    clubs that are worth it, tends to be worth it.
                  </P>
                </section>
              </FadeIn>

              <FadeIn delay={0.1}>
                <section id="sophomore" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <h2 className="mb-6 font-display text-2xl font-semibold text-[#f0f0f0]"><GlowHeader>Setting up for sophomore year</GlowHeader></h2>
                  <P>
                    The students who consistently get into competitive clubs sophomore year have one
                    thing in common: they paid attention freshman year. Not obsessing, not grinding,
                    not running the process early. Just paying attention.
                  </P>
                  <P className="mt-4">
                    They went to a few info sessions. They talked to a few upperclassmen. They did real
                    work in one accessible club and built something they could describe. By the time
                    sophomore recruiting opened, they had a story, a resume, and a sense of which clubs
                    were actually a good fit for them — not just which ones sounded impressive.
                  </P>
                  <P className="mt-4">
                    That is the bar. It is lower than most people think, and it is achievable from day
                    one if you go in with some intention.
                  </P>
                </section>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
