import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | VERCHROMEN.EU",
  description:
    "Kontaktieren Sie uns für ein individuelles Angebot und erleben Sie den Unterschied, den wahre Handwerkskunst machen kann.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kontakt"
        description="Kontaktieren Sie uns telefonisch +49 1521 1805583, per E-Mail unter info@verchromen.eu oder füllen sie das Kontaktformular aus."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
