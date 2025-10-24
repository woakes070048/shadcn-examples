import type { Metadata } from "next";
import { Cal_Sans as FontHeading, Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";
import React from "react";
import GoogleAnalyticsInit from "@/lib/ga";
import { ThemeProvider } from "next-themes";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Shadcnexamples: Shadcn UI Components and Blocks",
  description:
    "Shadcn UI examples, components, and blocks. Built with Tailwind CSS, Shadcn/ui, Next.js, React, Vue.js. Typescript compatible."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
      </body>
    </html>
  );
}
