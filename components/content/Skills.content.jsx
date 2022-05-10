import Print from "../utils/syntax/Print.utils";
import data from "../../data/data.json";

export default function About() {
  return (
    <>
      <section className="font-monoFont bg-bgMidBlue">
        <div className="pl-[20px] pr-[20px]">
          <div className="text-textLightBlue">
            <p className="pt-[20px] pb-[30px] w-full h-[100vh] lg:pl-[65px] md:pl-[65px] break-words">
              <span className="text-[#8464c6]">from</span>{" "}
              {data.name.toLowerCase()} {""}
              <span className="text-[#8464c6]">import</span> Skills
              <br />
              <br />
              {data.skills.map((skill, i) => (
                <Print key={i} method={skill.method} comment={skill.comment} />
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
