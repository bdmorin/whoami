import MarkdownListElements from "../utils/syntax/MarkdownListElements.utils";
import data from "../../data/data.json";

export default function About() {
  return (
    <>
      <section className="font-monoFont bg-bgMidBlue">
        <div className="pl-[20px] pr-[20px]">
          <div className="text-textLightBlue">
            <p className="pt-[20px] pb-[30px] w-full flex-grow-1 md:h-[100vh] ld:h-[100vh] medmal:h-[100vh] lg:pl-[65px] md:pl-[65px] break-words">
              <span className="text-[#8464c6]">#</span>{" "}
              <span className="text-[#c7a06f]">Projects</span>
              <br />
              <br />
              {data.projects.map((project, i) => (
                <MarkdownListElements
                  key={i}
                  name={project.name}
                  link={project.url}
                />
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
