import type { Metadata } from "next";
import Image from "next/image";
import InquireCta from "@/components/InquireCta";
import PageHeading from "@/components/PageHeading";

const About = () => {
  return (
    <div className="font-libre container mx-auto flex w-full flex-col px-4 py-10 md:px-0">
      <PageHeading>About</PageHeading>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex justify-center lg:w-2/5 lg:items-start">
          <Image
            src="/images/mc-wall.jpg"
            alt="Matthew Cha, Orange County wedding photographer"
            width={2400}
            height={1600}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-auto w-auto max-w-full rounded"
          />
        </div>
        <div className="font-cormorant flex w-full justify-center pb-4 text-xl lg:w-3/5 lg:pr-0 lg:pb-0 lg:pl-10">
          <div>
            <p>
              I&apos;m an Orange County based photographer that started
              documenting trips and everyday life in 2015 and from there moved
              into photographing people and their most important celebrations
              and moments.
            </p>
            <p className="mt-4">
              The way I handle wedding photography is met with a personalized
              relationship, aligned conversations, and care for each person and
              an emphasis on each unique story. The human connection is what
              drives me to deliver timeless photos that display your
              relationship and all the people in your life that you love.
            </p>
            <p className="mt-4">
              My focus on photography is marked by capturing the precious
              moments that you can look back on and evoke the emotion of that
              day. My approach blends documentary storytelling, seamlessly
              capturing all the special moments of your day, and curating candid
              moments, ensuring nothing is missed.
            </p>
            <p className="mt-4">
              I want to ensure that any anxiety or nervousness about being in
              front of a camera is completely taken care of and it&apos;s not
              something you as the client need to be worried about! My goal is
              to create a relaxed, fun experience so you can focus on each other
              while I guide you naturally to capture real, genuine moments as
              they unfold.
            </p>
            <p className="my-4">
              Outside of wedding photography, I love hiking and taking landscape
              photos at national parks. Yosemite and Zion are some of my
              favorite places to visit!
            </p>
            <InquireCta className="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "About | Orange County Wedding Photographer",
  description:
    "Learn about Matthew Cha, an Orange County wedding photographer focused on timeless, candid, and personal wedding photography for couples in Southern California.",
  alternates: {
    canonical: "/about",
  },
};

export default About;
