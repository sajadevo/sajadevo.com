// @components
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "DevResume",
    img: "/projects/devresume.png",
    url: "https://www.devresume.xyz",
    description: "Resume builder for developers",
  },
  {
    name: "Mintra App",
    img: "/projects/mintra.png",
    url: "https://app.mintra.ai/",
    description: "NFT marketplace and launchpad",
  },
  {
    name: "Material Tailwind",
    img: "/projects/material-tailwind.png",
    url: "https://www.material-tailwind.com/v3",
    description: "React & Tailwind CSS components library",
  },
  {
    name: "LookIntoHex",
    img: "/projects/lookintohex.png",
    url: "https://www.lookintohex.com/",
    description: "HEX analytics and visualization tool",
  },
  {
    name: "Reach App",
    img: "/projects/get-reach-app.png",
    url: "https://www.getreach.xyz/",
    description: "Automated social finance protocol",
  },
  {
    name: "NF-Tim",
    img: "/projects/nf-tim.png",
    url: "https://nf-tim.com/",
    description: "NFT utility project for developers",
  },
  {
    name: "Gerardo Portfolio",
    img: "/projects/gerardo.png",
    url: "https://gerawrdog.com/",
    description: "Gerardo personal portfolio website",
  },
  {
    name: "CarPlazza",
    img: "/projects/carplazza.png",
    url: "https://carplazza.com/",
    description: "Car marketplace and dealership",
  },
  {
    name: "Alexandra Prod",
    img: "/projects/alexandraprod.png",
    url: "https://www.alexandraprod.com/",
    description: "Natural wooden diy products store",
  },
  {
    name: "Material Dashboard",
    img: "/projects/material-dashboard.png",
    url: "https://www.creative-tim.com/product/material-dashboard-pro-react",
    description: "Dashboard template based on MUI and React",
  },
  {
    name: "Soft UI Dashboard",
    img: "/projects/soft-ui-dashboard.png",
    url: "https://www.creative-tim.com/product/soft-ui-dashboard-pro-react",
    description: "Dashboard template based on MUI and React",
  },
  {
    name: "Argon Dashboard",
    img: "/projects/argon-dashboard.png",
    url: "https://www.creative-tim.com/product/argon-dashboard-pro-material-ui",
    description: "Dashboard template based on MUI and React",
  },
];

export default function About() {
  return (
    <div className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
      <div className="grid grid-cols-1 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ name, img, url, description }, key) => (
          <Link
            key={key}
            href={url}
            target="_blank"
            className="group/project border-secondary relative size-full border-r border-b"
          >
            <Image
              src={img}
              alt={name}
              width={1024}
              height={1024}
              className="size-full object-cover object-center opacity-0 transition-opacity duration-200 group-hover/project:opacity-100"
            />
            <div className="absolute top-1/2 left-1/2 w-[calc(100%-2rem)] -translate-1/2 text-center transition-opacity duration-200 group-hover/project:opacity-0">
              <h2 className="mb-2 text-xl text-black">{name}</h2>
              <p className="text-foreground text-base text-balance">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
