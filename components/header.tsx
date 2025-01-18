"use client";

import React from "react";

// @components
import Image from "next/image";
import Link, { type LinkProps } from "next/link";

// @icons
import { RiCommandLine, RiSunLine } from "@remixicon/react";

// @hooks
import { usePathname } from "next/navigation";

// @utils
import { cn } from "@/lib/utils";

const links = ["home", "about", "projects"];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between">
      <Link
        href="/"
        className="border-secondary hover:bg-secondary/25 size-12 border-r bg-transparent p-2 transition-colors duration-200 md:size-16 md:p-3"
      >
        <Image
          src="/avatar.svg"
          alt="avatar"
          width={64}
          height={64}
          className="size-full"
        />
      </Link>
      <nav className="hidden h-12 items-center gap-1 sm:flex md:h-16">
        {links.map((link) => {
          const isHome = link === "home";

          return (
            <NavLink
              key={link}
              href={isHome ? "/" : link}
              isActive={pathname === (isHome ? "/" : `/${link}`)}
            >
              {link}
            </NavLink>
          );
        })}
      </nav>
      <div className="flex">
        <button className="hover:bg-secondary/25 border-secondary text-foreground grid size-12 cursor-pointer place-items-center overflow-hidden border-l bg-transparent p-1 text-base font-normal transition-colors duration-200 hover:text-black md:size-16">
          <RiSunLine className="size-4 transition-colors duration-200 md:size-5" />
        </button>
        <button className="hover:bg-secondary/25 border-secondary text-foreground grid size-12 cursor-pointer place-items-center overflow-hidden border-l bg-transparent p-1 text-base font-normal transition-colors duration-200 hover:text-black sm:hidden md:size-16">
          <RiCommandLine className="size-4 transition-colors duration-200 md:size-5" />
        </button>
      </div>
    </header>
  );
}

function NavLink({
  children,
  isActive,
  ...props
}: { children: React.ReactNode; isActive?: boolean } & LinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "text-foreground grid h-full place-items-center px-3 text-sm capitalize transition-colors duration-200 hover:text-black",
        {
          "text-black": isActive,
        },
      )}
    >
      {children}
    </Link>
  );
}
