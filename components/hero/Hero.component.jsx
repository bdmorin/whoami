import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "../../styles/Hero.module.css";
import Discord from "./buttons/Discord.button";
import Github from "./buttons/Github.button";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A high-school student",
        "A developer",
        "An open-source enthusiast",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="w-full h-[calc(100vh-62px)] flex items-center font-sansFont flex-col justify-center bg-bgMidBlue">
      <h1
        className={`text-textMid mt-[10px] mb-[10px] ml-[20px] mr-[20px] p-0 text-[3.2rem] font-[400] ${styles.heroHeading}`}
      >
        Hi! I&apos;m Kira
      </h1>
      <div
        className={`text-textDark m-[5px] p-0 text-[24px] font-[400] ${styles.heroTyped}`}
      >
        <span ref={el}></span>
      </div>
      <div className={`flex mt-[50px] flex-col`}>
        <div className={`flex items-center justify-center`}>
          <Discord />
          <Github />
        </div>
      </div>
    </section>
  );
}
