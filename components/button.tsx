import React from "react";

// @utils
import { cn } from "@/lib/utils";

export function Button({
  ref,
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<"button"> & {
  ref?: React.ComponentRef<"button">;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const styles = cn(
    "h-12 rounded-xl px-5 border inline-flex items-center whitespace-nowrap overflow-hidden justify-center text-base text-center font-medium cursor-pointer transition-[color_opacity] duration-300",
    {
      "bg-primary text-white border-primary hover:opacity-85":
        variant === "primary",
      "bg-transparent text-primary border-secondary hover:bg-secondary/25":
        variant === "secondary",
    },
    className
  );

  return <button ref={ref} className={styles} {...props} />;
}
