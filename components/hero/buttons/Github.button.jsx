import { DiGithubBadge } from "react-icons/di";

export default function Github() {
  return (
    <a
      href="https://github.com/Kira272921/vscode-themed-portfolio"
      aria-label="Checkout the code"
      title="Checkout the code on GitHub"
      target={"_blank"}
      rel="noopener noreferrer"
      className={`text-textLightBlue mt-[8px] mb-[8px] ml-[8px] mr-[8px] flex bg-bgDarkBlue rounded-[4px]`}
    >
      <span
        className={`flex pt-[6px] pr-[10px] pb-[6px] pl-[10px] min-h-[24px] items-center`}
      >
        <DiGithubBadge size={28} />
        <span className={`font-monoFont text-[1rem] font-[400] ml-[6px]`}>
          Checkout the code
        </span>
      </span>
    </a>
  );
}
