import Image from "next/image";
interface PackageProps {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  features: string[];
}

const Package = ({
  title,
  image,
  price,
  description,
  features,
}: PackageProps) => {
  return (
    <div className="my-4 flex flex-col font-[HelveticaCustom] md:flex-row">
      <div className="flex items-center justify-start md:w-1/2">
        <Image
          src={image}
          width={700}
          height={500}
          className="h-auto rounded object-contain md:w-auto"
          alt="wedding"
        />
      </div>
      <div className="w-full pl-4 text-left md:w-1/2">
        <div className="font-[GaramondPremier]">
          <h1 className="mt-4 text-3xl md:mt-0">{title}</h1>
          <h1 className="text-2xl">${price}</h1>
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
