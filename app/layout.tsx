// @components
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import { FrameLines } from "@/components/frame-lines";
import { OpenPanelComponent } from "@openpanel/nextjs";

// @utils
import { generateMetadata } from "@/lib/utils";

// @fonts
import localFont from "next/font/local";

// @styles
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en" suppressHydrationWarning>
      <OpenPanelComponent
        clientId={process.env.OPENPANEL_CLIENT_ID!}
        trackScreenViews={true}
        trackAttributes={true}
        trackOutgoingLinks={true}
      />
      <body
        className={`${geistMono.variable} ${geistSans.variable} bg-background relative overflow-x-hidden px-6 antialiased sm:px-8 md:px-16`}
      >
        <Providers>
          <FrameLines />
          <Header />
          <main className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
