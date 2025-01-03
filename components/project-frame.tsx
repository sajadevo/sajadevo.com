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
        "group/project relative shrink-0 aspect-[4/3] h-60 sm:h-80 md:h-104 lg:h-116 xl:h-128 bg-white border border-secondary p-4 sm:p-6 hover:border-primary transition-all duration-300 ease-in",
        className
      )}
    >
      <Dot className="top-0 left-0 -translate-y-1/2 -translate-x-1/2" />
      <Dot className="top-0 right-0 -translate-y-1/2 translate-x-1/2" />
      <Dot className="bottom-0 left-0 translate-y-1/2 -translate-x-1/2" />
      <Dot className="bottom-0 right-0 translate-y-1/2 translate-x-1/2" />
      <div className="relative size-full overflow-hidden rounded-lg md:rounded-[10px] border border-secondary group-hover/project:border-transparent transition-colors">
        <Image
          src={img}
          alt={title}
          width={1280}
          height={1280}
          className="size-full group-hover/project:blur-xs group-hover/project:scale-105 group-hover/project:brightness-50 transition-all duration-300 ease-in"
        />
      </div>
      <div className="absolute left-10 bottom-9 sm:left-12 md:left-14 sm:bottom-11 md:bottom-13 w-[calc(100%-80px)] opacity-0 translate-y-4 group-hover/project:translate-y-0 group-hover/project:opacity-100 transition-all duration-300 ease-in">
        <h2 className="text-base md:text-xl font-medium text-white inline-flex items-center gap-2">
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
        <p className="text-white/80 text-sm max-w-sm md:max-w-md md:text-base text-balance mt-2 sm:block hidden">
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
        "absolute z-10 size-[9px] bg-white border border-secondary transition-all duration-300 ease-in group-hover/project:border-primary",
        className
      )}
    />
  );
}
