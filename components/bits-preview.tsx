"use client";

import React from "react";
import { Button } from "@/components/button";
import { Copy, Code, Eye, CopyCheck } from "lucide-react";
import { useCopyToClipboard } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";

export function BitsPreview({
  src,
  title,
  code,
  formattedCode,
  height = "50vh",
}: {
  src: string;
  title: string;
  code: string;
  formattedCode: string;
  height?: string;
}) {
  const [, copy] = useCopyToClipboard();
  const [mode, setMode] = React.useState("preview");
  const [isCopied, setIsCopied] = React.useState(false);

  function handleModeChange() {
    setMode((cur) => (cur === "preview" ? "code" : "preview"));
  }

  function copyCode() {
    setIsCopied(true);
    copy(code);
  }

  function resetCopy() {
    setIsCopied(false);
  }

  const isCodeMode = mode === "code";

  return (
    <div className="border-secondary overflow-hidden rounded-2xl border">
      <div className="border-secondary flex h-12 items-center justify-between gap-4 border-b">
        <h2 className="text-primary px-4 text-sm font-medium sm:text-base">
          {title}
        </h2>
        <div className="flex items-center">
          <Button
            variant="secondary"
            className="border-secondary h-12 rounded-none border-0 border-l"
            onClick={handleModeChange}
          >
            {isCodeMode ? (
              <Eye className="size-4" />
            ) : (
              <Code className="size-4" />
            )}
          </Button>
          <Button
            variant="secondary"
            className="border-secondary h-12 rounded-none border-0 border-l"
            onClick={copyCode}
            onMouseLeave={resetCopy}
          >
            {isCopied ? (
              <CopyCheck className="size-4" />
            ) : (
              <Copy className="size-4" />
            )}
          </Button>
        </div>
      </div>
      <div className="p-2">
        {isCodeMode ? (
          <CodeBlock noCopy className="border-0">
            <div
              className={cn("h-[50vh] overflow-scroll", height)}
              dangerouslySetInnerHTML={{ __html: formattedCode }}
            />
          </CodeBlock>
        ) : (
          <iframe
            src={src}
            className={cn(
              "bg-secondary/50 h-[50vh] w-full rounded-t rounded-b-xl",
              height,
            )}
          />
        )}
      </div>
    </div>
  );
}
