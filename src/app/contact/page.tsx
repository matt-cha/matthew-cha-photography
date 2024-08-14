"use client";

import contact from "../../../public/contact.jpg";
import { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat fixed w-full h-full flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${contact.src})` }}
    >
      <div className="bg-black bg-opacity-70 absolute w-full h-full z-[-1]" />
      <div>
        <form className="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              name="name"
              required
              type="text"
              id="name"
              className="border border-black rounded-lg text-black"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              name="email"
              required
              type="text"
              id="email"
              className="border border-black rounded-lg text-black"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message" className="block">
              Message
            </label>
            <textarea
              name="message"
              required
              id="message"
              className="border border-black rounded-lg text-black"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="bg-green-300 rounded-lg px-4 py-2">
            Submit
          </button>
        </form>
        <div className="h-8 mt-2">
          {isSubmitted && <p className="">Thank you for your message!</p>}
        </div>
      </div>
    </div>
  );
}
