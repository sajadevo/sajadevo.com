// @components
import Link from "next/link";
import { Button } from "@/components/button";

export default function Loading() {
  return (
    <div className="grid min-h-[calc(100vh-48px)] place-items-center md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto max-w-2xl px-6 pt-12 pb-24 text-center sm:px-8 sm:pt-16 sm:pb-36">
        <h1 className="text-2xl leading-tight font-semibold text-balance text-black sm:text-3xl md:text-4xl">
          Page Not Found
        </h1>
        <p className="text-foreground mt-4 mb-8 text-base text-balance sm:text-lg md:leading-relaxed">
          The page you are looking for does not exist.
        </p>
        <Button className="mx-auto" asChild>
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
}
