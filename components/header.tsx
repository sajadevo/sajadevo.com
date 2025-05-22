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
    <header className="fixed bottom-0 left-1/2 z-50 -translate-x-1/2 p-4 sm:top-0">
      <div
        className={cn(
          "bg-background border-secondary flex w-max flex-col gap-2 rounded-full border p-1 sm:mx-auto",
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
              "hover:bg-secondary/50 dark:hover:bg-secondary/70 block size-10 rounded-full bg-transparent p-1.25 transition-colors duration-200",
              {
                "bg-secondary/50 dark:bg-secondary/70 text-primary":
                  pathname === "/",
              },
            )}
          >
            <Sajad className="text-primary size-full rounded-full" />
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
              className="hover:bg-secondary/50 dark:hover:bg-secondary/70 text-foreground grid size-10 cursor-pointer place-items-center overflow-hidden rounded-full bg-transparent p-1 text-base font-normal transition-all duration-200 hover:text-black sm:hidden"
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
        "text-foreground hover:bg-secondary/50 dark:hover:bg-secondary/70 grid h-full min-h-10 place-items-center rounded-full px-3.5 text-sm capitalize transition-colors duration-200 hover:text-black",
        {
          "bg-secondary/50 dark:bg-secondary/70 text-primary": isActive,
        },
      )}
    >
      {children}
    </Link>
  );
}
