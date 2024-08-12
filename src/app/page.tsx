import main from "../../public/main.jpg";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <img
        src={main.src}
        alt="Main picture"
        className="w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <p className="text-white">Matthew Cha Photography</p>
      </div>
      <div className="flex items-center justify-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta
          dolores suscipit fuga a illum esse facilis laborum ratione mollitia,
        </p>
      </div>
    </main>
  );
}
