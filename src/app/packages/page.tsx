import { packages } from "@/data/packages";
import Package from "@/components/Package";

const Packages: React.FC = () => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center space-y-6 bg-white px-4 py-8 text-center">
      <h1 className="text-4xl">Packages</h1>
      <div>
        <div className="flex flex-wrap items-center">
          {packages &&
            packages.map((p) => <Package key={p.id} {...p}></Package>)}
        </div>
      </div>
    </div>
  );
};

export default Packages;
