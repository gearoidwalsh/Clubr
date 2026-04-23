"use client";

import { useEffect, useRef, useState } from "react";

function isInteractiveTarget(target: EventTarget | null): boolean {
  return target instanceof Element && Boolean(target.closest("button, a, [data-interactive]"));
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | undefined>(undefined);
  const prevHtmlCursor = useRef("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const dotEl = dotRef.current;
    const ringEl = ringRef.current;
    if (typeof document === "undefined" || !dotEl || !ringEl) return;

    prevHtmlCursor.current = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";

    const style = document.createElement("style");
    style.setAttribute("data-clubr-custom-cursor", "1");
    style.textContent = "* { cursor: none !important; }";
    document.head.appendChild(style);

    const setRingExpanded = (expanded: boolean) => {
      if (!ringRef.current) return;
      const px = expanded ? 42 : 28;
      ringRef.current.style.width = `${px}px`;
      ringRef.current.style.height = `${px}px`;
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      if (isInteractiveTarget(e.target)) setRingExpanded(true);
    };

    const onOut = (e: MouseEvent) => {
      if (!isInteractiveTarget(e.relatedTarget)) setRingExpanded(false);
    };

    const tick = () => {
      const d = dotRef.current;
      const r = ringRef.current;
      if (d) {
        d.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (r) {
        r.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.body.addEventListener("mouseover", onOver);
    document.body.addEventListener("mouseout", onOut);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseover", onOver);
      document.body.removeEventListener("mouseout", onOut);
      if (rafId.current !== undefined) cancelAnimationFrame(rafId.current);
      document.documentElement.style.cursor = prevHtmlCursor.current;
      style.remove();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          width: 28,
          height: 28,
          border: "1.5px solid rgba(255, 255, 255, 0.75)",
          borderRadius: "50%",
          background: "transparent",
          pointerEvents: "none",
          willChange: "transform",
          transition: "width 0.15s ease, height 0.15s ease",
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#ffffff",
          pointerEvents: "none",
        }}
      />
    </>
  );
}
