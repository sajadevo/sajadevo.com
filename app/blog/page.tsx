// @components
import { Input } from "@/components/input";
import { Typography } from "@/components/typography";
import { BlogPostCard } from "@/components/blog-post-card";

// @icons
import { RiSearchLine } from "@remixicon/react";

// @utils
import fs from "node:fs";
import matter from "gray-matter";
import { generateMetadata } from "@/lib/utils";

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
    "Blockchain",
    "Web3",
  ],
});

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-36">
        <Typography variant="h1" asChild>
          <h1>Learn with me</h1>
        </Typography>
        <Typography className="mt-4 text-balance">
          Explore my blog posts where I share insights, tutorials, and
          experiences on web development and web designing. Discover tips, best
          practices, and the latest trends in tech to help you build better and
          smarter projects.
        </Typography>
        <div className="relative mt-12 mb-8 w-full">
          <Input
            className="peer rounded-full pl-10"
            placeholder="Search posts"
          />
          <RiSearchLine className="text-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2 transition-colors duration-200 peer-hover:text-black peer-focus:text-black" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {posts.map(({ title, description, date, category }, key) => {
            const slug = title
              .toLowerCase()
              .replaceAll("?", "")
              .replace(/[\s'",_.]/g, "-");

            return (
              <BlogPostCard
                key={key}
                link={`/blog/${slug}`}
                title={title}
                description={description}
                date={date}
                category={category}
                isLarge={key === 0 && posts.length > 2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

async function getBlogPosts() {
  const posts = [];
  const basePath = process.cwd();
  const postsDirectory = fs.readdirSync("content/blog");

  for (const post of postsDirectory) {
    const filePath = `${basePath}/content/blog/${post}`;
    const rawContent = await fs.promises.readFile(filePath, "utf-8");

    const { data } = matter(rawContent);

    posts.push(data);
  }

  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.date.split("-").reverse().join("-")).getTime() -
      new Date(a.date.split("-").reverse().join("-")).getTime()
    );
  });

  return sortedPosts;
}
