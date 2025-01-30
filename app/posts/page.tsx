// @components
import Link from "next/link";
import { Input } from "@/components/input";

// @icons
import { RiSearchLine } from "@remixicon/react";

// @utils
import { cn } from "@/lib/utils";
import { generateMetadata } from "@/lib/utils";

const posts = [
  {
    title: "Here's 2024's best resource on prompt engineering",
    description:
      "Explore the top prompt engineering resource of 2025, featuring a detailed taxonomy and links to further research.",
    date: "Jan 20 2025",
    category: "Web Development",
  },
  {
    title: "Here's 2024's best resource on prompt engineering",
    description:
      "Explore the top prompt engineering resource of 2025, featuring a detailed taxonomy and links to further research.",
    date: "Jan 20 2025",
    category: "Web Development",
  },
  {
    title: "Here's 2024's best resource on prompt engineering",
    description:
      "Explore the top prompt engineering resource of 2025, featuring a detailed taxonomy and links to further research.",
    date: "Jan 20 2025",
    category: "Web Development",
  },
  {
    title: "Here's 2024's best resource on prompt engineering",
    description:
      "Explore the top prompt engineering resource of 2025, featuring a detailed taxonomy and links to further research.",
    date: "Jan 20 2025",
    category: "Web Development",
  },
  {
    title: "Here's 2024's best resource on prompt engineering",
    description:
      "Explore the top prompt engineering resource of 2025, featuring a detailed taxonomy and links to further research.",
    date: "Jan 20 2025",
    category: "Web Development",
  },
  {
    title: "Here's 2024's best resource on prompt engineering",
    description:
      "Explore the top prompt engineering resource of 2025, featuring a detailed taxonomy and links to further research.",
    date: "Jan 20 2025",
    category: "Web Development",
  },
  {
    title: "Here's 2024's best resource on prompt engineering",
    description:
      "Explore the top prompt engineering resource of 2025, featuring a detailed taxonomy and links to further research.",
    date: "Jan 20 2025",
    category: "Web Development",
  },
  {
    title: "Here's 2024's best resource on prompt engineering",
    description:
      "Explore the top prompt engineering resource of 2025, featuring a detailed taxonomy and links to further research.",
    date: "Jan 20 2025",
    category: "Web Development",
  },
];

export const metadata = generateMetadata({
  title: "Sajad ⋅ Blog Posts",
  description:
    "Learn about web development and web designing through my blog posts.",
  keywords: [
    "Sajd Blog",
    "Web Development",
    "Web Designing",
    "Software Development",
    "Career",
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

export default function Posts() {
  return (
    <div className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-36">
        <h1 className="text-2xl leading-tight font-semibold text-black sm:text-3xl md:text-4xl">
          Learn with me
        </h1>
        <p className="text-foreground mt-4 text-base text-balance sm:text-lg md:leading-relaxed">
          Explore my blog posts where I share insights, tutorials, and
          experiences on web development and web designing. Discover tips, best
          practices, and the latest trends in tech to help you build better and
          smarter projects.
        </p>
        <div className="relative mt-12 mb-8 w-full">
          <Input
            className="peer rounded-full pl-10"
            placeholder="Search posts"
          />
          <RiSearchLine className="text-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2 transition-colors duration-200 peer-hover:text-black peer-focus:text-black" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts.map(({ title, description, date, category }, key) => (
            <Link
              key={key}
              href="/"
              target="_blank"
              className={cn(
                "border-secondary hover:bg-secondary/25 relative flex flex-col rounded-2xl border px-6 py-5 transition-all duration-200",
                {
                  "row-span-2": key === 0,
                },
              )}
            >
              <h2 className="mb-2 font-sans text-lg font-medium text-balance text-black">
                {title}
              </h2>
              <p className="text-foreground mb-6 text-base text-balance">
                {description}
              </p>
              <p className="text-foreground mt-auto text-sm">
                {date}&nbsp;&nbsp;⋅&nbsp;&nbsp;{category}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
