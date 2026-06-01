"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/menu";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="container mx-auto w-full py-2 sm:py-6">
      <nav className="mx-auto flex max-w-[100rem] items-center justify-between">
        <h1
          className="font-[LeMoresSerif] text-xl md:text-2xl lg:text-4xl"
          aria-label="Homepage for Matthew Cha Photography"
        >
          <Link
            className="inline-block px-2 hover:text-neutral-600 sm:px-0"
            href="/"
          >
            Matthew Cha Photography
          </Link>
        </h1>

        <ul className="hidden space-x-4 font-[HelveticaCustom] tracking-wide md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-neutral-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label="Open menu"
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="flex px-2 md:hidden"
        >
          <Menu />
        </button>
      </nav>

      {isMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-label="Mobile navigation menu"
          className="items-left fixed top-0 left-0 z-50 flex h-full w-full flex-col justify-center bg-white"
        >
          <button
            className="absolute top-2 right-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </button>

          <ul className="flex flex-col items-center text-xl">
            <li>
              <Link onClick={() => setIsMenuOpen(false)} href="/">
                Home
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
