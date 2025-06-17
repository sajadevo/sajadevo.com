"use client";

import React from "react";
import { Sajad } from "@/components/sajad";
import Link, { type LinkProps } from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { RiCommandLine, RiCloseLine } from "@remixicon/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = ["about", "projects", "blog", "bits", "uses"];

export function Header() {
  const pathname = usePathname();
  const mobileNavRef = React.useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu() {
    setIsMenuOpen((cur) => !cur);
  }

  return (
    <header className="fixed bottom-0 left-1/2 z-50 h-max -translate-x-1/2 p-4 select-none sm:top-0">
      <div
        className={cn(
          "bg-primary/80 border-primary/40 dark:border-primary/50 block w-max rounded-4xl border p-1 backdrop-blur-lg backdrop-saturate-200 transition-all duration-300 sm:mx-auto",
          {
            "rounded-3xl": isMenuOpen,
          },
        )}
      >
        <div className="flex justify-between gap-2">
          <Link
            href="/"
            aria-label="navigate to home"
            className={cn(
              "hover:bg-secondary/12 block size-10 rounded-full bg-transparent p-1.25 transition-colors duration-300",
              {
                "bg-secondary/12": pathname === "/",
              },
            )}
          >
            <Sajad className="size-full rounded-full text-white" />
          </Link>
          <nav className="hidden items-center gap-0.5 sm:flex">
            {links.map((link) => {
              const isHome = link === "home";

              return (
                <NavLink
                  key={link}
                  href={isHome ? "/" : `/${link}`}
                  isActive={pathname === (isHome ? "/" : `/${link}`)}
                >
                  {link}
                </NavLink>
              );
            })}
          </nav>
          <div className="flex">
            <ThemeToggle />
            <button
              aria-label="open menu"
              className="hover:bg-secondary/12 relative grid size-10 cursor-pointer place-items-center overflow-hidden rounded-full bg-transparent p-1 text-base font-normal text-white/80 transition-all duration-300 hover:text-white sm:hidden"
              onClick={toggleMenu}
            >
              <RiCloseLine
                className={cn(
                  "absolute size-4.5 scale-0 opacity-0 transition-all duration-300",
                  {
                    "scale-100 opacity-100": isMenuOpen,
                  },
                )}
              />
              <RiCommandLine
                className={cn(
                  "absolute size-4 scale-0 opacity-0 transition-all duration-300",
                  {
                    "scale-100 opacity-100": !isMenuOpen,
                  },
                )}
              />
            </button>
          </div>
        </div>
        <div
          style={
            {
              "--mobile-nav-width": `${mobileNavRef.current?.clientWidth}px`,
            } as React.CSSProperties
          }
          className={cn(
            "grid w-0 grid-rows-[0fr] overflow-hidden transition-all duration-400 ease-in-out sm:hidden",
            {
              "w-[var(--mobile-nav-width)] grid-rows-[1fr] pt-2": isMenuOpen,
            },
          )}
        >
          <nav
            ref={mobileNavRef}
            className={cn(
              "flex min-h-0 origin-center translate-y-24 scale-90 items-center gap-0.5 opacity-0 transition-all delay-150 duration-400 ease-in-out",
              {
                "translate-y-0 scale-100 opacity-100": isMenuOpen,
              },
            )}
          >
            {links.map((link) => {
              const isHome = link === "home";

              return (
                <NavLink
                  key={link}
                  href={isHome ? "/" : `/${link}`}
                  isActive={pathname === (isHome ? "/" : `/${link}`)}
                >
                  {link}
                </NavLink>
              );
            })}
          </nav>
        </div>
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
        "hover:bg-secondary/12 grid h-full min-h-10 place-items-center rounded-full px-3.5 text-sm font-medium text-white/80 capitalize transition-colors duration-300 hover:text-white",
        {
          "bg-secondary/12 text-white": isActive,
        },
      )}
    >
      {children}
    </Link>
  );
}
