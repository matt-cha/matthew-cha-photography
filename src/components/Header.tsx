"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  return (
    <header className=" p-4 shadow-md w-full">
      <nav className="max-w-[100rem] mx-auto flex justify-between items-center">
        <h1
          className="text-4xl font-[LeMoresSerif]"
          aria-label="Homepage for Matthew Cha Photography"
        >
          <Link className="hover:text-green-700" href="/">
            Matthew Cha Photography
          </Link>
        </h1>
        {!isMobile && (
          <ul className="flex font-[HelveticaCustom] tracking-wide space-x-4">
            <li>
              <Link href="/portfolio" className="hover:text-green-700">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-700">
                Contact
              </Link>
            </li>
          </ul>
        )}

        {isMobile && (
          <button
            aria-label="Open menu"
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </button>
        )}
      </nav>

      {isMobile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className={`fixed top-0 right-0 h-full w-44 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-col font-[HelveticaCustom]">
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/portfolio"
                className="hover:text-green-700"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/about"
                className="hover:text-green-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/contact"
                className="hover:text-green-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
