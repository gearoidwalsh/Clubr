import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

export default function TransferBanner() {
  return (
    <FadeIn delay={0.1}>
      <section className="section-padding pt-0">
        <div className="container-width">
          <div
            className="rounded-xl border border-[rgba(253,181,21,0.2)] border-l-4 border-l-[#FDB515] p-8 backdrop-blur-sm md:p-10"
            style={{ background: "rgba(10,10,10,0.85)" }}
          >
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#FDB515]">For transfer students</p>
                <h2 className="font-display text-2xl font-semibold text-[#f0f0f0] md:text-3xl">
                  Berkeley recruiting moves fast when you only have two years.
                </h2>
                <p className="font-body text-sm font-normal leading-relaxed text-[#888888] md:text-base">
                  Most generic guides assume four years on campus. The transfer section is shorter and
                  built around fall timelines.
                </p>
              </div>
              <Link href="/your-path">
                <Button size="lg" className="font-medium">
                  Open the transfer guide <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
