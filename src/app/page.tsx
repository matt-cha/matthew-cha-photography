import type { Metadata } from "next";
import { carouselImages } from "@/data/carouselImages";
import Carousel from "@/components/Carousel";
import Gallery from "@/components/Gallery";
import { portfolioImages } from "@/data/portfolioImages";

const Home = () => {
  return (
    <div className="mx-auto w-full bg-white">
      <section className="w-full">
        <div className="my-10 flex justify-center">
          <h1 className="mb-4 text-center font-libre text-xs tracking-wide uppercase">
            Wedding photographer based in Orange County, CA
          </h1>
        </div>
        <Carousel images={carouselImages} />
        <div className="container mx-auto w-full px-4 py-2 sm:py-6 md:px-0">
          <div className="mx-auto flex max-w-[100rem] items-center justify-between">
            <div className="font-garamond max-w-4xl text-3xl">
              Your only job is to enjoy your special day and be fully present —
              I&apos;ll handle the rest
            </div>
          </div>
        </div>
        <Gallery images={portfolioImages} />
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
