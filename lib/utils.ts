// @utils
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// @types
import type { Metadata } from "next";

const isProd = process.env.NODE_ENV === "production";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateMetadata(args?: Metadata): Metadata {
  const title = args?.title || "Sajad ⋅ Developer & Designer";
  const description =
    args?.description ||
    "I'm a passionate developer and designer interested in JavaScript, TypeScript, Rust, Product Design, Startups, Web 3.0 and OSS.";
  const keywords = args?.keywords || [
    "Sajad",
    "Developer",
    "Designer",
    "JavaScript",
    "TypeScript",
  ];

  const domain = new URL(
    isProd
      ? process.env.NEXT_PUBLIC_PROD_URL!
      : process.env.NEXT_PUBLIC_DEV_URL!,
  );
  const productDemoImg = "/avatar.png";

  return {
    // general
    metadataBase: domain,
    title,
    description,
    keywords,
    robots: "follow, index, max-image-preview:large",
    publisher: "Sajad Ahmad Nawabi",
    authors: [{ name: "Sajad Ahmad Nawabi", url: "https://x.com/sajadevo_" }],
    alternates: { canonical: domain, ...args?.alternates },

    // open-graph
    openGraph: {
      type: "website",
      url: domain,
      title,
      description,
      locale: "en_US",
      siteName: "Sajad ⋅ Developer & Designer",
      images: [
        {
          url: productDemoImg,
        },
      ],
      ...args?.openGraph,
    },

    // twitter
    twitter: {
      card: "summary",
      title,
      description,
      images: productDemoImg,
      ...args?.twitter,
    },

    // other
    other: {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-title": "Sajad",
      "apple-mobile-web-app-status-bar-style": "default",
    },
  };
}
