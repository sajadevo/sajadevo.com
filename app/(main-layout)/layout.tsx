import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { generateMetadata } from "@/lib/utils";
import localFont from "next/font/local";
import "../globals.css";

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const dynamic = "force-static";
export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body
        className={`${geistMono.variable} ${geistSans.variable} bg-background relative overflow-x-hidden antialiased`}
      >
        <Providers>
          {/* <FrameLines /> */}
          <Header />
          <main className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
            {children}
          </main>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID!} />
    </html>
  );
}
