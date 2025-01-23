// @utils
import { cn } from "@/lib/utils";

const lineStyle = "bg-secondary absolute z-50";
const dotStyle =
  "bg-background border-secondary absolute size-3 rounded border z-50";

export function FrameLines() {
  return (
    <>
      {/* lines */}
      <div className={cn(lineStyle, "top-12 left-0 h-px w-full md:top-16")} />
      <div
        className={cn(
          lineStyle,
          "top-0 right-6 h-full w-px sm:right-8 md:right-16",
        )}
      />
      <div
        className={cn(lineStyle, "bottom-12 left-0 h-px w-full md:bottom-16")}
      />
      <div
        className={cn(
          lineStyle,
          "top-0 left-6 h-full w-px sm:left-8 md:left-16",
        )}
      />

      {/* dots */}
      <div
        className={cn(
          dotStyle,
          "top-12 left-6 -translate-x-1/2 -translate-y-1/2 sm:left-8 md:top-16 md:left-16",
        )}
      />
      <div
        className={cn(
          dotStyle,
          "top-12 right-6 -translate-y-1/2 translate-x-1/2 sm:right-8 md:top-16 md:right-16",
        )}
      />
      <div
        className={cn(
          dotStyle,
          "bottom-12 left-6 -translate-x-1/2 translate-y-1/2 sm:left-8 md:bottom-16 md:left-16",
        )}
      />
      <div
        className={cn(
          dotStyle,
          "right-6 bottom-12 translate-x-1/2 translate-y-1/2 sm:right-8 md:right-16 md:bottom-16",
        )}
      />
    </>
  );
}
