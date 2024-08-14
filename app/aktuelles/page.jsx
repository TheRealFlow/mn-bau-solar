import Link from "next/link";
import { FaSun } from "react-icons/fa";

function Aktuelles() {
  return (
    <div className="container min-h-screen mx-auto text-center mt-20">
      <div className="max-w-4xl mx-auto py-6 px-4">
        <h2 className="text-xl font-semibold mb-2">Neuigkeiten und Angebote</h2>
        <div className="bg-gray-100 rounded-lg p-4 my-4">
          <h3 className="text-lg font-semibold">
            <FaSun className="inline-block text-yellow-500 mr-2" />
            Sommer Special
            <FaSun className="inline-block text-yellow-500 ml-2" />
          </h3>
          <p className="text-gray-700 my-2">
            Nutzen Sie die Kraft der Sonne und sparen Sie bares Geld!
            <br />
            Mit unserem exklusiven Sommerangebot für Photovoltaikanlagen
            profitieren Sie doppelt:
            <br />
            Sie schonen die Umwelt und Ihren Geldbeutel.
          </p>

          <Link href="/angebot">
            <img
              src="sommeraktion_2024.jpg"
              alt="Image"
              className="max-w-full h-auto mt-3 rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aktuelles;
