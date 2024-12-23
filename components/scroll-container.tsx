"use client";

// @hooks
import { useOffsetX } from "@/lib/hooks";

export function ScrollContainer({
  children,
  ...props
}: React.ComponentProps<"div"> & { children: React.ReactNode }) {
  const offsetX = useOffsetX();

  return (
    <div
      {...props}
      style={{
        marginInline: `${-offsetX}px`,
      }}
    >
      {children}
    </div>
  );
}
