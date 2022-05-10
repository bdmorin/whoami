import Home from "./items/Home.items";
import Divider from "./items/Divider.items";
import Github from "./items/Github.items";
import Twitter from "./items/Twitter.items";
import Hashnode from "./items/Hashnode.items";
import Devto from "./items/Devto.items";
import Discord from "./items/Discord.items";
import Cog from "./items/Cog.items";

export default function Sidebar() {
  return (
    <div className="top-0 left-0 w-[52px] h-[100vh] flex fixed bg-bgLightBlue items-center flex-col justify-between invisible lg:visible md:visible">
      <div className="flex pt-[10px] pb-[10px] items-center flex-col">
        <Home />
        <Divider />
        <Github />
        <Twitter />
        <Hashnode />
        <Devto />
        <Discord />
      </div>
      <Cog />
    </div>
  );
}
