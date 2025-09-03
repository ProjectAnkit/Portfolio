import type { Metadata } from "next";
import { Silkscreen, Inter } from "next/font/google";
import "./globals.css";

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-silkscreen',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Ankit Thakur | Portfolio",
  description: "Full-Stack Developer & Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${silkscreen.className} ${inter.variable} font-sans bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
