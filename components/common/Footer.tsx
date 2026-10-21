
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";

const practiceLinks = [
  { name: "All Practice Areas", href: "/practice-areas" },
  { name: "Civil Litigation", href: "/practice-areas" },
  { name: "Criminal Law", href: "/practice-areas" },
  { name: "Property & Revenue Matters", href: "/practice-areas" },
  { name: "Family & Matrimonial Matters", href: "/practice-areas" },
];

const resourceLinks = [
  { name: "About Advocate", href: "/about" },
  { name: "Frequently Asked Questions", href: "/faqs" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Contact", href: "/contact" },
];

const offices = [
  {
    name: "Hanspura Office",
    address:
      "Shop No. 8, Dev Ashish Divine, Opposite Gayatri Green, Near Sadguru Circle, Hanspura, Naroda, Ahmedabad, Gujarat, India.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Shop%20No.%208%2C%20Dev%20Ashish%20Divine%2C%20Opposite%20Gayatri%20Green%2C%20Near%20Sadguru%20Circle%2C%20Hanspura%2C%20Naroda%2C%20Ahmedabad%2C%20Gujarat%2C%20India",
  },
  {
    name: "Durganagar Office",
    address:
      "62, Durganagar Society, Near Naroda Police Station, Naroda, Ahmedabad, Gujarat - 382330.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=62%2C%20Durganagar%20Society%2C%20Near%20Naroda%20Police%20Station%2C%20Naroda%2C%20Ahmedabad%2C%20Gujarat%20382330",
  },
];

const phoneNumber = "+91 98798 11440";
const phoneLink = "tel:+919879811440";
const emailAddress = "vyas.parthiv8049@yahoo.com";
const emailLink = "mailto:vyas.parthiv8049@yahoo.com";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#081725] text-white">
      {/* Decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-[#C9A45C]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#C9A45C]/10"
      />

      {/* Main footer */}
      <div className="relative mx-auto max-w-[1280px] px-6 pb-10 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pb-12 lg:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.8fr_1.35fr] lg:gap-8">
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
                className="h-[140px] w-[170px] object-contain transition-opacity duration-300 group-hover:opacity-80 sm:h-[155px] sm:w-[190px] lg:h-[165px] lg:w-[180px]"
              />
            </Link>

            <div className="mt-3 h-px w-14 bg-[#C9A45C]" />

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#AEB9C5]">
              V&amp;P Advocates and Notary provides professional legal services
              and assistance for individuals and businesses in Ahmedabad,
              Gujarat.
            </p>

            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#E4CC98] transition-colors hover:text-white"
            >
              Learn About the Practice
              <ArrowUpRight size={15} strokeWidth={1.7} />
            </Link>

            <div className="mt-7 inline-flex items-center gap-2 border border-white/10 px-3 py-2">
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
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E4CC98]">
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
                    <span className="h-px w-0 shrink-0 bg-[#C9A45C] transition-all duration-300 group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E4CC98]">
              <BookOpen size={15} strokeWidth={1.5} />
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-[#AEB9C5] transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 shrink-0 bg-[#C9A45C] transition-all duration-300 group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E4CC98]">
              Get in Touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-[#AEB9C5]">
              For enquiries about legal services and appointments, please
              contact the office.
            </p>

            {/* Phone */}
            <a
              href={phoneLink}
              className="group mt-5 flex items-start gap-3 text-sm text-[#C1CBD5] transition-colors hover:text-white"
            >
              <Phone
                size={16}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-[#C9A45C]"
              />
              <span>{phoneNumber}</span>
            </a>

            {/* Email */}
            <a
              href={emailLink}
              className="group mt-3 flex items-start gap-3 break-all text-sm text-[#C1CBD5] transition-colors hover:text-white"
            >
              <Mail
                size={16}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-[#C9A45C]"
              />
              <span>{emailAddress}</span>
            </a>

            {/* Office addresses */}
            <div className="mt-7 space-y-5 border-t border-white/10 pt-5">
              {offices.map((office) => (
                <div key={office.name}>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#E4CC98]">
                    <MapPin
                      size={14}
                      strokeWidth={1.6}
                      className="shrink-0"
                    />
                    {office.name}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[#AEB9C5]">
                    {office.address}
                  </p>

                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get directions to ${office.name}`}
                    className="group mt-2 inline-flex items-center gap-2 text-xs font-medium text-[#E4CC98] transition-colors duration-300 hover:text-white"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-3 bg-[#C9A45C] px-5 py-3 text-sm font-semibold !text-[#081725] transition-colors duration-300 hover:!bg-[#E4CC98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4CC98] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081725]"
            >
              <span className="!text-[#081725]">Contact the Office</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="!text-[#081725]"
              />
            </Link>

            <p className="mt-3 flex items-center gap-2 text-xs text-[#7F8D9A]">
              <Clock3 size={13} className="shrink-0 text-[#C9A45C]" />
              Please confirm appointment availability before visiting.
            </p>
          </div>
        </div>

        {/* Disclaimer panel */}
        <div className="mt-12 border border-white/10 bg-white/[0.025] p-5 sm:mt-14 sm:p-6">
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
                information until appropriate arrangements have been made.
                Legal outcomes depend on the facts and applicable law; no
                outcome is guaranteed.
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
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-xs leading-5 text-[#7F8D9A]">
            © {new Date().getFullYear()} V&amp;P Advocates and Notary. All
            rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
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
