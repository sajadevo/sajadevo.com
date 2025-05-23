import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 font-medium py-1 text-xs xs:text-sm transition-colors duration-200 select-none",
  {
    variants: {
      variant: {
        default: "bg-secondary/50 text-primary dark:bg-secondary/70",
        success: "bg-green-500/10 text-green-600",
        outline: "border border-secondary text-primary text-foreground",
        x: "bg-black/10 text-black hover:bg-black hover:text-white",
        linkedin:
          "bg-[#0a66c2]/10 dark:bg-[#0a66c2]/20 text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white dark:hover:text-black",
        github:
          "bg-[#24292e]/10 dark:bg-[#2B3137]/70 text-[#24292e] dark:text-black hover:bg-[#24292e] dark:hover:bg-black hover:text-white",
        dribbble:
          "bg-[#ea4c89]/10 dark:bg-[#ea4c89]/20  text-[#ea4c89] selection:!bg-[#ea4c89] hover:bg-[#ea4c89] hover:text-white dark:hover:text-black",
        instagram:
          "bg-[#5b51d8]/10 dark:bg-[#5b51d8]/20 text-[#5b51d8] hover:bg-[#5b51d8] hover:text-white dark:hover:text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({ asChild, className, variant, ...props }: BadgeProps) {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
