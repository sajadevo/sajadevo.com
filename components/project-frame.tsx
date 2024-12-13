"use client";

// @components
import Image from "next/image";

// @utils
import { cn } from "@/lib/utils";

export function ProjectFrame({
  img,
  title,
  description,
  className,
}: {
  img: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group/project relative shrink-0 snap-always snap-center w-auto h-128 mx-auto bg-white border border-secondary p-6 hover:border-primary transition-all duration-300 ease-in",
        className
      )}
    >
      <Dot className="top-0 left-0 -translate-y-1/2 -translate-x-1/2" />
      <Dot className="top-0 right-0 -translate-y-1/2 translate-x-1/2" />
      <Dot className="bottom-0 left-0 translate-y-1/2 -translate-x-1/2" />
      <Dot className="bottom-0 right-0 translate-y-1/2 translate-x-1/2" />
      <div className="relative size-full overflow-hidden rounded-xl border border-secondary">
        <Image
          src={img}
          alt={title}
          width={1280}
          height={1280}
          className="size-full group-hover/project:blur-sm group-hover/project:scale-110 transition-all duration-300 ease-in"
        />
      </div>
      <div className="absolute left-14 bottom-13 w-[calc(100%-80px)] opacity-0 translate-y-4 group-hover/project:translate-y-0 group-hover/project:opacity-100 transition-all duration-300 ease-in">
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </h2>
        <p className="text-white/80 max-w-md text-base text-balance">
          {description}
        </p>
      </div>
    </div>
  );
}

function Dot({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute z-10 size-[9px] bg-white border border-secondary transition-all duration-300 ease-in group-hover/project:border-primary",
        className
      )}
    />
  );
}
