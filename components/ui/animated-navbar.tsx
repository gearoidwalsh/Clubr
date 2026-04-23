"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type AnimatedNavbarLink = {
  href: string;
  label: string;
};

export type AnimatedNavbarProps = {
  links: AnimatedNavbarLink[];
  logo: ReactNode;
  cta: ReactNode;
  className?: string;
  /** Inner pages: fixed bar with deep sky background */
  variant?: "default" | "inner";
};

export function AnimatedNavbar({
  links,
  logo,
  cta,
  className,
  variant = "default",
}: AnimatedNavbarProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "border-b transition-[background-color,box-shadow,border-color] duration-300",
        variant === "inner"
          ? cn(
              "fixed top-0 right-0 left-0 z-40 w-full backdrop-blur-lg",
              "border-[rgba(255,255,255,0.05)]",
              scrolled
                ? "bg-[#00000f]/82 shadow-md shadow-black/25"
                : "bg-[#00000f]/75",
            )
          : cn(
              "sticky top-0 z-50 shadow-[0_1px_0_rgba(253,181,21,0.06)] backdrop-blur-xl backdrop-saturate-150",
              "border-[rgba(253,181,21,0.12)] bg-[#00000f]/70",
              scrolled && "border-[rgba(253,181,21,0.18)] bg-[#00000f]/88 shadow-md shadow-black/25",
            ),
        className,
      )}
    >
      <nav
        className="container-width relative flex min-h-14 items-center justify-between gap-3 py-2 md:gap-6"
        aria-label="Main"
      >
        <div className="relative z-10 flex min-w-0 shrink-0 items-center">{logo}</div>

        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
          <div className="pointer-events-auto flex max-w-[min(100%,36rem)] flex-wrap items-center justify-center gap-x-1 gap-y-1 lg:max-w-none lg:gap-x-0.5">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div key={link.href} whileHover={reduceMotion ? undefined : { y: -1 }}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group relative px-0 py-1 font-mono text-[11px] font-medium tracking-widest uppercase text-[#4a5568] transition-colors lg:px-0",
                      "hover:text-[#e8edf5]",
                      isActive && "text-[#e8edf5]",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px w-full origin-left rounded-full bg-[#FDB515] transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                      aria-hidden
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 hidden shrink-0 items-center md:flex">{cta}</div>

        <motion.button
          type="button"
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-[rgba(253,181,21,0.2)] bg-[#0a1628]/90 backdrop-blur-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="inline-flex"
              >
                <X size={18} className="text-[#f0f4ff]" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="inline-flex"
              >
                <Menu size={18} className="text-[#f0f4ff]" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[rgba(253,181,21,0.12)] bg-[#00000f]/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-width flex flex-col gap-1 py-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.04 + i * 0.03, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "bg-[#0a1628] text-[#FDB515]"
                        : "text-[#f0f4ff] hover:bg-[#0a1628]/80",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2">{cta}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
