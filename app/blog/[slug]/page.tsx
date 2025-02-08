import React from "react";

// @components
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/code-block";
import { Typography } from "@/components/typography";
import { BlogPostCard } from "@/components/blog-post-card";
import { BlogCopyLink } from "@/components/blog-copy-link";
import { BrowserWindow } from "@/components/browser-window";

// @icons
import { RiArrowLeftLine } from "@remixicon/react";

// @utils
import fs from "node:fs";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import { generateMetadata as generateMetadataFn } from "@/lib/utils";

// @types
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
    keywords: frontMatter.keywords,
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
  const postGithubUrl = `https://github.com/sajadevo/sajadevo.com/contnet/blog/${slug}.mdx`;
  const shareOnXUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=I+just+read+%22${encodeURIComponent(frontMatter.title)}%22+by+%40sajadevo%0A%0A`;

  return (
    <div className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-36">
        <div className="mb-12">
          <Link
            href="/blog"
            className="text-foreground mb-8 flex items-center gap-1.5 transition-colors duration-200 hover:text-black"
          >
            <RiArrowLeftLine className="size-4" />
            Blog
          </Link>
          <Typography variant="h1" className="mb-4" asChild>
            <h1>{frontMatter.title}</h1>
          </Typography>
          <Typography className="sm:text-base">
            {date}&nbsp;&nbsp;⋅&nbsp;&nbsp;{readTime} min read
          </Typography>
        </div>
        <article className="prose prose-a:text-black prose-a:text-underline prose-strong:text-black prose-li:text-foreground prose-em:text-foreground prose-lead:text-foreground sm:prose-lg prose-p:text-foreground prose-headings:text-black prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl prose-h4:text-lg sm:prose-h4:text-xl prose-headings:font-semibold prose-strong:font-semibold prose-code:text-black mt-12 w-full max-w-full">
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
              BrowserWindow,
            }}
          />
        </article>
        <div className="border-secondary bg-secondary/25 mt-16 flex flex-wrap items-center justify-between gap-x-16 gap-y-4 rounded-2xl border px-7 py-6">
          <Link
            href={shareOnXUrl}
            target="blank"
            className="text-foreground transition-colors hover:text-black"
          >
            Share on X
          </Link>
          <div className="flex items-center gap-2.5">
            <BlogCopyLink url={postUrl} />
            <span>⋅</span>
            <Link
              href={postGithubUrl}
              target="blank"
              className="text-foreground transition-colors hover:text-black"
            >
              Edit on GitHub
            </Link>
          </div>
        </div>
        {posts.length > 0 && (
          <>
            <Typography
              variant="h2"
              className="mt-16 mb-6 max-w-md text-balance"
              asChild
            >
              <h2>Continue your journey with these related posts</h2>
            </Typography>
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
                    isLarge={key === 0}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
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
  const posts = [];
  const basePath = process.cwd();
  const postsDirectory = fs.readdirSync("content/blog");

  for (const post of postsDirectory) {
    const filePath = `${basePath}/content/blog/${post}`;
    const rawContent = await fs.promises.readFile(filePath, "utf-8");

    const { data } = matter(rawContent);

    const isSameSlug =
      data.title
        .toLowerCase()
        .replaceAll("?", "")
        .replace(/[\s'",_.]/g, "-") === slug;
    const isSameCategory =
      data.category.toLowerCase() === category.toLowerCase();

    if (!isSameSlug && isSameCategory) {
      posts.push(data);
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
