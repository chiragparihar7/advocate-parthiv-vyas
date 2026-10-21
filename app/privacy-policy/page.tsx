import type { Metadata } from "next";
import PrivacyPolicyPageClient from "./PrivacyPolicyPageClient";

const SITE_URL = "https://vpadvocates.in";

export const metadata: Metadata = {
  title: "Privacy Policy | V&P Advocates and Notary, Ahmedabad",
  description:
    "Read the privacy policy of V&P Advocates and Notary, Ahmedabad, how website enquiries, personal information, cookies and third-party services may be handled.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  keywords: [
    "V&P Advocates and Notary privacy policy",
    "Advocate Parthiv Vyas privacy policy",
    "legal website privacy policy Ahmedabad",
    "privacy policy Ahmedabad Gujarat",
  ],
  openGraph: {
    title: "Privacy Policy | V&P Advocates and Notary",
    description:
      "Learn how V&P Advocates and Notary may collect, use and handle information submitted through its website.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: "V&P Advocates and Notary",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | V&P Advocates and Notary",
    description:
      "Review the privacy policy for the V&P Advocates and Notary website in Ahmedabad, Gujarat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}