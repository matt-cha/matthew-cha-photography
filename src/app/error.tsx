"use client";

import Link from "next/link";
import PageHeading from "@/components/PageHeading";

type ErrorPageProps = {
  reset: () => void;
};

const ErrorPage = ({ reset }: ErrorPageProps) => {
  return (
    <div className="container mx-auto flex min-h-[50vh] w-full flex-col px-4 py-10 md:px-0">
      <PageHeading>Something went wrong</PageHeading>
      <p className="max-w-xl font-cormorant text-xl">
        Please try again, or head home if the problem continues.
      </p>
      <div className="mt-6 flex gap-6 font-libre text-xs tracking-wide uppercase">
        <button
          type="button"
          onClick={reset}
          className="cursor-pointer hover:text-neutral-600"
        >
          Try again
        </button>
        <Link href="/" className="hover:text-neutral-600">
          Back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
