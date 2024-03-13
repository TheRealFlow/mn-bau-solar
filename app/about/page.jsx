import Image from "next/image";

function About() {
  return (
    <>
      <div className="container mx-auto text-center mt-20">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <Image
              src="/logo_long.webp"
              alt="MN-Bau & Solar"
              width={450}
              height={90}
              objectFit="contain"
              quality={100}
              className="mx-auto pt-2 pb-8"
            />
            <p className="text-lg text-gray-700 mb-6">
              Ihrem Partner für nachhaltige Energie.
            </p>
            <p className="text-gray-700 mb-6">
              Wir sind stolz darauf, unseren Kunden umfassende Dienstleistungen
              in der Planung, Beratung und Installation von Solaranlagen
              anzubieten.
            </p>
            <p className="text-gray-700 mb-6">
              Unser Unternehmen verfügt über mehrjährige Erfahrung im Bereich
              der Dachsanierung und über Montageexperten für Solar- und
              Photovoltaikanlagen. Darüber hinaus bringen wir technisches
              Know-how aus der Industrie sowie fundierte Kenntnisse im Bereich
              Heizungs- und Sanitärtechnik mit.
            </p>
            <p className="text-gray-700 mb-6">
              Unser engagiertes Team von Fachleuten arbeitet eng mit Ihnen
              zusammen, um sicherzustellen, dass Sie die bestmögliche Lösung für
              Ihre Solar-Anforderungen erhalten. Wir bieten Ihnen eine
              umfassende Beratung und Planung Ihrer Anlage, um sicherzustellen,
              dass diese optimal an Ihre Bedürfnisse angepasst ist. Von der
              Auswahl der geeigneten Module bis hin zur Berechnung der optimalen
              Anzahl von Modulen und der Dimensionierung des Wechselrichters
              unterstützen wir Sie bei jedem Schritt des Prozesses.
            </p>
            <p className="text-gray-700 mb-6">
              Wir bieten auch eine professionelle Installation der Anlage, um
              sicherzustellen, dass sie effizient und sicher funktioniert.
              Unsere erfahrenen Techniker verfügen über die neueste Ausrüstung
              und arbeiten mit höchster Präzision, um einwandfreie Ergebnisse zu
              erzielen.
            </p>
            <p className="text-gray-700 mb-6">
              Als Unternehmen setzen wir uns für höchste Standards in Bezug auf
              Qualität, Sicherheit und Kundenservice ein. Wir möchten
              sicherstellen, dass unsere Kunden mit unseren Dienstleistungen
              vollständig zufrieden sind und dass sie das bestmögliche Ergebnis
              für ihre Investition erhalten.
            </p>
            <p className="text-gray-700 mb-6">
              Kontaktieren Sie uns noch heute, um mehr darüber zu erfahren, wie
              wir Ihnen helfen können, eine effektive und nachhaltige
              Solaranlage für Ihr Unternehmen oder Ihre Privatwohnung zu planen
              und zu installieren.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Wir freuen uns darauf, von Ihnen zu hören!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
