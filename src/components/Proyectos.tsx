import { FaGithub } from "react-icons/fa";

interface ProyectosProps {
  titulo: string;
  descripcion: string;
  github: string;
}

export default function Proyectos({ titulo, descripcion, github }: ProyectosProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-full hover:shadow-lg hover:-translate-y-1 transition">

      {/* CONTENIDO */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {titulo}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {descripcion}
        </p>
      </div>

      {/* FOOTER CARD */}
      <div className="mt-6">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
        >
          <FaGithub className="text-lg" />
          Ver repositorio
        </a>
      </div>
    </div>
  );
}
