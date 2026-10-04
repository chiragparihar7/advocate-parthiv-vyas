
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const practiceLinks = [
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Experience", href: "/experience" },
  { name: "FAQs", href: "/faqs" },
];

const companyLinks = [
  { name: "About Advocate", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  
];

export default function Footer() {
  return (
    <footer className="bg-[#081725] text-white">
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-10 sm:py-12 lg:py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          
          {/* =================================================
              BRAND
          ================================================= */}
          <div>
            <Link href="/" className="inline-flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A45C]">
                Advocate
              </span>

              <span className="mt-2 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#FAF8F3]">
                Parthiv Vyas
              </span>
            </Link>

            <div className="mt-6 h-px w-12 bg-[#C9A45C]" />

            <p className="mt-6 max-w-md text-sm leading-7 text-[#AEB9C5]">
              Professional legal information and practice resources for
              visitors seeking to understand relevant legal matters and
              appropriate professional contact options.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E4CC98] transition-colors hover:text-white"
            >
              About Advocate
              <ArrowUpRight size={14} strokeWidth={1.7} />
            </Link>
          </div>

          {/* =================================================
              PRACTICE / INFORMATION
          ================================================= */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A45C]">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {practiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#C1CBD5] transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              COMPANY / LEGAL
          ================================================= */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A45C]">
              Information
            </h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#C1CBD5] transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A45C]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#C9A45C]"
                />

                <p className="text-sm leading-6 text-[#C1CBD5]">
                  Ahmedabad, Gujarat
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={17}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#C9A45C]"
                />

                <Link
                  href="/contact"
                  className="text-sm text-[#C1CBD5] transition-colors hover:text-white"
                >
                  Contact Office
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={17}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#C9A45C]"
                />

                <Link
                  href="/contact"
                  className="text-sm text-[#C1CBD5] transition-colors hover:text-white"
                >
                  Send an Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p className="text-xs leading-5 text-[#7F8D9A]">
            © {new Date().getFullYear()} Advocate Parthiv Vyas. All rights
            reserved.
          </p>

          <p className="text-xs leading-5 text-[#7F8D9A]">
            Information on this website is provided for general informational
            purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

