import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/app/components/QueryProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumen Books — Your Online Bookstore",
  description: "Discover a world of books at Lumen Books. Browse bestsellers, featured titles, fiction, science fiction, self-help, and more.",
  openGraph: {
    title: "Lumen Books — Your Online Bookstore",
    description: "Discover a world of books at Lumen Books.",
    siteName: "Lumen Books",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
