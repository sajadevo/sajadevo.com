export const animatedButtonCode = `"use client";

import React from "react";
import {
  motion,
  useAnimationControls,
  type AnimationGeneratorType,
} from "motion/react";
import { Loader, Send, CheckCircle } from "lucide-react";

type Status = "idle" | "loading" | "sent";

export function AnimatedButton() {
  const controls = useAnimationControls();
  const [status, setStatus] = React.useState<Status>("idle");

  React.useEffect(() => {
    if (status === "loading") {
      const timer = setTimeout(() => setStatus("sent"), 1500);

      return () => clearTimeout(timer);
    }
    if (status === "sent") {
      const sentTimer = setTimeout(() => setStatus("idle"), 1500);

      return () => clearTimeout(sentTimer);
    }

    if (status === "idle") {
      controls.start({
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 250,
          damping: 10,
        },
      });
    }
  }, [status, controls]);

  async function handleClick() {
    if (status !== "idle") return;

    setStatus("loading");

    await controls.start({
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    });
  }

  const spring = {
    type: "spring" as AnimationGeneratorType,
    stiffness: 150,
    damping: 10,
  };

  function getLabel() {
    switch (status) {
      case "idle":
        return (
          <>
            Send <Send className="size-4" />
          </>
        );
      case "loading":
        return (
          <>
            Sending <Loader className="size-4 animate-spin" />
          </>
        );
      case "sent":
        return (
          <>
            Sent <CheckCircle className="size-4" />
          </>
        );
    }
  }

  return (
    <motion.button
      layout
      animate={controls}
      onClick={handleClick}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-black px-4 text-sm text-white hover:opacity-85 dark:bg-white dark:text-black"
      whileTap={{ scale: 0.95 }}
      transition={spring}
    >
      <motion.span
        key={status}
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={spring}
        className="inline-flex items-center gap-2"
      >
        {getLabel()}
      </motion.span>
    </motion.button>
  );
}`;
