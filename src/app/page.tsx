import Image from "next/image";
import Link from "next/link";
const Home: React.FC = () => {
  return (
    <main role="main" className="w-full bg-white">
      <section
        aria-label="Main home page image"
        className="relative h-screen w-full"
      >
        <Image
          src="/images/jj-trees.jpg"
          alt="Couple standing in the middle of orange trees"
          className="h-auto w-full rounded-lg object-cover object-bottom"
          fill
          priority
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="absolute inset-0 top-40 z-20 flex justify-center font-[LeMoresSerif]">
          <div className="text-center text-white">
            <h1 className="text-4xl tracking-wide md:text-5xl">
              Wedding and events photographer
              <br aria-hidden="true"></br>based in Orange County
            </h1>
          </div>
        </div>
      </section>
      <section
        aria-label="Description and photo gallery"
        className="flex w-full flex-col items-center space-y-8 px-4 py-16 text-center sm:px-6 lg:px-8 xl:px-10 2xl:px-20"
      >
        <p className="max-w-3xl font-[HelveticaCustom] text-base leading-relaxed">
          A distinct approach to wedding photography made with personal care for
          each person and an emphasis on each personalized story. The human
          connection is what drives me to deliver timeless photos that display
          your relationship and all the people in your life that you love.
        </p>
        <Link
          href="/contact"
          aria-label="Navigate to the contact page"
          className="rounded-md border border-black px-4 py-2 hover:cursor-pointer hover:text-neutral-600"
        >
          Connect
        </Link>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full sm:w-[300px] md:w-[400px]">
            <Image
              src="/images/eu-glass.jpg"
              width={300}
              height={500}
              alt="Couple standing in front of glass reading a letter, crying"
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>
          <div className="w-full sm:w-[500px] md:w-[700px]">
            <Image
              src="/images/mn-glass.jpg"
              width={600}
              height={400}
              alt="Couple standing in front of wall and glass"
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>
          <div className="w-full sm:w-[300px] md:w-[400px]">
            <Image
              src="/images/cd-steps.jpg"
              width={300}
              height={500}
              alt="Couple standing on steps"
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
