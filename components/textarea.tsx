import React from "react";

// @utils
import { cn } from "@/lib/utils";

export function Textarea({
  ref,
  className,
  ...props
}: React.ComponentProps<"textarea"> & {
  ref?: React.ComponentRef<"textarea">;
  className?: string;
}) {
  const styles = cn(
    "rounded-xl py-3.5 px-4 resize-none w-full flex items-center border border-secondary ring-4 ring-transparent bg-background text-base font-normal placeholder:text-foreground/50 text-foreground outline-none focus-within:outline-none hover:bg-transparent focus:bg-transparent hover:border-primary focus:border-primary hover:ring-primary/10 focus:ring-primary/10 transition-all duration-300",
    className
  );

  return <textarea ref={ref} className={styles} {...props} />;
}
