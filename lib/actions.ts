"use server";

import fs from "node:fs";
import matter from "gray-matter";

export async function getBlogPosts(search?: string) {
  const posts: BlogPost[] = [];
  const basePath = process.cwd();
  const postsDirectory = fs.readdirSync("content/blog");

  for (const post of postsDirectory) {
    const filePath = `${basePath}/content/blog/${post}`;
    const rawContent = await fs.promises.readFile(filePath, "utf-8");

    const { data } = matter(rawContent);

    const title = data.title.toLowerCase();
    const slug = post.replace(/\.mdx$/, "");

    if (search) {
      const searchWords = search.toLowerCase().split(" ");

      if (searchWords.some((word) => title.includes(word))) {
        posts.push({ ...data, slug } as BlogPost);
      }
    } else {
      posts.push({ ...data, slug } as BlogPost);
    }
  }

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return sortedPosts;
}
