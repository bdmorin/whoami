import { DiGitBranch } from "react-icons/di";

function Footer() {
  return (
    <footer className="left-0 w-[100vw] bottom-0 h-[22px] flex fixed bg-bgDarkBlue text-textLightBlue items-center font-sansFont font-[400] justify-between">
      <a
        href="https://github.com/kira272921/vscode-themed-portfolio"
        rel="noopener noreferrer"
        target="_blank"
        className="float-left pt-[2px] pb-[2px] pl-[8px] pr-[8px]"
      >
        <div className="inline-block mt-[2px]">
          <DiGitBranch />
        </div>
        <span className="inline-block pt-[2px] pb-[1.5px] pl-[8px] pr-[8px] text-[12px] font-sansFont mb-[2px]">
          main
        </span>
      </a>
    </footer>
  );
}

export default Footer;
