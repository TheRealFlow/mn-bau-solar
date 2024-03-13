import Image from "next/image";

function Angebote() {
  return (
    <>
      <div className="container mx-auto text-center mt-20">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-xl font-semibold mb-2">
            Unsere Komplettpreisangebote
          </h2>
          <p className="text-gray-700 mb-4">
            Hier bieten wir Ihnen unsere Photovoltaikanlagen als
            Komplettpreisangebote.
          </p>
          <Image
            src="/angebot.webp"
            alt="Photovoltaikanlage"
            width={900}
            height={500}
            objectFit="cover"
            className="rounded-md mx-auto mb-4"
          />
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <p className="text-gray-700 mb-4">
              Sie möchten Ihre eigene Photovoltaikanlage, die Ihnen erhebliche
              Energieeinsparungen und Unabhängigkeit von steigenden Strompreisen
              bietet? Dann sind Sie bei uns genau richtig! Wir präsentieren
              Ihnen unser Komplettpreisangebot für eine 10 kWp
              Photovoltaikanlage, das Ihnen alle Vorteile der Solarenergie in
              einem unschlagbaren Paket bietet.
            </p>

            <p className="text-gray-700 my-4">
              <a href="/kontakt" className="text-orange-500 hover:underline">
                Kontaktieren
              </a>{" "}
              Sie uns gerne bei Bedarf, um mehr über unser unschlagbares
              Komplettpreisangebot für eine 10 kWp Photovoltaikanlage zu
              erfahren. Lassen Sie uns gemeinsam den ersten Schritt in Richtung
              einer nachhaltigeren Zukunft gehen!
            </p>
            <p className="text-gray-700">
              Selbstverständlich bieten wir unsere Komplettpreisangebote auch
              zur{" "}
              <a
                href="/finanzierung"
                className="text-orange-500 hover:underline"
              >
                Finanzierung
              </a>{" "}
              über unser Partnerunternehmen an.
            </p>
          </div>
        </div>

        {/* <div className="max-w-4xl mx-auto px-4">
          <p>
            ---------------------------------------------------------------------
          </p>
        </div>

        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-2xl font-semibold mb-2">
            Neu und ab sofort, bekommen alle unsere Kunden eine schwarz
            eloxierte Unterkonstruktion. Diese besteht aus schwarz-eloxierten
            Schienen, sowie schwarzen Mittel -und Endklemmen und schwarzen
            Endkappen.
          </h2>
        </div> */}
      </div>
    </>
  );
}

export default Angebote;
