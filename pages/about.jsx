import Head from "next/head";

import Sidebar from "../components/sidebar/Sidebar.component";
import Footer from "../components/footer/Footer.component";
import AboutContent from "../components/content/About.content";
import Navbar from "../components/navbar/Navbar.component";

export default function About() {
  return (
    <>
      <Head>
        <title>👨‍💻 About Me</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Footer />
      <AboutContent />
    </>
  );
}
