import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/badge";
import { generateMetadata } from "@/lib/utils";

const projects = [
  {
    img: "/projects/mintra.png",
    href: "https://app.mintra.ai/",
    name: "Mintra - NFT marketplace & Launchpad",
    desc: "Mintra is Pulsechain's premiere on-chain, decentralized, fee-sharing NFT marketplace, staking app and launchpad.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Animation", "Web3.0"],
  },
  {
    img: "/projects/lookintohex.png",
    href: "https://www.lookintohex.com/",
    name: "LookIntoHex - Analytics & Visualization Tool",
    desc: "LookIntoHex is an analytics and visualization tool for on-chain crypto data.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Recharts", "D3", "Web3.0"],
  },
  {
    img: "/projects/material-tailwind.png",
    href: "https://www.material-tailwind.com/v3",
    name: "Material Tailwind - Components Library",
    desc: "An open-source components library for Tailwind CSS and React.js. With premium building blocks for rapid web development.",
    tags: ["TypeScript", "React.js", "Tailwind CSS", "Open Source"],
  },
  {
    img: "/projects/dev-resume.png",
    href: "https://www.devresume.xyz/",
    name: "DevResume - Portfolio Builder",
    desc: "An open-source tool that generates beautiful resume based on your GitHub profile data. It's a great way to showcase your skills, projects, and contributions in a visually appealing way.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "Open Source"],
  },
  {
    img: "/projects/reach.png",
    href: "https://www.getreach.xyz/",
    name: "Reach - Social Finance Protocol",
    desc: "Reach is a social finance protocol that allows users to create and manage their own social finance communities. It provides tools for community engagement and financial management.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Web3.0", "Stripe"],
  },
  {
    img: "/projects/nf-tim.png",
    href: "https://nf-tim.com/",
    name: "NF-Tim - NFT Marketplace",
    desc: "NFT utility project for Developers and Designers based on MultiversX.",
    tags: ["JavaScript", "Next.js", "Tailwind CSS", "Web3.0"],
  },
  {
    img: "/projects/car-plazza.png",
    href: "https://carplazza.com/",
    name: "Car Plazza - Car Marketplace",
    desc: "Car Plazza is a car marketplace that allows users to buy and sell cars online. It provides a platform for car enthusiasts to connect and trade vehicles.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "Stripe"],
  },
  {
    img: "/projects/argon-dashboard.png",
    href: "https://demos.creative-tim.com/argon-dashboard-pro-material-ui/#/dashboards/default",
    name: "Argon Dashboard - Admin Dashboard",
    desc: "Innovative Admin Template for MUI and React. It features a huge number of components built to fit together and look amazing.",
    tags: ["React.js", "MUI"],
  },
  {
    img: "/projects/soft-ui-dashboard.png",
    href: "https://demos.creative-tim.com/soft-ui-dashboard-pro-react",
    name: "Soft UI Dashboard - Admin Dashboard",
    desc: "Innovative Admin Template for MUI and React. It features a huge number of components built to fit together and look amazing.",
    tags: ["React.js", "MUI"],
  },
  {
    img: "/projects/material-dashboard.png",
    href: "https://demos.creative-tim.com/material-dashboard-pro-react",
    name: "Material Dashboard - Admin Dashboard",
    desc: "Innovative Admin Template for MUI and React. It features a huge number of components built to fit together and look amazing.",
    tags: ["React.js", "MUI"],
  },
  {
    href: "https://github.com/sajadevo/shadncn-tailwindcss-v4-starter",
    name: "Shadcn/ui + Tailwind CSS v4",
    desc: "A starter template for building a web application using Shadcn/ui and Tailwind CSS v4.",
    tags: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Open Source",
    ],
  },
  {
    href: "https://github.com/sajadevo/material-ripple-effects",
    name: "Material Ripple Effects",
    desc: "A library that makes you able to have material design ripple effect on any element you want.",
    tags: ["JavaScript", "Open Source"],
  },
  {
    href: "https://www.alexandraprod.com/",
    name: "Alexandra Prod - Wood Manufacturing",
    desc: "Alexandra Prod is a wood manufacturing company that specializes in creating high-quality wooden products.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "Stripe"],
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

export default function Projects() {
  return (
    <div className="space-y-16 pt-16 pb-20 sm:pt-40 sm:pb-24">
      <section className="container">
        <h1 className="text-primary text-base text-balance sm:text-lg">
          What I've done so far
        </h1>
        <p className="text-foreground my-6 text-base text-balance sm:text-lg">
          I'm passionate about creating and sharing my journey through building
          in public. Here, you can explore unique websites, apps, and libraries
          I've developed. Some of these projects are thriving, while others have
          completed their lifecycle or pivoted into new ideas.
        </p>
      </section>
      <section>
        <div className="space-y-12 sm:space-y-16">
          {projects.map(({ img, name, desc, tags, href }, key) => (
            <div key={key}>
              <div className="container mb-6">
                {img ? (
                  <h2 className="text-primary text-base text-balance sm:text-lg">
                    {name}
                  </h2>
                ) : (
                  <Link href={href} target="_blank">
                    <h2 className="text-primary text-base text-balance sm:text-lg">
                      {name}
                    </h2>
                  </Link>
                )}
                <p className="text-foreground my-4 text-base text-balance sm:text-lg">
                  {desc}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              {img && (
                <div className="container-lg">
                  <Link
                    href={href}
                    target="_blank"
                    className="border-secondary block overflow-hidden rounded-2xl border sm:rounded-3xl"
                  >
                    <Image
                      src={img}
                      alt={name}
                      width={1024}
                      height={1024}
                      className="w-full transition-transform duration-200 hover:scale-105"
                    />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
