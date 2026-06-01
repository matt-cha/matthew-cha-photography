import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="container mx-auto my-4 flex w-full flex-col py-4 font-[HelveticaCustom] md:flex-row">
      <div className="flex w-full justify-center md:w-1/2">
        <div className="">
          <p>
            I&apos;m an Orange County based photographer that started
            documenting trips and everyday life in 2015 and from there moved
            into photographing people and their special moments. My favorite
            times to shoot are when the light of the sun hits at the right angle
            and documenting those delicate moments is one of the joys of
            photography. My focus on photography is marked by capturing the
            precious moments that you can look back on and evoke the emotion of
            that day.
          </p>
          <p className="mt-4">
            Outside of wedding photography, I love taking landscape photos when
            I go hiking and travel to various national parks. Yosemite and Zion
            are some of my favorite places to visit!
          </p>
        </div>
      </div>
      <div className="flex justify-end md:w-1/2">
        <div className="">
          <Image
            src="/images/mc-mountain.jpg"
            alt="Man standing on top of a mountain"
            width={400}
            height={300}
            className="rounded-lg object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
