// @components
import { Footer } from "@/components";

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
        className={`${geistSans.variable} antialiased p-10 lg:p-20 bg-background relative overflow-x-hidden`}
      >
        <div className="min-h-screen relative max-w-5xl mx-auto border-x bg-white border-secondary">
          {/* top lines */}
          <div className="absolute z-0 -top-10 lg:-top-20 w-px -left-px bg-secondary h-10 lg:h-20" />
          <div className="absolute z-0 -top-10 lg:-top-20 w-px -right-px bg-secondary h-10 lg:h-20" />
          <div className="absolute z-0 top-0 h-px -left-20 bg-secondary w-[calc(100%+160px)] scale-x-200" />

          {/* bottom lines */}
          <div className="absolute z-0 -bottom-10 lg:-bottom-20 w-px -left-px bg-secondary h-10 lg:h-20" />
          <div className="absolute z-0 -bottom-10 lg:-bottom-20 w-px -right-px bg-secondary h-10 lg:h-20" />
          <div className="absolute z-0 bottom-0 h-px -left-20 bg-secondary w-[calc(100%+160px)] scale-x-200" />

          {/* top dots */}
          <div className="absolute z-10 top-[0.5px] -left-[0.5px] size-[9px] bg-white border border-secondary -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute z-10 top-[0.5px] -right-[0.5px] size-[9px] bg-white border border-secondary -translate-y-1/2 translate-x-1/2" />

          {/* bottom dots */}
          <div className="absolute z-10 bottom-[0.5px] -left-[0.5px] size-[9px] bg-white border border-secondary translate-y-1/2 -translate-x-1/2" />
          <div className="absolute z-10 bottom-[0.5px] -right-[0.5px] size-[9px] bg-white border border-secondary translate-y-1/2 translate-x-1/2" />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
