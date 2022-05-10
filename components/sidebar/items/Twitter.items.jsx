import { FaTwitter } from "react-icons/fa";

export default function Twitter() {
  return (
    <a
      href="https://twitter.com/kira_272921"
      className=" cursor-pointer mb-[20px]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="inline-block relative text-lbIconColor">
        <FaTwitter size={28} />
      </span>
    </a>
  );
}
