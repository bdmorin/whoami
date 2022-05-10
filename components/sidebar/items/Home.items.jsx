import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <Link href="/" passHref>
      <a className="cursor-pointer ">
        <span className="inline-block relative text-lbIconColor">
          <FaHome size={28} />
        </span>
      </a>
    </Link>
  );
}
