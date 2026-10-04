"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";

const practiceAreas = [
  {
    name: "Civil Law",
    href: "/practice-areas/civil-law",
    description: "General civil legal matters",
  },
  {
    name: "Criminal Law",
    href: "/practice-areas/criminal-law",
    description: "Criminal matters and proceedings",
  },
  {
    name: "Property Matters",
    href: "/practice-areas/property-matters",
    description: "Property-related legal matters",
  },
  {
    name: "Legal Documentation",
    href: "/practice-areas/legal-documentation",
    description: "Legal documents and agreements",
  },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  const isPracticeActive =
    pathname === "/practice-areas" ||
    pathname.startsWith("/practice-areas/");

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setPracticeOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E1D6]/80 bg-[#FAF8F3]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
        {/* =====================================================
            LOGO / BRAND
        ===================================================== */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center"
        >
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C9A45C]">
              Advocate
            </span>

            <span className="mt-1 font-serif text-[24px] font-semibold tracking-[-0.02em] text-[#0E2238]">
              Parthiv Vyas
            </span>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Home */}
          <DesktopNavLink
            href="/"
            label="Home"
            active={pathname === "/"}
          />

          {/* About */}
          <DesktopNavLink
            href="/about"
            label="About"
            active={pathname === "/about"}
          />

          {/* =================================================
              PRACTICE AREAS DROPDOWN
          ================================================= */}
          <div className="group relative">
            <Link
              href="/practice-areas"
              className={`relative inline-flex items-center gap-1.5 py-7 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                isPracticeActive
                  ? "text-[#A98543]"
                  : "text-[#1D2935] hover:text-[#C9A45C]"
              }`}
            >
              Practice Areas

              <ChevronDown
                size={14}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:rotate-180"
              />

              <span
                className={`absolute bottom-[18px] left-0 h-px bg-[#C9A45C] transition-all duration-300 ${
                  isPracticeActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            {/* Dropdown */}
            <div className="pointer-events-none invisible absolute left-1/2 top-full w-[360px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="border border-[#E7E1D6] bg-[#FAF8F3] p-3 shadow-[0_18px_50px_rgba(14,34,56,0.12)]">
                {/* Dropdown header */}
                <div className="border-b border-[#E7E1D6] px-3 pb-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A98543]">
                    Legal Practice
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#8993A0]">
                    Explore areas of legal practice.
                  </p>
                </div>

                {/* All practice areas */}
                <Link
                  href="/practice-areas"
                  className="group/item mt-2 flex items-center justify-between border-b border-[#E7E1D6] px-3 py-3 transition-colors hover:bg-[#FBF7ED]"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#0E2238]">
                      All Practice Areas
                    </p>

                    <p className="mt-0.5 text-[11px] text-[#8993A0]">
                      View all areas
                    </p>
                  </div>

                  <ChevronDown
                    size={15}
                    className="-rotate-90 text-[#A98543] transition-transform group-hover/item:translate-x-0.5"
                  />
                </Link>

                {/* Practice area links */}
                <div className="mt-1">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="group/item flex items-center justify-between px-3 py-3 transition-colors hover:bg-[#FBF7ED]"
                    >
                      <div>
                        <p className="text-sm font-medium text-[#1D2935] transition-colors group-hover/item:text-[#A98543]">
                          {area.name}
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#8993A0]">
                          {area.description}
                        </p>
                      </div>

                      <ChevronDown
                        size={14}
                        className="-rotate-90 text-[#C9A45C] opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <DesktopNavLink
            href="/experience"
            label="Experience"
            active={pathname === "/experience"}
          />

          {/* FAQs */}
          <DesktopNavLink
            href="/faqs"
            label="FAQs"
            active={pathname === "/faqs"}
          />

          {/* Contact */}
          <DesktopNavLink
            href="/contact"
            label="Contact"
            active={pathname === "/contact"}
          />
        </nav>

        {/* =====================================================
            DESKTOP PHONE
        ===================================================== */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="h-7 w-px bg-[#E7E1D6]" />

          <a
            href="tel:+91XXXXXXXXXX"
            className="group flex items-center gap-3"
            aria-label="Call Advocate Parthiv Vyas"
          >
            <div className="flex h-9 w-9 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543] transition-colors group-hover:border-[#C9A45C]">
              <Phone
                size={14}
                strokeWidth={1.7}
              />
            </div>

            <div className="leading-none">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8993A0]">
                Call
              </p>

              <p className="mt-1 text-[12px] font-semibold tracking-wide text-[#0E2238] transition-colors group-hover:text-[#A98543]">
                +91 XXXXX XXXXX
              </p>
            </div>
          </a>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}
        <button
          type="button"
          aria-label={
            mobileOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen((value) => !value)
          }
          className="flex h-10 w-10 items-center justify-center text-[#0E2238] transition-colors hover:text-[#A98543] lg:hidden"
        >
          {mobileOpen ? (
            <X
              size={25}
              strokeWidth={1.6}
            />
          ) : (
            <Menu
              size={25}
              strokeWidth={1.6}
            />
          )}
        </button>
      </div>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================= */}
      <div
        className={`overflow-hidden border-t border-[#E7E1D6] bg-[#FAF8F3] transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[850px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-[1280px] px-6 pb-6 pt-3">
          {/* Home */}
          <MobileNavLink
            href="/"
            label="Home"
            active={pathname === "/"}
            onClick={closeMobileMenu}
          />

          {/* About */}
          <MobileNavLink
            href="/about"
            label="About"
            active={pathname === "/about"}
            onClick={closeMobileMenu}
          />

          {/* =================================================
              MOBILE PRACTICE AREAS
          ================================================= */}
          <div className="border-b border-[#E7E1D6]">
            <div className="flex items-center">
              <Link
                href="/practice-areas"
                onClick={closeMobileMenu}
                className={`flex-1 py-4 text-sm font-medium ${
                  isPracticeActive
                    ? "text-[#A98543]"
                    : "text-[#1D2935]"
                }`}
              >
                Practice Areas
              </Link>

              <button
                type="button"
                aria-label={
                  practiceOpen
                    ? "Collapse practice areas"
                    : "Expand practice areas"
                }
                aria-expanded={practiceOpen}
                onClick={() =>
                  setPracticeOpen(
                    (value) => !value
                  )
                }
                className="flex h-10 w-10 items-center justify-center text-[#647180]"
              >
                <ChevronDown
                  size={17}
                  strokeWidth={1.7}
                  className={`transition-transform duration-300 ${
                    practiceOpen
                      ? "rotate-180 text-[#A98543]"
                      : ""
                  }`}
                />
              </button>
            </div>

            {/* Mobile dropdown */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                practiceOpen
                  ? "max-h-[400px] pb-3 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-3 border-l border-[#D9D2C5] pl-4">
                <Link
                  href="/practice-areas"
                  onClick={closeMobileMenu}
                  className="block py-2.5 text-xs font-semibold text-[#A98543]"
                >
                  View All Practice Areas
                </Link>

                {practiceAreas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    onClick={closeMobileMenu}
                    className="block py-2.5 text-sm text-[#647180] transition-colors hover:text-[#A98543]"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <MobileNavLink
            href="/experience"
            label="Experience"
            active={pathname === "/experience"}
            onClick={closeMobileMenu}
          />

          {/* FAQs */}
          <MobileNavLink
            href="/faqs"
            label="FAQs"
            active={pathname === "/faqs"}
            onClick={closeMobileMenu}
          />

          {/* Contact */}
          <MobileNavLink
            href="/contact"
            label="Contact"
            active={pathname === "/contact"}
            onClick={closeMobileMenu}
          />

          {/* =================================================
              MOBILE PHONE CTA
          ================================================= */}
          <div className="mt-5 border border-[#E7E1D6] bg-white p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#FBF7ED] text-[#A98543]">
                  <Phone
                    size={16}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8993A0]">
                    Call Advocate
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#0E2238]">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <a
                href="tel:+91XXXXXXXXXX"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 items-center gap-2 bg-[#0E2238] px-4 text-xs font-semibold uppercase tracking-[0.1em] !text-white transition-colors hover:bg-[#081725]"
              >
                <Phone size={13} />
                Call
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* =============================================================
   DESKTOP NAV LINK
============================================================= */

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
      className={`group relative py-7 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
        active
          ? "text-[#A98543]"
          : "text-[#1D2935] hover:text-[#C9A45C]"
      }`}
    >
      {label}

      <span
        className={`absolute bottom-[18px] left-0 h-px bg-[#C9A45C] transition-all duration-300 ${
          active
            ? "w-full"
            : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* =============================================================
   MOBILE NAV LINK
============================================================= */

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
      className={`block border-b border-[#E7E1D6] py-4 text-sm font-medium transition-colors ${
        active
          ? "text-[#A98543]"
          : "text-[#1D2935] hover:text-[#C9A45C]"
      }`}
    >
      {label}
    </Link>
  );
}