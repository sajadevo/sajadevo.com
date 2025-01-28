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
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
