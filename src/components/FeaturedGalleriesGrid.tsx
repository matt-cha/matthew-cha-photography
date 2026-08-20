import Link from "next/link";
import Image from "next/image";
import {
  featuredGalleries,
  getFeaturedGalleryCover,
} from "@/data/featuredGalleries";

const FeaturedGalleriesGrid = () => {
  return (
    <div className="my-4 grid grid-cols-1 gap-30 sm:grid-cols-2 lg:grid-cols-3">
      {featuredGalleries.map((gallery) => {
        const cover = getFeaturedGalleryCover(gallery);
        if (!cover) return null;

        return (
          <Link
            key={gallery.slug}
            href={`/portfolio/${gallery.slug}`}
            className="group block w-full"
          >
            <div className="overflow-hidden rounded">
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="h-auto w-full transition duration-300 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <p className="font-gilda mt-2 text-center text-2xl">
              {gallery.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default FeaturedGalleriesGrid;
