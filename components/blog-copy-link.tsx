"use client";

import React from "react";

// @hooks
import { useCopyToClipboard } from "usehooks-ts";

export function BlogCopyLink({ url }: { url: string }) {
  const [, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState(false);

  function copyCode() {
    setIsCopied(true);

    copy(url);
  }

  function resetCopy() {
    setIsCopied(false);
  }

  return (
    <p
      role="button"
      onClick={copyCode}
      onMouseLeave={resetCopy}
      className="text-foreground hover:text-primary cursor-pointer transition-colors"
    >
      {isCopied ? "Copied" : "Copy URL"}
    </p>
  );
}
