import Link from "next/link";
import PageHeading from "@/components/PageHeading";

const NotFound = () => {
  return (
    <div className="container mx-auto flex min-h-[50vh] w-full flex-col px-4 py-10 md:px-0">
      <PageHeading>Page not found</PageHeading>
      <p className="max-w-xl font-cormorant text-xl">
        This page doesn&apos;t exist. You can head home or browse the portfolio.
      </p>
      <div className="mt-6 flex gap-6 font-libre text-xs tracking-wide uppercase">
        <Link href="/" className="hover:text-neutral-600">
          Back home
        </Link>
        <Link href="/portfolio" className="hover:text-neutral-600">
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
