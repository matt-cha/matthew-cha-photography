import type { Metadata } from "next";
import { carouselImages } from "@/data/carouselImages";
import { homeGalleryImages } from "@/data/homeGalleryImages";
import Carousel from "@/components/Carousel";
import Gallery from "@/components/Gallery";
import InquireCta from "@/components/InquireCta";

const Home = () => {
  return (
    <div className="mx-auto w-full bg-white">
      <section className="w-full">
        <div className="my-10 flex justify-center">
          <h1 className="font-libre mb-4 text-center text-xs tracking-wide uppercase">
            Wedding photographer based in Orange County, CA
          </h1>
        </div>
        <Carousel images={carouselImages} />
        <div className="container mx-auto w-full px-4 py-2 sm:py-6 md:px-0">
          <div className="mx-auto flex max-w-[100rem] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-garamond min-w-0 flex-1 text-3xl">
              Your only job is to enjoy your special day and be fully present —
              I&apos;ll handle the rest
            </div>
            <InquireCta className="shrink-0" />
          </div>
        </div>
        <Gallery images={homeGalleryImages} />
        <InquireCta variant="section" />
      </section>
    </div>
  );
};

export const metadata: Metadata = {
  title: {
    absolute: "Matthew Cha Photography | Orange County Wedding Photographer",
  },
  description:
    "Matthew Cha Photography is an Orange County wedding photographer serving couples across Southern California with timeless, candid, and light-filled wedding photography.",
  alternates: {
    canonical: "/",
  },
};

export default Home;
