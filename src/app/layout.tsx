import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "My personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans bg-background text-foreground min-h-screen flex flex-col antialiased tracking-tight`}
      >
        <CustomCursor />
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
