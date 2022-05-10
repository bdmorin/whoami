import { FaDiscord } from "react-icons/fa";

export default function Discord() {
  return (
    <a
      href="https://discord.gg/eHEXe34nQz"
      className=" cursor-pointer mb-[20px]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="inline-block relative text-lbIconColor">
        <FaDiscord size={28} />
      </span>
    </a>
  );
}
