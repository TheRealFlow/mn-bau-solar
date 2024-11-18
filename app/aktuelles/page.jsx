import Link from "next/link";

function Aktuelles() {
  return (
    <div className="container min-h-screen mx-auto text-center mt-20">
      <div className="max-w-4xl mx-auto py-6 px-4">
        <h2 className="text-xl font-semibold mb-2">Neuigkeiten und Angebote</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="space-y-4 mt-4">
            <Link href="/angebot">
              <img
                src="angebote_new_1.jpg"
                alt="Bild vom ersten Angebot"
                className="w-full h-auto rounded-lg mb-4"
              />
            </Link>
            <Link href="/angebot">
              <img
                src="angebote_new_2.jpg"
                alt="Bild vom zweiten Angebot"
                className="w-full h-auto rounded-lg mb-4"
              />
            </Link>
            <Link href="/angebot">
              <img
                src="angebote_new_3.jpg"
                alt="Bild vom dritten Angebot"
                className="w-full h-auto rounded-lg mb-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aktuelles;
