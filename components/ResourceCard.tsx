import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type Resource = {
  category:
    | "Resumes"
    | "Cover Letters"
    | "Interview Prep"
    | "Coffee Chat Scripts"
    | "Case Studies"
    | "Finance"
    | "Product Management";
  title: string;
  description: string;
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#0a1628] p-5 shadow-none transition hover:-translate-y-0.5 hover:border-[rgba(253,181,21,0.2)] hover:shadow-[0_0_24px_rgba(253,181,21,0.06)]">
      <Badge variant="muted" className="w-fit font-medium">
        {resource.category}
      </Badge>
      <h3 className="mt-4 text-base font-semibold text-[#f0f4ff]">{resource.title}</h3>
      <p className="mt-2 flex-1 text-sm font-normal leading-6 text-[#8892a4]">
        {resource.description}
      </p>
      <button
        type="button"
        className="mt-5 inline-flex items-center text-sm font-medium text-[#FDB515] hover:text-[#fcc94a]"
      >
        Download / View <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </article>
  );
}
