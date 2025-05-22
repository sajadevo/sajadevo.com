"use client";

import React from "react";
import { flushSync } from "react-dom";

// @icons
import { RiSunLine, RiMoonLine } from "@remixicon/react";

// @hooks
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  async function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    }).ready;
  }

  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-secondary/50 dark:hover:bg-secondary/70 text-foreground grid size-10 cursor-pointer place-items-center overflow-hidden rounded-full bg-transparent p-1 text-base font-normal transition-all duration-200 hover:text-black"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <RiMoonLine className="size-4" />
      ) : (
        <RiSunLine className="size-4" />
      )}
    </button>
  );
}
