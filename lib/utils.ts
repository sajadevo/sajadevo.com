import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import type { Metadata } from "next";

const isProd = process.env.NODE_ENV === "production";

export function getDateDifference(
  startDate: Date | string,
  endDate: Date | Date | string,
) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const dayDiff = end.getDate() - start.getDate();

  // Round up if the day difference is >= 15
  if (dayDiff >= 15) {
    totalMonths += 1;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];

  if (years > 0) {
    parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  }

  if (months > 0) {
    parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  }

  return parts.length > 0 ? parts.join(" ") : "Less than 1 mo";
}

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
    "I'm a developer and designer interested in JavaScript, TypeScript, Product Design, Startups, Web3.0 and Open Source.";

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
