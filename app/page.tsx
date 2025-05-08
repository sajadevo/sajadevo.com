// @components
import Link from "next/link";
import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { FeatureCard } from "@/components/feature-card";

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
        <Typography className="mt-4 text-balance">
          I&apos;m a passionate developer and designer interested in JavaScript,
          TypeScript, Rust, Product Design, Startups, Web 3.0 and OSS.
        </Typography>
        <div className="xs:flex-row mt-8 flex flex-col items-center gap-4">
          <Button className="xs:w-auto w-full" asChild>
            <Link
              href="https://cal.com/sajadevo/talk-with-sajad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </Link>
          </Button>
          <div className="flex items-center gap-2 rounded-3xl bg-teal-500/15 px-3 py-1.5 text-center text-sm font-medium text-teal-900 dark:text-teal-100">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-teal-500"></span>
            </span>{" "}
            Open to new opportunities
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description }) => (
            <FeatureCard key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
}
