import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amr Hassan",
  description:
    "Amr Hassan Hafez: Full-stack developer specializing in web technologies and innovative solutions. Explore my portfolio to discover my expertise in creating cutting-edge websites and applications.",
  openGraph: {
    title: "Amr Hassan - Full-Stack Engineer",
    description:
      "Explore Amr Hassan's portfolio, showcasing full-stack development projects, web technologies, and innovative solutions.",
    url: "https://amrrhassan.github.io",
    type: "website",
    images: [
      {
        url: "https://amrrhassan.github.io/images/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Amr Hassan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amrrhassan",
    title: "Amr Hassan - Full-Stack Engineer",
    description:
      "Explore Amr Hassan's full-stack development portfolio and innovative solutions.",
  },
  keywords: [
    "Full-Stack Engineer",
    "Web Developer",
    "Amr Hassan Portfolio",
    "React",
    "Node.js",
    "WordPress",
    "Amr Hafez",
    "Amr Hassan Hafez",
    "IZZY",
    "Tech Expertise",
    "Full-Stack Projects",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-T435H88EVQ`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());

              gtag('config', 'G-T435H88EVQ');
            `,
          }}
        />
        {/* SEO Metadata */}
        <meta
          name="description"
          content="Explore the portfolio of Amr Hassan, showcasing expertise in full-stack development, web technologies, and innovative solutions."
        />
        <meta name="author" content="Amr Hassan" />
        <meta property="og:title" content="Amr Hassan - Full-Stack Engineer" />
        <meta
          property="og:description"
          content="Explore Amr Hassan's portfolio, showcasing full-stack development projects and expertise."
        />
        <meta
          property="og:image"
          content="https://amrrhassan.github.io/images/android-chrome-512x512.png"
        />
        <meta property="og:url" content="https://amrrhassan.github.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amr Hassan - Full-Stack Engineer" />
        <meta
          name="twitter:description"
          content="Explore Amr Hassan's portfolio, showcasing full-stack development projects and expertise."
        />
        <meta
          name="twitter:image"
          content="https://amrrhassan.github.io/images/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
