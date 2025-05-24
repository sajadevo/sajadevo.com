import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/badge";
import { getBlogPosts } from "@/lib/actions";
import { BlogPostCard } from "@/components/blog-post-card";
import { Button } from "@/components/button";

const social = [
  {
    variant: "x",
    label: "X / Twitter",
    href: "https://x.com/sajadevo_",
  },
  {
    variant: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/sajadevo",
  },
  {
    variant: "github",
    label: "GitHub",
    href: "https://github.com/sajadevo",
  },
  {
    variant: "dribbble",
    label: "Dribbble",
    href: "https://dribbble.com/sajadevo",
  },
  {
    variant: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/sajadevo/",
  },
];

const latestProjects = [
  {
    img: "/projects/mintra.png",
    href: "https://app.mintra.ai/",
    name: "Mintra - NFT Marketplace & Launchpad",
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
];

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-16 pt-16 pb-20 sm:pt-40 sm:pb-24">
      {/* hero */}
      <section className="container">
        <h1 className="text-primary text-base font-medium text-balance sm:text-lg">
          👋🏻, I&apos;m Sajad a developer and designer.
        </h1>
        <p className="text-foreground my-6 text-base text-balance sm:text-lg">
          Building user-first web apps for 7+ years across Web3, Fintech, SaaS,
          and eCommerce. I love working with JavaScript, TypeScript, Product
          Design, Startups, Web3.0 and Open Source.
        </p>
        <div className="mb-12 flex flex-wrap items-center gap-2">
          {social.map(({ variant, label, href }) => (
            <Badge key={variant} variant={variant as any} asChild>
              <Link
                href={href}
                target="_blank"
                aria-label={`Sajad ${label} Profile`}
              >
                {label}
              </Link>
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button asChild>
            <Link
              href="https://cal.com/sajadevo/30min?overlayCalendar=true"
              aria-label="Schedule a call with Sajad"
              target="_blank"
            >
              Schedule a call
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link
              href="mailto:hi@sajadevo.com"
              aria-label="Send an email to Sajad"
            >
              Send an email
            </Link>
          </Button>
        </div>
      </section>

      {/* latest works */}
      <section>
        <div className="container mb-6">
          <h2 className="text-foreground text-sm sm:text-base">
            🏗️ Latest works
          </h2>
        </div>
        <div className="space-y-12 sm:space-y-16">
          {latestProjects.map(({ img, name, desc, tags, href }, key) => (
            <div key={key}>
              <div className="container mb-6">
                <h2 className="text-primary text-base font-medium text-balance sm:text-lg">
                  {name}
                </h2>
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
              <div className="container-lg">
                <Link
                  href={href}
                  target="_blank"
                  className="border-secondary block overflow-hidden rounded-2xl border"
                >
                  <Image
                    src={img}
                    alt={name}
                    width={1024}
                    height={1024}
                    className="w-full transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* blog */}
      <section>
        <div className="container mb-6">
          <h2 className="text-foreground text-sm sm:text-base">
            ✍🏻 Recent writings
          </h2>
        </div>
        <div className="container-lg grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts
            .slice(0, 3)
            .map(({ title, description, date, category, slug }, key) => (
              <BlogPostCard
                key={key}
                link={`/blog/${slug}`}
                title={title}
                description={description}
                date={date}
                category={category}
                isLarge={key === 0 && posts.length > 2}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
