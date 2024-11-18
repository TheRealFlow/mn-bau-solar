import React from "react";
import Link from "next/link";

function Impressum() {
  return (
    <div className="container min-h-screen mx-auto mt-20 mb-10">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">Impressum</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG:</h3>
          <p>MN-Bau & Solar GbR</p>
          <p>Hinner de Hääch 1</p>
          <p>18059 Papendorf</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Vertreten durch:</h3>
          <p>Stephan Nitsch</p>
          <p>Jens Meiwald</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Kontakt:</h3>
          <p>
            Telefon 1:{" "}
            <Link href="tel:+4938140343777" className="hover:text-orange-600">
              +49 381 40 343 777
            </Link>
          </p>
          <p>
            Telefon 2:{" "}
            <Link href="tel:+4938144438962" className="hover:text-orange-600">
              +49 381 444 38 962
            </Link>
          </p>
          <p>
            E-Mail:{" "}
            <Link
              href="mailto:info@mnbausolar.de"
              className="hover:text-orange-600"
            >
              info@mnbausolar.de
            </Link>
          </p>
          <p>
            Internetadresse:{" "}
            <a
              href="https://www.mnbausolar.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600"
            >
              www.mnbausolar.de
            </a>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Steuernummer:</h3>
          <p>079/159/37106</p>
          <h3 className="text-xl font-semibold my-4">USt-IdNr.:</h3>
          <p>DE351493109</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            Angaben zur Betriebshaftpflichtversicherung:
          </h3>
          <p>Name und Sitz des Versicherers:</p>
          <p>HDI Versicherung AG</p>
          <p>30650 Hannover</p>
          <p>Geltungsraum der Versicherung: Deutschland</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">EU-Streitschlichtung:</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle:
          </h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Haftungsausschluss:</h3>
          <h5 className="font-semibold">Haftung für Inhalte</h5>
          <p className="mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
          <h5 className="font-semibold">Haftung für Links</h5>
          <p className="mb-4">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h5 className="font-semibold">Urheberrecht</h5>
          <p className="mb-4">
            Die durch die Seitenbetreiber erstellten bzw. verwendeten Inhalte
            und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
            Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom
            Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            Design und Entwicklung:
          </h3>
          <p>Florian Ludwig</p>
          <p>
            E-Mail:{" "}
            <Link
              href="mailto:florian.ludwig-hro@gmx.de"
              className="hover:text-orange-600"
            >
              florian.ludwig-hro@gmx.de
            </Link>
          </p>
          <p>Keine Haftung für Inhalt und Richtigkeit der Internetseite.</p>
          <p>Die Inhalte liegen in der Verantwortung des Betreibers.</p>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
