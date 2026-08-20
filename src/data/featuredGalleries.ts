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
    slug: "jake-jenny-wedding",
    title: "Jake & Jenny Wedding",
    coverImageId: 38, // jake-jenny-dress
    imageIds: [5, 35, 36, 37, 38, 121, 122, 123],
  },
  {
    slug: "jake-jenny-engagement",
    title: "Jake & Jenny Engagement",
    coverImageId: 53, // jake-jenny-engagement-portrait
    imageIds: [39, 40, 41, 42, 43, 50, 51, 52, 53, 54, 55, 56, 57],
  },
  {
    slug: "chris-janice-wedding",
    title: "Chris & Janice Wedding",
    coverImageId: 16, // chris-janice-bubbles
    imageIds: [16, 21, 22, 60, 61, 62, 63, 64, 65, 66, 67, 68],
  },
  {
    slug: "chris-janice-engagement",
    title: "Chris & Janice Engagement",
    coverImageId: 104, // chris-janice-engagement-sunset
    imageIds: [17, 18, 19, 20, 99, 100, 101, 102, 103, 104, 105],
  },
  {
    slug: "josh-jessica-wedding",
    title: "Josh & Jessica Wedding",
    coverImageId: 78, // josh-jessica-portrait
    imageIds: [
      74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
      92, 93,
    ],
  },
  {
    slug: "josh-lora-wedding",
    title: "Josh & Lora Wedding",
    coverImageId: 112, // josh-lora-grass
    imageIds: [
      1, 7, 8, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
    ],
  },
  {
    slug: "daniel-eugenia-wedding",
    title: "Daniel & Eugenia Wedding",
    coverImageId: 94, // daniel-eugenia-ceremony
    imageIds: [23, 24, 25, 94, 95, 96, 97],
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
