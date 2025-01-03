// @components
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip";

// @icons
import { Contra } from "@/icons";

export function Hero() {
  return (
    <section className="p-8 sm:p-10 lg:p-20">
      <div className="max-w-2xl mx-auto">
        <div className="relative size-26 md:size-28 lg:size-32 ">
          <Image
            src="/avatar.png"
            alt="sajadevo avatar"
            width={1024}
            height={1024}
            className="size-full border border-secondary object-cover object-center rounded-full"
          />
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://tiny.supply?ref=sajadevo"
                  target="_blank"
                  className="absolute bottom-2 right-2"
                >
                  <Image
                    src="https://framerusercontent.com/images/HAsr1urDKnVXkS4v4m7XoFC7GE.svg"
                    alt="tiny supply"
                    width={250}
                    height={250}
                    className="size-6 bg-secondary border border-secondary rounded-full"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">PFP by Darius</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <h1 className="text-primary font-medium text-2xl xs:text-3xl md:text-4xl lg:text-5xl mt-8 leading-tight">
          Hey, I&apos;m Sajad.
          <br />
          Developer & Designer
        </h1>
        <p className="text-foreground text-balance text-base md:text-lg mt-4">
          A web developer and designer with 7+ year experience helping startups
          and early-stage companies to build their websites and apps.
        </p>
        <div className="flex items-center flex-col xs:flex-row gap-3 mt-8">
          <Link
            href="https://cal.com/sajadevo/talk-with-sajad"
            target="_blank"
            className="w-full xs:w-auto"
          >
            <Button className="w-full">Book a call</Button>
          </Link>
          <Link
            href="https://contra.com/sajadevo"
            target="_blank"
            className="w-full xs:w-auto"
          >
            <Button variant="secondary" className="gap-2 w-full">
              <Contra className="size-4 shrink-0" /> Hire me on Contra
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
