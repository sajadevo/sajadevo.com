import React from "react";

// @components
import { Slot } from "@radix-ui/react-slot";

// @utils
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "h-12 rounded-full px-6 border inline-flex items-center whitespace-nowrap overflow-hidden justify-center text-base text-center font-medium cursor-pointer disabled:opacity-70 disabled:pointer-events-none transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-primary text-white border-primary hover:opacity-85",
        secondary:
          "bg-transparent text-primary border-secondary hover:bg-secondary/25",
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
