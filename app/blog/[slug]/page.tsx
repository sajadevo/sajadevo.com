import React from "react";
import Link from "next/link";
import { Alert } from "@/components/alert";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/code-block";
import { BlogPostCard } from "@/components/blog-post-card";
import { BlogCopyLink } from "@/components/blog-copy-link";
import { BrowserWindow } from "@/components/browser-window";
import { MyTechStack2025 } from "@/components/blog/my-tech-stack-2025";
import { RiArrowLeftLine } from "@remixicon/react";
import fs from "node:fs";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import { generateMetadata as generateMetadataFn } from "@/lib/utils";
import type { Metadata } from "next";

const isProd = process.env.NODE_ENV === "production";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontMatter } = await readMdxFile(slug);

  const domain = new URL(
    isProd
      ? process.env.NEXT_PUBLIC_PROD_URL!
      : process.env.NEXT_PUBLIC_DEV_URL!,
  );

  const imageUrl = `${domain}/api/og/blog?title=${encodeURIComponent(frontMatter.title)}`;

  return generateMetadataFn({
    title: frontMatter.title,
    description: frontMatter.description,
    alternates: {
      canonical: `${domain}/${slug}`,
    },
    openGraph: {
      type: "article",
      title: frontMatter.title,
      description: frontMatter.description,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontMatter.title,
      description: frontMatter.description,
      images: imageUrl,
    },
  });
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontMatter, source } = await readMdxFile(slug);

  const posts = await getRelatedBlogPosts({
    slug,
    category: frontMatter.category,
  });

  const date = formatDate(frontMatter.date);
  const readTime = calculateReadTime(source);
  const postUrl = `https://sajadevo.com/blog/${slug}`;
  const postGithubUrl = `https://github.com/sajadevo/sajadevo.com/blob/main/content/blog/${slug}.mdx`;
  const shareOnXUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=I+just+read+%22${encodeURIComponent(frontMatter.title)}%22+by+%40sajadevo%0A%0A`;

  return (
    <div className="space-y-16 pt-16 pb-20 sm:pt-40 sm:pb-24">
      <section className="container-lg">
        <Link
          href="/blog"
          className="text-foreground hover:text-primary mb-12 flex items-center gap-1.5 transition-colors duration-300"
        >
          <RiArrowLeftLine className="size-4" />
          Blog
        </Link>
        <h1 className="text-primary mb-4 text-base font-medium text-balance sm:text-lg">
          {frontMatter.title}
        </h1>
        <p className="text-foreground text-base">
          {date}&nbsp;&nbsp;⋅&nbsp;&nbsp;{readTime} min read
        </p>
      </section>
      <section className="container-lg">
        <article className="prose prose-a:text-primary prose-a:text-underline prose-strong:text-primary prose-strong:font-medium prose-th:text-sm prose-li:text-foreground prose-em:text-foreground prose-tr:border-secondary prose-lead:text-foreground sm:prose-lg prose-p:text-foreground prose-headings:text-primary prose-headings:text-base sm:prose-headings:text-lg prose-headings:font-medium prose-code:text-primary prose-thead:text-primary prose-thead:text-sm prose-thead:font-medium prose-td:text-sm prose-td:text-foreground prose-td:px-4 prose-py-3 prose-th:py-3 prose-thead:border-secondary prose-td:content-center prose-th:px-4 prose-table:my-0 prose-th:content-center w-full max-w-full">
          <MDXRemote
            source={source}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      keepBackground: false,
                      theme: {
                        dark: "github-dark",
                        light: "github-light",
                      },
                    },
                  ],
                ],
              },
            }}
            components={{
              pre: (props) => (
                <CodeBlock>
                  <pre {...props} />
                </CodeBlock>
              ),
              a: (props) => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              ),
              Alert,
              BrowserWindow,
              MyTechStack2025,
            }}
          />
        </article>
      </section>
      <section className="container-lg">
        <div className="border-secondary bg-secondary/50 flex flex-wrap items-center justify-between gap-x-16 gap-y-4 rounded-2xl border p-6">
          <Link
            href={shareOnXUrl}
            target="blank"
            className="text-foreground hover:text-primary transition-colors"
          >
            Share on X
          </Link>
          <div className="flex items-center gap-2.5">
            <BlogCopyLink url={postUrl} />
            <span>⋅</span>
            <Link
              href={postGithubUrl}
              target="blank"
              className="text-foreground hover:text-primary transition-colors"
            >
              Edit on GitHub
            </Link>
          </div>
        </div>
      </section>
      <section>
        {posts.length > 0 && (
          <>
            <div className="container mb-6">
              <h2 className="text-foreground text-sm sm:text-base">
                🔗 Related posts
              </h2>
            </div>
            <div className="container-lg grid grid-cols-1 items-start gap-4 md:grid-cols-2">
              {posts.map(
                ({ title, description, date, category, slug }, key) => (
                  <BlogPostCard
                    key={key}
                    link={`/blog/${slug}`}
                    title={title}
                    description={description}
                    date={date}
                    category={category}
                    isLarge={key === 0}
                  />
                ),
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

function calculateReadTime(content: string) {
  const imageSeconds = 12;
  const wordsPerMinute = 225;
  const codeWordsPerMinute = 80;

  // Extract code blocks (```code```)
  const codeBlocks = content.match(/```[\s\S]*?```/g) || [];

  // Remove code blocks from the content to process normal text
  const textOnly = content.replace(/```[\s\S]*?```/g, "");

  // Extract image count (Markdown and JSX-based images)
  const imageCount =
    (
      content.match(
        /!$begin:math:display$.*?$end:math:display$$begin:math:text$.*?$end:math:text$/g,
      ) || []
    ).length + (content.match(/<img\s+[^>]*>/g) || []).length;

  // Count words in normal text
  const textWords = textOnly.trim().split(/\s+/).length;

  // Count words inside code blocks
  const codeWords = codeBlocks.reduce(
    (total, block) => total + block.trim().split(/\s+/).length,
    0,
  );

  // Calculate reading times separately
  const textReadingTime = textWords / wordsPerMinute;
  const codeReadingTime = codeWords / codeWordsPerMinute;
  const imageReadingTime = (imageCount * imageSeconds) / 60;

  // Calculate total read time and round up
  const totalTime = Math.ceil(
    textReadingTime + codeReadingTime + imageReadingTime,
  );

  return totalTime;
}

async function getRelatedBlogPosts({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const posts: BlogPost[] = [];
  const basePath = process.cwd();
  const postsDirectory = fs.readdirSync("content/blog");

  for (const post of postsDirectory) {
    const filePath = `${basePath}/content/blog/${post}`;
    const rawContent = await fs.promises.readFile(filePath, "utf-8");

    const { data } = matter(rawContent);
    const postSlug = post.replace(/\.mdx$/, "");

    const isSameSlug = postSlug === slug;
    const isSameCategory =
      data.category.toLowerCase() === category.toLowerCase();

    if (!isSameSlug && isSameCategory) {
      const slug = post.replace(/\.mdx$/, "");

      posts.push({ ...data, slug } as BlogPost);
    }
  }

  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.date.split("-").reverse().join("-")).getTime() -
      new Date(a.date.split("-").reverse().join("-")).getTime()
    );
  });

  return sortedPosts;
}

const readMdxFile = React.cache(async (slug: string) => {
  const basePath = process.cwd();
  const filePath = `${basePath}/content/blog/${slug}.mdx`;

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = await fs.promises.readFile(filePath, "utf-8");
  const { data: frontMatter, content } = matter(rawContent);

  return {
    frontMatter,
    source: content,
  };
});
