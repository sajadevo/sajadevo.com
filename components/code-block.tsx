"use client";

import React from "react";
import { Button } from "@/components/button";
import { Copy, CopyCheck } from "lucide-react";
import { useCopyToClipboard } from "usehooks-ts";
import { cn } from "@/lib/utils";

export function CodeBlock({
  children,
  className,
  noCopy = false,
  ...props
}: { noCopy?: boolean } & React.ComponentPropsWithoutRef<"div">) {
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
      className={cn(
        "border-secondary [&_pre_span[data-highlighted-line]]:border-primary [&_pre_span[data-highlighted-line]]:bg-primary/5 [&_pre_code[data-language='plaintext']]:!text-primary relative rounded-2xl border [&_pre]:my-0 [&_pre]:bg-transparent [&_pre]:px-0 [&_pre]:py-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed sm:[&_pre]:text-base [&_pre_span[data-highlighted-line]]:block [&_pre_span[data-highlighted-line]]:border-l-2 [&_pre_span[data-line]]:px-5",
        className,
      )}
    >
      {!noCopy && (
        <Button
          variant="secondary"
          onClick={copyCode}
          onMouseLeave={resetCopy}
          className="bg-secondary/50 absolute top-2 right-2 size-7 rounded-lg border-0 p-1"
        >
          {isCopied ? (
            <CopyCheck className="size-3.5" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </Button>
      )}
      {children}
    </div>
  );
}
