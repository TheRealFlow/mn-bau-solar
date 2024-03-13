"use client";

import ImageCarousel from "../components/ImageCarousel";

function Projekte() {
  return (
    <>
      <div className="container mx-auto text-center mt-20">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-xl font-semibold mb-4">
            Unsere Photovoltaik und Solaranlagen
          </h2>

          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-700 mb-4">
              Erneuerbare Energien nutzen in geringen Teilen die natürlichen
              Energieströme auf der Erde. Zur Regenerierung steht die
              unerschöpfliche Kraft der Sonne bereit. Alles Leben auf der Erde
              bezieht seine Energie aus der Kraft der Sonne. So wachsen Pflanzen
              mit Hilfe von Sonnenstrahlung und bauen Biomasse auf. Auch treibt
              die Sonne das Wetter an, sorgt für Wind und Niederschläge und
              schafft so die Voraussetzungen für Wind- und Wasserkraft.
            </p>
            <p className="text-gray-700 mb-4">
              Die Sonnenergie lässt sich auch vielfältig direkt nutzen.
              Solarzellen in Photovoltaikanlagen, solarthermische Kraftwerke und
              Sonnenkollektoren nutzen die Sonnenstrahlung ohne Umwege und
              wandeln die Strahlungsenergie in Strom oder Wärme um.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-8 px-4">
          <h3 className="text-lg font-semibold">
            Hier stellen wir Ihnen ein Teil unserer bereit gebauten PV-Anlagen
            vor.
          </h3>
          <ImageCarousel />
        </div>
      </div>
    </>
  );
}

export default Projekte;
