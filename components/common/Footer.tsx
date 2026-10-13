import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image"; 


const practiceLinks = [
  { name: "All Practice Areas", href: "/practice-areas" },
  { name: "Civil Litigation", href: "/practice-areas" },
  { name: "Criminal Law", href: "/practice-areas" },
  { name: "Property & Revenue Matters", href: "/practice-areas" },
  { name: "Family & Matrimonial Matters", href: "/practice-areas" },
];

const resourceLinks = [
  { name: "About Advocate", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Legal Articles", href: "/legal-articles" },
  { name: "Frequently Asked Questions", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#081725] text-white">
      {/* Subtle decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-[#C9A45C]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#C9A45C]/10"
      />

      {/* Main footer */}
      <div className="relative mx-auto max-w-[1280px] px-6 pb-10 pt-16 sm:px-8 lg:px-10 lg:pb-12 lg:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="V&P Advocates and Notary — Home"
              className="group inline-flex flex-col items-start"
            >
             <Image
  src="/footerlogo1.png"
  alt="V&P Advocates and Notary"
  width={220}
  height={220}
  priority
            className="h-[150px] w-[180px] object-contain transition-opacity duration-300 group-hover:opacity-80 sm:h-[170px] sm:w-[200px] lg:h-[180px] lg:w-[180px]"
/>
            </Link>

            <div className="mt-2 h-px w-14 bg-[#C9A45C]" />

            <p className="mt-2 max-w-sm text-sm leading-7 text-[#AEB9C5]">
              Legal information and professional contact resources for
              individuals and businesses seeking guidance on legal matters in
              Ahmedabad, Gujarat.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#E4CC98] transition-colors hover:text-white"
            >
              Learn About the Practice
              <ArrowUpRight size={15} strokeWidth={1.7} />
            </Link>

            <div className="mt-8 inline-flex items-center gap-2 border border-white/10 px-3 py-2">
              <MapPin
                size={14}
                strokeWidth={1.6}
                className="shrink-0 text-[#C9A45C]"
              />
              <span className="text-xs tracking-wide text-[#C1CBD5]">
                Ahmedabad, Gujarat, India
              </span>
            </div>
          </div>

          {/* Practice areas */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E4CC98]">
              <Scale size={15} strokeWidth={1.5} />
              Practice Areas
            </h3>

            <ul className="mt-6 space-y-4">
              {practiceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-[#AEB9C5] transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#C9A45C] transition-all duration-300 group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E4CC98]">
              <BookOpen size={15} strokeWidth={1.5} />
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-[#AEB9C5] transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#C9A45C] transition-all duration-300 group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E4CC98]">
              Get in Touch
            </h3>

            <p className="mt-6 max-w-xs text-sm leading-6 text-[#AEB9C5]">
              For enquiries about legal services or appointments, please use the
              official contact page.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-3 bg-[#C9A45C] px-5 py-3 text-sm font-semibold !text-[#081725] transition-colors duration-300 hover:bg-[#E4CC98]"
            >
              <span className="!text-[#081725]">Contact the Office</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="!text-[#081725]"
              />
            </Link>

            <div className="mt-8 border-t border-white/10 pt-5">
              <h4 className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A45C]">
                <ShieldCheck size={14} strokeWidth={1.6} />
                Legal Information
              </h4>

              <ul className="mt-4 space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#AEB9C5] transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer panel */}
        <div className="mt-14 border border-white/10 bg-white/[0.025] p-5 sm:mt-16 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
            <Scale
              size={19}
              strokeWidth={1.5}
              className="shrink-0 text-[#C9A45C]"
            />
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E4CC98]">
                Important Legal Notice
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#8F9EAC]">
                The content on this website is provided for general
                informational purposes only and is not a substitute for
                independent legal advice. Visiting this website or contacting
                the office does not, by itself, establish an advocate-client
                relationship. Please do not send confidential or sensitive
                information until appropriate arrangements have been made. Legal
                outcomes depend on the facts and applicable law; no outcome is
                guaranteed.
              </p>
              <Link
                href="/disclaimer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#E4CC98] transition-colors hover:text-white"
              >
                Read the Full Disclaimer
                <ArrowUpRight size={13} strokeWidth={1.7} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-xs leading-5 text-[#7F8D9A]">
            © {new Date().getFullYear()} V&P Advocates and Notary. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-xs text-[#7F8D9A] transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-xs text-[#7F8D9A] transition-colors hover:text-white"
            >
              Disclaimer
            </Link>
            <span className="text-xs text-[#7F8D9A]">
              Ahmedabad, Gujarat, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
