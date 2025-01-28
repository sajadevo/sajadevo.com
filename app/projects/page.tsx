// @components
import Link from "next/link";

// @utils
import { generateMetadata } from "@/lib/utils";

const featuredProjects = [
  {
    name: "DevResume",
    url: "https://www.devresume.xyz",
    description: "Portfolio builder for developers with GitHub",
  },
  {
    name: "Mintra App",
    url: "https://app.mintra.ai/",
    description: "NFT marketplace and launchpad for creators",
  },
  {
    name: "Material Tailwind",
    url: "https://www.material-tailwind.com/v3",
    description: "React & Tailwind CSS components library",
  },
];

const projects = [
  {
    name: "DevResume",
    url: "https://www.devresume.xyz",
    description: "Portfolio builder for developers with GitHub",
  },
  {
    name: "Mintra App",
    url: "https://app.mintra.ai/",
    description: "NFT marketplace and launchpad for creators",
  },
  {
    name: "Material Tailwind",
    url: "https://www.material-tailwind.com/v3",
    description: "React & Tailwind CSS components library",
  },
  {
    name: "LookIntoHex",
    url: "https://www.lookintohex.com/",
    description: "HEX analytics and visualization tool",
  },
  {
    name: "Shadcn + Tailwind v4",
    url: "https://github.com/sajadevo/shadncn-tailwindcss-v4-starter",
    description: "Starter kit for Shadcn with Tailwind CSS v4",
  },
  {
    name: "Reach App",
    url: "https://www.getreach.xyz/",
    description: "Automated social finance protocol",
  },
  {
    name: "NF-Tim",
    url: "https://nf-tim.com/",
    description: "NFT utility project for developers & designers",
  },
  {
    name: "Gerardo Portfolio",
    url: "https://gerawrdog.com/",
    description: "Gerardo personal portfolio website",
  },
  {
    name: "CarPlazza",
    url: "https://carplazza.com/",
    description: "Car marketplace and dealership",
  },
  {
    name: "Alexandra Prod",
    url: "https://www.alexandraprod.com/",
    description: "Natural wooden DIY products store",
  },
  {
    name: "Material Ripple Effects",
    url: "https://github.com/sajadevo/material-ripple-effects",
    description: "Material design ripple effect for your website",
  },
  {
    name: "Material Dashboard",
    url: "https://www.creative-tim.com/product/material-dashboard-pro-react",
    description: "Dashboard template based on MUI and React",
  },
  {
    name: "Soft UI Dashboard",
    url: "https://www.creative-tim.com/product/soft-ui-dashboard-pro-react",
    description: "Dashboard template based on MUI and React",
  },
  {
    name: "Argon Dashboard",
    url: "https://www.creative-tim.com/product/argon-dashboard-pro-material-ui",
    description: "Dashboard template based on MUI and React",
  },
  {
    name: "Material Kit",
    url: "https://www.creative-tim.com/product/material-kit-pro-react",
    description: "UI kit template based on MUI and React",
  },
];

export const metadata = generateMetadata({
  title: "Sajad ⋅ My Projects",
  description: "Explore unique websites, apps, and libraries I've developed.",
  keywords: [
    "Sajad",
    "Developer",
    "Designer",
    "Projects",
    "Portfolio",
    "Websites",
    "Apps",
    "Libraries",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "MUI",
    "Blockchain",
    "NFT",
    "Web3",
  ],
});

export default function About() {
  return (
    <div className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-36">
        <h1 className="text-2xl leading-tight font-semibold text-black sm:text-3xl md:text-4xl">
          What I&apos;ve done so far
        </h1>
        <p className="text-foreground mt-4 text-base text-balance sm:text-lg md:leading-relaxed">
          I&apos;m passionate about creating and sharing my journey through
          building in public. Here, you can explore unique websites, apps, and
          libraries I&apos;ve developed. Some of these projects are thriving,
          while others have completed their lifecycle or pivoted into new ideas.
        </p>
        <h2 className="mt-12 mb-6 font-sans text-xl font-semibold text-black sm:text-2xl">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map(({ name, url, description }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              className="border-secondary hover:bg-secondary/25 relative rounded-2xl border px-6 py-5 transition-all duration-200"
            >
              <h2 className="mb-2 font-sans text-lg font-medium text-black">
                {name}
              </h2>
              <p className="text-foreground text-base text-balance">
                {description}
              </p>
            </Link>
          ))}
        </div>
        <h2 className="mt-16 mb-6 font-sans text-xl font-semibold text-black sm:text-2xl">
          All Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, url, description }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              className="border-secondary hover:bg-secondary/25 relative rounded-2xl border px-6 py-5 transition-all duration-200"
            >
              <h2 className="mb-2 font-sans text-lg font-medium text-black">
                {name}
              </h2>
              <p className="text-foreground text-base text-balance">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
