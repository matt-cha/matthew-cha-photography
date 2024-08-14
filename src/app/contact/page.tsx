import contact from "../../../public/contact.jpg";

export default function Contact() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat fixed w-full h-full flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${contact.src})` }}
    >
      <div className="bg-black bg-opacity-60 absolute w-full h-full z-[-1]" />
      <div className="relative z-10 text-white">
        <p>If you have any questions or just want to chat, feel free to reach out to me!</p>
        <p className="mt-4">818-438-7010<span className="pl-4">matthewjhcha@gmail.com</span></p>
        <a href="https://www.instagram.com/matthewchaa" target="_blank" rel="noopener noreferrer">
          <svg
            className="w-8 h-8 mx-auto mt-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2a5.75 5.75 0 00-5.75 5.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm10.25 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 2a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
