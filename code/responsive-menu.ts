export const responsiveMenuCode = `"use client";

import React from "react";
import { Command, Eclipse, X } from "lucide-react";

import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

const links = ["product", "resources", "pricing", "blog"];

export default function Header() {
  const mobileNavRef = React.useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu() {
    setIsMenuOpen((cur) => !cur);
  }

  return (
    <div className="grid h-screen place-items-center">
      <header className="h-max p-4 select-none">
        <div
          className={cn(
            "mx-auto block w-max rounded-4xl border border-black/30 bg-black/80 p-1 backdrop-blur-lg backdrop-saturate-200 transition-all duration-300 dark:border-white dark:bg-white/80",
            {
              "rounded-3xl": isMenuOpen,
            },
          )}
        >
          <div className="flex justify-between gap-0.5">
            <a
              href="#"
              aria-label="navigate to home"
              className="block size-10 rounded-full bg-transparent p-1.25 transition-colors duration-300 hover:bg-white/10 dark:hover:bg-black/10"
            >
              <Eclipse className="size-full text-white dark:text-black" />
            </a>
            <nav className="hidden items-center gap-0.5 sm:flex">
              {links.map((link) => (
                <NavLink key={link} href="#">
                  {link}
                </NavLink>
              ))}
            </nav>
            <div className="flex sm:hidden">
              <button
                aria-label="open menu"
                className="relative grid size-10 cursor-pointer place-items-center overflow-hidden rounded-full bg-transparent p-1 text-base text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white dark:text-black/80 dark:hover:bg-black/10 dark:hover:text-black"
                onClick={toggleMenu}
              >
                <X
                  className={cn(
                    "absolute size-4 scale-0 opacity-0 transition-all duration-300",
                    {
                      "scale-100 opacity-100": isMenuOpen,
                    },
                  )}
                />
                <Command
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
                "--mobile-nav-width": \`${"${mobileNavRef.current?.clientWidth}"}px\`,
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
              {links.map((link) => (
                <NavLink key={link} href="#">
                  {link}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

function NavLink({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ComponentProps<"a">) {
  return (
    <a
      {...props}
      className="grid h-full min-h-10 place-items-center rounded-full px-3.5 text-sm text-white/80 capitalize transition-colors duration-300 hover:bg-white/10 hover:text-white dark:text-black/80 dark:hover:bg-black/10 dark:hover:text-black"
    >
      {children}
    </a>
  );
}
  
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
