import React from "react";

// @utils
import { cn } from "@/lib/utils";

export function Input({
  ref,
  className,
  ...props
}: React.ComponentProps<"input"> & {
  ref?: React.ComponentRef<"input">;
  className?: string;
}) {
  const styles = cn(
    "h-12 rounded-[10px] px-4 flex items-center border border-secondary ring-4 ring-transparent bg-background !text-base font-normal placeholder:text-foreground/50 text-foreground outline-none focus-within:outline-none hover:bg-transparent focus:bg-transparent hover:border-primary focus:border-primary hover:ring-primary/10 focus:ring-primary/10 transition-all duration-300",
    className
  );

  return <input ref={ref} className={styles} autoComplete="off" {...props} />;
}
