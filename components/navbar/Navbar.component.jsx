import About from "./items/About.items";
import Skills from "./items/Skills.items";
import Projects from "./items/Projects.items";
import Contact from "./items/Contact.items";
import Home from "./items/Home.items";

export default function Navbar(props) {
  return (
    <header className="t-[0px] left-0 w-[full] h-[44px] sticky bg-bgDarkBlue block">
      <nav className="h-[40px] font-sansFont block">
        <ul className={`text-textLightBlue m-0 p-0 list-none block h-[44px]`}>
          <li className="inline-block">
            <span>
              <Home />
            </span>
          </li>
          <li className="inline-block">
            <span>
              <About />
            </span>
          </li>
          <li className="inline-block">
            <span>
              <Skills />
            </span>
          </li>
          <li className="inline-block">
            <span>
              <Projects />
            </span>
          </li>
          <li className="inline-block">
            <span>
              <Contact />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
