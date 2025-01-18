// @components
import { Header, Footer, FrameLines } from "@/components";
import { OpenPanelComponent } from "@openpanel/nextjs";

// @utils
import { generateMetadata } from "@/lib/utils";

// @fonts
import localFont from "next/font/local";

// @styles
import "./globals.css";

const georgiaSerif = localFont({
  src: "./fonts/Georgia.ttf",
  variable: "--font-georgia-serif",
});

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
      <OpenPanelComponent
        clientId={process.env.OPENPANEL_CLIENT_ID!}
        trackScreenViews={true}
        trackAttributes={true}
        trackOutgoingLinks={true}
      />
      <body
        className={`${georgiaSerif.variable} ${geistSans.variable} bg-background relative overflow-x-hidden px-6 antialiased sm:px-8 md:px-16`}
      >
        <FrameLines />
        <Header />
        <main className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
