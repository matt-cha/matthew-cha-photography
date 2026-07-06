import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="container mx-auto my-4 flex w-full flex-col py-4 font-[HelveticaCustom] md:flex-row">
      <div className="flex w-full justify-center px-4 pb-4 md:w-3/5 md:pr-10 md:pb-0 md:pl-0">
        <div className="">
          <p className="">
            I&apos;m an Orange County based photographer that started
            documenting trips and everyday life in 2015 and from there moved
            into photographing people and their most important celebrations and
            moments.
          </p>
          <p className="mt-4">
            The way I handle wedding photography is met with a personalized
            relationship and conversation and care for each person and an
            emphasis on each unique story. The human connection is what drives
            me to deliver timeless photos that display your relationship and all
            the people in your life that you love with a light and airy visual
            style of soft colors and whites.
          </p>
          <p className="mt-4">
            My favorite times to shoot are when the light of the sun hits at the
            right angle and documenting those delicate moments is one of the
            joys of photography. My focus on photography is marked by capturing
            the precious moments that you can look back on and evoke the emotion
            of that day.
          </p>
          <p className="mt-4">
            My approach blends documentary storytelling, seamlessly capturing
            all the special moments of your day, and curating candid moments,
            ensuring nothing is missed. I&apos;m always open to communication
            and working with different shooting and editing styles that
            you&apos;d like to experience and work with.
          </p>
          <p className="mt-4">
            I want to ensure that any anxiety or nervousness about being in
            front of a camera is completely taken care of and it&apos;s not
            something you as the client need to be worried about. I aim to
            create a relaxed, fun experience so you can focus on each other
            while I guide you naturally to capture real, genuine moments as they
            unfold.
          </p>
          <p className="my-4">
            Outside of wedding photography, I love taking landscape photos when
            I go hiking and travel to various national parks. Yosemite and Zion
            are some of my favorite places to visit!
          </p>
          <Link
            href="/contact"
            aria-label="Navigate to the contact page"
            className="my-4 rounded-md border border-black px-4 py-2 hover:cursor-pointer hover:border-neutral-600 hover:text-neutral-600"
          >
            Contact me now
          </Link>
        </div>
      </div>
      <div className="flex justify-center px-4 md:w-2/5 md:items-start md:px-0">
        <Image
          src="/images/mc-wall.jpg"
          alt="Man in front of a grey wall"
          width={7008}
          height={4672}
          className="h-auto w-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default About;
