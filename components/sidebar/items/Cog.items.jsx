import Link from "next/link";
import { FaCog } from "react-icons/fa";

export default function Cog() {
  return (
    <div className="flex pt-[10px] pb-[10px] items-center flex-col">
      <Link href="/" className="mb-[20px]" passHref>
        <span className="inline-block relative text-lbIconColor mb-[27px]">
          <FaCog size={28} />
        </span>
      </Link>
    </div>
  );
}
