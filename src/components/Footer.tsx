"use client";
import Link from "next/link";
import Instagram from "@/assets/icons/instagram-logo.svg";
import { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [textToCopy] = useState(" matthewjhcha@gmail.com");
  const [showClickText, setShowClickText] = useState<boolean>(false);
  const [showHoverText, setShowHoverText] = useState<boolean>(false);

  useEffect(() => {
    if (showClickText) {
      const timer = setTimeout(() => setShowClickText(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showClickText]);

  const copyText = () => {
    navigator.clipboard.writeText(textToCopy);
    setShowClickText(true);
  };

  const textOpacity =
    showClickText || showHoverText ? "opacity-100" : "opacity-0";

  return (
    <footer
      aria-labelledby="footer-heading"
      className="w-full bg-gray-100 py-4 font-[HelveticaCustom] tracking-wide"
    >
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[100rem] flex-col items-center justify-between text-center text-sm sm:flex-row sm:text-left">
          <div className="relative flex flex-col items-center sm:items-start md:flex-row">
            <button
              tabIndex={0}
              onClick={copyText}
              onMouseEnter={() => setShowHoverText(true)}
              onMouseLeave={() => setShowHoverText(false)}
              className="hover:cursor-pointer"
              aria-label="Copy email address to clipboard"
            >
              matthewjhcha@gmail.com
            </button>

            <p
              aria-live="polite"
              className={`absolute top-full mt-1 text-xs transition-opacity duration-300 ${textOpacity}`}
            >
              {showClickText ? "Email copied" : "Click to copy"}
            </p>
          </div>

          <div aria-label="Copyright information" className="">
            © 2025 Matthew Cha. All rights reserved.
          </div>
          <div className="">
            <Link
              href="https://www.instagram.com/matthewchaa/"
              className="flex items-center rounded-lg hover:text-neutral-600"
              aria-label="Instagram profile"
            >
              <Instagram className="mr-1 w-6" aria-hidden="true" />
              matthewchaa
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
