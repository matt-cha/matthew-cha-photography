import { LINKS } from "@/data/links";

const Contact: React.FC = () => {
  return (
    <div className="my-20 flex flex-wrap items-center justify-center space-y-6 bg-white px-4 py-4 text-center">
      <a href={LINKS.pixieset}>
        Please refer to this website for my portfolio pictures
      </a>
    </div>
  );
};

export default Contact;
