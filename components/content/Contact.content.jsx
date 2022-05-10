import MarkdownListElements from "../utils/syntax/MarkdownListElements.utils";
import data from "../../data/data.json";

export default function About() {
  return (
    <>
      <section className="font-monoFont bg-bgMidBlue">
        <div className="pl-[20px] pr-[20px]">
          <div className="text-textLightBlue">
            <p className="pt-[20px] pb-[30px] w-full h-[100vh] lg:pl-[65px] md:pl-[65px] break-words">
              <span className="text-[#8464c6]">#</span>{" "}
              <span className="text-[#c7a06f]">Contact Me</span>
              <br /> <br />
              {data.contact.map((c, i) => (
                <MarkdownListElements key={i} name={c.name} link={c.url} />
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
