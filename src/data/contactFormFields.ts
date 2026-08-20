export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  location: string;
  referral: string;
  message: string;
};

export const INITIAL_CONTACT_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  location: "",
  referral: "",
  message: "",
};
type ContactFormFieldConfig = {
  name: keyof ContactFormData;
  label: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "date";
  variant?: "input" | "textarea";
  autoComplete?: string;
  helperText?: string;
};

export const contactFormFields: ContactFormFieldConfig[] = [
  {
    name: "name",
    label: "Your Name",
    required: true,
    type: "text",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    required: true,
    type: "email",
    autoComplete: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    autoComplete: "tel",
  },
  { name: "eventDate", label: "Event Date", type: "date" },
  { name: "location", label: "Location", type: "text", autoComplete: "off" },
  {
    name: "referral",
    label: "How did you hear about me?",
    type: "text",
    autoComplete: "off",
  },
  {
    name: "message",
    label: "Your message",
    helperText: "Vision, vendors, or a bit about you and your partner.",
    required: true,
    variant: "textarea",
  },
];
