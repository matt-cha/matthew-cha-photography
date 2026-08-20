import { portfolioImages, type PortfolioImage } from "@/data/portfolioImages";
import { resolveImagesById } from "@/lib/images";

// Homepage gallery: add or remove IDs here.
// The full photo list (id + filename) is in src/data/portfolioImages.ts.
const homeGalleryImageIds: number[] = [
  2, 4, 6, 9, 11, 12, 14, 16, 21, 25, 32, 34, 38, 43, 45, 46, 51, 53, 58, 64,
  68, 70, 72, 77, 81, 82, 86, 90, 94, 98, 104, 106, 112, 116, 118, 121,
];

export const homeGalleryImages: PortfolioImage[] = resolveImagesById(
  portfolioImages,
  homeGalleryImageIds,
);
