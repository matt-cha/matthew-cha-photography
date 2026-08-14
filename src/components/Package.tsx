import Image from "next/image";
import type { PackageItem } from "@/data/packages";

import { portfolioImages } from "@/data/portfolioImages";
import { resolveImageById } from "@/lib/images";

const Package = ({
  title,
  imageId,
  price,
  description,
  features,
}: PackageItem) => {
  const image = resolveImageById(portfolioImages, imageId);

  return (
    <div className="my-4 flex flex-col font-gilda md:flex-row">
      <div className="flex items-center justify-start md:w-1/2">
        {image && (
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto rounded object-contain md:w-auto"
            alt={image.alt}
          />
        )}
      </div>
      <div className="w-full pl-4 text-left md:w-1/2">
        <div className="font-garamond">
          <h2 className="mt-4 text-2xl md:mt-0">{title}</h2>
          <p className="text-xl">${price}</p>
        </div>
        <p className="my-4">{description}</p>
        <ul className="ml-5 list-outside list-disc">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Package;
