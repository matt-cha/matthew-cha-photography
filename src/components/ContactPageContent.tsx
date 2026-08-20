"use client";

import {
  contactFormFields,
  INITIAL_CONTACT_FORM_DATA,
  type ContactFormData,
} from "@/data/contactFormFields";
import { contactHrefs, LINKS } from "@/data/links";
import { portfolioImages } from "@/data/portfolioImages";
import { resolveImageById } from "@/lib/images";
import {
  validateContactForm,
  type ContactFormErrors,
} from "@/lib/validateContactForm";
import Image from "next/image";
import { useState } from "react";
import { ContactFormField } from "./ContactFormField";
import PageHeading from "./PageHeading";

const contactImage = resolveImageById(portfolioImages, 3);

const ContactPageContent = () => {
  const [contactFormData, setContactFormData] = useState<ContactFormData>(
    INITIAL_CONTACT_FORM_DATA,
  );
  const [honeypot, setHoneypot] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSubmitError(null);
    setSuccess(false);

    const { name, value } = e.target;
    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess(false);
    setSubmitError(null);

    if (honeypot) {
      setSuccess(true);
      setContactFormData(INITIAL_CONTACT_FORM_DATA);
      return;
    }

    const validationErrors = validateContactForm(contactFormData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      const firstField = Object.keys(validationErrors)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_POST;
    if (!endpoint) {
      setSubmitError(
        "The form isn't available right now. Please call, text, or email me instead.",
      );
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(contactFormData),
      });

      if (!res.ok) {
        let userMessage = "Could not send your message. Please try again.";

        try {
          const body = await res.json();
          console.error("Formspree failed:", res.status, body);
          if (typeof body?.error === "string" && body.error.length < 120) {
            userMessage = body.error;
          }
        } catch {
          console.error("Formspree failed:", res.status, "no JSON body");
        }
        setSubmitError(userMessage);
        return;
      }

      setSuccess(true);
      setErrors({});
      setContactFormData(INITIAL_CONTACT_FORM_DATA);
    } catch (err) {
      console.error("Form submit failed:", err);
      setSubmitError(
        "Network error. Please check your connection and try again",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto mb-10 flex w-full flex-col space-y-6 bg-white px-4 py-10 text-center md:px-0">
      <PageHeading>Contact</PageHeading>
      <div className="font-cormorant flex w-full justify-center text-2xl">
        <div>
          <div>
            Please feel free to share a few details below about who you are and
            what you&apos;re looking for and I will be in touch!
          </div>
          <div className="mt-2">
            If you&apos;d rather reach me directly, you can call or text{" "}
            <a href={contactHrefs.phone} className="hover:text-neutral-600">
              {LINKS.phone}
            </a>{" "}
            or email{" "}
            <a href={contactHrefs.email} className="hover:text-neutral-600">
              {LINKS.email}
            </a>
            .
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full flex-col md:w-3/5">
          <div className="pb-4 md:pr-10">
            {contactImage && (
              <Image
                src={contactImage.src}
                width={contactImage.width}
                height={contactImage.height}
                alt={contactImage.alt}
                sizes="(min-width: 768px) 60vw, 100vw"
                className="mx-auto block h-auto rounded-sm object-contain"
              />
            )}
          </div>
        </div>
        <div className="flex w-full md:w-2/5">
          <form
            noValidate
            className="font-cormorant relative w-full"
            onSubmit={handleSubmit}
          >
            <div
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-4">
              {contactFormFields.map((field) => (
                <div
                  key={field.name}
                  className={
                    field.name === "message" ? "md:col-span-2" : undefined
                  }
                >
                  <ContactFormField
                    label={field.label}
                    name={field.name}
                    value={contactFormData[field.name]}
                    onChange={handleChange}
                    error={errors[field.name]}
                    required={field.required}
                    type={field.type}
                    variant={field.variant}
                    autoComplete={field.autoComplete}
                    helperText={field.helperText}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col items-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer rounded border px-4 py-2 hover:border-neutral-500 hover:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending" : "Submit"}
              </button>
              {submitError && (
                <p role="alert" className="text-left text-sm text-red-500">
                  {submitError}
                </p>
              )}
              {success && (
                <div role="status" className="mt-4 text-left">
                  Your message has been sent. I typically reply within a few
                  days. If you don&apos;t hear back, please call or text{" "}
                  <a
                    href={contactHrefs.phone}
                    className="hover:text-neutral-600"
                  >
                    {LINKS.phone}
                  </a>{" "}
                  or email{" "}
                  <a
                    href={contactHrefs.email}
                    className="hover:text-neutral-600"
                  >
                    {LINKS.email}
                  </a>
                  .
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPageContent;
