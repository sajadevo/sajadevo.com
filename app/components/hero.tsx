// @components
import Image from "next/image";
import { Button } from "@/components";

// @icons
import { Contra } from "@/icons";

export function Hero() {
  return (
    <header>
      <Image
        src="/avatar.png"
        alt="sajadevo avatar"
        width={1024}
        height={1024}
        className="size-28 border border-secondary object-cover object-center rounded-full"
      />
      <h1 className="text-primary font-medium text-4xl mt-8 leading-tight">
        Hey, I&apos;m Sajad.
        <br />
        Developer & Designer
      </h1>
      <p className="text-foreground text-balance mt-4">
        A web developer and designer with 7+ year experience helping startups
        and early-stage companies to build their websites and web applications.
      </p>
      <div className="flex items-center gap-3 mt-8">
        <Button>Book a call</Button>
        <Button variant="secondary" className="gap-2">
          <Contra className="size-4 shrink-0" /> Hire me on Contra
        </Button>
      </div>
    </header>
  );
}
