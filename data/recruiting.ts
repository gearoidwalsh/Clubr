export type AdviceSection = {
  id: string;
  title: string;
  bullets: string[];
};

export const recruitingPrinciples: string[] = [
  "You do not need a business club to succeed at Berkeley.",
  "If your goals are high-finance or consulting, these clubs can make the path easier.",
  "Do not confuse selectivity with guaranteed outcomes.",
  "Fit, consistency, and mentorship quality matter more than hype.",
  "Clubs can open doors; they should not replace who you are.",
];

export const recruitingAdvice: AdviceSection[] = [
  {
    id: "coffee-chats",
    title: "Coffee Chats",
    bullets: [
      "Do not ask generic questions you could answer from a website.",
      "Ask directly about timelines, workload, and what new members get wrong.",
      "Close with one concrete next step, then follow up within 24 hours.",
    ],
  },
  {
    id: "case-interviews",
    title: "Case Interviews",
    bullets: [
      "Structure first, details second. Messy logic kills strong ideas.",
      "Practice out loud with a timer; silent prep does not translate.",
      "If you get stuck, narrate your thinking and recover instead of freezing.",
    ],
  },
  {
    id: "behavioral-interviews",
    title: "Behavioral Interviews",
    bullets: [
      "Prepare 5-6 core stories and adapt them; do not memorize scripts.",
      "Use specifics: numbers, actions, mistakes, and outcomes.",
      "Confidence matters, but self-awareness matters more.",
    ],
  },
  {
    id: "resume-tips",
    title: "Resume Tips",
    bullets: [
      "Each bullet should show ownership and measurable output.",
      "Cut fluff. If it does not prove skill, delete it.",
      "Tailor section ordering by role target.",
    ],
  },
  {
    id: "choosing-clubs",
    title: "Choosing Clubs",
    bullets: [
      "Pick based on fit and growth, not perceived prestige.",
      "Apply to a balanced mix. Do not over-index on one 'dream club.'",
      "A club only helps if you actually engage with projects and people.",
    ],
  },
  {
    id: "application-strategy",
    title: "Application Strategy",
    bullets: [
      "Treat recruiting like a system: tracker, deadlines, mock interviews, follow-ups.",
      "Most clubs admit small classes; rejection is normal, not a verdict on your potential.",
      "Iterate every cycle. Your second wave of apps should be sharper than the first.",
    ],
  },
  {
    id: "transfer-playbook",
    title: "Transfer Playbook",
    bullets: [
      "Transfers run a compressed clock. Prioritize fast-learning environments.",
      "Ask clubs if they regularly accept older students before spending weeks prepping.",
      "Frame your prior work and non-traditional path as operating experience.",
    ],
  },
];
