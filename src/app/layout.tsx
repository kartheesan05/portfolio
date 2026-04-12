import type { Metadata } from "next";
import { Chivo_Mono, Syne } from "next/font/google";
import "./globals.css";

const fontSyne = Syne({
  subsets: ["latin"],
  variable: "--font-syne-stack",
});

const fontMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-mono-stack",
});

export const metadata: Metadata = {
  title: "Kartheesan — Portfolio",
  description:
    "CS Student & Full-Stack Engineer specializing in React, Golang, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSyne.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="relative w-full min-h-screen bg-bg text-fg selection:bg-accent selection:text-bg">
          <div className="bg-noise" aria-hidden />
          {children}
        </div>
      </body>
    </html>
  );
}
