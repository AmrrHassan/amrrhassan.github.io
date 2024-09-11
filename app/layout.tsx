import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
const inter = Inter({ subsets: ["latin"] });

  export const metadata: Metadata = {
    title: "Amr Hassan",
    description: "Full-Stack Engineer / Developer Portfolio",
    openGraph: {
      title: "Amr Hassan - Full-Stack Engineer",
      description: "Explore Amr Hassan's portfolio, showcasing full-stack development projects and expertise.",
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
    keywords: ["Full-Stack Engineer", "Web Developer", "Amr Hassan Portfolio", "React", "Node.js", "WordPress", "Amr Hafez", "Amr Hassan Hafez"],
    robots: "index, follow",
  };
  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
