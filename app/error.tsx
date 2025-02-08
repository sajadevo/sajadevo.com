"use client";

import React from "react";

// @components
import Link from "next/link";
import { Button } from "@/components/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-[calc(100vh-48px)] place-items-center md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto max-w-2xl px-6 pt-12 pb-24 text-center sm:px-8 sm:pt-16 sm:pb-36">
        <h1 className="text-2xl leading-tight font-semibold text-balance text-black sm:text-3xl md:text-4xl">
          Something went wrong!
        </h1>
        <p className="text-foreground mt-4 mb-8 text-base text-balance sm:text-lg md:leading-relaxed">
          An error occurred while trying to load the page.
        </p>
        <div className="xs:flex-row flex flex-col items-center justify-center gap-3">
          <Button className="xs:w-auto w-full" onClick={() => reset()}>
            Try agian
          </Button>
          <Button variant="secondary" className="xs:w-auto w-full" asChild>
            <Link href="https://cal.com/sajadevo/talk-with-sajad">
              Return home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
