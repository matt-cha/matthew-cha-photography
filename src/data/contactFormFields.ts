import { ContactFormData } from "@/app/contact/page";

type ContactFormFieldConfig = {
  name: keyof ContactFormData;
  label: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "date";
  variant?: "input" | "textarea";
};

export const contactFormFields: ContactFormFieldConfig[] = [
  { name: "name", label: "Your Name", required: true, type: "text" },
  { name: "email", label: "Email", required: true, type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "eventDate", label: "Event Date", type: "date" },
  { name: "location", label: "Location", type: "text" },
  { name: "referral", label: "How did you hear about me?", type: "text" },
  {
    name: "message",
    label:
      "Please share any additional information here – vision for your event, vendors you are working with, or a little bit about you and your fiancé!",
    required: true,
    variant: "textarea",
  },
];
