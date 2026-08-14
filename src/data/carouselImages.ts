import { portfolioImages, type PortfolioImage } from "@/data/portfolioImages";
import { resolveImagesById } from "@/lib/images";

const carouselImageIds: number[] = [
  1, // josh-lora-grass
  3, // david-heewon-wall
  5, // jake-jenny-trees
  7, // josh-lora-1276-2
  11, // aaron-abigail-wedding-party
  20, // chris-janice-field
  24, // daniel-eugenia-ceremony
  28, // daniel-grace-street
  32, // isaac-shannel-fountain
  47, // sean-sarah-beach
];

export const carouselImages: PortfolioImage[] = resolveImagesById(
  portfolioImages,
  carouselImageIds,
);
