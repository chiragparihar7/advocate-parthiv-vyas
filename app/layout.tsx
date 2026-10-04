
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

/* =========================================================
   TYPOGRAPHY
   ========================================================= */

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* =========================================================
   SITE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: {
    default: "Advocate Parthiv Vyas",
    template: "%s | Advocate Parthiv Vyas",
  },

  description:
    "Professional legal information, practice areas and contact information for Advocate Parthiv Vyas.",

  keywords: [
    "Advocate Parthiv Vyas",
    "Advocate",
    "Lawyer",
    "Legal Services",
    "Legal Practice",
    "Ahmedabad Advocate",
  ],

  authors: [
    {
      name: "Advocate Parthiv Vyas",
    },
  ],

  creator: "Advocate Parthiv Vyas",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "Advocate Parthiv Vyas",
    description:
      "Professional legal information, practice areas and contact information for Advocate Parthiv Vyas.",
    siteName: "Advocate Parthiv Vyas",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Advocate Parthiv Vyas",
    description:
      "Professional legal information, practice areas and contact information for Advocate Parthiv Vyas.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* =========================================================
   ROOT LAYOUT
   ========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FAF8F3] font-sans text-[#1D2935]">
        <Navbar />

        <main className="flex min-h-screen flex-1 flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

