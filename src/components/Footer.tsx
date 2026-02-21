import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">© 2026 Angel Sanchez</p>

        <div className="flex items-center gap-6 text-2xl">
          <a href="mailto:angelgabriel036@gmail.com" className="hover:text-red-400"><MdEmail /></a>
          <a href="https://github.com/AngeL036" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaGithub /></a>
          <a href="https://wa.me/5212224893828" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><FaWhatsapp /></a>
          <a href="https://linkedin.com/in/anegel-sanchez/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
