import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="flex justify-center gap-6 text-2xl">

        <a
          href="mailto:angelgabriel036@gmail.com"
          className="hover:text-red-400"
        >
          <MdEmail />
        </a>

        <a
          href="https://github.com/AngeL036"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>

        <a
          href="https://wa.me/5212224893828"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://linkedin.com/in/anegel-sanchez/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>

      </div>

      <p className="text-center text-sm text-gray-400 mt-4">
        © 2026 Angel Sanchez
      </p>
    </footer>
  );
}
