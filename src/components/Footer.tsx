"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Instagram from "@/assets/icons/instagram-logo.svg";
import { useState, useEffect } from "react";
import { LINKS } from "@/data/links";
import { isCurrentPath, navItems } from "@/data/menu";
import ScrollToTopButton from "./ScrollToTop";

const Footer = () => {
  const pathname = usePathname();
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
        <div className="mx-auto grid max-w-[100rem] grid-cols-1 items-center gap-3 text-sm md:grid-cols-3">
          <div
            aria-label="Copyright information"
            className="order-3 py-2 text-center md:order-1 md:py-0 md:text-left"
          >
            © {new Date().getFullYear()} Matthew Cha
          </div>

          <nav
            aria-label="Footer"
            className="order-1 py-2 md:order-2 md:py-0"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs uppercase">
              {navItems.map((item) => {
                const isCurrent = isCurrentPath(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={
                        isCurrent
                          ? "text-neutral-500"
                          : "hover:text-neutral-600"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="order-2 flex items-center justify-center gap-4 py-2 md:order-3 md:justify-end md:py-0">
            <div className="relative">
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
              <p
                aria-live="polite"
                className={`absolute top-full left-0 mt-1 text-xs whitespace-nowrap transition-opacity duration-300 ${textOpacity}`}
              >
                {showClickText ? "Email copied" : "Click to copy"}
              </p>
            </div>
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
