"use client";

import { useEffect, useState } from "react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { DottedSurface } from "@/components/ui/dotted-surface";

function useLiteBackground() {
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = conn?.saveData === true;
    setLite(reduced || saveData);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => {
      const c = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
      setLite(mq.matches || c?.saveData === true);
    };
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  return lite;
}

export function BackgroundLayers() {
  const lite = useLiteBackground();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {!lite && <DottedSurface className="absolute inset-0 h-full w-full" />}
      <BeamsBackground className="absolute inset-0 h-full w-full" />
      <BackgroundPaths />
    </div>
  );
}
