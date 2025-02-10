// @types
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sajad",
    short_name: "Sajad",
    description:
      "I'm a passionate developer and designer interested in JavaScript, TypeScript, Rust, Product Design, Startups, Web 3.0 and OSS.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f8f8",
    theme_color: "#f8f8f8",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/x-icon",
      },
      {
        src: "/favicon.ico",
        sizes: "512x512",
        type: "image/x-icon",
      },
    ],
  };
}
