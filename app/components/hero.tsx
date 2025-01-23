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
      <div className="mx-auto max-w-2xl">
        <div className="relative size-26 md:size-28 lg:size-32">
          <Image
            src="/avatar.png"
            alt="sajadevo avatar"
            width={1024}
            height={1024}
            className="border-secondary size-full rounded-full border object-cover object-center"
          />
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://tiny.supply?ref=sajadevo"
                  target="_blank"
                  className="absolute right-2 bottom-2"
                >
                  <Image
                    src="https://framerusercontent.com/images/HAsr1urDKnVXkS4v4m7XoFC7GE.svg"
                    alt="tiny supply"
                    width={250}
                    height={250}
                    className="bg-secondary border-secondary size-6 rounded-full border"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">PFP by Darius</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <h1 className="xs:text-3xl mt-8 text-2xl leading-tight font-normal text-black md:text-4xl lg:text-5xl">
          Hey, I&apos;m Sajad.
          <br />
          Developer & Designer
        </h1>
        <p className="text-foreground mt-4 text-base text-balance md:text-lg">
          A web developer and designer with 7+ year experience helping startups
          and early-stage companies to build their websites and apps.
        </p>
        <div className="xs:flex-row mt-8 flex flex-col items-center gap-3">
          <Link
            href="https://cal.com/sajadevo/talk-with-sajad"
            target="_blank"
            className="xs:w-auto w-full"
          >
            <Button className="w-full">Book a call</Button>
          </Link>
          <Link
            href="https://contra.com/sajadevo"
            target="_blank"
            className="xs:w-auto w-full"
          >
            <Button variant="secondary" className="w-full gap-2">
              <Contra className="size-4 shrink-0" /> Hire me on Contra
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
