"use client";
import { contactFormFields } from "@/data/contactFormFields";
import { useState } from "react";
import { ContactFormField } from "@/components/ContactFormField";
import Image from "next/image";
export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  location: string;
  referral: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const Contact: React.FC = () => {
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    referral: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
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

    const validationErrors = validateContactForm(contactFormData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      const firstField = Object.keys(validationErrors)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_POST;
    if (!endpoint) {
      setSubmitError("Form is not configured");
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
      setContactFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        location: "",
        referral: "",
        message: "",
      });
    } catch (err) {
      console.error("Form submit failed:", err);
      setSubmitError(
        "Network error. Please check your connection and try again",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email: string) => {
    const value = email.trim();
    if (!value) {
      return "Email is required";
    }
    if (!value.includes("@")) {
      return "Email needs an @ symbol";
    }
    const [local, domain] = value.split("@");
    if (!local || !domain) {
      return "A full email is required";
    }
    if (!domain.includes(".")) {
      return "Use a full email domain like john@gmail.com, instead of john@gmail";
    }
    return undefined;
  };

  const validateContactForm = (data: ContactFormData): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};

    const name = data.name.trim();
    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length < 2) {
      newErrors.name = "Please enter a name longer than one character";
    }
    const emailError = validateEmail(data.email);
    if (emailError) newErrors.email = emailError;

    const message = data.message.trim();

    if (!message) {
      newErrors.message = "Please share a few details about your event";
    } else if (message.length < 4) {
      newErrors.message = "Please enter a message longer than 3 characters";
    }
    return newErrors;
  };
  return (
    <div className="container mx-auto flex flex-col space-y-6 bg-white py-4 text-center md:flex-row">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="px-4 pb-4 md:pl-0">
          <Image
            src="/images/dh-wall.jpg"
            width={1000}
            height={200}
            alt="Couple standing on steps"
            className="mx-auto block h-auto rounded-sm object-contain"
          />
        </div>
        <div className="px-4 text-left md:px-0">
          <div>
            Send me a message and I will get back to you as soon as I can
          </div>
          <div className="mt-2">
            If you&apos;d rather contact me directly, you can also send me a
            message at
          </div>
          <div className="mt-2">818-438-7010 or matthewjhcha@gmail.com</div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2">
        <form noValidate className="px-4 md:px-0" onSubmit={handleSubmit}>
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
                {" "}
                {submitError}
              </p>
            )}
            {success && (
              <div role="status" className="mt-4 text-left">
                Your message has been sent and I will respond as soon as I can!
                If you don&apos;t hear back within a few days, please feel free
                to send me a message directly at
                <br />
                818-438-7010 or matthewjhcha@gmail.com
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
