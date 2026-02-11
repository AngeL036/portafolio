import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export default function Frontend() {
  return (
    <div className="flex flex-wrap gap-6 text-4xl mt-4 text-gray-700">
      <FaReact className="text-cyan-400" title="React" />
      <SiJavascript className="text-yellow-400" title="JavaScript" />
      <FaHtml5 className="text-orange-500" title="HTML" />
      <FaCss3Alt className="text-blue-500" title="CSS" />
      <SiTailwindcss className="text-sky-400" title="Tailwind" />
    </div>
  );
}
