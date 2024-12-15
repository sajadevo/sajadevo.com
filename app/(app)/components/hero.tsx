// @components
import Image from "next/image";
import { Button } from "@/components";

// @icons
import { Contra } from "@/icons";

export function Hero() {
  return (
    <section className="p-10 lg:p-20">
      <div className="max-w-2xl mx-auto">
        <Image
          src="/avatar.png"
          alt="sajadevo avatar"
          width={1024}
          height={1024}
          className="size-26 md:size-28 lg:size-32 border border-secondary object-cover object-center rounded-full"
        />
        <h1 className="text-primary font-medium text-2xl xs:text-3xl md:text-4xl lg:text-5xl mt-8 leading-tight">
          Hey, I&apos;m Sajad.
          <br />
          Developer & Designer
        </h1>
        <p className="text-foreground text-balance text-base md:text-lg mt-4">
          A web developer and designer with 7+ year experience helping startups
          and early-stage companies to build their websites and web
          applications.
        </p>
        <div className="flex items-center flex-col xs:flex-row gap-3 mt-8">
          <Button className="w-full xs:w-auto">Book a call</Button>
          <Button variant="secondary" className="gap-2 w-full xs:w-auto">
            <Contra className="size-4 shrink-0" /> Hire me on Contra
          </Button>
        </div>
      </div>
    </section>
  );
}
