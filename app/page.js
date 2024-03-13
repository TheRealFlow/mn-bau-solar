import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <>
      {/* Hero Bereich */}
      <section className="relative bg-gray-100 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto text-center flex flex-col justify-center items-center gap-4 z-10">
          <Image
            src="/logo_squere.webp"
            alt="MN-Bau & Solar Logo"
            width={300}
            height={300}
            objectFit="cover"
            quality={100}
          />
          <p className="text-lg font-semibold md:text-2xl my-8 text-gray-700">
            Ihr Partner für nachhaltiges Bauen mit Solarenergie
          </p>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/mn-solar.jpeg"
            alt="Solar Panel"
            className="object-cover object-center w-full h-full opacity-40"
          />
        </div>
      </section>

      {/* Über uns */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Über uns</h2>
          <p className="text-lg md:text-xl px-2 mb-8">
            MN-Bau & Solar ist ein innovatives Unternehmen, das sich auf die
            Integration von Solarenergie in Bauvorhaben spezialisiert hat. Wir
            bieten maßgeschneiderte Lösungen für Privat- und Geschäftskunden an.
          </p>
          <Link
            className="text-orange-500 text-lg hover:underline"
            href="/about"
          >
            Mehr erfahren
          </Link>
        </div>
      </section>

      {/* Leistungen */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Unser Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-4 gap-8">
            <div className="p-4 bg-white rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Kontaktaufnahme</h3>
              <p className="text-lg mb-4">
                Über unser Kontaktformular senden Sie uns die Eckdaten zu Ihrer
                Immobilie und Ihrer aktuellen Verbrauchssituation. Im Anschluss
                vereinbaren wir einen unverbindlichen Beratungstermin mit Ihnen.
              </p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Beratung & Planung</h3>
              <p className="text-lg mb-4">
                Während des unverbindlichen Beratungsgespräch klären wir, ob
                eine Photovoltaikanlage für Sie eine sinnvolle Lösung darstellt
                und beantworten Ihre Fragen. Im Anschluss planen wir Ihre ganz
                individuelles Energiesystem.
              </p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Installation</h3>
              <p className="text-lg mb-4">
                Die Hardware für Ihre Photovoltaikanlage wird Ihnen nach Hause
                geliefert. Im Anschluss installieren unsere Mitarbeiter das
                System. Abschließend erhalten Sie eine ausführliche Einweisung
                in Ihre neue Anlage
              </p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Finanzierung</h3>
              <p className="text-lg mb-4">
                Wir bieten Ihnen die Möglichkeit, Ihre Photovoltaikanlage
                mithilfe unseres maßgeschneiderten Finanzierungsangebots zu
                realisieren. Unser Ziel ist es, Ihnen den Zugang zu sauberer,
                nachhaltiger Energie zu erleichtern, ohne dass hohe
                Anfangsinvestitionen erforderlich sind.
              </p>
            </div>
            <Link
              className="text-orange-500 text-lg hover:underline text-center col-span-full"
              href="/service"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen
            erfahren? Kontaktieren Sie uns gerne!
          </p>
          <Link
            className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out"
            href="/kontakt"
          >
            Jetzt kontaktieren
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
