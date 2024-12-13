"use client";

// @utils
import { cn } from "@/lib/utils";

export function Line({ className }: { className?: string }) {
  return (
    <div className="max-w-7xl mx-auto border-x border-secondary bg-white">
      <div
        className={cn(
          "relative max-w-3xl mx-auto w-full h-px bg-secondary",
          className
        )}
      >
        <div className="absolute z-10 top-1/2 left-0 size-[9px] bg-white border border-secondary -translate-y-1/2" />
        <div className="absolute z-10 top-1/2 right-0 size-[9px] bg-white border border-secondary -translate-y-1/2" />
      </div>
    </div>
  );
}
