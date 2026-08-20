import { portfolioImages, type PortfolioImage } from "@/data/portfolioImages";
import { resolveImagesById } from "@/lib/images";

// Homepage gallery: add or remove IDs here.
// The full photo list (id + filename) is in src/data/portfolioImages.ts.
const homeGalleryImageIds: number[] = [
  2, 4, 6, 9, 11, 12, 14, 13, 21, 25, 119, 63, 76, 43, 45, 46, 51, 123, 58, 64,
  68, 70, 72, 77, 81, 115, 86, 90, 96, 98, 103, 106, 111, 116, 118, 121,
];

export const homeGalleryImages: PortfolioImage[] = resolveImagesById(
  portfolioImages,
  homeGalleryImageIds,
);
