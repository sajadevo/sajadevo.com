"use client";

// @components
import Link from "next/link";
import Image from "next/image";

// @utils
import { cn } from "@/lib/utils";

export function ProjectFrame({
  img,
  title,
  url,
  description,
  className,
}: {
  img: string;
  title: string;
  url: string;
  description: string;
  className?: string;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      className={cn(
        "group/project border-secondary hover:border-primary relative aspect-[4/3] h-60 shrink-0 border bg-white p-4 transition-all duration-200 ease-in sm:h-80 sm:p-6 md:h-104 lg:h-116 xl:h-128",
        className,
      )}
    >
      <Dot className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <Dot className="top-0 right-0 -translate-y-1/2 translate-x-1/2" />
      <Dot className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <Dot className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
      <div className="border-secondary relative size-full overflow-hidden rounded-lg border transition-colors group-hover/project:border-transparent md:rounded-[10px]">
        <Image
          src={img}
          alt={title}
          width={1280}
          height={1280}
          className="size-full transition-all duration-200 ease-in group-hover/project:scale-105 group-hover/project:blur-xs group-hover/project:brightness-50"
        />
      </div>
      <div className="absolute bottom-9 left-10 w-[calc(100%-80px)] translate-y-4 opacity-0 transition-all duration-200 ease-in group-hover/project:translate-y-0 group-hover/project:opacity-100 sm:bottom-11 sm:left-12 md:bottom-13 md:left-14">
        <h2 className="inline-flex items-center gap-2 text-base font-medium text-white md:text-xl">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 md:size-6"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </h2>
        <p className="mt-2 hidden max-w-sm text-sm text-balance text-white/80 sm:block md:max-w-md md:text-base">
          {description}
        </p>
      </div>
    </Link>
  );
}

function Dot({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-secondary group-hover/project:border-primary absolute z-10 size-[9px] border bg-white transition-all duration-200 ease-in",
        className,
      )}
    />
  );
}
