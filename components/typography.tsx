import React from "react";

// @components
import { Slot } from "@radix-ui/react-slot";

// @utils
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("font-sans", {
  variants: {
    variant: {
      default: "text-foreground text-base leading-relaxed sm:text-lg",
      h1: "text-2xl leading-tight font-semibold text-black sm:text-3xl md:text-4xl",
      h2: "text-xl font-semibold text-black sm:text-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLParagraphElement | HTMLHeadingElement>;
}

export function Typography({
  ref,
  variant,
  className,
  asChild = false,
  ...props
}: TypographyProps) {
  const Component = asChild ? Slot : "p";
  const styles = cn(typographyVariants({ variant, className }));

  return <Component ref={ref} className={styles} {...props} />;
}
