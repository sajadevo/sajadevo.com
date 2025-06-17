export const nativeHtmlDialogCode = `<div
  class="container mx-auto grid h-screen place-items-center p-16 text-center"
>
  <button
    data-name="dialog-trigger"
    class="text-primary h-9 cursor-pointer rounded-lg border border-gray-300 px-3.5 text-sm transition-colors hover:bg-gray-50"
  >
    Open Dialog
  </button>
  <dialog
    data-name="dialog"
    class="open:animate-come-in backdrop:animate-fade-in fixed top-1/2 left-1/2 max-w-100 -translate-1/2 rounded-xl border border-gray-300 bg-white p-6 text-left backdrop:bg-black/80"
  >
    <h2 class="text-primary text-lg font-semibold">Dialog Title</h2>
    <p class="mt-2 text-gray-600">
      This is a simple dialog box using HTML and Tailwind CSS. You can close
      this dialog box by clicking the cancel button.
    </p>
    <form method="dialog" class="mt-4 flex justify-end gap-2">
      <button
        type="button"
        data-name="dialog-close-trigger"
        class="text-primary h-9 cursor-pointer rounded-lg border border-gray-300 px-3.5 text-sm transition-colors hover:bg-gray-50"
      >
        Cancel
      </button>
      <button
        type="button"
        class="h-9 cursor-pointer rounded-lg bg-black px-3.5 text-sm text-white transition-opacity hover:opacity-90"
      >
        Confirm
      </button>
    </form>
  </dialog>
</div>
 
<script>
  const dialog = document.querySelector("[data-name=dialog]");
  const dialogCloseTrigger = document.querySelector(
    "[data-name=dialog-close-trigger]",
  );
  const dialogTrigger = document.querySelector("[data-name=dialog-trigger]");
 
  dialogTrigger.addEventListener("click", () => {
    dialog.showModal();
  });
 
  dialogCloseTrigger.addEventListener("click", () => {
    dialog.classList.add("!animate-go-out");
    dialog.classList.add("backdrop:!animate-fade-out");
 
    setTimeout(() => {
      dialog.classList.remove("!animate-go-out");
      dialog.classList.remove("backdrop:!animate-fade-out");
      dialog.close();
    }, 150);
  });
</script>`;
