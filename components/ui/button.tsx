"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-mono text-[12px] tracking-[0.15em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDB515]/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#FDB515] text-black hover:bg-[#fcc94a]",
        outline:
          "border border-[rgba(253,181,21,0.3)] bg-transparent text-[#FDB515] hover:bg-[rgba(253,181,21,0.06)]",
        gold: "bg-[#FDB515] text-black hover:bg-[#fcc94a]",
        ghost: "text-[#FDB515] hover:bg-[rgba(253,181,21,0.08)]",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 py-2 text-[11px]",
        lg: "h-12 px-7 py-3 text-[12px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
