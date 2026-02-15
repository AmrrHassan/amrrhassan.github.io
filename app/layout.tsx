import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script";
import { getPersonSchema, getWebSiteSchema, getOrganizationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/utils/seo/schemas";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL('https://amrrhassan.github.io'),
  title: {
    default: "Amr Hassan - Full-Stack Engineer | 35+ Projects Delivered",
    template: "%s | Amr Hassan Portfolio"
  },
  description: "Full-stack engineer specializing in React, Next.js, TypeScript, Node.js, and Flutter. Delivered 35+ projects across Egypt, UAE, Saudi Arabia, and Germany in e-commerce, healthcare, and enterprise solutions.",
  keywords: [
    "full-stack developer",
    "React developer",
    "Next.js expert",
    "TypeScript engineer",
    "Node.js developer",
    "Flutter developer",
    "web development",
    "mobile app development",
    "e-commerce solutions",
    "healthcare technology",
    "Egypt developer",
    "UAE developer",
    "Saudi Arabia developer",
    "remote developer",
    "Amr Hassan"
  ],
  authors: [{ name: "Amr Hassan Hafez", url: "https://amrrhassan.github.io" }],
  creator: "Amr Hassan Hafez",
  publisher: "Amr Hassan Hafez",
  openGraph: {
    title: "Amr Hassan - Full-Stack Engineer | 35+ Projects Portfolio",
    description: "Explore my portfolio showcasing 35+ full-stack projects: e-commerce platforms, healthcare apps, fitness solutions, and enterprise systems built with React, Next.js, Flutter, and modern technologies.",
    url: "https://amrrhassan.github.io",
    siteName: "Amr Hassan Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://amrrhassan.github.io/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Amr Hassan - Full-Stack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amrrhassan",
    creator: "@amrrhassan",
    title: "Amr Hassan - Full-Stack Engineer | 35+ Projects",
    description: "Full-stack engineer with expertise in React, Next.js, Flutter. View my portfolio of 35+ projects across e-commerce, healthcare, and enterprise solutions.",
    images: ["https://amrrhassan.github.io/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://amrrhassan.github.io",
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

        {/* JSON-LD Structured Data for SEO & GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonSchema())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteSchema())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQPageSchema())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbSchema())
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="full-stack developer, React developer, Next.js expert, TypeScript developer, Node.js engineer, Flutter developer, web development Egypt, mobile app development, e-commerce solutions, healthcare technology, Amr Hassan, portfolio, software engineer" />
        <meta name="author" content="Amr Hassan Hafez" />
        <meta name="geo.region" content="EG-C" />
        <meta name="geo.placename" content="Cairo" />
        <meta name="geo.position" content="30.0444;31.2357" />
        <meta name="ICBM" content="30.0444, 31.2357" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}