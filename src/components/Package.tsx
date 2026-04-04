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
        <div className="flex flex-col md:flex-row my-4 font-[HelveticaCustom]">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <Image
                    src={image}
                    width={400}
                    height={300}
                    className="w-60 md:w-auto h-auto object-contain rounded"
                    alt="wedding"
                />
            </div>
            <div className="w-full md:w-1/2 pl-4 text-left">
                <div className="">
                    <h1 className="text-xl mt-4 md:mt-0">{title}</h1>
                    <h1>${price}</h1>
                </div>
                <p className="my-4">{description}</p>
                <ul className="list-disc list-outside ml-5">
                    {features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Package;
