// @components
import Link from "next/link";
import { Button } from "@/components/button";

// @icons
import { Contra } from "@/icons";

const services = [
  {
    title: "Web Design",
    description:
      "Craft unique designs with style and precision. Build user-friendly solutions.",
  },
  {
    title: "Web Development",
    description:
      "Develop robust, scalable, and efficient web solutions tailored to your needs.",
  },
  {
    title: "Product Design",
    description:
      "Create innovative, user-centric designs that drive engagement and success.",
  },
];

export default async function Home() {
  return (
    <div className="grid min-h-[calc(100vh-48px)] place-items-center md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-36">
        <h1 className="text-3xl leading-tight font-semibold text-black sm:text-4xl md:text-5xl">
          Hey, I&apos;m Sajad.
          <br />
          Developer & Designer
        </h1>
        <p className="text-foreground mt-4 text-lg text-balance md:leading-relaxed">
          I&apos;m a passionate developer and designer interested in JavaScript,
          TypeScript, Rust, Product Design, Startups, Web 3.0 and OSS.
        </p>
        <div className="xs:flex-row mt-8 flex flex-col items-center gap-2">
          <Button className="xs:w-auto w-full" asChild>
            <Link
              href="https://cal.com/sajadevo/talk-with-sajad"
              target="_blank"
            >
              Book a call
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="xs:w-auto w-full gap-3"
            asChild
          >
            <Link href="https://contra.com/sajadevo" target="_blank">
              <Contra className="size-4 shrink-0" /> Hire me on Contra
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description }) => (
            <div
              key={title}
              className="border-secondary relative rounded-2xl border px-6 py-5"
            >
              <h2 className="mb-2 font-sans text-lg font-medium text-black">
                {title}
              </h2>
              <p className="text-foreground text-base text-balance">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
