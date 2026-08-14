import type { ContactFormData } from "@/data/contactFormFields";

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const validateEmail = (email: string): string | undefined => {
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

export const validateContactForm = (
  data: ContactFormData,
): ContactFormErrors => {
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
