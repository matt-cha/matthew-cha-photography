"use client";

import Link from "next/link";
import Instagram from "@/assets/icons/instagram-logo.svg";
import { useState, useEffect } from "react";
import { LINKS } from "@/data/links";
import ScrollToTopButton from "./ScrollToTop";

const Footer = () => {
  const [showClickText, setShowClickText] = useState(false);
  const [showHoverText, setShowHoverText] = useState(false);

  useEffect(() => {
    if (showClickText) {
      const timer = setTimeout(() => setShowClickText(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showClickText]);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setShowClickText(true);
    } catch {
      setShowClickText(false);
    }
  };

  const textOpacity =
    showClickText || showHoverText ? "opacity-100" : "opacity-0";

  return (
    <footer className="relative w-full bg-gray-100 py-4 font-libre tracking-wide">
      <div className="container mx-auto w-full px-4 md:px-0">
        <div className="mx-auto flex max-w-[100rem] flex-col items-center justify-between text-center text-sm sm:flex-row sm:text-left">
          <div className="relative flex flex-col items-center sm:items-start md:flex-row">
            <div className="py-2 md:py-0">
              <button
                type="button"
                onClick={copyText}
                onMouseEnter={() => setShowHoverText(true)}
                onMouseLeave={() => setShowHoverText(false)}
                className="hover:cursor-pointer"
                aria-label="Copy email address to clipboard"
              >
                {LINKS.email}
              </button>
            </div>
            <p
              aria-live="polite"
              className={`absolute top-full -mt-1 text-xs transition-opacity duration-300 md:mt-1 ${textOpacity}`}
            >
              {showClickText ? "Email copied" : "Click to copy"}
            </p>
          </div>

          <div aria-label="Copyright information" className="py-2 md:py-0">
            © {new Date().getFullYear()} Matthew Cha. All rights reserved.
          </div>
          <div className="py-2 md:py-0">
            <Link
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg hover:text-neutral-600"
              aria-label="Matthew Cha on Instagram"
            >
              <Instagram className="mr-1 w-6" aria-hidden="true" />
              matthewchaa
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
