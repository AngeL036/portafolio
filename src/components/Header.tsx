import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
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

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
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

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-gray-700">
            <a href="#proyectos" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">Proyectos</a>
            <a href="#tecnologias" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">Tecnologías</a>
            <a href="#educacion" onClick={() => setOpen(false)} className="py-2 hover:text-blue-600">Educación</a>
            <a href="/CV2026Actual.pdf" download className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Descargar CV</a>
          </div>
        </div>
      )}
    </header>
  );
}
