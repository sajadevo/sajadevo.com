import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-full px-4 h-10 border shrink-0 inline-flex items-center whitespace-nowrap overflow-hidden justify-center text-sm text-center font-medium cursor-pointer disabled:opacity-70 disabled:pointer-events-none transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-primary text-white border-primary hover:opacity-90",
        secondary:
          "bg-transparent text-primary border-secondary hover:bg-secondary/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

export function Button({
  ref,
  variant,
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  const styles = cn(buttonVariants({ variant, className }));

  return <Component ref={ref} className={styles} {...props} />;
}
