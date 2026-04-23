"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { clubs, selectivityChipLabel } from "@/data/clubs";

const MAX = 5;

export function CompareClient() {
  const searchParams = useSearchParams();
  const selected = useMemo(() => {
    const raw = searchParams.get("ids") ?? "";
    const ids = raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, MAX);
    return ids
      .map((id) => clubs.find((c) => c.id === id))
      .filter((c): c is NonNullable<typeof c> => c != null);
  }, [searchParams]);

  if (selected.length < 2) {
    return (
      <div className="soft-card mx-auto max-w-lg p-8 text-center">
        <p className="font-body text-sm text-[#888888]">
          Add two or more club IDs to the <code className="rounded bg-[#111] px-1 text-[12px]">ids</code> query,
          or save clubs and open compare from the saved page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/saved"
            className="font-mono inline-flex h-10 items-center justify-center rounded-md border border-[rgba(255,107,107,0.35)] px-4 text-xs uppercase tracking-widest text-[#FF6B6B] transition hover:bg-[rgba(255,107,107,0.08)]"
          >
            Saved
          </Link>
          <Link
            href="/clubs"
            className="font-mono inline-flex h-10 items-center justify-center rounded-md border border-[rgba(255,255,255,0.12)] px-4 text-xs uppercase tracking-widest text-[#888888] transition hover:text-[#f0f0f0]"
          >
            Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[rgba(255,255,255,0.08)]">
            <th className="sticky left-0 z-[1] bg-[#0a0a0a] py-3 pr-4 font-mono text-[10px] uppercase tracking-widest text-[#555555]">
              Field
            </th>
            {selected.map((c) => (
              <th key={c.id} className="min-w-[160px] px-2 py-3 font-display text-sm font-semibold text-[#f0f0f0]">
                <Link href={`/clubs/${c.id}`} className="text-[#FF6B6B] hover:underline">
                  {c.name}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-body text-[#888888]">
          <CompareRow label="Category" values={selected.map((c) => c.category)} />
          <CompareRow label="Selectivity" values={selected.map((c) => selectivityChipLabel(c.selectivity))} />
          <CompareRow label="Size" values={selected.map((c) => c.approximateSize)} />
          <CompareRow label="Transfer" values={selected.map((c) => (c.transferFriendly === true ? "Yes" : c.transferFriendly === false ? "Unknown / varies" : "—"))} />
          <CompareRow label="Time" values={selected.map((c) => c.timeCommitment ?? "—")} />
          <CompareRow
            label="Focus"
            values={selected.map((c) => (c.careerFocus?.length ? c.careerFocus.join(", ") : "—"))}
          />
        </tbody>
      </table>
    </div>
  );
}

function CompareRow({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-b border-[rgba(255,255,255,0.06)]">
      <td className="sticky left-0 z-[1] bg-[#0a0a0a] py-3 pr-4 font-mono text-[10px] uppercase tracking-widest text-[#666666]">
        {label}
      </td>
      {values.map((v, i) => (
        <td key={i} className="align-top px-2 py-3 leading-relaxed">
          {v}
        </td>
      ))}
    </tr>
  );
}
