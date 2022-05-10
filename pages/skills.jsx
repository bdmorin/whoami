import Head from "next/head";

import Sidebar from "../components/sidebar/Sidebar.component";
import Footer from "../components/footer/Footer.component";
import SkillContent from "../components/content/Skills.content";
import Navbar from "../components/navbar/Navbar.component";

export default function Skills() {
  return (
    <>
      <Head>
        <title>👨‍💻 Skills</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Footer />
      <SkillContent />
    </>
  );
}
