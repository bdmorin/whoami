import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../../styles/Navbar.module.css";

export default function About() {
  const { asPath, pathname } = useRouter();
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <Link href="/about" passHref>
      <a
        className={`pointer inline-block pt-[10px] pb-[10px] pl-[15px] pr-[10px] text-[0.688rem] ${
          styles.navbarListItem
        } lg:ml-[52px] lg:pr-[15px] md:ml-[52px] md:pr-[15px] ${
          asPath === "/about" ? "bg-bgMidBlue" : "bg-bgDarkBlue"
        }`}
      >
        <Image src="/assets/javascript.svg" alt="" width={16} height={16} />
        <span
          className={`relative bottom-[4px] lg:inline lg:ml-[3px] md:inline md:ml-[3px] ${
            asPath === "/about"
              ? "visible inline ml-[3px]"
              : "hidden md:visible lg:visible"
          }`}
        >
          about.js
        </span>
      </a>
    </Link>
  );
}
