import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hendy Ogema — Cloud & DevOps Engineer",
  description:
    "Hendrica 'Hendy' Ogema — Cloud and DevOps engineer building CI/CD pipelines, cloud infrastructure, and full-stack products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jbmono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
