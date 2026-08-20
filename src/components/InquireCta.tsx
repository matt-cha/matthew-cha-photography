import Link from "next/link";

type InquireCtaProps = {
  className?: string;
  variant?: "button" | "section";
  onClick?: () => void;
};

const buttonClassName =
  "inline-block w-fit rounded-md border border-black px-4 py-2 font-libre text-xs tracking-wide uppercase hover:border-neutral-600 hover:text-neutral-600";

const InquireCta = ({
  className = "",
  variant = "button",
  onClick,
}: InquireCtaProps) => {
  const button = (
    <Link
      href="/contact"
      onClick={onClick}
      className={`${buttonClassName} ${className}`.trim()}
    >
      Inquire
    </Link>
  );

  if (variant === "section") {
    return <div className="flex justify-center py-10">{button}</div>;
  }

  return button;
};

export default InquireCta;
