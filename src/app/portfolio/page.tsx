import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeading from "@/components/PageHeading";
import { LINKS } from "@/data/links";
import {
  featuredGalleries,
  getFeaturedGalleryCover,
} from "@/data/featuredGalleries";

const Portfolio = () => {
  return (
    <div className="container mx-auto flex w-full flex-col space-y-6 bg-white px-4 py-10 text-center md:px-0">
      <PageHeading>Featured Galleries</PageHeading>
      <div className="my-4 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {featuredGalleries.map((gallery) => {
          const cover = getFeaturedGalleryCover(gallery);
          if (!cover) return null;

          return (
            <Link
              key={gallery.slug}
              href={`/portfolio/${gallery.slug}`}
              className="group mx-auto block w-full max-w-[400px]"
            >
              <div className="overflow-hidden rounded">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="h-auto w-full transition duration-300 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-2 text-center font-gilda">{gallery.title}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <a
          href={LINKS.pixieset}
          target="_blank"
          rel="noopener noreferrer"
          className="font-gilda hover:text-neutral-600"
        >
          Please refer to this website for additional photos
        </a>
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
