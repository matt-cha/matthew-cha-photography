import type { Metadata } from "next";
import { packages } from "@/data/packages";
import Package from "@/components/Package";

const Packages = () => {
  return (
    <div className="container mx-auto flex min-h-screen w-full flex-col items-center space-y-6 bg-white px-4 py-10 text-center md:px-0">
      <div className="flex flex-wrap items-center">
        {packages.map((pkg) => (
          <Package key={pkg.id} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;

export const metadata: Metadata = {
  title: "Wedding Photography Packages",
  description:
    "Wedding photography package information for couples working with Matthew Cha Photography.",
  robots: {
    index: false,
    follow: false,
  },
};
