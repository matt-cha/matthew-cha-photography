import { LINKS } from "@/data/links";

const Contact: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-wrap items-center justify-center space-y-6 border bg-white px-4 py-8 text-center">
      <a href={LINKS.pixieset}>
        Please refer to this website for photos at the moment
      </a>
    </div>
  );
};

export default Contact;
