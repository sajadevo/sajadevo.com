// @components
import Link from "next/link";

// @icons
import {
  RiSendPlaneLine,
  RiGithubLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiDribbbleLine,
  RiInstagramLine,
  RiSquareLine,
} from "@remixicon/react";

export function Footer() {
  return (
    <footer className="absolute bottom-3.5 left-1/2 flex -translate-x-1/2 items-center justify-center gap-6 md:bottom-5">
      <Link
        href="/contact"
        aria-label="Contact Sajad"
        className="text-foreground transition-colors duration-200 hover:text-black"
      >
        <RiSendPlaneLine className="size-4 md:size-5" />
      </Link>
      <Link
        href="https://github.com/sajadevo"
        aria-label="Sajad Github Profile"
        className="text-foreground transition-colors duration-200 hover:text-black"
      >
        <RiGithubLine className="size-4 md:size-5" />
      </Link>
      <Link
        href="https://x.com/sajadevo_"
        aria-label="Sajad X/Twitter Profile"
        className="text-foreground transition-colors duration-200 hover:text-black"
      >
        <RiTwitterXLine className="size-4 md:size-5" />
      </Link>
      <Link
        href="https://linkedin.com/in/sajadevo"
        aria-label="Sajad LinkedIn Profile"
        className="text-foreground transition-colors duration-200 hover:text-black"
      >
        <RiLinkedinLine className="size-4 md:size-5" />
      </Link>
      <Link
        href="https://dribbble.com/sajadevo"
        aria-label="Sajad Dribbble Profile"
        className="text-foreground transition-colors duration-200 hover:text-black"
      >
        <RiDribbbleLine className="size-4 md:size-5" />
      </Link>
      <Link
        href="https://www.instagram.com/sajadevo/"
        aria-label="Sajad Instagram Profile"
        className="text-foreground transition-colors duration-200 hover:text-black"
      >
        <RiInstagramLine className="size-4 md:size-5" />
      </Link>
      <Link
        href="https://layers.to/sajadevo"
        aria-label="Sajad Layers Profile"
        className="text-foreground transition-colors duration-200 hover:text-black"
      >
        <RiSquareLine className="size-4 md:size-5" />
      </Link>
    </footer>
  );
}
