"use client";

import React from "react";

export default function Page() {
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
        dialog.classList.add("!animate-bnhd-go-out");
        dialog.classList.add("backdrop:!animate-bnhd-fade-out");

        setTimeout(() => {
          dialog.classList.remove("!animate-bnhd-go-out");
          dialog.classList.remove("backdrop:!animate-bnhd-fade-out");
          dialog.close();
        }, 150);
      });
    }
  }, []);

  return (
    <div className="container mx-auto grid h-screen place-items-center p-16 text-center">
      <button
        data-name="dialog-trigger"
        className="border-secondary hover:bg-secondary/25 text-primary h-9 cursor-pointer rounded-lg border px-3.5 text-sm transition-colors"
      >
        Open Dialog
      </button>
      <dialog
        data-name="dialog"
        className="open:animate-bnhd-come-in backdrop:animate-bnhd-fade-in border-secondary bg-background fixed top-1/2 left-1/2 max-w-100 -translate-1/2 rounded-xl border p-6 text-left backdrop:bg-black/80 dark:backdrop:bg-white/70"
      >
        <h2 className="text-primary text-lg font-semibold">Dialog Title</h2>
        <p className="text-foreground mt-2">
          This is a simple dialog box using HTML and Tailwind CSS. You can close
          this dialog box by clicking the cancel button.
        </p>
        <form method="dialog" className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            data-name="dialog-close-trigger"
            className="border-secondary hover:bg-secondary/25 text-primary h-9 cursor-pointer rounded-lg border px-3.5 text-sm transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-primary h-9 cursor-pointer rounded-lg px-3.5 text-sm text-white transition-opacity hover:opacity-85"
          >
            Confirm
          </button>
        </form>
      </dialog>
    </div>
  );
}
