"use client";

import React from "react";

export default function NativeHtmlDialog() {
  React.useEffect(() => {
    const dialog = document.querySelector(
      "[data-name=dialog]",
    ) as HTMLDialogElement;
    const dialogTrigger = document.querySelector("[data-name=dialog-trigger]");
    const dialogCloseTrigger = document.querySelector(
      "[data-name=dialog-close-trigger]",
    );

    if (dialog && dialogTrigger && dialogCloseTrigger) {
      dialog.showModal();

      dialogTrigger.addEventListener("click", () => {
        dialog.showModal();
      });

      dialogCloseTrigger.addEventListener("click", () => {
        dialog.close();
      });
    }
  }, []);

  return (
    <div className="grid h-screen place-items-center text-center">
      <button
        data-name="dialog-trigger"
        className="h-9 cursor-pointer rounded-lg border border-black/10 px-3.5 text-sm text-black transition-colors hover:bg-black/3 dark:border-white/10 dark:text-white dark:hover:bg-white/3"
      >
        Open Dialog
      </button>
      <dialog
        data-name="dialog"
        className="fixed top-1/2 left-1/2 w-[95%] max-w-100 -translate-1/2 rounded-xl border border-black/10 bg-white p-6 text-left backdrop:bg-black/80 sm:w-full dark:border-white/10 dark:bg-black dark:backdrop:bg-white/3"
      >
        <h2 className="text-lg font-semibold text-black dark:text-white">
          Dialog Title
        </h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          This is a simple dialog box using HTML and Tailwind CSS. You can close
          this dialog box by clicking the cancel button.
        </p>
        <form method="dialog" className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            data-name="dialog-close-trigger"
            className="h-9 cursor-pointer rounded-lg border border-black/10 px-3.5 text-sm text-black transition-colors hover:bg-black/3 dark:border-white/10 dark:text-white dark:hover:bg-white/3"
          >
            Cancel
          </button>
          <button
            type="button"
            className="h-9 cursor-pointer rounded-lg bg-black px-3.5 text-sm text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-black"
          >
            Confirm
          </button>
        </form>
      </dialog>
    </div>
  );
}
