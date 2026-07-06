import Gallery from "@/components/Gallery";
import { galleryImages } from "@/data/galleryImages";

const Home: React.FC = () => {
  return (
    <div className="mx-auto w-full bg-white">
      <section className="w-full">
        <div className="my-4 flex justify-center font-[LeMoresSerif]">
          <h1 className="text-center font-[GaramondPremier] text-base tracking-wide sm:text-3xl">
            Wedding photographer based in Orange County
          </h1>
        </div>
        <div>
          <Gallery images={galleryImages} />
        </div>
      </section>
    </div>
  );
};

export default Home;
