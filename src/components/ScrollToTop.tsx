"use client";
import { useEffect, useState } from "react";
import { MoveUp } from "lucide-react";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (!isVisible) return null;
  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed right-4 bottom-4 flex cursor-pointer items-center justify-center p-2 text-black hover:text-neutral-600"
    >
      <MoveUp strokeWidth={1} />
    </button>
  );
};
export default ScrollToTopButton;
