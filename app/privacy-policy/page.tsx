    "use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
  },
  {
    id: "information-collected",
    number: "02",
    title: "Information We Collect",
  },
  {
    id: "use-of-information",
    number: "03",
    title: "How Information Is Used",
  },
  {
    id: "contact-enquiries",
    number: "04",
    title: "Contact & Enquiries",
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies & Website Analytics",
  },
  {
    id: "third-party-services",
    number: "06",
    title: "Third-Party Services",
  },
  {
    id: "data-security",
    number: "07",
    title: "Data Security",
  },
  {
    id: "data-retention",
    number: "08",
    title: "Data Retention",
  },
  {
    id: "your-rights",
    number: "09",
    title: "Your Rights",
  },
  {
    id: "policy-updates",
    number: "10",
    title: "Updates to This Policy",
  },
  {
    id: "contact-us",
    number: "11",
    title: "Contact Us",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F3] text-[#1D2935]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0E2238] text-white">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-36 h-[430px] w-[430px] rounded-full border border-[#C9A45C]/10" />

          <div className="absolute -right-10 -top-14 h-[300px] w-[300px] rounded-full border border-[#C9A45C]/[0.06]" />

          <div className="absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-[#193750]/50 blur-3xl" />

          <div className="absolute left-[12%] top-[34%] h-1 w-1 rounded-full bg-[#C9A45C]" />

          <div className="absolute right-[24%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-white/20" />

          <span className="absolute bottom-[-20px] right-[7%] hidden select-none font-serif text-[150px] font-semibold tracking-[-0.05em] text-white/[0.025] lg:block">
            PRIVACY
          </span>
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-12 pt-10 sm:pb-12 sm:pt-12 lg:px-10 lg:pb-14 lg:pt-14">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex items-center gap-2 text-xs text-white/45"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#E4CC98]"
            >
              Home
            </Link>

            <ChevronRight
              size={13}
              className="text-[#C9A45C]"
            />

            <span className="text-white/80">
              Privacy Policy
            </span>
          </motion.div>

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            {/* Heading */}
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.05,
                }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#C9A45C]" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E4CC98]">
                  Website Policy
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.1,
                }}
                className="font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
              >
                Privacy
                <span className="block text-[#E4CC98]">
                  Policy
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.18,
                }}
                className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base"
              >
                This page explains how information may be collected,
                used and handled when you visit or interact with this
                website.
              </motion.p>
            </div>

            {/* Policy metadata */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="hidden border-l border-white/10 pl-7 lg:block"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-[#C9A45C]/35 bg-[#C9A45C]/10 text-[#E4CC98]">
                <LockKeyhole
                  size={19}
                  strokeWidth={1.5}
                />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E4CC98]">
                Privacy & Information
              </p>

              <p className="mt-2 max-w-[190px] text-xs leading-5 text-white/40">
                Please review this policy before submitting information
                through the website.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POLICY INTRO
      ========================================================= */}
      <section className="border-b border-[#E7E1D6] bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-12 lg:px-10 lg:py-14">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543]">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A98543]">
                  Privacy Notice
                </p>

                <p className="mt-1 text-sm text-[#647180]">
                  Please read this policy carefully.
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8993A0]">
                Last Updated
              </p>

              <p className="mt-1 text-sm font-medium text-[#0E2238]">
                Add verified date
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="relative py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-[270px_1fr] lg:gap-20">
            {/* ===================================================
                SIDEBAR
            =================================================== */}
            <aside className="lg:sticky lg:top-28">
              <div className="border border-[#E7E1D6] bg-white p-5">
                <div className="mb-4 flex items-center gap-2">
                  <FileText
                    size={15}
                    className="text-[#A98543]"
                    strokeWidth={1.5}
                  />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0E2238]">
                    On this page
                  </p>
                </div>

                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 px-2 py-2.5 text-xs text-[#647180] transition-colors hover:bg-[#FBF7ED] hover:text-[#A98543]"
                    >
                      <span className="w-5 shrink-0 font-mono text-[9px] text-[#A98543]/70">
                        {section.number}
                      </span>

                      <span className="leading-5">
                        {section.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact card */}
              <div className="mt-5 bg-[#0E2238] p-5 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E4CC98]">
                  Questions?
                </p>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  If you have a question about information submitted
                  through this website, use the appropriate contact
                  channel.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold !text-[#E4CC98]"
                >
                  Contact
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </aside>

            {/* ===================================================
                POLICY CONTENT
            =================================================== */}
            <article className="min-w-0">
              {/* -------------------------------------------------
                  01
              ------------------------------------------------- */}
              <PolicySection
                id="introduction"
                number="01"
                title="Introduction"
              >
                <p>
                  This Privacy Policy explains the general approach to
                  information that may be collected when you visit,
                  browse or interact with this website.
                </p>

                <p>
                  The website is intended to provide information about
                  Advocate Parthiv Vyas, areas of legal practice,
                  professional information, legal knowledge and
                  appropriate contact channels.
                </p>

                <p>
                  By using this website or submitting information
                  through an available contact form, you acknowledge
                  that you have read this Privacy Policy.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  02
              ------------------------------------------------- */}
              <PolicySection
                id="information-collected"
                number="02"
                title="Information We Collect"
              >
                <p>
                  Depending on how you use the website, information may
                  be provided voluntarily through a contact or enquiry
                  form.
                </p>

                <div className="my-6 border border-[#E7E1D6] bg-white">
                  <InfoRow
                    title="Contact information"
                    text="Such as your name, phone number or email address when voluntarily provided."
                  />

                  <InfoRow
                    title="Enquiry information"
                    text="Information you choose to provide when describing the general nature of your enquiry."
                  />

                  <InfoRow
                    title="Technical information"
                    text="Certain basic technical information may be collected automatically through hosting, analytics or security systems."
                  />
                </div>

                <p>
                  You should not submit unnecessary confidential,
                  sensitive or highly personal information through an
                  initial website enquiry.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  03
              ------------------------------------------------- */}
              <PolicySection
                id="use-of-information"
                number="03"
                title="How Information Is Used"
              >
                <p>
                  Information voluntarily submitted through the website
                  may be used for legitimate website and professional
                  enquiry purposes, including:
                </p>

                <BulletList
                  items={[
                    "Responding to an enquiry or communication request.",
                    "Understanding the general nature of a professional enquiry.",
                    "Communicating regarding an appointment or appropriate next step.",
                    "Maintaining website security and functionality.",
                    "Improving the website and its informational content where appropriate.",
                  ]}
                />

                <p>
                  Information should only be used for purposes that are
                  reasonably connected with the reason it was provided
                  or with legitimate website administration and
                  security requirements.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  04
              ------------------------------------------------- */}
              <PolicySection
                id="contact-enquiries"
                number="04"
                title="Contact & Enquiries"
              >
                <p>
                  If you use the website contact form, you may be asked
                  to provide basic information such as your name, phone
                  number, email address, enquiry category and a brief
                  description of your enquiry.
                </p>

                <div className="my-6 border-l-2 border-[#C9A45C] bg-[#FBF7ED] p-5">
                  <p className="text-sm leading-6 text-[#647180]">
                    <strong className="font-semibold text-[#0E2238]">
                      Important:
                    </strong>{" "}
                    Please do not include unnecessary confidential,
                    privileged, sensitive or detailed personal
                    information in an initial website enquiry.
                  </p>
                </div>

                <p>
                  Submission of an enquiry through the website does not
                  by itself create an advocate-client relationship and
                  should not be treated as confirmation of
                  representation or legal advice.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  05
              ------------------------------------------------- */}
              <PolicySection
                id="cookies"
                number="05"
                title="Cookies & Website Analytics"
              >
                <p>
                  This website may use cookies or similar technologies
                  where necessary for website functionality, security,
                  analytics or understanding general website usage.
                </p>

                <p>
                  Analytics technologies, where implemented, may collect
                  general information about website interactions, such
                  as pages visited, approximate usage patterns, device
                  information and technical data.
                </p>

                <p>
                  Any analytics or cookie implementation should be
                  configured and reviewed according to the actual
                  services used by the website.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  06
              ------------------------------------------------- */}
              <PolicySection
                id="third-party-services"
                number="06"
                title="Third-Party Services"
              >
                <p>
                  The website may use third-party services for functions
                  such as website hosting, analytics, maps, form
                  processing, security, communication or other
                  technical requirements.
                </p>

                <p>
                  Where third-party services process information, their
                  own privacy policies and terms may also apply.
                </p>

                <p>
                  The specific third-party services used on the live
                  website should be reviewed and listed accurately before
                  this policy is published as a final legal document.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  07
              ------------------------------------------------- */}
              <PolicySection
                id="data-security"
                number="07"
                title="Data Security"
              >
                <p>
                  Reasonable technical and organisational measures
                  should be maintained to help protect information
                  handled through the website against unauthorised
                  access, misuse, alteration or disclosure.
                </p>

                <p>
                  However, no method of transmission or electronic
                  storage can be guaranteed to be completely secure.
                  Visitors should therefore avoid submitting unnecessary
                  sensitive information through online forms.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  08
              ------------------------------------------------- */}
              <PolicySection
                id="data-retention"
                number="08"
                title="Data Retention"
              >
                <p>
                  Information may be retained only for as long as
                  reasonably necessary for the purpose for which it was
                  collected, legitimate administrative requirements,
                  security, record keeping or applicable legal
                  obligations.
                </p>

                <p>
                  Actual retention periods may depend on the type of
                  information, the reason it was collected and applicable
                  professional or legal requirements.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  09
              ------------------------------------------------- */}
              <PolicySection
                id="your-rights"
                number="09"
                title="Your Rights"
              >
                <p>
                  Depending on applicable law and the circumstances, you
                  may have rights relating to personal information
                  provided through the website.
                </p>

                <BulletList
                  items={[
                    "Request information about how your submitted information is handled.",
                    "Request correction of inaccurate information where applicable.",
                    "Raise a concern regarding the handling of information.",
                    "Request deletion where applicable and subject to legal or legitimate retention requirements.",
                  ]}
                />

                <p>
                  Requests should be directed through the appropriate
                  contact channel and may be subject to reasonable
                  verification.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  10
              ------------------------------------------------- */}
              <PolicySection
                id="policy-updates"
                number="10"
                title="Updates to This Policy"
              >
                <p>
                  This Privacy Policy may be updated from time to time
                  to reflect changes in the website, technology,
                  services, legal requirements or privacy practices.
                </p>

                <p>
                  When changes are made, the updated version should be
                  published on this page together with the relevant
                  revision or updated date.
                </p>
              </PolicySection>

              {/* -------------------------------------------------
                  11
              ------------------------------------------------- */}
              <PolicySection
                id="contact-us"
                number="11"
                title="Contact Us"
              >
                <p>
                  If you have questions regarding this Privacy Policy or
                  the handling of information submitted through this
                  website, you may use the appropriate contact channel.
                </p>

                <div className="mt-7 border border-[#E7E1D6] bg-white p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#FBF7ED] text-[#A98543]">
                      <Mail
                        size={18}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A98543]">
                        Privacy Enquiries
                      </p>

                      <h3 className="mt-2 font-serif text-2xl text-[#0E2238]">
                        Contact information
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#647180]">
                        Add the verified email address or other official
                        contact channel for privacy-related enquiries.
                      </p>

                      <Link
                        href="/contact"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold !text-[#0E2238] transition-colors hover:!text-[#A98543]"
                      >
                        Visit Contact Page
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </PolicySection>

              {/* Final notice */}
              <div className="mt-14 border-t border-[#E7E1D6] pt-7">
                <p className="text-xs leading-6 text-[#8993A0]">
                  <strong className="font-semibold text-[#647180]">
                    Final legal review:
                  </strong>{" "}
                  This website policy should be reviewed and approved
                  by the advocate and, where appropriate, a qualified
                  legal professional before publication. Actual
                  collection methods, analytics tools, third-party
                  services and applicable legal requirements should be
                  reflected accurately in the final version.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-[#E7E1D6] bg-white py-12">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A98543]">
                Need further information?
              </p>

              <p className="mt-2 font-serif text-2xl text-[#0E2238]">
                Visit the contact page.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-11 items-center justify-center gap-2 bg-[#0E2238] px-6 text-sm font-semibold !text-white transition-all hover:bg-[#081725]"
            >
              Contact
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   POLICY SECTION
============================================================= */

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-28 border-b border-[#E7E1D6] pb-12 pt-2 first:pt-0 sm:pb-14"
    >
      <div className="mb-6 flex items-start gap-4">
        <span className="mt-1 font-mono text-[10px] font-medium tracking-[0.08em] text-[#A98543]">
          {number}
        </span>

        <div>
          <div className="mb-3 h-px w-8 bg-[#C9A45C]" />

          <h2 className="font-serif text-3xl leading-tight tracking-[-0.015em] text-[#0E2238] sm:text-4xl">
            {title}
          </h2>
        </div>
      </div>

      <div className="ml-0 max-w-3xl space-y-5 text-sm leading-7 text-[#647180] sm:ml-9 sm:text-[15px]">
        {children}
      </div>
    </motion.section>
  );
}

/* =============================================================
   INFO ROW
============================================================= */

function InfoRow({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-[#E7E1D6] p-5 last:border-b-0 sm:flex sm:items-start sm:gap-8">
      <h3 className="min-w-[170px] text-sm font-semibold text-[#0E2238]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#647180] sm:mt-0">
        {text}
      </p>
    </div>
  );
}

/* =============================================================
   BULLET LIST
============================================================= */

function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3"
        >
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-[#C9A45C]" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* =============================================================
   ARROW ICON
============================================================= */

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}