"use server";

import { EmailTemplate } from "@/components/email-template";
import fs from "node:fs";
import { Resend } from "resend";
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

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.RESEND_TO_EMAIL!],
      subject: "New Inquiry from sajadevo.com",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return { error: error.message, sent: false };
    }

    return { error: null, sent: true };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
