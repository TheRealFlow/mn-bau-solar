import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

function Finanzierung() {
  const offers = [
    {
      title: "Allgemeine Bedingungen und Möglichkeiten",
      content: (
        <ul className="list-disc ml-6">
          <li>Generell für jedes Alter möglich (auch für 20 Jahre Laufzeit)</li>
          <li>
            Alle Eigentümer der Immobilie müssen auch Darlehensnehmer werden
          </li>
          <li>
            Blankodarlehen ist ohne Sicherheiten und Grundschuldeintragungen
          </li>
          <li>
            Anrechenbares Einkommen der Darlehensnehmer nur bei Angestellten,
            Beamten oder Rentnern möglich
          </li>
          <li>
            Kostenfreie Sondertilgungen ganz oder teilweise möglich (sie
            verkürzen grundsätzlich die Laufzeit, eine Ratenreduzierung auf
            schriftliche Anfrage möglich)
          </li>
          <li>Laufzeiten von 10, 15 und 20 Jahren wählbar</li>
          <li>Zinssatz ist über die gesamte Laufzeit fest</li>
          <li>
            24 Monate ohne Bereitstellungszinsen, d.h. das Geld kann auch erst
            später ausgezahlt werden, wenn der Betrag für die PV-Anlage fällig
            wird
          </li>
          <li>
            Erste Darlehensrate wird fällig nach Vollauszahlung des Darlehens
          </li>
        </ul>
      ),
    },
    {
      title: "Ausschlusskriterien",
      content: (
        <ul className="list-disc ml-6">
          <li>Krankengeld, Selbstständige, Arbeitslosengeld</li>
          <li>Probezeit</li>
          <li>Befristeten Arbeitsverträge</li>
          <li>Negative SCHUFA</li>
          <li>
            Wenn die Kunden noch nicht offiziell im Grundbuch eingetragen sind
            (sie müssen Eigentümer der Immobilie sein)
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className="container mx-auto text-center mt-20">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-xl font-semibold mb-2">
            Finanzieren Sie Ihre Photovoltaikanlage durch unser
            Partnerunternehmen!
          </h2>
          <div className="bg-gray-100 rounded-lg p-4 my-4">
            <p className="text-gray-700">
              Wir verstehen, dass die Investition in eine Photovoltaikanlage
              eine bedeutende Entscheidung ist. Deshalb freuen wir uns, Ihnen
              die Möglichkeit zu bieten, Ihre Anlage mithilfe unseres
              vertrauenswürdigen Partnerunternehmens zu finanzieren. Mit
              maßgeschneiderten Finanzierungslösungen und attraktiven
              Konditionen helfen wir Ihnen, den Weg zur sauberen Energie ohne
              finanzielle Hürden zu beschreiten.
            </p>
          </div>

          <div className="max-w-3xl mx-auto my-4 px-4">
            {offers.map((offer, index) => (
              <div key={index} className="mb-4">
                <button
                  className={`flex justify-between items-center w-full text-left bg-orange-500 hover:bg-orange-600 text-gray-800 font-bold py-2 px-4 rounded`}
                >
                  {offer.title}
                  {offer.icon}
                </button>

                <div className="flex justify-between text-left mt-2 border-l-2 border-green-600 pl-2">
                  {offer.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto my-4 px-8 pb-8">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Kontaktieren Sie uns jetzt für Ihr unverbindliches
            Finanzierungsangebot
          </button>
        </div>

        <div className="max-w-3xl mx-auto my-4 px-8 pb-8">
          <Link
            component="button"
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            href="/Kundenexemplar_Flyer_Solarkredit_Stand_05_01_2024_Sonderkonditionen.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf className="inline-block mr-2 mb-1" />
            Finanzierungsbeispiel herunterladen
          </Link>
        </div>
      </div>
    </>
  );
}

export default Finanzierung;
