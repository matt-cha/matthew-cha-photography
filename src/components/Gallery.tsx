"use client";
import type { GalleryImage } from "@/data/galleryImages";
import Image from "next/image";
import { useState } from "react";

type GalleryProps = {
  images: GalleryImage[];
};

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="w-full p-4">
        <div className="columns-[28rem]">
          {images.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="mb-4 block w-full break-inside-avoid rounded"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full cursor-pointer transition duration-300 hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            role="dialog"
            aria-modal="true"
            className="absolute top-4 right-4 z-10 cursor-pointer rounded bg-white/90 px-4 py-2 text-4xl text-black shadow-md hover:bg-white"
          >
            ✖
          </button>
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={selectedImage.width}
            height={selectedImage.height}
            className="max-h-[90vh] w-auto max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
