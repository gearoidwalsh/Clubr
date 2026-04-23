import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Lightbulb } from "lucide-react";
import { clubs, selectivityChipLabel } from "@/data/clubs";
import { GlowHeader } from "@/components/GlowHeader";
import { Badge } from "@/components/ui/badge";

type ClubDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return clubs.map((club) => ({ slug: club.id }));
}

export async function generateMetadata({ params }: ClubDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const club = clubs.find((c) => c.id === slug);
  if (!club) {
    return { title: "Club | Clubr" };
  }
  const raw = club.overview.trim().replace(/\s+/g, " ");
  const description = raw.length > 160 ? `${raw.slice(0, 157)}…` : raw;
  const title = `${club.name} | Clubr`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ClubDetailPage({ params }: ClubDetailPageProps) {
  const { slug } = await params;
  const club = clubs.find((item) => item.id === slug);

  if (!club) notFound();

  return (
    <main className="section-padding pt-20" style={{ background: "transparent" }}>
      <article className="container-width space-y-8">
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default">{club.category}</Badge>
            {club.transferFriendly === true && (
              <Badge variant="gold">Transfer-friendly</Badge>
            )}
          </div>
          <span className="font-mono text-sm font-medium text-[#888888]">{club.abbreviation}</span>
          <h1 className="font-display text-3xl font-bold text-[#f0f0f0] md:text-4xl">{club.name}</h1>
          <a
            href={club.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FDB515] hover:underline"
          >
            Official site <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <p className="font-body max-w-3xl text-sm leading-6 text-[#888888]">
            Student-sourced context, not official policy. Confirm details with members each
            semester.
          </p>
        </header>

        <section className="soft-card p-6">
          <h2 className="font-display text-2xl font-semibold text-[#FDB515]"><GlowHeader>Overview</GlowHeader></h2>
          <p className="font-body mt-3 text-sm leading-7 text-[#888888]">{club.overview}</p>
        </section>

        <section className="soft-card p-6">
          <h2 className="font-display text-2xl font-semibold text-[#FDB515]"><GlowHeader>Selectivity</GlowHeader></h2>
          <p className="font-mono mt-2 text-sm font-semibold text-[#FDB515]">
            {selectivityChipLabel(club.selectivity)}
          </p>
          <p className="font-body mt-2 text-sm leading-7 text-[#888888]">
            {club.selectivityContext}
          </p>
        </section>

        <section className="soft-card p-6">
          <h2 className="font-display text-2xl font-semibold text-[#FDB515]"><GlowHeader>Career focus</GlowHeader></h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {club.careerFocus.map((tag) => (
              <span
                key={tag}
                className="font-mono rounded-full border border-[rgba(255,255,255,0.06)] bg-[#111111] px-3 py-1 text-xs font-medium text-[#888888]"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="soft-card p-6">
          <h2 className="font-display text-2xl font-semibold text-[#FDB515]"><GlowHeader>Culture &amp; vibe</GlowHeader></h2>
          <p className="font-body mt-3 text-sm leading-7 text-[#888888]">{club.culture}</p>
        </section>

        <section className="soft-card p-6">
          <h2 className="font-display text-2xl font-semibold text-[#FDB515]"><GlowHeader>Best for</GlowHeader></h2>
          <ul className="font-body mt-4 space-y-2 text-sm leading-7 text-[#888888]">
            {club.bestFor.map((item) => (
              <li key={item} className="ml-4 list-disc">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="soft-card p-6">
          <h2 className="font-display text-2xl font-semibold text-[#FDB515]"><GlowHeader>Application process</GlowHeader></h2>
          <div className="font-body mt-3 whitespace-pre-line text-sm leading-7 text-[#888888]">
            {club.applicationProcess}
          </div>
        </section>

        <section className="rounded-lg border border-[rgba(253,181,21,0.35)] bg-[rgba(253,181,21,0.06)] p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#FDB515]" aria-hidden />
            <div>
              <h2 className="font-display text-xl font-semibold text-[#FDB515]"><GlowHeader>Insider tips</GlowHeader></h2>
              <p className="font-body mt-1 text-xs text-[#888888]">
                Candid notes — not official club guidance.
              </p>
              <ul className="font-body mt-4 space-y-2 text-sm leading-7 text-[#f0f0f0]">
                {club.insiderTips.map((tip) => (
                  <li key={tip} className="ml-4 list-disc">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <p className="text-sm text-[#888888]">
          <Link href="/clubs" className="font-medium text-[#FDB515] hover:underline">
            ← Back to directory
          </Link>
        </p>
      </article>
    </main>
  );
}
