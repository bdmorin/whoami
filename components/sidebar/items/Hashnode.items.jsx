import { SiHashnode } from "react-icons/si";

export default function Hashnode() {
  return (
    <a
      href="https://kirablog.hashnode.dev"
      className=" cursor-pointer mb-[20px]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="inline-block relative text-lbIconColor">
        <SiHashnode size={28} />
      </span>
    </a>
  );
}
