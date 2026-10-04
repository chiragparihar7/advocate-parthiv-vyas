"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";

const enquiryTypes = [
  "General Enquiry",
  "Civil Law",
  "Criminal Law",
  "Property Matter",
  "Legal Documentation",
  "Legal Procedure",
  "Other",
];

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  enquiryType: "",
  message: "",
};

type FormData = typeof initialFormData;

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  enquiryType?: string;
  message?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Remove field error as soon as user starts correcting it.
    if (errors[field as keyof FormErrors]) {
      setErrors((previous) => ({
        ...previous,
        [field]: undefined,
      }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = "Please enter your full name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!trimmedPhone) {
      newErrors.phone = "Please enter your phone number.";
    } else {
      const phoneDigits = trimmedPhone.replace(/\D/g, "");

      if (phoneDigits.length < 10) {
        newErrors.phone =
          "Please enter a valid phone number.";
      }
    }

    if (trimmedEmail) {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(trimmedEmail)) {
        newErrors.email =
          "Please enter a valid email address.";
      }
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType =
        "Please select an enquiry type.";
    }

    if (!trimmedMessage) {
      newErrors.message =
        "Please briefly describe your enquiry.";
    } else if (trimmedMessage.length < 20) {
      newErrors.message =
        "Please provide a little more information.";
    }

    if (trimmedMessage.length > 2000) {
      newErrors.message =
        "Please keep your enquiry below 2000 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitError("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      /*
       * =========================================================
       * API / EMAIL INTEGRATION
       * =========================================================
       *
       * Connect your real endpoint here.
       *
       * Example:
       *
       * const response = await fetch("/api/contact", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify(formData),
       * });
       *
       * if (!response.ok) {
       *   throw new Error("Failed to submit enquiry.");
       * }
       *
       * =========================================================
       */

      // Temporary development simulation.
      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      setIsSubmitted(true);

      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmitError(
        "We could not submit your enquiry right now. Please try again or use another contact method."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitError("");
    setIsSubmitted(false);
  };

  /*
   * =============================================================
   * SUCCESS STATE
   * =============================================================
   */

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-[#E7E1D6] bg-white shadow-[0_18px_55px_rgba(14,34,56,0.06)]"
      >
        <div className="px-6 py-10 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-xl text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.1,
              }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F1F7F2] text-[#467653]"
            >
              <CheckCircle2
                size={31}
                strokeWidth={1.5}
              />
            </motion.div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#A98543]">
              Enquiry Submitted
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.015em] text-[#0E2238] sm:text-4xl">
              Thank you for getting in touch.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#647180]">
              Your enquiry has been submitted successfully.
              Further communication can take place through the
              appropriate professional channel.
            </p>

            <div className="mx-auto mt-7 flex max-w-md gap-3 border border-[#E7E1D6] bg-[#FBF7ED] p-4 text-left">
              <ShieldCheck
                size={18}
                className="mt-0.5 shrink-0 text-[#A98543]"
                strokeWidth={1.5}
              />

              <p className="text-xs leading-5 text-[#647180]">
                Submission of an enquiry does not by itself
                create an advocate-client relationship.
              </p>
            </div>

            <button
              type="button"
              onClick={resetForm}
              className="mt-8 inline-flex h-11 items-center justify-center gap-2 border border-[#D9D2C5] px-6 text-sm font-semibold !text-[#0E2238] transition-all hover:border-[#C9A45C] hover:bg-[#FBF7ED]"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="border border-[#E7E1D6] bg-white shadow-[0_18px_55px_rgba(14,34,56,0.06)]"
    >
      {/* ========================================================
          FORM HEADER
      ======================================================== */}

      <div className="border-b border-[#E7E1D6] px-6 py-6 sm:px-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-7 bg-[#C9A45C]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A98543]">
                Send an Enquiry
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-tight tracking-[-0.015em] text-[#0E2238] sm:text-4xl">
              Tell us how we can help.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#8993A0]">
              Please provide the basic information relevant to
              your enquiry.
            </p>
          </div>

          <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-[#E7E1D6] bg-[#FBF7ED] text-[#A98543] sm:flex">
            <Send
              size={18}
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          FORM BODY
      ======================================================== */}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="px-6 py-7 sm:px-8 sm:py-8"
      >
        {/* ======================================================
            PERSONAL INFORMATION
        ====================================================== */}

        <div className="mb-6">
          <div className="mb-4 flex items-center gap-2">
            <User
              size={15}
              className="text-[#A98543]"
              strokeWidth={1.5}
            />

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0E2238]">
              Your Information
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#647180]"
              >
                Full Name{" "}
                <span className="text-[#A98543]">
                  *
                </span>
              </label>

              <div className="relative">
                <User
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A9AF]"
                  strokeWidth={1.5}
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    handleChange(
                      "name",
                      event.target.value
                    )
                  }
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name
                      ? "name-error"
                      : undefined
                  }
                  className={`h-12 w-full border bg-[#FAF8F3] pl-11 pr-4 text-sm text-[#1D2935] outline-none transition-all placeholder:text-[#A3A9AF] focus:bg-white focus:ring-2 ${
                    errors.name
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-[#DDD7CD] focus:border-[#C9A45C] focus:ring-[#C9A45C]/10"
                  }`}
                />
              </div>

              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    id="name-error"
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#647180]"
              >
                Phone{" "}
                <span className="text-[#A98543]">
                  *
                </span>
              </label>

              <div className="relative">
                <Phone
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A9AF]"
                  strokeWidth={1.5}
                />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) =>
                    handleChange(
                      "phone",
                      event.target.value
                    )
                  }
                  placeholder="Your phone number"
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone
                      ? "phone-error"
                      : undefined
                  }
                  className={`h-12 w-full border bg-[#FAF8F3] pl-11 pr-4 text-sm text-[#1D2935] outline-none transition-all placeholder:text-[#A3A9AF] focus:bg-white focus:ring-2 ${
                    errors.phone
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-[#DDD7CD] focus:border-[#C9A45C] focus:ring-[#C9A45C]/10"
                  }`}
                />
              </div>

              <AnimatePresence>
                {errors.phone && (
                  <motion.p
                    id="phone-error"
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#647180]"
              >
                Email
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A3A9AF]"
                  strokeWidth={1.5}
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    handleChange(
                      "email",
                      event.target.value
                    )
                  }
                  placeholder="Your email address"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email
                      ? "email-error"
                      : undefined
                  }
                  className={`h-12 w-full border bg-[#FAF8F3] pl-11 pr-4 text-sm text-[#1D2935] outline-none transition-all placeholder:text-[#A3A9AF] focus:bg-white focus:ring-2 ${
                    errors.email
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-[#DDD7CD] focus:border-[#C9A45C] focus:ring-[#C9A45C]/10"
                  }`}
                />
              </div>

              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    id="email-error"
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Enquiry Type */}
            <div>
              <label
                htmlFor="enquiryType"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#647180]"
              >
                Enquiry Type{" "}
                <span className="text-[#A98543]">
                  *
                </span>
              </label>

              <div className="relative">
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={(event) =>
                    handleChange(
                      "enquiryType",
                      event.target.value
                    )
                  }
                  aria-invalid={Boolean(
                    errors.enquiryType
                  )}
                  aria-describedby={
                    errors.enquiryType
                      ? "enquiry-type-error"
                      : undefined
                  }
                  className={`h-12 w-full appearance-none border bg-[#FAF8F3] px-4 pr-11 text-sm text-[#1D2935] outline-none transition-all focus:bg-white focus:ring-2 ${
                    errors.enquiryType
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-[#DDD7CD] focus:border-[#C9A45C] focus:ring-[#C9A45C]/10"
                  }`}
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  {enquiryTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                    >
                      {type}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8993A0]"
                  strokeWidth={1.5}
                />
              </div>

              <AnimatePresence>
                {errors.enquiryType && (
                  <motion.p
                    id="enquiry-type-error"
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.enquiryType}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ======================================================
            MESSAGE
        ====================================================== */}

        <div className="border-t border-[#E7E1D6] pt-6">
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#647180]"
            >
              Brief Enquiry{" "}
              <span className="text-[#A98543]">
                *
              </span>
            </label>

            <p className="mt-1.5 text-xs text-[#8993A0]">
              Briefly describe the nature of your enquiry.
            </p>
          </div>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(event) =>
              handleChange(
                "message",
                event.target.value
              )
            }
            rows={6}
            maxLength={2000}
            placeholder="Briefly describe the nature of your enquiry..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message
                ? "message-error"
                : "message-count"
            }
            className={`w-full resize-none border bg-[#FAF8F3] px-4 py-3.5 text-sm leading-6 text-[#1D2935] outline-none transition-all placeholder:text-[#A3A9AF] focus:bg-white focus:ring-2 ${
              errors.message
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-[#DDD7CD] focus:border-[#C9A45C] focus:ring-[#C9A45C]/10"
            }`}
          />

          <div className="mt-2 flex items-start justify-between gap-4">
            <AnimatePresence>
              {errors.message ? (
                <motion.p
                  id="message-error"
                  initial={{
                    opacity: 0,
                    y: -3,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -3,
                  }}
                  className="text-xs text-red-600"
                >
                  {errors.message}
                </motion.p>
              ) : (
                <span />
              )}
            </AnimatePresence>

            <span
              id="message-count"
              className="shrink-0 text-[11px] text-[#8993A0]"
            >
              {formData.message.length}/2000
            </span>
          </div>
        </div>

        {/* ======================================================
            CONFIDENTIALITY NOTICE
        ====================================================== */}

        <div className="mt-6 flex gap-3 border border-[#E7E1D6] bg-[#FBF7ED] p-4">
          <ShieldCheck
            size={18}
            className="mt-0.5 shrink-0 text-[#A98543]"
            strokeWidth={1.5}
          />

          <div>
            <p className="text-xs font-semibold text-[#0E2238]">
              Please protect your privacy
            </p>

            <p className="mt-1 text-xs leading-5 text-[#647180]">
              Do not include unnecessary confidential, sensitive or
              personally detailed information in this initial
              enquiry.
            </p>
          </div>
        </div>

        {/* ======================================================
            SUBMISSION ERROR
        ====================================================== */}

        <AnimatePresence>
          {submitError && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="mt-5 flex gap-3 border border-red-200 bg-red-50 p-4"
            >
              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0 text-red-600"
                strokeWidth={1.5}
              />

              <p className="text-xs leading-5 text-red-700">
                {submitError}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================================
            SUBMIT
        ====================================================== */}

        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex h-12 w-full items-center justify-center gap-2 bg-[#0E2238] px-7 text-sm font-semibold !text-white transition-all hover:bg-[#081725] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2
                  size={17}
                  className="animate-spin"
                />
                Submitting...
              </>
            ) : (
              <>
                Submit Enquiry

                <Send
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </>
            )}
          </button>
        </div>

        {/* ======================================================
            FOOTNOTE
        ====================================================== */}

        <p className="mt-4 max-w-2xl text-[11px] leading-5 text-[#8993A0]">
          By submitting this form, you are making an initial
          professional enquiry. Submission alone does not create
          an advocate-client relationship or constitute legal
          advice.
        </p>
      </form>
    </motion.div>
  );
}