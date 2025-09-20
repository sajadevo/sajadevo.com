"use client";

import React from "react";
import { Check, Loader } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

import { cn } from "@/lib/utils";

export default function AnimatedForm() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

  const triggerRef = React.useRef<HTMLButtonElement | null>(null);

  const [anchor, setAnchor] = React.useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const measure = React.useCallback(() => {
    const trigger = triggerRef.current;

    if (trigger) {
      const triggerRect = trigger.getBoundingClientRect();
      setAnchor({ top: triggerRect.bottom, left: triggerRect.right });
    }
  }, []);

  React.useEffect(() => {
    if (!open) return;

    measure();

    const onScroll = () => measure();
    const onResize = () => measure();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isOpen, measure]);

  React.useEffect(() => {
    if (!isSent) return;

    const timeout = setTimeout(() => {
      setIsSent(false);
      setIsOpen(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isSent]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSent(true);
    });
  }

  return (
    <div className="grid min-h-screen place-items-center p-6">
      <LayoutGroup id="newsletter">
        <MotionButton
          ref={triggerRef}
          layout
          layoutId="cta"
          aria-hidden={isOpen}
          className={cn("opacity-100", {
            "pointer-events-none opacity-0": isOpen,
          })}
          onClick={() => {
            measure();
            setIsOpen(true);
          }}
        >
          Subscribe
        </MotionButton>

        <AnimatePresence initial={false} mode="wait">
          {isOpen && (
            <div
              className="fixed z-[9999]"
              style={{
                top: anchor.top,
                left: anchor.left,
                transform: "translate(-100%, -100%)",
              }}
            >
              <motion.form
                onSubmit={onSubmit}
                className="w-xs origin-bottom-right overflow-hidden rounded-2xl border border-black/10 bg-white px-4 pt-3 pb-4 backdrop-blur dark:border-white/10 dark:bg-black"
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 4,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: 4,
                }}
                transition={{
                  type: "spring",
                  duration: 0.65,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-4">
                  <h2 className="text-base font-medium text-black dark:text-white">
                    No spam, we promise. 💌
                  </h2>
                  <Input label="Your Name" placeholder="e.g. John" />
                  <Input
                    type="email"
                    label="Your Email"
                    placeholder="e.g. john@example.com"
                  />
                  <div className="mt-2 flex items-center justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </Button>
                    <MotionButton layout layoutId="cta">
                      {isPending && (
                        <>
                          Sending
                          <Loader className="size-3.75 animate-spin" />
                        </>
                      )}
                      {isSent && (
                        <>
                          Sent
                          <Check className="size-3.75" />
                        </>
                      )}
                      {!isSent && !isPending && "Subscribe"}
                    </MotionButton>
                  </div>
                </div>
              </motion.form>
            </div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}

function Input({
  className,
  label,
  ...props
}: React.ComponentProps<"input"> & {
  label: string;
}) {
  const id = React.useId();
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="w-max text-sm font-medium text-black dark:text-white"
      >
        {label}
      </label>
      <input
        {...props}
        id={id}
        className={cn(
          "rounded-lg border border-transparent bg-black/5 px-3 py-2 text-sm text-black transition-all duration-200 outline-none hover:border-black/25 focus:border-black/25 focus:bg-transparent focus:ring-3 focus:ring-black/10 dark:bg-white/5 dark:text-white dark:hover:border-white/25 dark:focus:border-white/25 dark:focus:ring-white/10",
        )}
      />
    </div>
  );
}

function Button({
  variant = "default",
  children,
  className,
  ...props
}: { variant?: "default" | "outline" } & React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-black bg-black px-3 py-1.5 text-sm text-white hover:opacity-90 dark:border-white dark:bg-white dark:text-black",
        {
          "border-black/10 bg-transparent text-black hover:bg-black/5 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5":
            variant === "outline",
        },
        className,
      )}
    >
      {children}
    </button>
  );
}

const MotionButton = motion(Button);
