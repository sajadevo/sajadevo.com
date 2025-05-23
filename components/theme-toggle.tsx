"use client";

import React from "react";
import { flushSync } from "react-dom";
import { RiSunLine, RiMoonLine } from "@remixicon/react";
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

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-secondary/12 grid size-10 cursor-pointer place-items-center overflow-hidden rounded-full bg-transparent p-1 text-base font-normal text-white/80 transition-all duration-300 hover:text-white"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <RiMoonLine className="size-4" />
      ) : (
        <RiSunLine className="size-4" />
      )}
    </button>
  );
}
