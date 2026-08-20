import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import FeaturedGalleriesGrid from "@/components/FeaturedGalleriesGrid";
import InquireCta from "@/components/InquireCta";
import { LINKS } from "@/data/links";

const Portfolio = () => {
  return (
    <div className="container mx-auto flex w-full flex-col space-y-6 bg-white px-4 py-10 text-center md:px-0">
      <PageHeading>Featured Galleries</PageHeading>
      <FeaturedGalleriesGrid />
      <div className="flex flex-col items-center gap-6">
        <a
          href={LINKS.pixieset}
          target="_blank"
          rel="noopener noreferrer"
          className="font-gilda hover:text-neutral-600"
        >
          See more galleries
        </a>
        <InquireCta />
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Wedding Photography Portfolio",
  description:
    "View wedding and engagement photography by Matthew Cha Photography, serving Orange County, Los Angeles, and Southern California couples.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default Portfolio;
