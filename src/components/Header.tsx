"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/menu";
import { useDialog } from "@/lib/useDialog";

const isCurrentPath = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useDialog(isMenuOpen, menuRef);

  useEffect(() => {
    if (!isMenuOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        openButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    openButtonRef.current?.focus();
  };

  return (
    <header className="container mx-auto w-full px-4 py-2 sm:py-6 md:px-0">
      <nav className="mx-auto flex max-w-[100rem] items-center justify-between">
        <Link
          className="font-gilda inline-block text-xl uppercase hover:text-neutral-600 md:text-2xl lg:text-[2.75rem]"
          href="/"
          aria-label="Matthew Cha Photography homepage"
        >
          Matthew Cha Photography
        </Link>

        <ul className="font-libre hidden space-x-4 text-xs tracking-wide uppercase md:flex">
          {navItems.map((item) => {
            const isCurrent = isCurrentPath(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={
                    isCurrent ? "text-neutral-500" : "hover:text-neutral-600"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          ref={openButtonRef}
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="flex cursor-pointer md:hidden"
        >
          <Menu aria-hidden="true" />
        </button>
      </nav>

      {isMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="items-left font-garamond fixed top-0 left-0 z-50 flex h-full w-full flex-col justify-center bg-white"
        >
          <button
            ref={closeButtonRef}
            aria-label="Close menu"
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleCloseMenu}
          >
            <X aria-hidden="true" strokeWidth={0.5} className="h-8 w-8" />
          </button>

          <ul className="flex flex-col items-center text-xl">
            {navItems.map((item) => {
              const isCurrent = isCurrentPath(pathname, item.href);

              return (
                <li className="my-2" key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      isCurrent ? "text-neutral-500" : "hover:text-neutral-600"
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
