"use client";

import React from "react";

// @components
import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
  DialogClose,
} from "@/components/dialog";
import { Button } from "@/components/button";

// @icons
import { RiCommandLine, RiSunLine, RiCloseLine } from "@remixicon/react";

// @hooks
import { usePathname } from "next/navigation";

// @utils
import { cn } from "@/lib/utils";

const links = ["home", "about", "projects"];
const dotStyle =
  "bg-background border-secondary absolute size-3 rounded border";

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
        <Dialog>
          <DialogTrigger asChild>
            <button className="hover:bg-secondary/25 border-secondary text-foreground grid size-12 cursor-pointer place-items-center overflow-hidden border-l bg-transparent p-1 text-base font-normal transition-colors duration-200 hover:text-black sm:hidden md:size-16">
              <RiCommandLine className="size-4 transition-colors duration-200 md:size-5" />
            </button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className="size-screen bg-background" />
            <DialogClose asChild>
              <Button
                variant="secondary"
                className="absolute top-4 right-4 z-50 size-10 p-0"
              >
                <RiCloseLine className="size-5" />
              </Button>
            </DialogClose>
            <div className="fixed top-1/2 left-1/2 z-50 size-3/4 -translate-x-1/2 -translate-y-1/2">
              <div className="border-secondary relative grid size-full place-items-center border">
                {/* dots */}
                <div
                  className={cn(
                    dotStyle,
                    "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
                  )}
                />
                <div
                  className={cn(
                    dotStyle,
                    "top-0 right-0 -translate-y-1/2 translate-x-1/2",
                  )}
                />
                <div
                  className={cn(
                    dotStyle,
                    "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
                  )}
                />
                <div
                  className={cn(
                    dotStyle,
                    "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
                  )}
                />
                hello
              </div>
            </div>
          </DialogPortal>
        </Dialog>
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
