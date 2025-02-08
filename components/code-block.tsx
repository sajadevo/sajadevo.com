"use client";

import React from "react";

// @components
import { Button } from "@/components/button";

// @icons
import { RiCheckLine, RiFileCopyLine } from "@remixicon/react";

// @hooks
import { useCopyToClipboard } from "usehooks-ts";

export function CodeBlock({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [, copy] = useCopyToClipboard();
  const codeRef = React.useRef<any>(null);

  const [isClient, setIsClient] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  function copyCode() {
    setIsCopied(true);

    const code = codeRef.current.innerText;

    copy(code);
  }

  function resetCopy() {
    setIsCopied(false);
  }

  return (
    <div
      {...props}
      ref={codeRef}
      className="border-secondary [&_pre_span[data-highlighted-line]]:border-primary [&_pre_span[data-highlighted-line]]:bg-primary/5 relative rounded-2xl border [&_pre]:my-0 [&_pre]:bg-transparent [&_pre]:px-0 [&_pre]:py-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed sm:[&_pre]:text-base [&_pre_code[data-language='plaintext']]:!text-black [&_pre_span[data-highlighted-line]]:block [&_pre_span[data-highlighted-line]]:border-l-2 [&_pre_span[data-line]]:px-5"
    >
      <Button
        variant="secondary"
        onClick={copyCode}
        onMouseLeave={resetCopy}
        className="absolute top-1 right-1 size-8 border-0 p-1.5 hover:bg-transparent"
      >
        {isCopied ? (
          <RiCheckLine className="size-4" />
        ) : (
          <RiFileCopyLine className="size-4" />
        )}
      </Button>
      {children}
    </div>
  );
}
