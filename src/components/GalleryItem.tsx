"use client";

import Image from "next/image";
import type {
  RenderImageContext,
  RenderImageProps,
} from "react-photo-album";
import { useInView } from "@/lib/useInView";

const STAGGER_COLUMNS = 3;
const STAGGER_DELAY_MS = 75;

type GalleryItemProps = RenderImageProps & RenderImageContext;

const GalleryItem = ({
  alt,
  title,
  photo,
  width,
  height,
  index,
}: GalleryItemProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const isFirstImage = index === 0;
  const visible = isFirstImage || isInView;

  return (
    <div
      ref={ref}
      style={{
        aspectRatio: `${width} / ${height}`,
        transitionDelay: `${(index % STAGGER_COLUMNS) * STAGGER_DELAY_MS}ms`,
      }}
      className={`group relative w-full overflow-hidden rounded transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <Image
        fill
        src={photo.src}
        alt={alt ?? ""}
        title={title}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        priority={isFirstImage}
        className="object-cover transition duration-300 group-hover:scale-[1.02]"
      />
    </div>
  );
};

export default GalleryItem;
