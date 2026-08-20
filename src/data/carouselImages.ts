import { portfolioImages, type PortfolioImage } from "@/data/portfolioImages";
import { resolveImagesById } from "@/lib/images";

const carouselImageIds: number[] = [1, 3, 5, 19, 24, 28, 22, 47];

export const carouselImages: PortfolioImage[] = resolveImagesById(
  portfolioImages,
  carouselImageIds,
);
