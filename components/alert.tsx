import React from "react";

// @components
import { Slot } from "@radix-ui/react-slot";

// @utils
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "rounded-2xl border border-dashed px-5 py-4 text-base font-medium text-black [&_*]:m-0 [&_*]:text-black",
  {
    variants: {
      variant: {
        info: "border-blue-400 bg-blue-400/10",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export function Alert({
  ref,
  variant,
  className,
  asChild = false,
  ...props
}: AlertProps) {
  const Component = asChild ? Slot : "div";
  const styles = cn(alertVariants({ variant, className }));

  return <Component ref={ref} className={styles} {...props} />;
}
