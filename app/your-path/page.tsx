import type { Metadata } from "next";
import { Suspense } from "react";
import { YourPathClient } from "./your-path-client";

export const metadata: Metadata = {
  title: "Your Path",
  description: "Guidance for transfers and first years navigating Berkeley business club recruiting.",
};

export default function YourPathPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 text-center text-[#888888]">Loading…</div>}>
      <YourPathClient />
    </Suspense>
  );
}
