# Clubr — Berkeley Club Recruiting Directory

A structured directory of 48+ UC Berkeley student organizations built to fix
information asymmetry in club recruiting — specifically targeting first-gen
and transfer students who navigated the same barriers I did.

**[Live Site](https://clubr-six.vercel.app)** · **[LinkedIn](https://linkedin.com/in/gearoidwalsh)**

---

## The Problem

The students who know which clubs are worth applying to, what the process
actually looks like, and how to position themselves are almost always the ones
who already have a friend, a sibling, or a contact who has been through it.
Everyone else is guessing. Clubr makes that baseline information available to
everyone, regardless of the connections they've made or not made.

---

## What It Does

- 48+ club profiles covering selectivity, commitment, application steps, and insider tips
- Deadline Radar — urgency indicators for clubs with open applications
- Quick Save — bookmark clubs across sessions via localStorage
- Personalized sorting — transfer students see transfer-friendly clubs first
- Keyboard navigation — `/` to focus search
- Real-time tip feed via Supabase

---

## Tech Stack

| Layer | Tools |
|---|---|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| Animation | Framer Motion, Embla Carousel |
| Backend | Supabase (PostgreSQL) |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Product Decisions

**Why I cut peer reviews in v1**
Anonymous reviews would recreate the exact bias I was trying to eliminate.
Early reviews skew toward people with strong reactions — rejected applicants
or insiders managing reputation. Structured, researched profiles are less
dynamic but more honest. I'll revisit once there's enough of a user base
for the signal to be meaningful.

**Why return visits is the north star metric**
A student who comes back to Clubr twice in a two-week window is using it as
a genuine research tool, not just browsing once out of curiosity. That
behavior — return visits tied to an active decision — is the clearest signal
the information is actually changing how people navigate recruiting.

**Why I prioritized the directory over application tracking**
An application tracker only works if the directory is good first. Students
won't track applications in a tool they don't trust. Getting the core
information layer right was the prerequisite for everything else.

---

Built by [Gearóid Walsh](https://linkedin.com/in/gearoid-walsh) · UC Berkeley Haas, Class of 2027  
A Voyager Consulting × Cal project
