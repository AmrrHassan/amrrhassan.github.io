import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Amr Hassan - Full-Stack Engineer",
  description: "Amr Hassan Hafez is a full-stack developer specializing in web technologies and modern solutions. Explore his portfolio to see innovative projects.",
  openGraph: {
    title: "Amr Hassan - Full-Stack Engineer",
    description: "Explore Amr Hassan's portfolio, showcasing full-stack development projects, web technologies, and innovative solutions.",
    url: "https://amrrhassan.github.io",
    type: "website",
    images: [
      {
        url: "https://amrrhassan.github.io/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Amr Hassan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amrrhassan",
    title: "Amr Hassan - Full-Stack Engineer",
    description: "Explore Amr Hassan's full-stack development portfolio and innovative solutions.",
    images: ["https://amrrhassan.github.io/android-chrome-512x512.png"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://amrrhassan.github.io" />

        {/* Favicon and Icons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />

        {/* ✅ FIX: Remove maximum-scale */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="Amr Hassan - Full-Stack Engineer" />
        <meta property="og:description" content="Explore Amr Hassan's portfolio, showcasing full-stack development projects and expertise." />
        <meta property="og:image" content="https://amrrhassan.github.io/android-chrome-512x512.png" />
        <meta property="og:url" content="https://amrrhassan.github.io" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amr Hassan - Full-Stack Engineer" />
        <meta name="twitter:description" content="Explore Amr Hassan's portfolio, showcasing full-stack development projects and expertise." />
        <meta name="twitter:image" content="https://amrrhassan.github.io/android-chrome-512x512.png" />

        {/* Google Analytics */}
        <Script
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-T435H88EVQ`}
        />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-T435H88EVQ');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}