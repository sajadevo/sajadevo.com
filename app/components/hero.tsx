// @components
import Image from "next/image";
import { Button } from "@/components";

// @icons
import { Contra } from "@/icons";

// {/* lines */}
// <div className="absolute z-0 -left-20 h-px bottom-0 bg-secondary w-[calc(100%+160px)] scale-x-200" />

// {/* dots */}
// <div className="absolute z-10 bottom-0 left-0 size-[9px] bg-white border border-secondary translate-y-[calc(50%-0.5px)] -translate-x-[calc(50%-0.5px)]" />
// <div className="absolute z-10 bottom-0 right-0 size-[9px] bg-white border border-secondary translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />

export function Hero() {
  return (
    <header className="max-w-7xl bg-white p-20 mx-auto relative">
      <div className="absolute z-0 top-0 h-px -left-20 bg-secondary w-[calc(100%+160px)] scale-x-200" />
      <div className="absolute z-0 -top-20 h-[calc(100%+160px)] right-0 bg-secondary w-px" />
      <div className="absolute z-0 -top-20 h-[calc(100%+160px)] left-0 bg-secondary w-px" />
      <div className="absolute z-10 top-0 left-0 size-[9px] bg-white border border-secondary -translate-y-[calc(50%-0.5px)] -translate-x-[calc(50%-0.5px)]" />
      <div className="absolute z-10 top-0 right-0 size-[9px] bg-white border border-secondary -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]" />

      <div className="max-w-3xl mx-auto">
        <Image
          src="/avatar.png"
          alt="sajadevo avatar"
          width={1024}
          height={1024}
          className="size-32 border border-secondary object-cover object-center rounded-full"
        />
        <h1 className="text-primary font-medium text-5xl mt-8 leading-tight">
          Hey, I&apos;m Sajad.
          <br />
          Developer & Designer
        </h1>
        <p className="text-foreground text-balance text-lg mt-4">
          A web developer and designer with 7+ year experience helping startups
          and early-stage companies to build their websites and web
          applications.
        </p>
        <div className="flex items-center gap-3 mt-8">
          <Button>Book a call</Button>
          <Button variant="secondary" className="gap-2">
            <Contra className="size-4 shrink-0" /> Hire me on Contra
          </Button>
        </div>
      </div>
    </header>
  );
}
