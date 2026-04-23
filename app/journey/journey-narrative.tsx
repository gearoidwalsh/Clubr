"use client";

import { FadeIn } from "@/components/FadeIn";
import { GlowHeader } from "@/components/GlowHeader";
import { cn } from "@/lib/utils";

function TimelineChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 flex justify-center first:mt-0">
      <span className="rounded-full bg-[#FDB515] px-[14px] py-1 text-xs font-medium leading-none text-[#020817]">
        {children}
      </span>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-base leading-[1.75] text-[#8892a4]">{children}</p>;
}

function Phase({
  id,
  title,
  delay,
  withDivider,
  children,
}: {
  id: string;
  title: string;
  delay: number;
  withDivider?: boolean;
  children: React.ReactNode;
}) {
  return (
    <FadeIn delay={delay}>
      <section
        id={id}
        className={cn(
          "scroll-mt-28 relative pb-2 before:absolute before:-left-[2.35rem] before:z-10 before:h-3 before:w-3 before:rounded-full before:bg-[#FDB515] before:ring-2 before:ring-[#020817] md:before:-left-[2.85rem]",
          withDivider
            ? "border-t border-[rgba(253,181,21,0.08)] pt-12 before:top-[3.25rem]"
            : "before:top-9",
        )}
      >
        <h2 className="font-display mb-6 text-xl font-semibold text-[#f0f4ff] md:text-2xl">
          <GlowHeader>{title}</GlowHeader>
        </h2>
        {children}
      </section>
    </FadeIn>
  );
}

export function JourneyNarrative() {
  return (
    <div className="space-y-10">
      <Phase id="discovery" title="Phase 1: Discovery" delay={0}>
        <TimelineChip>Late summer, before campus</TimelineChip>
        <div className="space-y-5">
          <P>
            Some people clock recruiting before they move in. They skim old threads, stalk LinkedIn,
            try to guess which clubs actually match what they want. Others hear about it at a fair in
            week one, or from a random group chat, and realize there is a whole parallel track on
            campus they never mapped.
          </P>
          <P>
            Starting earlier mostly means more time to narrow the list, message people before
            deadlines stack, and walk into September with a short list instead of looking up dates at
            the last minute.
          </P>
          <P>
            The clubs that move consulting, finance, and product pipelines are often quieter on
            Sproul than the loud tables. They are still worth finding before September if you care
            about that lane.
          </P>
        </div>
        <TimelineChip>Week one, fall</TimelineChip>
        <div className="space-y-5">
          <P>
            Those two weeks are stupidly dense. Info sessions stack. Sproul is loud. Apps open before
            you feel sorted. People who land without a rough plan often burn the fortnight on
            logistics, then look up in October and learn a window they assumed was open already shut.
          </P>
          <P>That is the calendar, not a pep talk about hustle.</P>
        </div>
      </Phase>

      <Phase id="info-sessions" title="Phase 2: Info sessions" delay={0.15} withDivider>
        <TimelineChip>Weeks 1-2</TimelineChip>
        <div className="space-y-5">
          <P>
            Format is usually predictable: what we do, a few slides on work, Q&amp;A, then milling
            around. Easy to treat it like a lecture. That is a miss.
          </P>
          <P>
            Members notice who is locked in without turning it into a performance. The people who
            stick out rarely filibuster the mic. They ask one sharp question, then stay after and
            actually talk instead of bolting when the slides end.
          </P>
          <P>
            The post-session window is where a lot of apps get sorted in people&apos;s heads, and
            most attendees leave. Fifteen minutes and one real conversation beats zero, and you do not
            have to &quot;network&quot; like a caricature. You just have to be there.
          </P>
          <P>
            Follow up within a day or two with something specific from the conversation. Most people
            skip this; a concrete note still helps.
          </P>
        </div>
      </Phase>

      <Phase id="coffee-chats" title="Phase 3: Coffee chats" delay={0.15} withDivider>
        <TimelineChip>Weeks 2-4</TimelineChip>
        <div className="space-y-5">
          <P>
            People skip coffee chats because DMing feels cringe, or they run them like a checklist
            of &quot;what do you want in candidates.&quot; Both miss the point.
          </P>
          <P>
            You are testing fit. They are testing whether you are tolerable to work with on a
            Tuesday night. The good ones feel like a conversation, not a debrief before an exam.
          </P>
          <P>
            Getting one is usually easier than the story you tell yourself. LinkedIn or a quick ask
            after an info session, specific and low lift, something like twenty minutes before the
            deadline, lands more than you would think. Most members remember being new.
          </P>
          <P>
            Ask about their term, not the club&apos;s fantasy applicant. &quot;What did fall actually
            look like week to week?&quot; tells you more than a polished values answer, and it shows
            you care about reality, not a line on a resume.
          </P>
          <P>
            If it helps, paste the club site and your background into a model and pressure-test
            questions. Prep is fine. The words still need to be yours in the room.
          </P>
          <P>
            Two to four chats per club you are serious about is a sane band. Each one adds texture,
            and you stop being a blank name on a PDF.
          </P>
        </div>
      </Phase>

      <Phase id="application" title="Phase 4: The application" delay={0.15} withDivider>
        <TimelineChip>Weeks 3-5, apps open</TimelineChip>
        <div className="space-y-5">
          <P>
            Most competitive club apps are resume plus a handful of shorts. Cover letters and videos
            show up, but they are not the default.
          </P>
          <P>
            Resume goal is narrow: earn the interview. Not your life story. A bullet should quietly
            answer what you did, how, and what moved because of it. &quot;Helped with marketing&quot;
            loses to a concrete line with a real outcome. Same experience, different honesty.
          </P>
          <P>
            Essays swing outcomes. &quot;Why this club&quot; is the usual killer prompt. Strong
            answers name a project you actually looked at, reference a person and something they told
            you, and tie to a skill you want that this group can teach. If you can swap the club name
            and resubmit elsewhere, rewrite it.
          </P>
          <P>
            If you came in through the UCs, you already wrote PIQs under pressure about real stuff.
            Mine those drafts. The moments and the mess are what these prompts want, reframed, not
            invented from scratch.
          </P>
        </div>
      </Phase>

      <Phase id="interviews" title="Phase 5: Interviews" delay={0.15} withDivider>
        <TimelineChip>Weeks 5-10</TimelineChip>
        <div className="space-y-5">
          <P>
            First rounds skew behavioral. Leadership story, failure, conflict on a team. The shape is
            boring. The variance is whether you thought about your own stories before the nerves hit.
          </P>
          <P>
            Interviewers have heard polished nothing-burgers. The ones that land have detail and a
            little self-awareness about what you would redo.
          </P>
          <P>
            Cases, where they show up, are about thinking out loud when information is thin. They
            watch structure, what you do when you stall, whether you can hold the thread. Say your
            framework before you sprint. If you freeze, name it and revisit the frame instead of
            going quiet.
          </P>
          <P>
            Practice aloud, on a clock, with another human. The clean version in your head does not
            survive contact with a real room unless you rehearse in conditions that feel a little
            awkward.
          </P>
          <P>
            After a round, short thank-you inside a day with one concrete callback from the
            conversation. Takes minutes. Reads different from silence.
          </P>
        </div>
      </Phase>

      <Phase id="offer" title="Phase 6: The offer" delay={0.15} withDivider>
        <TimelineChip>Weeks 10-12</TimelineChip>
        <div className="space-y-5">
          <P>
            Offer usually lands as a call or mail. You often get a day or two. If you are actually
            stuck waiting on another outcome, ask for a small extension and say why. Most clubs have
            seen that movie.
          </P>
          <P>
            If you are lucky enough to choose, defaulting to the biggest name is a trap some people
            regret. Better questions: who felt like people you want in your life, which projects
            matched what you want to learn, who from coffee chats seemed sane under stress. Prestige
            fades fast once you are in the work.
          </P>
          <P>
            If you get cut, you are not special in a bad way. Most seats go to people who do not get
            the nod. A tight note asking for one honest pointer sometimes gets a reply, and it keeps
            the door from slamming. Fit and timing and cohort size explain a lot more than
            &quot;you are not good enough&quot; as a global verdict.
          </P>
        </div>
      </Phase>

      <Phase id="new-member" title="Phase 7: Life as a new member" delay={0.15} withDivider>
        <TimelineChip>Onboarding, you are in</TimelineChip>
        <div className="space-y-5">
          <P>
            An offer closes one loop. Onboarding is a separate workload—often heavier than the
            recruiting posts suggest.
          </P>
          <P>
            Hours are real. Think eight to fifteen a week on top of classes, club dependent. Not a
            moral lecture, just load. People who budget the time up front and treat it like a course
            survive better than people who pretend they will &quot;fit it in.&quot;
          </P>
          <P>
            New members get grunt work first on purpose. Seniors hold relationships you do not have
            yet. Credibility is showing you can execute the boring layer without drama.
          </P>
          <P>
            Socially you walk into friendships and pecking orders that formed before you. Low-key
            wins: show up to optional stuff, close small loops, be easy to staff before you try to be
            flashy. Waiting to be pulled in, or over-selling week one, both tend to age poorly.
          </P>
          <P>
            You will sit next to resumes that look unfair. The move is rarely to shrink or to
            posture. They picked you for something in the app and the interviews. The gap between new
            and &quot;belongs&quot; closes faster than week two feels, even when week two sucks.
          </P>
          <P>
            Befriend one person in your cohort early. That cluster is the network that outlasts the
            club chart. Two years of real projects with the same faces builds ties most lectures
            never touch.
          </P>
          <P>
            First semester can feel bad and still be the right call. Imposter chatter is boringly
            common. It is not automatic proof you picked wrong.
          </P>
        </div>
      </Phase>
    </div>
  );
}
