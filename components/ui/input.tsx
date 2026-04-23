import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-[rgba(255,255,255,0.08)] bg-[#0a1628] px-3 py-2 text-sm font-normal text-[#f0f4ff] placeholder:text-[#8892a4]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB515]/30",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
