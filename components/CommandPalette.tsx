"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import type { Club } from "@/data/clubs";

export function CommandPalette({ clubs }: { clubs: Club[] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const quickLinks = useMemo(
    () => [
      { label: "Open clubs page", href: "/clubs" },
      { label: "Open saved clubs", href: "/saved" },
      { label: "Open recruiting guide", href: "/recruiting" },
    ],
    [],
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div
        className="mx-auto mt-20 w-[min(640px,92vw)] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="text-white">
          <Command.Input
            autoFocus
            placeholder="Search clubs or pages..."
            className="w-full border-none bg-transparent px-3 py-3 text-sm outline-none placeholder:text-white/35"
          />
          <Command.List className="max-h-[360px] overflow-y-auto p-1">
            <Command.Empty className="px-3 py-6 text-sm text-white/45">No results found.</Command.Empty>
            <Command.Group heading="Quick links" className="text-white/50">
              {quickLinks.map((item) => (
                <Command.Item
                  key={item.href}
                  onSelect={() => {
                    setOpen(false);
                    router.push(item.href);
                  }}
                  className="cursor-pointer rounded-lg px-3 py-2 text-sm text-white outline-none data-[selected=true]:bg-white/10"
                >
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="Clubs" className="mt-2 text-white/50">
              {clubs.slice(0, 48).map((club) => (
                <Command.Item
                  key={club.id}
                  onSelect={() => {
                    setOpen(false);
                    router.push(`/clubs/${club.id}`);
                  }}
                  className="cursor-pointer rounded-lg px-3 py-2 text-sm text-white outline-none data-[selected=true]:bg-white/10"
                >
                  {club.name}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
