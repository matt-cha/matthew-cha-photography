import { portfolioImages, type PortfolioImage } from "@/data/portfolioImages";
import { resolveImagesById } from "@/lib/images";

const carouselImageIds: number[] = [5, 3, 20, 19, 24, 28, 78, 47];

export const carouselImages: PortfolioImage[] = resolveImagesById(
  portfolioImages,
  carouselImageIds,
);
