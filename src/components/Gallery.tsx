"use client";

import type { PortfolioImage } from "@/data/portfolioImages";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import {
  RowsPhotoAlbum,
  type RenderImageContext,
  type RenderImageProps,
} from "react-photo-album";
import "react-photo-album/rows.css";
import GalleryItem from "./GalleryItem";
import ImageNavigationControls from "./ImageNavigationControls";
import { handleArrowKeyNavigation } from "@/lib/keyboardNavigation";
import { useDialog } from "@/lib/useDialog";

type GalleryProps = {
  images: PortfolioImage[];
  contained?: boolean;
};

const getGallerySpacing = (containerWidth: number) =>
  containerWidth < 640 ? 16 : 32;

const getGalleryRowHeight = (containerWidth: number) => {
  if (containerWidth < 640) return 360;
  if (containerWidth < 1024) return 420;
  return 480;
};

const getGalleryRowConstraints = (containerWidth: number) => ({
  maxPhotos: containerWidth < 640 ? 1 : containerWidth < 1024 ? 2 : 3,
});

const renderNextImage = (
  props: RenderImageProps,
  context: RenderImageContext,
) => <GalleryItem {...props} {...context} />;

const Gallery = ({ images, contained = true }: GalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastOpenedButtonRef = useRef<HTMLButtonElement | null>(null);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  useDialog(selectedIndex !== null, dialogRef);

  const closePreview = () => {
    setSelectedIndex(null);
    lastOpenedButtonRef.current?.focus();
  };

  const goToPrevious = () => {
    setSelectedIndex((index) =>
      index !== null && index > 0 ? index - 1 : index,
    );
  };

  const goToNext = () => {
    setSelectedIndex((index) =>
      index !== null && index < images.length - 1 ? index + 1 : index,
    );
  };

  const isFirstImage = selectedIndex === 0;
  const isLastImage = selectedIndex === images.length - 1;

  useEffect(() => {
    if (selectedIndex === null) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        lastOpenedButtonRef.current?.focus();
        return;
      }

      handleArrowKeyNavigation(event, {
        onPrevious: () => {
          setSelectedIndex((index) =>
            index !== null && index > 0 ? index - 1 : index,
          );
        },
        onNext: () => {
          setSelectedIndex((index) =>
            index !== null && index < images.length - 1 ? index + 1 : index,
          );
        },
      });
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  const photos = images.map((image) => ({
    key: String(image.id),
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
  }));

  return (
    <>
      <div
        className={
          contained
            ? "container mx-auto my-4 w-full px-4 md:px-0"
            : "my-4 w-full"
        }
      >
        <RowsPhotoAlbum
          photos={photos}
          spacing={getGallerySpacing}
          targetRowHeight={getGalleryRowHeight}
          rowConstraints={getGalleryRowConstraints}
          render={{ image: renderNextImage }}
          onClick={({ index, event }) => {
            lastOpenedButtonRef.current =
              event.currentTarget as HTMLButtonElement;
            setSelectedIndex(index);
          }}
        />
      </div>
      {selectedImage && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closePreview}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closePreview}
            aria-label="Close image preview"
            className="absolute top-2 right-2 z-10 cursor-pointer rounded px-3 py-3 text-4xl text-white"
          >
            <X
              aria-hidden="true"
              strokeWidth={0.5}
              className="h-8 w-8 hover:text-neutral-600"
            />
          </button>
          <div
            className="flex max-h-[90vh] flex-col items-center gap-2"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              sizes="90vw"
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
            <ImageNavigationControls
              current={(selectedIndex ?? 0) + 1}
              total={images.length}
              onPrevious={goToPrevious}
              onNext={goToNext}
              previousDisabled={isFirstImage}
              nextDisabled={isLastImage}
              className="text-white"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
