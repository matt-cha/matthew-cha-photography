import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main role="main" className=" bg-white w-full">
      <section
        aria-label="Main home page image"
        className="relative w-full h-screen"
      >
        <Image
          src="/images/jj-trees.jpg"
          alt="Couple standing in the middle of orange trees"
          className="w-full rounded-lg h-auto object-cover object-bottom"
          fill
          priority
        />
        <div className="absolute inset-0  bg-gradient-to-b from-black/35 to-transparent z-10" />
        <div className="absolute inset-0 font-[LeMoresSerif]  flex justify-center top-40 z-20">
          <div className="text-white text-center ">
            <h1 className="text-4xl md:text-5xl tracking-wide">
              Wedding and events photographer<br aria-hidden="true"></br>based
              in Orange County
            </h1>
          </div>
        </div>
      </section>
      <section
        aria-label="Description and photo gallery"
        className=" w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-20 py-16 flex flex-col items-center text-center space-y-8"
      >
        <p className="text-base font-[HelveticaCustom] max-w-3xl leading-relaxed">
          A distinct approach to wedding photography made with personal care for
          each person and an emphasis on each personalized story. The human
          connection is what drives me to deliver timeless photos that display
          your relationship and all the people in your life that you love.
        </p>
        <Link
          href="/contact"
          aria-label="Navigate to the contact page"
          className="border hover:text-green-700 hover:cursor-pointer border-black px-4 py-2 rounded-md"
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
              className="rounded-sm object-cover w-full h-auto"
            />
          </div>
          <div className="w-full sm:w-[500px] md:w-[700px]">
            <Image
              src="/images/mn-glass.jpg"
              width={600}
              height={400}
              alt="Couple standing in front of wall and glass"
              className="rounded-sm object-cover w-full h-auto"
            />
          </div>
          <div className="w-full sm:w-[300px] md:w-[400px]">
            <Image
              src="/images/cd-steps.jpg"
              width={300}
              height={500}
              alt="Couple standing on steps"
              className="rounded-sm object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
