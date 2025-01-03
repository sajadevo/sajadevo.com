// @components
import { ProjectFrame, ScrollContainer } from "@/components";

const projects = [
  {
    title: "DevResume",
    description:
      "An open-source tool that generates beautiful resume based on your GitHub profile data. It's a great way to showcase your skills, projects, and contributions in a visually appealing way.",
    url: "https://www.devresume.xyz/",
    image: "/projects/devresume.png",
  },
  {
    title: "Mintra App",
    description:
      "Mintra is Pulsechain's premiere on-chain, decentralized, fee-sharing NFT ecosystem. Deploy, trade, and collect NFTs on Pulsechain",
    url: "https://app.mintra.ai/",
    image: "/projects/mintra.png",
  },
  {
    title: "Material Tailwind",
    description:
      "An open-source library that uses the power of Tailwind CSS and React to help you build unique web projects faster and easier.",
    url: "https://www.material-tailwind.com/v3",
    image: "/projects/material-tailwind.png",
  },
  {
    title: "LookIntoHex",
    description:
      "LookIntoHex is a Hex analytics visualization tool for checking data like ROI, Liquidity, Shares, Adoption, Inflation and Social.",
    url: "https://www.lookintohex.com/",
    image: "/projects/lookintohext.png",
  },
  {
    title: "Reach App",
    description:
      "Simplified, automated, permissionless protocol for quality engagement rewarding.",
    url: "https://www.getreach.xyz/",
    image: "/projects/reach.png",
  },
  {
    title: "Gerardo Portfolio",
    description: "Gerardo is a Web 3.0 Entrepreneur, Investor & Founder",
    url: "https://www.gerawrdog.com/",
    image: "/projects/gerardo.png",
  },
  {
    title: "NF-Tim",
    description:
      "All our NFTs have utilities that will give you access to premium products for web developers and UI/UX designers.",
    url: "https://nf-tim.com/",
    image: "/projects/nf-tim.png",
  },
  {
    title: "Soft UI Dashboard",
    description:
      "Innovative Admin Template for MUI and React. It features a huge number of components built to fit together and look amazing.",
    url: "https://demos.creative-tim.com/soft-ui-dashboard-pro-react/",
    image: "/projects/soft-ui-dashboard.png",
  },
  {
    title: "Argon Dashboard",
    description:
      "Innovative Admin Template for MUI and React. It features a huge number of components built to fit together and look amazing.",
    url: "https://demos.creative-tim.com/argon-dashboard-pro-material-ui/",
    image: "/projects/argon-dashboard.png",
  },
];

export function ProjectsCarousel() {
  return (
    <section className="w-full">
      <ScrollContainer className="flex gap-6 lg:gap-12 relative py-2 px-6 lg:px-12 overflow-x-auto no-scrollbar">
        {projects.map(({ id, title, description, image, url }: any) => (
          <ProjectFrame
            key={id}
            img={image}
            url={url}
            title={title}
            description={description}
          />
        ))}
      </ScrollContainer>
    </section>
  );
}
