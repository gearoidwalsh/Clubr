import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackgroundLayers } from "@/components/BackgroundLayers";
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clubr.vercel.app"),
  title: "Clubr — Berkeley Club Recruiting Directory",
  description:
    "Structured profiles on 48+ Berkeley student organizations. Built for first-gen and transfer students navigating club recruiting.",
  openGraph: {
    title: "Clubr — Berkeley Club Recruiting Directory",
    description: "Structured profiles on 48+ Berkeley student organizations.",
    url: "https://clubr.vercel.app",
    siteName: "Clubr",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Clubr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clubr — Berkeley Club Recruiting Directory",
    description: "Structured profiles on 48+ Berkeley student organizations.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      style={{ background: "#000000" }}
    >
      <body style={{ background: "#000000", minHeight: "100vh" }}>
        <BackgroundLayers />
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <CustomCursor />
          <ScrollProgress />
          <LenisProvider>
            <div style={{ position: "relative", zIndex: 10 }}>
              <Navbar />
              <div
                className="flex min-h-screen flex-col pt-16"
                style={{ position: "relative", zIndex: 10 }}
              >
                <PageTransition>{children}</PageTransition>
                <Footer />
              </div>
            </div>
          </LenisProvider>
          <Toaster position="bottom-right" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
