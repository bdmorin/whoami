import { FaDiscord } from "react-icons/fa";

export default function Discord() {
  return (
    <a
      href="https://discord.gg/eHEXe34nQz"
      aria-label="Contact me"
      title="Contact me on Discord"
      target={"_blank"}
      rel="noopener noreferrer"
      className={`text-textLightBlue mt-[8px] mb-[8px] ml-[8px] mr-[8px] flex bg-bgDarkBlue rounded-[4px]`}
    >
      <span
        className={`flex pt-[6px] pr-[10px] pb-[6px] pl-[10px] min-h-[24px] items-center`}
      >
        <FaDiscord size={28} />
        <span className={`font-monoFont text-[1rem] font-[400] ml-[6px]`}>
          Contact Me
        </span>
      </span>
    </a>
  );
}
