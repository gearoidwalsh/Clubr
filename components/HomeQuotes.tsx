"use client";

import { useEffect, useState } from "react";
import { HOME_QUOTES } from "@/data/home-quotes";

function dayIndex() {
  const t = new Date();
  return Math.floor(t.getTime() / 86400000);
}

export function HomeQuotes() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const idx = Math.abs(dayIndex()) % HOME_QUOTES.length;
    setI(idx);
  }, []);

  return (
    <p className="mx-auto mt-8 max-w-lg px-4 text-center font-body text-sm leading-relaxed text-[#666666]">
      {HOME_QUOTES[i]}
    </p>
  );
}
