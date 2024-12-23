"use client";

// @hooks
import { useOffsetX } from "@/lib/hooks";

export function FrameLines() {
  const offsetX = useOffsetX();

  return (
    <>
      {/* top lines */}
      <div className="absolute z-0 -top-10 lg:-top-20 border-l -left-px border-secondary h-10 lg:h-20" />
      <div className="absolute z-0 -top-10 lg:-top-20 border-r -right-px border-secondary h-10 lg:h-20" />
      <div
        className="absolute z-0 top-0 h-px bg-secondary"
        style={{
          left: `-${offsetX}px`,
          width: `calc(100% + ${offsetX * 2}px)`,
        }}
      />
      {/* bottom lines */}
      <div className="absolute z-0 -bottom-10 lg:-bottom-20 border-l -left-px border-secondary h-10 lg:h-20" />
      <div className="absolute z-0 -bottom-10 lg:-bottom-20 border-r -right-px border-secondary h-10 lg:h-20" />
      <div
        className="absolute z-0 bottom-0 h-px bg-secondary"
        style={{
          left: `-${offsetX}px`,
          width: `calc(100% + ${offsetX * 2}px)`,
        }}
      />
      {/* top dots */}
      <div className="absolute z-10 top-[0.5px] -left-[0.5px] size-[9px] bg-white border border-secondary -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute z-10 top-[0.5px] -right-[0.5px] size-[9px] bg-white border border-secondary -translate-y-1/2 translate-x-1/2" />

      {/* bottom dots */}
      <div className="absolute z-10 bottom-[0.5px] -left-[0.5px] size-[9px] bg-white border border-secondary translate-y-1/2 -translate-x-1/2" />
      <div className="absolute z-10 bottom-[0.5px] -right-[0.5px] size-[9px] bg-white border border-secondary translate-y-1/2 translate-x-1/2" />
    </>
  );
}
