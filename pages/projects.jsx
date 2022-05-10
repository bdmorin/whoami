import Head from "next/head";

import Sidebar from "../components/sidebar/Sidebar.component";
import Footer from "../components/footer/Footer.component";
import ProjectsContent from "../components/content/Projects.content";
import Navbar from "../components/navbar/Navbar.component";

export default function Projects() {
  return (
    <>
      <Head>
        <title>👨‍💻 Projects</title>
      </Head>
      <Navbar />
      <ProjectsContent />
      <Sidebar />
      <Footer />
    </>
  );
}
