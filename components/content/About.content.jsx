import ConsoleLog from "../utils/syntax/ConsoleLog.utils";
import data from "../../data/data.json";

export default function About() {
  return (
    <>
      <section className="font-monoFont bg-bgMidBlue">
        <div className="pl-[20px] pr-[20px]">
          <div className="text-textLightBlue">
            <p className="pt-[20px] pb-[30px] w-full h-[100vh] lg:pl-[65px] md:pl-[65px] break-words">
              <span className="text-[#8464c6]">import</span> {data.name}{" "}
              <span className="text-[#8464c6]">from</span>{" "}
              <span className="text-[#54c59f]">
                &apos;{data.name.toLowerCase()}&apos;
              </span>
              <br />
              <br />
              <ConsoleLog
                method="introduction"
                comment={data.about.introduction}
              />
              <ConsoleLog method="whatILike" comment={data.about.whatILike} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
