"use client";

import React from "react";

// @components
import { Button } from "@/components/button";

// @icons
import { RiCheckLine, RiFileCopyLine } from "@remixicon/react";

// @hooks
import { useTheme } from "next-themes";
import { useCopyToClipboard } from "usehooks-ts";

// @utils
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";

export function CodeBlock({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { resolvedTheme } = useTheme();
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

  async function copyCode() {
    setIsCopied(true);

    const code = codeRef.current.innerText;
    const cleanedCode = code
      .split("\n")
      .map((line: string) => line.replace(/^\d+\s*/, "")) // Removes leading numbers
      .join("\n");

    const formattedCode = await prettier.format(cleanedCode, {
      parser: "babel",
      plugins: [parserBabel, prettierPluginEstree],
    });

    copy(formattedCode);
  }

  function resetCopy() {
    setIsCopied(false);
  }

  return (
    <div
      {...props}
      ref={codeRef}
      data-theme={resolvedTheme}
      className="code-block border-secondary [&_pre_span[data-bright-ln]]:!text-foreground/50 relative rounded-2xl border [&_>_div]:!my-0 [&_pre]:!bg-transparent [&_pre]:!px-2 [&_pre]:!py-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed sm:[&_pre]:text-base [&_pre_span[data-bright-ln]]:!mr-4"
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
