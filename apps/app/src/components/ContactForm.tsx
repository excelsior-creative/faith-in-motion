"use client";

import { Loader2, Send } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type FormState = "idle" | "submitting" | "success" | "error";

const interestedInOptions = [
  "Becoming a Foster Parent",
  "Becoming an Adoptive Parent",
  "Becoming a Faith Partner",
  "Volunteering",
  "Donating",
  "General Information",
  "Other",
];

const hearAboutUsOptions = [
  "Faith Community",
  "Word of Mouth",
  "Social Media",
  "Web Search",
  "Other",
];

const initialForm = {
  interestedIn: "",
  firstName: "",
  lastName: "",
  faithCommunityName: "",
  email: "",
  phone: "",
  address: "",
  message: "",
  hearAboutUs: "",
};

export const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setFormState("submitting");
      setErrorMessage("");

      try {
        let recaptchaToken = "";
        if (executeRecaptcha) {
          recaptchaToken = await executeRecaptcha("contact_form");
        }

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, recaptchaToken }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to send message");
        }

        setFormState("success");
      } catch (err) {
        setFormState("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Something went wrong"
        );
      }
    },
    [form, executeRecaptcha]
  );

  const inputClass =
    "w-full border border-[#18336B]/20 rounded-xl px-4 py-3 text-[#273C6B] placeholder:text-[#273C6B]/40 focus:border-[#1B6AE3] focus:outline-none focus:ring-2 focus:ring-[#1B6AE3]/20 transition-all bg-white text-sm";
  const labelClass = "block text-sm font-medium text-[#18336B] mb-1.5";
  const selectClass =
    "w-full border border-[#18336B]/20 rounded-xl px-4 py-3 text-[#273C6B] focus:border-[#1B6AE3] focus:outline-none focus:ring-2 focus:ring-[#1B6AE3]/20 transition-all bg-white text-sm appearance-none";

  if (formState === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1B6AE3] flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-[#18336B] mb-3">
          Message Sent!
        </h3>
        <p className="text-[#273C6B]/70 mb-8">
          We&apos;ll be in touch with you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormState("idle");
            setForm({ ...initialForm });
          }}
          className="inline-flex items-center gap-2 bg-[#1B6AE3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1F4083] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const isSubmitting = formState === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* I am interested in */}
      <div>
        <label htmlFor="interestedIn" className={labelClass}>
          I am interested in… <span className="text-[#F94F1E]">*</span>
        </label>
        <div className="relative">
          <select
            id="interestedIn"
            name="interestedIn"
            value={form.interestedIn}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={selectClass}
          >
            <option value="" disabled>
              Select an option
            </option>
            {interestedInOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#273C6B]/40">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* First + Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-[#F94F1E]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Jane"
            required
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-[#F94F1E]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Smith"
            required
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>
      </div>

      {/* Faith Community Name (optional) */}
      <div>
        <label htmlFor="faithCommunityName" className={labelClass}>
          Faith Community Name <span className="text-[#273C6B]/50 font-normal">(optional)</span>
        </label>
        <input
          id="faithCommunityName"
          name="faithCommunityName"
          type="text"
          value={form.faithCommunityName}
          onChange={handleChange}
          placeholder="Your church or faith community"
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-[#F94F1E]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          required
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number <span className="text-[#F94F1E]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(951) 555-0100"
          required
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      {/* Address (optional, single field) */}
      <div>
        <label htmlFor="address" className={labelClass}>
          Address <span className="text-[#273C6B]/50 font-normal">(optional)</span>
        </label>
        <textarea
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Street, city, state, ZIP"
          rows={3}
          disabled={isSubmitting}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Tell us about your interest */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your interest
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Share any questions or details about how you'd like to get involved…"
          rows={4}
          disabled={isSubmitting}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* How did you hear about us (optional) */}
      <div>
        <label htmlFor="hearAboutUs" className={labelClass}>
          How did you hear about us?{" "}
          <span className="text-[#273C6B]/50 font-normal">(optional)</span>
        </label>
        <div className="relative">
          <select
            id="hearAboutUs"
            name="hearAboutUs"
            value={form.hearAboutUs}
            onChange={handleChange}
            disabled={isSubmitting}
            className={selectClass}
          >
            <option value="">Prefer not to say</option>
            {hearAboutUsOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#273C6B]/40">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {formState === "error" && (
        <p className="text-[#F94F1E] text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#1B6AE3] text-white font-medium rounded-full hover:bg-[#1F4083] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit
          </>
        )}
      </button>
    </form>
  );
};
