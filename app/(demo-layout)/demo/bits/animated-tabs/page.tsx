"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "motion/react";

const tabItems = ["home", "resources", "pricing", "blog", "contact"];

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = React.useState(tabItems[0]);

  return (
    <div className="grid h-screen place-items-center">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List
          className="flex w-max shrink-0 rounded-xl bg-black/5 p-1 dark:bg-white/5"
          aria-label="Navigation"
        >
          {tabItems.map((item) => (
            <Tabs.Trigger
              key={item}
              value={item}
              className="relative rounded-lg bg-transparent px-3 py-2 text-sm text-black capitalize transition-colors hover:text-black/70 dark:text-white dark:hover:text-white/70"
            >
              {activeTab === item && (
                <motion.span
                  layoutId="indicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  className="absolute inset-0 z-10 rounded-lg bg-white shadow-md shadow-black/5 dark:bg-black dark:shadow-none"
                />
              )}
              <span className="relative z-20">{item}</span>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </div>
  );
}
