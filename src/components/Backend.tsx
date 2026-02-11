import { FaPython } from "react-icons/fa";
import { SiDjango, SiDotnet, SiFastapi, SiMysql, SiPostgresql } from "react-icons/si";

export default function Backend() {
  return (
    <div className="flex flex-wrap gap-6 text-4xl mt-4 text-gray-700">
      <FaPython className="text-blue-500" title="Python" />
      <SiDjango className="text-green-700" title="Django" />
      <SiFastapi className="text-teal-500" title="FastAPI" />
      <SiDotnet className="text-purple-500" title=".NET" />
      <SiMysql className="text-blue-700" title="MySQL" />
      <SiPostgresql className="text-indigo-600" title="SQL" />
    </div>
  );
}
