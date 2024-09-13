import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refine Edge Innovations",
  description:
    "Ihr professioneller Ansprechpartner für die Restaurierung aller Arten von Metallen, jeglicher Art und Größe",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Refine Edge Innovations"
        description="Ihr professioneller Ansprechpartner für die Restaurierung aller Arten von Metallen, jeglicher Art und Größe."
      />
      <div className="container">
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Firmeninformationen
          </h2>
          <p className="text-base font-medium leading-relaxed text-body-color">
            Firmenname: F & K Enterprises s.r.o.
            <br />
            Geschäftssitz: Slnečná 1662/16, 048 01 Rožňava, Slovakia
            <br />
            Registrierungsnummer (IČO): 55231951
            <br />
            Umsatzsteuer-Identifikationsnummer: SK121929216
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Kontakt
          </h2>
          <p className="text-base font-medium leading-relaxed text-body-color">
            E-Mail: refineedgeinnovations1@gmail.com
            <br />
            Telefonnummer / Whatsapp: +49 1521 1805583
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Haftungsausschluss
          </h2>
          <p className="text-base font-medium leading-relaxed text-body-color">
            <strong>Haftung für Inhalte:</strong> Die Inhalte unseres Angebots
            wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
            Gewähr übernehmen.
            <br />
            <br />
            <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu
            externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
            haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
            der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Urheberrecht
          </h2>
          <p className="text-base font-medium leading-relaxed text-body-color">
            Die durch die Seitenbetreiber erstellten und veröffentlichten
            Inhalte und Werke auf diesen Seiten unterliegen dem slowakischen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
            jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
            Erstellers.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
