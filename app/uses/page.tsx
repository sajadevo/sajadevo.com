import Link from "next/link";
import Image from "next/image";
import { cn, generateMetadata } from "@/lib/utils";

export const metadata = generateMetadata({
  title: "Sajad ⋅ What I Use",
  description: "Behind the scenes, my workspace setup, tools, and gear.",
});

export default function Uses() {
  return (
    <div className="space-y-16 pt-16 pb-20 sm:pt-40 sm:pb-24">
      <section className="container">
        <h1 className="text-primary text-base font-medium text-balance sm:text-lg">
          What I use?
        </h1>
        <p className="text-foreground my-6 text-base text-balance sm:text-lg">
          Explore the hardware, software, and services that support my
          day-to-day work in design and development. From creative tools to
          coding environments, this is everything I rely on to stay productive,
          inspired, and efficient.
        </p>
      </section>
      <section>
        <div className="container mb-6">
          <h2 className="text-foreground text-sm sm:text-base">
            ⚙️ Gear & Setup
          </h2>
        </div>
        <div className="container-lg grid grid-cols-12 gap-4">
          <ToolCard
            link="https://www.amazon.com/Apple-MacBook-Laptop-11%E2%80%91core-14%E2%80%91core/dp/B0CM5KK44S?th=1"
            img="/uses/macbook.png"
            name={`MacBook Pro M3 (14", 2023)`}
            className="h-28 w-auto"
            wrapperClassName="col-span-full sm:col-span-6 min-h-72"
          />
          <ToolCard
            link="https://www.apple.com/shop/buy-mac/apple-studio-display/nano-texture-glass-tilt-and-height-adjustable-stand?fnode=929670d6c00e0a13e9475b47ec2a5fb0db42d15c263fe4ae0eb5ac625eba24c2a8a6609bb53dc7c9c6884eba946fc816d02224fa4549fcfe744c9e14971365d53413517487a4549918edc76b244cbabaf9e46ff6c5bf49b7ae538a6d598ecf28a8"
            img="/uses/studio-display.png"
            name="Studio Display (Nano-texture)"
            className="h-30 w-auto"
            wrapperClassName="col-span-full sm:col-span-6 min-h-72"
          />
          <ToolCard
            link="https://www.apple.com/shop/product/MXCL3LL/A/magic-keyboard-usb-c-us-english?fnode=53930f9e3197a981e289bed9b62ccd861c6aedcddd612f988088e0231df0d00395b42f6fbfee3b251b9b3c28de386c328ef7c271789bd0e474c9e14971365d53413517487c9e87fb94411e4614d334d93ff8d5c75a50a7a345177184be7bb124"
            img="/uses/keyboard.png"
            name="Magic Keyboard (White)"
            className="h-18 w-auto"
            wrapperClassName="col-span-full xs:col-span-6 md:col-span-4 min-h-56"
          />
          <ToolCard
            link="https://www.apple.com/shop/product/MXK53AM/A/magic-mouse-usb%E2%80%91c-white-multi-touch-surface?fnode=929670d6c00e0a13e9475b47ec2a5fb0db42d15c263fe4ae0eb5ac625eba24c2a8a6609bb53dc7c9c6884eba946fc816d02224fa4549fcfe744aededfd78e42fff6bf187a4549918edc76b244cbabaf9e46ff6c5bf49b7ae538a6d598ecf28a8"
            img="/uses/mouse.png"
            name="Magic Mouse (White)"
            className="h-20 w-auto"
            wrapperClassName="col-span-full xs:col-span-6 md:col-span-4 min-h-56"
          />
          <ToolCard
            link="https://www.apple.com/shop/buy-airpods/airpods-max/midnight?fnode=929670d6c00e0a13e9475b47ec2a5fb0db42d15c263fe4ae0eb5ac625eba24c2a8a6609bb53dc7c9c6884eba946fc816d02224fa4549fcfe744aededfd78e42fff6bf187a4549918edc76b244cbabaf9e46ff6c5bf49b7ae538a6d598ecf28a8"
            img="/uses/airpods.png"
            name="AirPods Max (Blue)"
            className="h-20 w-auto"
            wrapperClassName="col-span-full xs:col-span-6 md:col-span-4 min-h-56"
          />
        </div>
      </section>
      <section>
        <div className="container mb-6">
          <h2 className="text-foreground text-sm sm:text-base">
            👨🏻‍💻 Design & Development
          </h2>
        </div>
        <div className="container-lg xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-4">
          <ToolCard
            link="https://figma.com/"
            img="/uses/figma.png"
            name="Figma"
            className="size-20"
            wrapperClassName="min-h-44"
          />
          <ToolCard
            link="https://vscode.com/"
            img="/uses/vs-code.png"
            name="VS Code"
            className="size-20"
            wrapperClassName="min-h-44"
          />
          <ToolCard
            link="https://warp.dev/"
            img="/uses/warp.png"
            name="Warp"
            className="size-20"
            wrapperClassName="min-h-44"
          />
          <ToolCard
            link="https://arc.net/"
            img="/uses/arc.png"
            name="Arc Browser"
            className="size-20"
            wrapperClassName="min-h-44"
          />
        </div>
      </section>
      <section>
        <div className="container mb-6">
          <h2 className="text-foreground text-sm sm:text-base">
            🚀 Productivity
          </h2>
        </div>
        <div className="container-lg xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ToolCard
            link="https://www.raycast.com/"
            img="/uses/raycast.png"
            name="Raycast"
            className="size-20"
            wrapperClassName="min-h-52"
          />
          <ToolCard
            link="https://cal.com/"
            img="/uses/cal.png"
            name="Cal.com"
            className="size-20"
            wrapperClassName="min-h-52"
          />
          <ToolCard
            link="https://superlist.com/"
            img="/uses/superlist.png"
            name="Superlist"
            className="size-20"
            wrapperClassName="min-h-52"
          />
          <ToolCard
            link="https://www.notion.so/"
            img="/uses/notion.png"
            name="Notion"
            className="size-20"
            wrapperClassName="min-h-52"
          />
          <ToolCard
            link="https://www.notion.com/product/calendar"
            img="/uses/notion-calendar.png"
            name="Notion Calendar"
            className="size-20"
            wrapperClassName="min-h-52"
          />
          <ToolCard
            link="https://www.notion.com/product/mail"
            img="/uses/notion-mail.png"
            name="Notion Mail"
            className="size-20"
            wrapperClassName="min-h-52"
          />
        </div>
      </section>
      <section>
        <div className="container mb-6">
          <h2 className="text-foreground text-sm sm:text-base">
            🎲 Other apps
          </h2>
        </div>
        <div className="container-lg xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-4">
          <ToolCard
            link="https://www.screen.studio/"
            img="/uses/screen-studio.png"
            name="Screen Studio"
            className="size-20"
            wrapperClassName="min-h-44"
          />
          <ToolCard
            link="https://cleanshot.com/"
            img="/uses/clean-shot.png"
            name="CleanShot X"
            className="size-20"
            wrapperClassName="min-h-44"
          />
          <ToolCard
            link="https://macpaw.com/cleanmymac"
            img="/uses/clean-my-mac.png"
            name="CleanMyMac X"
            className="size-20"
            wrapperClassName="min-h-44"
          />
          <ToolCard
            link="https://macpaw.com/clearvpn"
            img="/uses/clear-vpn.png"
            name="ClearVPN"
            className="size-20"
            wrapperClassName="min-h-44"
          />
        </div>
      </section>
    </div>
  );
}

function ToolCard({
  link,
  img,
  name,
  className,
  wrapperClassName,
}: {
  link: string;
  img: string;
  name: string;
  className?: string;
  wrapperClassName?: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "border-secondary hover:bg-secondary/50 grid place-items-center overflow-hidden rounded-2xl border p-4 transition-all duration-300",
        wrapperClassName,
      )}
    >
      <div className="flex size-full flex-col justify-between">
        <Image
          src={img}
          alt={`Image of ${name}`}
          width={300}
          height={300}
          className={`m-auto ${className}`}
        />
        <div className="text-foreground mt-4 text-center text-wrap">{name}</div>
      </div>
    </Link>
  );
}
