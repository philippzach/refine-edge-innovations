import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VERCHROMEN.EU",
  description:
    "Ihr professioneller Ansprechpartner für die Restaurierung aller Arten von Metallen, jeglicher Art und Größe",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Verchromen.eu"
        description="Ihr professioneller Ansprechpartner für die Restaurierung aller Arten von Metallen, jeglicher Art und Größe."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
