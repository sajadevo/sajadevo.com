import React from "react";

// @utils
import { cn } from "@/lib/utils";

export function Textarea({
  ref,
  className,
  isError,
  ...props
}: React.ComponentProps<"textarea"> & {
  ref?: React.ComponentRef<"textarea"> | React.RefCallback<HTMLTextAreaElement>;
  className?: string;
  isError?: boolean;
}) {
  const styles = cn(
    "rounded-[10px] py-3.5 px-4 resize-none w-full flex items-center border border-secondary ring-4 ring-transparent bg-background text-base font-normal placeholder:text-foreground/50 text-foreground outline-none focus-within:outline-none hover:bg-transparent focus:bg-transparent hover:border-primary focus:border-primary hover:ring-primary/10 focus:ring-primary/10 transition-all duration-200",
    "data-[error=true]:border-red-500 data-[error=true]:hover:border-red-500 data-[error=true]:focus:border-red-500 data-[error=true]:hover:ring-red-500/10 data-[error=true]:focus:ring-red-500/10",
    className,
  );

  return (
    <textarea ref={ref} className={styles} data-error={isError} {...props} />
  );
}
