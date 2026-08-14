import { portfolioImages, type PortfolioImage } from "@/data/portfolioImages";
import { resolveImageById, resolveImagesById } from "@/lib/images";

export type FeaturedGallery = {
  slug: string;
  title: string;
  coverImageId: number;
  imageIds: number[];
};

export const featuredGalleries: FeaturedGallery[] = [
  {
    slug: "jake-jenny",
    title: "Jake & Jenny",
    coverImageId: 38, // jake-jenny-dress
    imageIds: [1, 2, 3, 4, 5, 6, 39, 40, 41, 43],
  },
  {
    slug: "david-heewon",
    title: "David & Heewon",
    coverImageId: 30, // david-heewon-wall-3
    imageIds: [31, 30, 29, 3],
  },
  {
    slug: "chris-janice",
    title: "Chris & Janice",
    coverImageId: 16, // chris-janice-bubbles
    imageIds: [16, 17, 18, 19, 20, 21, 22],
  },
  {
    slug: "aaron-abigail",
    title: "Aaron & Abigail",
    coverImageId: 9, // aaron-abigail-aisle
    imageIds: [9, 10, 11],
  },
];

export const getFeaturedGallery = (slug: string): FeaturedGallery | undefined =>
  featuredGalleries.find((gallery) => gallery.slug === slug);

export const getFeaturedGalleryImages = (
  gallery: FeaturedGallery,
): PortfolioImage[] => resolveImagesById(portfolioImages, gallery.imageIds);

export const getFeaturedGalleryCover = (
  gallery: FeaturedGallery,
): PortfolioImage | undefined =>
  resolveImageById(portfolioImages, gallery.coverImageId);
