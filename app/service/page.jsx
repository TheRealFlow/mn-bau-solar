"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

function Service() {
  const navigate = useRouter();
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    {
      title: "Bedarfsanalyse",
      content:
        "Zunächst werden wir Ihre individuellen Anforderungen und den Energiebedarf Ihres Hauses oder Unternehmens analysieren. Basierend auf diesen Informationen können wir die optimale Größe und Konfiguration der Solaranlage bestimmen.",
      icon: <FaChevronDown />,
    },
    {
      title: "Planung und Design",
      content:
        "Unsere erfahrenen Ingenieure werden eine detaillierte Planung und Design der Solaranlage erstellen. Dabei berücksichtigen wir Faktoren wie die Dachausrichtung, den verfügbaren Platz und die Sonneneinstrahlung, um die maximale Energieerzeugung zu gewährleisten.",
      icon: <FaChevronDown />,
    },
    {
      title: "Auswahl der Komponenten",
      content:
        "Wir arbeiten nur mit erstklassigen Herstellern zusammen, um Ihnen qualitativ hochwertige Komponenten für Ihre Solaranlage anzubieten. Dies umfasst Solarmodule, Wechselrichter, Montagesysteme und weitere Zubehörteile.",
      icon: <FaChevronDown />,
    },
    {
      title: "Installation",
      content:
        "Unser erfahrenes Team von Solarinstallateuren wird die Solaranlage fachgerecht auf Ihrem Dach oder Grundstück installieren. Wir legen großen Wert auf eine präzise und effiziente Solarmontage, um die optimale Leistung der Anlage sicherzustellen.",
      icon: <FaChevronDown />,
    },
    {
      title: "Inbetriebnahme und Überwachung",
      content:
        "Nach der Installation nehmen wir die Solaranlage in Betrieb und überprüfen, ob sie einwandfrei funktioniert. Außerdem bieten wir Ihnen eine Überwachungslösung an, mit der Sie den Energieertrag Ihrer Anlage in Echtzeit verfolgen können.",
      icon: <FaChevronDown />,
    },
    {
      title: "Wartung und Service",
      content:
        "Wir bieten regelmäßige Wartungs- und Servicedienstleistungen für Ihre Solaranlage an, um sicherzustellen, dass sie langfristig effizient und zuverlässig arbeitet. Bei Bedarf stehen wir Ihnen auch für Reparaturen und technische Unterstützung zur Verfügung.",
      icon: <FaChevronDown />,
    },
    {
      title: "Anmeldeverfahren",
      content:
        "Wir übernehmen für Sie alle EVU -und Markstammdatenregisteranmeldungen",
      icon: <FaChevronDown />,
    },
  ];

  const handleOfferClick = (index) => {
    setSelectedOffer(selectedOffer === index ? null : index);
  };

  return (
    <>
      {/* Hero Bereich */}
      <div className="container mx-auto text-center mt-20">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-xl font-semibold mb-4">
            Sie interessieren sich für eine Solaranlage?
          </h2>
          <div className="bg-gray-100 text-gray-700 rounded-lg p-4 mb-10">
            <p className=" mb-4">
              Gerne berechnen wir Ihren tatsächlichen Bedarf anhand der von
              Ihnen übermittelten Daten.
            </p>
            <p className=" mb-4">
              Beantworten Sie dazu auf den folgenden Seiten einige Fragen.
              Anschließend haben Sie die Möglichkeit, Ihre ganz persönliche
              Auswertung zu erhalten. Diese wird Ihnen von uns per E-Mail
              zugesandt.
            </p>
            <p>
              Auf Wunsch belegen wir mit Hilfe unserer Software Ihr Dach und
              berechnen bei Bedarf einen Speicher mit ein. Dazu laden Sie
              einfach ein Bild Ihrer Dachfläche hoch.
            </p>
          </div>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate.push("formular")}
          >
            Holen Sie sich jetzt Ihr unverbindliches, kostenfreies Angebot
          </button>
        </div>
      </div>

      {/* Akkordeon */}
      <div className="max-w-3xl mx-auto my-2 px-4">
        <h2 className="text-xl text-center font-semibold mb-4">
          Unser Angebot beinhaltet:
        </h2>
        {offers.map((offer, index) => (
          <div key={index} className="mb-4">
            <button
              className={`flex justify-between items-center w-full text-left bg-gray-200 hover:bg-orange-500 text-gray-800 font-semibold py-2 px-4 rounded ${
                selectedOffer === index
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : ""
              }`}
              onClick={() => handleOfferClick(index)}
            >
              {offer.title}
              {offer.icon}
            </button>
            {selectedOffer === index && (
              <div className="flex justify-between mt-2 border-l-2 border-green-600 pl-2">
                {offer.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Schlusstext */}
      <div className="max-w-4xl text-center mx-auto py-6 px-4">
        <div className="bg-gray-100 text-gray-700 rounded-lg p-4">
          <p className="mb-4">
            Bitte beachten Sie, dass der endgültige Preis des Angebots von
            verschiedenen Faktoren abhängt, einschließlich der Größe der
            Solaranlage, der gewählten Komponenten und des Umfangs der
            Installation. Ausgenommen hiervon sind unsere Komplettpreisangebote.
          </p>
          <p className="mb-4">
            <a href="/kontakt" className="text-orange-500 hover:underline">
              Kontaktieren
            </a>{" "}
            Sie uns noch heute, um Ihr individuelles Angebot für die Solaranlage
            zu erhalten.
          </p>
          <p>
            Wir freuen uns darauf, Ihnen bei Ihrem umweltfreundlichen
            Energieprojekt zu helfen.
          </p>
        </div>
      </div>
    </>
  );
}

export default Service;
