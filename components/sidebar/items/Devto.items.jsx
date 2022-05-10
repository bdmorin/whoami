import { FaDev } from "react-icons/fa";

export default function Devto() {
  return (
    <a
      href="https://dev.to/kira272921"
      className=" cursor-pointer mb-[20px]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="inline-block relative text-lbIconColor">
        <FaDev size={28} />
      </span>
    </a>
  );
}
