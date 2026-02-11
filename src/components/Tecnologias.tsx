import {FaPython } from "react-icons/fa";
import { SiDjango, SiDotnet } from "react-icons/si";

export default function Tecnologias() {
  return (
    <div className="flex gap-4 text-4xl">
      <FaPython className="text-blue-500" />
      <SiDjango className="text-green-700" />
      <SiDotnet className="text-purple-500" />
    </div>
  );
}
