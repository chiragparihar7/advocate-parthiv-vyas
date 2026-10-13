"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X, Scale, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Experience", href: "/experience" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/practice-areas") {
      return (
        pathname === "/practice-areas" ||
        pathname.startsWith("/practice-areas/")
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E1D6]/80 bg-[#FAF8F3]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between px-2 lg:px-6">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          aria-label="V&P Advocates and Notary - Home"
          className="group flex shrink-0 items-center"
        >
          <Image
            src="/header_logo.png"
            alt="V&P Advocates and Notary"
            width={180}
            height={180}
            priority
            className="h-[150px] w-[180px] object-contain transition-opacity duration-300 group-hover:opacity-80 sm:h-[170px] sm:w-[200px] lg:h-[180px] lg:w-[220px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <DesktopNavLink
              key={item.href}
              href={item.href}
              label={item.name}
              active={isActive(item.href)}
            />
          ))}
        </nav>

        {/* Desktop contact CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="h-8 w-px bg-[#E7E1D6]" />

     
<a
  href="tel:+919879811440"
  aria-label="Call V&P Advocates and Notary at +91 98798 11440"
  className="group inline-flex min-h-11 items-center gap-2.5 bg-[#0E2238] px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-[#17384F]"
>
  <Phone size={14} className="text-white" />
  <span className="text-white">Call +91 98798 11440</span>
  <ArrowUpRight
    size={14}
    className="text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  />
</a>

        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center border border-[#E7E1D6] text-[#0E2238] transition-colors hover:border-[#C9A45C] hover:text-[#A98543] lg:hidden"
        >
          {mobileOpen ? (
            <X size={23} strokeWidth={1.6} />
          ) : (
            <Menu size={23} strokeWidth={1.6} />
          )}
        </button>
      </div>

      {/* Mobile navigation — no dropdowns */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[#E7E1D6] bg-[#FAF8F3] transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[600px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-[1280px] px-6 pb-6 pt-2"
        >
          {navigation.map((item) => (
            <MobileNavLink
              key={item.href}
              href={item.href}
              label={item.name}
              active={isActive(item.href)}
              onClick={closeMobileMenu}
            />
          ))}

          {/* Mobile contact card */}
          <div className="mt-5 border border-[#E7E1D6] bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FBF7ED] text-[#A98543]">
                <Scale size={19} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0E2238]">
                  Need legal assistance?
                </p>
                <p className="mt-1 text-xs leading-5 text-[#8993A0]">
                  Contact the office for enquiries.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-4 flex min-h-11 items-center justify-center gap-2 bg-[#0E2238] px-4 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[#17384F]"
            >
              <span className="!text-white">Contact Office</span>
              <ArrowUpRight size={15} className="!text-white" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* Desktop navigation link */
function DesktopNavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group relative inline-flex items-center py-7 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
        active ? "text-[#A98543]" : "text-[#1D2935] hover:text-[#A98543]"
      }`}
    >
      {label}

      <span
        className={`absolute bottom-[18px] left-0 h-px bg-[#C9A45C] transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* Mobile navigation link */
function MobileNavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      tabIndex={undefined}
      className={`block border-b border-[#E7E1D6] py-4 text-sm font-medium transition-colors ${
        active ? "text-[#A98543]" : "text-[#1D2935] hover:text-[#A98543]"
      }`}
    >
      <span className="flex items-center justify-between">
        {label}
        {active && <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />}
      </span>
    </Link>
  );
}
