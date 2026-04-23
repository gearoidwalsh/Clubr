"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  FolderKanban,
  GraduationCap,
  Handshake,
  Library,
  MessagesSquare,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Club Directory",
    description:
      "Search 120+ Berkeley clubs with recruiting timelines, competitiveness ratings, and insider tips.",
    icon: FolderKanban,
    href: "/clubs",
  },
  {
    title: "Recruiting Timeline",
    description:
      "Semester-by-semester breakdown of when to apply, network, and prepare — by club and track.",
    icon: CalendarClock,
    href: "/guide?tab=recruiting",
  },
  {
    title: "Resource Library",
    description:
      "Resume templates, cover letter guides, coffee chat scripts, and case prep — all vetted by students.",
    icon: Library,
    href: "/guide?tab=resources",
  },
  {
    title: "Community Tips",
    description:
      "Peer-submitted advice on what actually worked, from current members and recent admits.",
    icon: MessagesSquare,
    href: "/community",
  },
  {
    title: "Alumni Network",
    description:
      "Connect with club alumni now at top firms for coffee chats, referrals, and career guidance.",
    icon: Handshake,
    href: "/community",
  },
  {
    title: "Deadlines Tracker",
    description:
      "Never miss an application window. All recruiting deadlines in one place.",
    icon: GraduationCap,
    href: "/guide?tab=recruiting",
  },
];

export default function FeatureGrid() {
  return (
    <section className="section-padding">
      <div className="container-width space-y-8">
        <h2 className="font-display text-3xl font-semibold text-[#FDB515] md:text-4xl">
          Everything you need, in one place
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="soft-card p-6"
            >
              <div
                className={`mb-5 inline-flex rounded-lg p-2.5 ${
                  index % 2 === 0 ? "bg-[rgba(253,181,21,0.08)]" : "bg-[rgba(253,181,21,0.15)]"
                }`}
              >
                <feature.icon className="h-5 w-5 text-[#FDB515]" />
              </div>
              <h3 className="font-display text-xl font-medium text-[#f0f0f0]">{feature.title}</h3>
              <p className="font-body mt-3 text-sm leading-6 text-[#888888]">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="mt-5 inline-flex items-center text-sm font-semibold text-[#FDB515]"
              >
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
