"use client";

import React from "react";
import { Button } from "@/components/button";
import { CodeBlock } from "@/components/code-block";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { Copy, Code, Eye, CopyCheck, Monitor, Smartphone } from "lucide-react";
import { useCopyToClipboard } from "usehooks-ts";
import { cn } from "@/lib/utils";

export function BitsPreview({
  src,
  title,
  code,
  formattedCode,
  height = "h-[50vh]",
}: {
  src: string;
  title: string;
  code: string;
  formattedCode: string;
  height?: string;
}) {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const [, copy] = useCopyToClipboard();
  const [mode, setMode] = React.useState("preview");
  const [isCopied, setIsCopied] = React.useState(false);
  const [isMobileView, setIsMobileView] = React.useState(false);

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

  function handleMobileViewChange() {
    setIsMobileView((prev) => !prev);
  }

  const isCodeMode = mode === "code";

  return (
    <div className="border-secondary overflow-hidden rounded-2xl border">
      <div className="border-secondary flex h-12 items-center justify-between gap-4 border-b">
        <h2 className="text-primary px-4 text-sm font-medium sm:text-base">
          {title}
        </h2>
        <div className="flex items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                className="border-secondary h-12 rounded-none border-0 border-l"
                onClick={handleMobileViewChange}
              >
                {isMobileView ? (
                  <Monitor className="size-4" />
                ) : (
                  <Smartphone className="size-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Switch to {isMobileView ? "desktop" : "mobile"} view</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>
            <TooltipContent>
              <p>Switch to {isCodeMode ? "preview" : "code"} mode</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>
            <TooltipContent>
              <p>{isCopied ? "Copied!" : "Copy code"}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className={cn("h-[50vh] w-full", height)}>
        {isCodeMode ? (
          <CodeBlock noCopy className="border-0">
            <div
              className={cn("h-full overflow-scroll", height)}
              dangerouslySetInnerHTML={{ __html: formattedCode }}
            />
          </CodeBlock>
        ) : (
          <iframe
            ref={iframeRef}
            src={src}
            className={cn("size-full border-x border-transparent", {
              "border-secondary mx-auto w-100": isMobileView,
            })}
          />
        )}
      </div>
    </div>
  );
}
