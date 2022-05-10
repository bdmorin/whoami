import Head from "next/head";

import Sidebar from "../components/sidebar/Sidebar.component";
import Footer from "../components/footer/Footer.component";
import ContactContent from "../components/content/Contact.content";
import Navbar from "../components/navbar/Navbar.component";

export default function Contact() {
  return (
    <>
      <Head>
        <title>👨‍💻 Contact Me</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Footer />
      <ContactContent />
    </>
  );
}
