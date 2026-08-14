import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  featuredGalleries,
  getFeaturedGallery,
  getFeaturedGalleryCover,
  getFeaturedGalleryImages,
} from "@/data/featuredGalleries";
import Gallery from "@/components/Gallery";
import PageHeading from "@/components/PageHeading";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredGalleries.map((gallery) => ({ slug: gallery.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const gallery = getFeaturedGallery(slug);

  if (!gallery) {
    return {};
  }

  const cover = getFeaturedGalleryCover(gallery);

  return {
    title: gallery.title,
    description: `A featured wedding gallery of ${gallery.title}, photographed by Matthew Cha in Orange County and Southern California.`,
    alternates: {
      canonical: `/portfolio/${gallery.slug}`,
    },
    openGraph: {
      title: `${gallery.title} | Matthew Cha Photography`,
      description: `Wedding photography from ${gallery.title}'s day by Matthew Cha.`,
      images: cover
        ? [
            {
              url: cover.src,
              width: cover.width,
              height: cover.height,
              alt: cover.alt,
            },
          ]
        : undefined,
    },
  };
}

const FeaturedGalleryPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const gallery = getFeaturedGallery(slug);

  if (!gallery) {
    notFound();
  }

  const images = getFeaturedGalleryImages(gallery);

  return (
    <div className="container mx-auto flex w-full flex-col px-4 py-10 font-libre md:px-0">
      <Link
        className="mb-6 inline-flex h-4 items-center gap-2 text-xs leading-none whitespace-nowrap uppercase hover:text-neutral-600"
        href="/portfolio"
        aria-label="Navigate to the portfolio page"
      >
        <MoveLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1} />
        <span>Featured Galleries</span>
      </Link>
      <PageHeading>{gallery.title}</PageHeading>
      <Gallery images={images} contained={false} />
    </div>
  );
};

export default FeaturedGalleryPage;
