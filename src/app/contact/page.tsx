'use client';

import contact from "../../../public/contact.jpg";
import { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormDataValidation {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [formError, setFormError] = useState<FormDataValidation>({});
  const [submitMessage, setSubmitMessage] = useState<boolean>(false);

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage(false);
      },2000)
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = (): FormDataValidation => {
    const formError: FormDataValidation = {}

    if (!formData.name) {
      formError.name = 'Name is required';
    }
    if (!formData.email) {
      formError.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formError.email = 'Email is invalid';
    } 
    if (!formData.message) {
      formError.message = 'Message is required';
    }
    return formError
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFormError(validationErrors);
      return;
    }
    setSubmitMessage(true);
    setFormData({ name: '', email: '', message: '' });
    setFormError({});
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat fixed w-full h-full flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${contact.src})` }}
    >
      <div className="bg-black bg-opacity-70 absolute w-full h-full z-[-1]" />
        <div>
          <form className="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                className="border border-black rounded-lg text-black"
                value={formData.name}
                onChange={handleChange}
              />
              {formError && <p className="text-red-500">{formError.name}</p>}
              <label htmlFor="email" className="block">Email</label>
              <input
                name="email"
                type="text"
                id="email"
                className="border border-black rounded-lg text-black"
                value={formData.email}
                onChange={handleChange}
              />
              {formError && <p className="text-red-500">{formError.email}</p>}
              <label htmlFor="message" className="block">Message</label>
              <textarea
                name="message"
                id="message"
                className="border border-black rounded-lg text-black"
                value={formData.message}
                onChange={handleChange}
              />
              {formError && <p className="text-red-500">{formError.message}</p>}
            </div>
            <button type="submit" className="bg-green-300 rounded-lg px-4 py-2">Submit</button>
          </form>
          {submitMessage && <p>Submitted!</p>}
          <p className="mt-4">818 438 7010</p>
          <p>matthewjhcha@gmail.com</p>
          <a href="https://www.instagram.com/matthewchaa" target="_blank" rel="noopener noreferrer">
            <svg
              className="w-8 h-8 mx-auto mt-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2a5.75 5.75 0 00-5.75 5.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm10.25 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 2a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z"/>
            </svg>
          </a>
        </div>
    </div>
  );
}
