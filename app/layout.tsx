import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amr Hassan",
  description: "Full-Stack Engineer / Developer Portfolio",
  openGraph: {
    title: "Amr Hassan - Full-Stack Engineer",
    description:
      "Explore Amr Hassan's portfolio, showcasing full-stack development projects and expertise.",
    url: "https://amrrhassan.github.io",
    type: "website",
    images: [
      {
        url: "https://amrrhassan.github.io/favicon-32x32.png",
        width: 1200,
        height: 630,
        alt: "Amr Hassan Portfolio",
      },
    ],
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
  ],
  robots: "index, follow",
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
