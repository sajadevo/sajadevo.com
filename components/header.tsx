"use client";

import React from "react";
import { Sajad } from "@/components/sajad";
import Link, { type LinkProps } from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { RiCommandLine, RiCloseLine } from "@remixicon/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = ["about", "projects", "blog", "uses"];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu() {
    setIsMenuOpen((cur) => !cur);
  }

  return (
    <header className="fixed bottom-0 left-1/2 z-50 h-max -translate-x-1/2 p-4 select-none sm:top-0">
      <div
        className={cn(
          "bg-primary/70 border-primary/30 dark:border-primary/40 flex w-max flex-col gap-2 rounded-full border p-1 backdrop-blur-lg backdrop-saturate-200 sm:mx-auto",
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
              "hover:bg-secondary/12 block size-10 rounded-full bg-transparent p-1.25 transition-colors duration-200",
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
              className="hover:bg-secondary/12 grid size-10 cursor-pointer place-items-center overflow-hidden rounded-full bg-transparent p-1 text-base font-normal text-white/80 transition-all duration-200 hover:text-white sm:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <RiCloseLine className="size-4" />
              ) : (
                <RiCommandLine className="size-4" />
              )}
            </button>
          </div>
        </div>
        <nav
          className={cn("hidden w-full items-center gap-0.5", {
            flex: isMenuOpen,
          })}
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
        "hover:bg-secondary/12 grid h-full min-h-10 place-items-center rounded-full px-3.5 text-sm font-medium text-white/80 capitalize transition-colors duration-200 hover:text-white",
        {
          "bg-secondary/12 text-white": isActive,
        },
      )}
    >
      {children}
    </Link>
  );
}
