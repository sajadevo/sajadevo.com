import Link from "next/link";
import { Button } from "@/components/button";

export default function Loading() {
  return (
    <div className="space-y-16 pt-16 pb-20 sm:pt-40 sm:pb-24">
      <section className="container">
        <h1 className="text-primary mb-2 text-base font-medium text-balance sm:text-lg">
          😕, Page Not Found
        </h1>
        <p className="text-foreground mb-6 text-base text-balance sm:text-lg">
          The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
      </section>
    </div>
  );
}
