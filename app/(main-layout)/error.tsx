"use client";

import React from "react";
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
    <div className="space-y-16 pt-16 pb-20 sm:pt-40 sm:pb-24">
      <section className="container">
        <h1 className="text-primary mb-2 text-base font-medium text-balance sm:text-lg">
          🚧, Something went wrong!
        </h1>
        <p className="text-foreground mb-6 text-base text-balance sm:text-lg">
          An error occurred while trying to load the page.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={() => reset()}>Try again</Button>
          <Button variant="secondary" asChild>
            <Link href="/">Return home</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
