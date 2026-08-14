import { MoveLeft, MoveRight } from "lucide-react";
import type { MouseEventHandler } from "react";
type NavArrowButtonProps = {
  direction: "previous" | "next";
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};
const CONFIG = {
  previous: { Icon: MoveLeft, label: "Show previous image" },
  next: { Icon: MoveRight, label: "Show next image" },
} as const;
const NavArrowButton = ({
  direction,
  onClick,
  disabled = false,
  className = "",
}: NavArrowButtonProps) => {
  const { Icon, label } = CONFIG[direction];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`cursor-pointer rounded-full px-4 py-4 transition hover:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:text-current ${className}`}
    >
      <Icon aria-hidden="true" strokeWidth={0.5} className="h-8 w-8" />
    </button>
  );
};
export default NavArrowButton;
