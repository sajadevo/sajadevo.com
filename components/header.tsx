"use client";

import React from "react";

// @components
import Image from "next/image";
import Link, { type LinkProps } from "next/link";

// @icons
import { RiCommandLine, RiSunLine } from "@remixicon/react";

export function Header() {
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
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
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
  ...props
}: { children: React.ReactNode } & LinkProps) {
  return (
    <Link
      {...props}
      className="text-foreground grid h-full place-items-center px-3 text-sm transition-colors duration-200 hover:text-black"
    >
      {children}
    </Link>
  );
}
