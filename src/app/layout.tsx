import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CanvasScene from "@/components/canvas/CanvasScene";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import { RootLayoutClient } from "./RootLayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum | Developer Portfolio",
  description:
    "A high-end, immersive, 3D developer portfolio built with Next.js, Three.js, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/30`}
      >
        <RootLayoutClient>
          <CanvasScene />
          <CustomCursor />
          <Navbar />
          <main className="relative z-10 w-full overflow-x-hidden">
            {children}
          </main>
        </RootLayoutClient>
      </body>
    </html>
  );
}
