"use client";
import Link from "next/link";
import Instagram from "@/assets/icons/instagram-logo.svg";
import { useState, useEffect } from "react";

export default function Footer() {
  const [textToCopy] = useState(" matthewjhcha@gmail.com");
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    if (showText) {
      const timer = setTimeout(() => setShowText(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showText]);
  return (
    <footer
      aria-labelledby="footer-heading"
      className="bg-gray-100 font-[HelveticaCustom] tracking-wide w-full p-6"
    >
      <div className="max-w-[100rem]  mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-center sm:text-left">
        <div className="relative flex flex-col items-center sm:items-start">
          <button
            tabIndex={0}
            onClick={() => {
              navigator.clipboard.writeText(textToCopy);
              setShowText(true);
            }}
            className="hover:cursor-pointer"
            aria-label="Copy email address to clipboard"
          >
            matthewjhcha@gmail.com
          </button>

          <p
            aria-live="polite"
            className={`absolute top-full mt-1 text-xs transition-opacity duration-300 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
          >
            Email copied
          </p>
        </div>

        <div aria-label="Copyright information" className="">
          © 2025 Matthew Cha. All rights reserved.
        </div>
        <div className="">
          <Link
            href="https://www.instagram.com/matthewchaa/"
            className=" hover:text-green-700 rounded-lg px-2 py-2 flex items-center"
            aria-label="Instagram profile link"
          >
            <Instagram className="mr-1 w-6" aria-hidden="true" />
            matthewchaa
          </Link>
        </div>
      </div>
    </footer>
  );
}
