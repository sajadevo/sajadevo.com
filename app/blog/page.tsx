// @components
import { Typography } from "@/components/typography";
import { BlogPostCard } from "@/components/blog-post-card";
import { BlogPostsSearch } from "@/components/blog-posts-search";

// @utils
import { generateMetadata } from "@/lib/utils";

// @actions
import { getBlogPosts } from "@/lib/actions";

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

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await searchParams;
  const search = query.search as string;
  const posts = await getBlogPosts(query.search as string);

  return (
    <div className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
      <div className="group mx-auto max-w-4xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-36">
        <Typography variant="h1" asChild>
          <h1>Learn with me</h1>
        </Typography>
        <Typography className="mt-4 text-balance">
          Explore my blog posts where I share insights, tutorials, and
          experiences on web development and web designing. Discover tips, best
          practices, and the latest trends in tech to help you build better and
          smarter projects.
        </Typography>
        <BlogPostsSearch search={search} />
        <div className="grid grid-cols-1 gap-4 group-has-[[data-pending]]:animate-pulse md:grid-cols-2">
          {posts.length === 0 && query.search ? (
            <p className="text-foreground col-span-full py-12 text-center text-base text-balance sm:text-lg md:leading-relaxed">
              Oops! No posts found for your search.
            </p>
          ) : (
            posts.map(({ title, description, date, category, slug }, key) => (
              <BlogPostCard
                key={key}
                link={`/blog/${slug}`}
                title={title}
                description={description}
                date={date}
                category={category}
                isLarge={key === 0 && posts.length > 2}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
