import { DiGithubBadge } from "react-icons/di";

export default function GitHub() {
  return (
    <a
      href="https://github.com/kira272921"
      className=" cursor-pointer mb-[20px]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="inline-block relative text-lbIconColor">
        <DiGithubBadge size={42} />
      </span>
    </a>
  );
}
