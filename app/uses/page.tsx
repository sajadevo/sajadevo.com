// @components
import Link from "next/link";
import Image from "next/image";

// @utils
import { generateMetadata } from "@/lib/utils";

const elements = [
  {
    name: 'MacBook Pro (14", 2023)',
    img: "/uses/macbook.png",
    link: "https://www.amazon.com/Apple-MacBook-Laptop-11%E2%80%91core-14%E2%80%91core/dp/B0CM5KK44S?th=1",
  },
  {
    name: "Studio Display (Nano-texture)",
    img: "/uses/studio-display.png",
    link: "https://www.apple.com/shop/buy-mac/apple-studio-display/nano-texture-glass-tilt-and-height-adjustable-stand?fnode=929670d6c00e0a13e9475b47ec2a5fb0db42d15c263fe4ae0eb5ac625eba24c2a8a6609bb53dc7c9c6884eba946fc816d02224fa4549fcfe744aededfd78e42fff6bf187a4549918edc76b244cbabaf9e46ff6c5bf49b7ae538a6d598ecf28a8",
  },
  {
    name: "Magic Keyboard (White)",
    img: "/uses/keyboard.png",
    link: "https://www.apple.com/shop/product/MXCL3LL/A/magic-keyboard-usb-c-us-english?fnode=53930f9e3197a981e289bed9b62ccd861c6aedcddd612f988088e0231df0d00395b42f6fbfee3b251b9b3c28de386c328ef7c271789bd0e474c9e14971365d53413517487c9e87fb94411e4614d334d93ff8d5c75a50a7a345177184be7bb124",
  },
  {
    name: "Magic Mouse (White)",
    img: "/uses/mouse.png",
    link: "https://www.apple.com/shop/product/MXK53AM/A/magic-mouse-usb%E2%80%91c-white-multi-touch-surface?fnode=929670d6c00e0a13e9475b47ec2a5fb0db42d15c263fe4ae0eb5ac625eba24c2a8a6609bb53dc7c9c6884eba946fc816d02224fa4549fcfe744aededfd78e42fff6bf187a4549918edc76b244cbabaf9e46ff6c5bf49b7ae538a6d598ecf28a8",
  },
  {
    name: "AirPods Max (Blue)",
    img: "/uses/airpods.png",
    link: "https://www.apple.com/shop/buy-airpods/airpods-max/midnight?fnode=929670d6c00e0a13e9475b47ec2a5fb0db42d15c263fe4ae0eb5ac625eba24c2a8a6609bb53dc7c9c6884eba946fc816d02224fa4549fcfe744aededfd78e42fff6bf187a4549918edc76b244cbabaf9e46ff6c5bf49b7ae538a6d598ecf28a8",
  },
  {
    name: "Raycast",
    img: "/uses/raycast.png",
    link: "https://www.raycast.com/",
  },
  {
    name: "VS Code",
    img: "/uses/vs-code.png",
    link: "https://vscode.com/",
  },
  {
    name: "Arc Browser",
    img: "/uses/arc.png",
    link: "https://arc.net/",
  },
  {
    name: "Warp",
    img: "/uses/warp.png",
    link: "https://www.warp.dev/",
  },
  {
    name: "Figma",
    img: "/uses/figma.png",
    link: "https://www.figma.com/",
  },
  {
    name: "Notion",
    img: "/uses/notion.png",
    link: "https://www.notion.so/",
  },
  {
    name: "Notion Calendar",
    img: "/uses/notion-calendar.png",
    link: "https://www.notion.com/product/calendar",
  },
  {
    name: "Cal.com",
    img: "/uses/cal.png",
    link: "https://cal.com/",
  },
  {
    name: "Screen Studio",
    img: "/uses/screen-studio.png",
    link: "https://www.screen.studio/",
  },
  {
    name: "CleanShot X",
    img: "/uses/clean-shot.png",
    link: "https://cleanshot.com/",
  },
];

export const metadata = generateMetadata({
  title: "Sajad ⋅ What I Use",
  description: "Behind the scenes, my workspace setup, tools, and gear.",
  keywords: [
    "Sajad",
    "Developer",
    "Designer",
    "Workspace",
    "Setup",
    "Tools",
    "Gear",
    "MacBook Pro",
    "Studio Display",
    "Magic Keyboard",
    "Magic Mouse",
    "AirPods Max",
    "Raycast",
    "VS Code",
    "Arc Browser",
    "Warp",
    "Figma",
    "Notion",
    "Cal.com",
    "Screen Studio",
    "CleanShot X",
  ],
});

export default function Uses() {
  return (
    <div className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
      <div className="xs:grid-cols-2 grid grid-cols-1 pb-12 md:grid-cols-3 md:pb-16 lg:grid-cols-4">
        {elements.map(({ name, link, img }) => (
          <Link
            key={name}
            href={link}
            target="_blank"
            className="border-secondary hover:bg-secondary/25 grid min-h-64 place-items-center overflow-hidden border-r border-b p-4 transition-all duration-200"
          >
            <div>
              <Image
                src={img}
                alt={`Image of ${name}`}
                width={300}
                height={300}
                className="mx-auto h-24 w-auto"
              />
              <div className="text-foreground mt-8 text-center text-wrap">
                {name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
