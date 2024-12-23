// @components
import { Footer, FrameLines } from "@/components";

// @utils
import { generateMetadata } from "@/lib/utils";

// @fonts
import localFont from "next/font/local";

// @styles
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased p-6 sm:p-10 lg:p-20 bg-background relative overflow-x-hidden`}
      >
        <div
          id="main-content"
          className="min-h-screen relative max-w-5xl mx-auto border-x bg-white border-secondary"
        >
          <FrameLines />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
