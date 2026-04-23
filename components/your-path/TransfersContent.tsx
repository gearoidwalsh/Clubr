"use client";

import Link from "next/link";
import { PageAnchorNav } from "@/components/PageAnchorNav";
import { SectionSparkleTitle } from "@/components/SectionSparkleTitle";
import { TransfersHero } from "@/components/TransfersHero";
import { FadeIn } from "@/components/FadeIn";

const toc = [
  { id: "reality", label: "The transfer reality" },
  { id: "advantage", label: "The transfer advantage" },
  { id: "first-weeks", label: "Your first two weeks" },
  { id: "compressed-calendar", label: "The compressed calendar" },
  { id: "club-recruiting", label: "Club recruiting" },
  { id: "academic", label: "Academic navigation" },
  { id: "integration-30", label: "30-day integration" },
];

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-normal leading-[1.75] text-[#888888]">{children}</p>;
}

const calendarBlocks = [
  {
    label: "Summer (before you arrive)",
    body:
      "Research your target clubs. Follow them on LinkedIn and Instagram. Read their websites and look at where their alumni ended up. Reach out to one or two current members for an informal conversation before school starts — this is easier than it sounds, and it means you will not be a stranger when September comes.",
  },
  {
    label: "September, weeks 1–2",
    body:
      "Attend info sessions for every club you are considering. Introduce yourself to members. Begin scheduling coffee chats. The pace feels fast because it is.",
  },
  {
    label: "September, weeks 3–4",
    body:
      "Coffee chats accelerate. Applications begin opening for most fall-recruiting clubs. Finalize your resume. Write your essays with the specificity that comes from having done your coffee chats first — not before.",
  },
  {
    label: "October",
    body:
      "Applications close for most clubs, typically mid-month. First-round interviews begin for some. Keep scheduling coffee chats even after you have submitted — the relationship is still being formed.",
  },
  {
    label: "November",
    body:
      "Final round interviews. Offer decisions. This is the month that either delivers what you worked toward or gives you information about what to do differently in the spring cycle.",
  },
  {
    label: "December",
    body:
      "Onboarding begins for accepted members. If you received a rejection, request feedback promptly — people's recall of your application is sharpest right now.",
  },
];

export function TransfersContent() {
  return (
    <>
      <TransfersHero />

      <div className="section-padding pt-4">
        <div className="container-width flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <PageAnchorNav items={toc} />
          <div className="min-w-0 flex-1 space-y-14">
            <div className="mx-auto max-w-[720px] space-y-14">
              <FadeIn>
                <section id="reality" className="scroll-mt-28">
                  <SectionSparkleTitle>The transfer reality</SectionSparkleTitle>
                  <div className="mt-5 space-y-4">
                    <P>
                      Most selective clubs at Berkeley recruit in the fall semester. If you arrive
                      in the fall — which most transfers do — you are recruiting within weeks of
                      getting to campus, in an environment where you do not know the layout, do not
                      know many people, and are simultaneously handling housing, registration, and
                      the general disorientation of a new school.
                    </P>
                    <P>
                      That is a real challenge and it is worth naming directly. The students who
                      handle it well are the ones who prepared over the summer rather than assuming
                      they could absorb it all in September.
                    </P>
                    <P>
                      The social fabric is also worth being honest about. Most students you encounter
                      have been at Berkeley for a year or two. Friendships exist. Social clusters have
                      formed. Entering that as a new student who is also a junior is a specific
                      experience — not a bad one, but a specific one that benefits from going in with
                      some awareness.
                    </P>
                    <P>
                      None of this is insurmountable. It is structural, not personal. And it sits
                      alongside a set of real advantages that the standard narrative about transfer
                      students tends to undersell.
                    </P>
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.08}>
                <section id="advantage" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <SectionSparkleTitle>The transfer advantage</SectionSparkleTitle>
                  <div className="mt-5 space-y-4">
                    <P>
                      Work experience produces better behavioral interview answers than class projects
                      almost every time. When a club interviewer asks you to describe a time you led a
                      team through something difficult, a transfer who has managed real deliverables
                      in a real job has a fundamentally different answer than a sophomore who is
                      reconstructing something from a group project. That gap matters in interviews,
                      and it tends to matter more the more selective the club.
                    </P>
                    <P>
                      Clarity of purpose also reads in every conversation. You chose to come to
                      Berkeley knowing what you were coming for. That intentionality — the fact that
                      your presence here is a deliberate decision and not just the default path —
                      comes through in coffee chats and interviews in ways that are hard to
                      manufacture.
                    </P>
                    <P>
                      Resilience is demonstrated, not claimed. The fact that you succeeded somewhere
                      else before arriving is evidence. You do not need to lead with it constantly,
                      but you should not apologize for it either.
                    </P>
                    <P>
                      The transfers who do least well in recruiting tend to be the ones who spend
                      energy managing the gap — explaining their timeline, softening their
                      non-traditional path, treating their two years as an inherent disadvantage. The
                      ones who do well own their story with some directness and let the specificity of
                      their experience do the work.
                    </P>
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.08}>
                <section id="first-weeks" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <SectionSparkleTitle>Your first two weeks</SectionSparkleTitle>
                  <div className="mt-5 space-y-4">
                    <P>
                      Week 1 is logistics. Sort housing, get your ID, walk your regular routes until
                      they feel familiar. Mental bandwidth is finite and Berkeley is a lot to absorb.
                      Removing friction from the basics frees up the attention you need for everything
                      else.
                    </P>
                    <P>
                      At the same time: info sessions happen in the first two weeks and they do not
                      wait. The research you did over the summer matters here. If you arrive in
                      September knowing the three to five clubs you want to look into, you can attend
                      their events in Week 1 while still getting settled. If you arrive with no plan,
                      you will spend the first two weeks getting oriented and discover in October that
                      the application window you thought was still open closed three weeks ago.
                    </P>
                    <P>
                      Week 2: introduce yourself to your professors in office hours, not just via
                      email. Find one other transfer student in your program — the shared context is
                      useful and the connection tends to form fast. Schedule a meeting with your
                      academic advisor before enrollment windows close.
                    </P>
                    <P>
                      Do not over-schedule socially in the first two weeks. Depth matters more than
                      coverage early. One or two real connections in the first month beats fifteen
                      surface-level introductions.
                    </P>
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.08}>
                <section id="compressed-calendar" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <SectionSparkleTitle>The compressed calendar</SectionSparkleTitle>
                  <p className="mt-3 text-sm text-[#4a5568]">
                    A month-by-month sketch of how fall recruiting tends to move for transfer students.
                  </p>
                  <div className="relative mt-8 space-y-0 border-l-2 border-[rgba(253,181,21,0.12)] pl-6">
                    {calendarBlocks.map((block) => (
                      <div key={block.label} className="relative pb-10 last:pb-0">
                        <span className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-[#020817] bg-[#FDB515]" />
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#FDB515]">
                          {block.label}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#888888]">{block.body}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.08}>
                <section id="club-recruiting" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <SectionSparkleTitle>Club recruiting for transfers</SectionSparkleTitle>
                  <div className="mt-5 space-y-4">
                    <P>
                      Some clubs explicitly recruit transfers and are thoughtful about what the
                      compressed timeline means for you. Others have never had a transfer in a new
                      member cohort and have not considered it. Both situations are workable — they
                      just require different approaches.
                    </P>
                    <P>
                      In coffee chats, bring up your transfer background early. It gives the member a
                      chance to tell you honestly whether the club has worked with transfers before
                      and what that experience was like. If a club has no history of admitting
                      transfers and cannot articulate why that would change, that is useful
                      information before you invest significant time in the application.
                    </P>
                    <P>
                      Frame your transfer story with momentum, not explanation. The version that works
                      in interviews and coffee chats has a clear arc: where you were, what you
                      learned there, and why you are here now with this specific direction. The
                      version that struggles treats the transfer as something that needs defending. It
                      does not.
                    </P>
                    <P>
                      Check the{" "}
                      <Link href="/clubs" className="font-medium text-[#FDB515] underline underline-offset-2 hover:text-[#fcc94a]">
                        Clubs directory
                      </Link>{" "}
                      for transfer-friendly tags — these reflect clubs with a documented history of
                      admitting and supporting transfer students.
                    </P>
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.08}>
                <section id="academic" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <SectionSparkleTitle>Academic navigation</SectionSparkleTitle>
                  <div className="mt-5 space-y-4">
                    <P>
                      Your unit requirements at Berkeley are specific to your college and major. Get
                      clear on them in the first week and do not rely on what you heard from another
                      transfer — requirements vary significantly across LSCS, Haas, Engineering, and
                      other colleges.
                    </P>
                    <P>
                      Berkeleytime.com is the best tool for schedule building. Use it. RateMyProfessors
                      is imperfect but useful. Your advisor is more useful than both of them for
                      questions specific to your path — schedule a meeting before the enrollment
                      window closes, not after.
                    </P>
                    <P>
                      If you can take a slightly lighter course load in your first semester, that is
                      usually worth doing. Recruiting plus academics plus social integration is a full
                      schedule. You are not falling behind by taking four courses instead of five in
                      September.
                    </P>
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={0.08}>
                <section id="integration-30" className="scroll-mt-28 border-t border-[rgba(253,181,21,0.08)] pt-12">
                  <SectionSparkleTitle>The 30-day integration framework</SectionSparkleTitle>
                  <p className="mt-3 text-sm leading-relaxed text-[#888888]">
                    Once you are in, the work shifts from getting into the club to building a real
                    reputation inside it. The first thirty days set a tone that compounds over the rest
                    of your time there.
                  </p>
                  <div className="mt-8 space-y-5">
                    <div className="soft-card p-6">
                      <h3 className="font-semibold text-[#f0f0f0]">Week one</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                        Observation. Map the formal and informal leadership — the titled positions and
                        the people who are actually listened to, which are not always the same. Watch
                        how meetings run, how feedback is given, what gets rewarded. The instinct to
                        immediately signal your value is understandable and worth resisting. Watch
                        first.
                      </p>
                    </div>
                    <div className="soft-card p-6">
                      <h3 className="font-semibold text-[#f0f0f0]">Week two</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                        Execution. Volunteer for one concrete task and deliver it before it is due, at a
                        quality level that is slightly better than expected. Ask clarifying questions
                        before you start — not after you have gone in the wrong direction. Small things
                        done consistently and well build credibility faster than one ambitious thing
                        done imperfectly.
                      </p>
                    </div>
                    <div className="soft-card p-6">
                      <h3 className="font-semibold text-[#f0f0f0]">Week three</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                        Relationships. Have informal conversations with two or three older members — ask
                        about their experience in the club, what their trajectory looked like, what they
                        wish they had known in their first semester. People respond to genuine
                        curiosity about their path. You are also building the map of who to go to for
                        what.
                      </p>
                    </div>
                    <div className="soft-card p-6">
                      <h3 className="font-semibold text-[#f0f0f0]">Week four</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                        Contribution. Start offering perspective in meetings, not just execution.
                        Reference your prior experience where it genuinely adds something to the
                        conversation — once, not as a recurring refrain. The shift from &quot;new
                        member who does the work reliably&quot; to &quot;new member who also has a
                        perspective worth hearing&quot; is a meaningful one, and this is roughly when
                        it starts to happen.
                      </p>
                    </div>
                  </div>
                </section>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
