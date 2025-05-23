import React from "react";
import { cn } from "@/lib/utils";

export function Input({
  ref,
  className,
  isError,
  ...props
}: React.ComponentProps<"input"> & {
  ref?: React.ComponentRef<"input"> | React.RefCallback<HTMLInputElement>;
  className?: string;
  isError?: boolean;
}) {
  const styles = cn(
    "bg-transparent hover:bg-secondary/25 h-12 rounded-xl px-4 w-full flex items-center border border-secondary ring-4 ring-transparent bg-background !text-base font-normal placeholder:text-foreground/50 text-primary outline-none focus-within:outline-none hover:bg-transparent focus:bg-transparent hover:border-primary focus:border-primary hover:ring-primary/10 focus:ring-primary/10 transition-all duration-300",
    "data-[error=true]:border-red-600 data-[error=true]:hover:border-red-600 data-[error=true]:focus:border-red-600 data-[error=true]:hover:ring-red-600/10 data-[error=true]:focus:ring-red-600/10",
    className,
  );

  return (
    <input
      ref={ref}
      className={styles}
      data-error={isError}
      autoComplete="off"
      {...props}
    />
  );
}
