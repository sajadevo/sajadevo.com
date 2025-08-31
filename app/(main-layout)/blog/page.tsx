import { BlogPostCard } from "@/components/blog-post-card";
import { BlogPostsSearch } from "@/components/blog-posts-search";

import { getBlogPosts } from "@/lib/actions";
import { generateMetadata } from "@/lib/utils";

import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Sajad ⋅ Blog Posts",
  description:
    "Learn about web development and web designing through my blog posts.",
});

export const dynamic = "auto";

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = await searchParams;
  const search = query.search as string;
  const posts = await getBlogPosts(query.search as string);

  return (
    <div className="space-y-16 pt-16 pb-20 sm:pt-40 sm:pb-24">
      <section className="container">
        <h1 className="text-primary text-base font-medium text-balance sm:text-lg">
          Learn with me
        </h1>
        <p className="text-foreground my-6 text-base text-balance sm:text-lg">
          Explore my blog posts where I share insights, tutorials, and
          experiences on web development and web designing. Discover tips, best
          practices, and the latest trends in tech to help you build better and
          smarter projects.
        </p>
      </section>
      <section>
        <div className="container">
          <BlogPostsSearch search={search} />
        </div>
        <div className="container-lg">
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
      </section>
    </div>
  );
}
