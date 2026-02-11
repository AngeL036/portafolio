import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO / NOMBRE */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition"
        >
          Angel.dev
        </Link>

        {/* MENU */}
        <div className="flex gap-8 text-gray-600 font-medium">
          <a href="#proyectos" className="hover:text-blue-600 transition">
            Proyectos
          </a>

          <a href="#tecnologias" className="hover:text-blue-600 transition">
            Tecnologías
          </a>

          <a href="#educacion" className="hover:text-blue-600 transition">
            Educación
          </a>

          <a
            href="/CV2026Actual.pdf"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Descargar CV
          </a>
        </div>
      </nav>
    </header>
  );
}
