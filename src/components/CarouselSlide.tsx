import { PortfolioImage } from "@/data/portfolioImages";
import Image from "next/image";

type CarouselSlideProps = {
  image: PortfolioImage;
  isActive: boolean;
  priority?: boolean;
};

const CarouselSlide = ({
  image,
  isActive,
  priority = false,
}: CarouselSlideProps) => {
  return (
    <div aria-hidden={!isActive} className="relative h-full shrink-0 px-4">
      <Image
        src={image.src}
        alt={isActive ? image.alt : ""}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw"
        className="h-full w-auto max-w-none rounded object-contain"
      />
    </div>
  );
};

export default CarouselSlide;
