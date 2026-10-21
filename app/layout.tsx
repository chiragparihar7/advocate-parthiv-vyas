
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FloatingContactButtons from "@/components/common/FloatingContactButtons";

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

const SITE_URL = "https://vpadvocates.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Advocate Parthiv Vyas",
    template: "%s | Advocate Parthiv Vyas",
  },

  description:
    "Professional legal information, practice areas and contact information for Advocate Parthiv Vyas in Ahmedabad, Gujarat.",

  keywords: [
    "Advocate Parthiv Vyas",
    "V&P Advocates and Notary",
    "Advocate in Ahmedabad",
    "Lawyer in Ahmedabad",
    "Legal Services Ahmedabad",
    "Legal Practice Gujarat",
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
    title: "Advocate Parthiv Vyas | V&P Advocates and Notary",
    description:
      "Explore legal practice areas and contact information for V&P Advocates and Notary in Ahmedabad, Gujarat.",
    siteName: "V&P Advocates and Notary",
    locale: "en_IN",
    url: SITE_URL,
  },

  twitter: {
    card: "summary_large_image",
    title: "Advocate Parthiv Vyas | V&P Advocates and Notary",
    description:
      "Explore legal practice areas and contact information for V&P Advocates and Notary in Ahmedabad, Gujarat.",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
      <body className="flex min-h-full flex-col bg-[#FAF8F3] font-sans text-[#1D2935]">
        <Navbar />

        <main className="flex min-h-screen flex-1 flex-col">
          {children}
        </main>

        <Footer />

        {/* Floating phone and WhatsApp contact buttons */}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
