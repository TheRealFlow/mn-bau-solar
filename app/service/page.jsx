"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

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
    <div className="min-h-screen">
      {/* Hero Bereich */}
      <div className="container mx-auto text-center mt-20 ">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-xl font-semibold mb-4">
            Sie interessieren sich für eine Solaranlage?
          </h2>
          <div className="bg-gray-100 text-gray-700 rounded-lg p-4 mb-10">
            <p className=" mb-4">
              Wir setzen auf hochwertige Materialien und modernste Technologien,
              um Ihnen eine optimale Leistung und langfristige Zufriedenheit zu
              garantieren. Unsere erfahrenen Monteure installieren die Anlage
              fachgerecht und sorgen für eine reibungslose Inbetriebnahme.
            </p>
            <p className=" mb-4">
              Mit unseren Photovoltaikanlagen können Sie nicht nur Ihre
              Energiekosten senken, sondern auch einen wichtigen Beitrag zum
              Klimaschutz leisten. Photovoltaikanlagen sind eine
              umweltfreundliche Alternative zu herkömmlichen Stromquellen und
              tragen dazu bei, den CO2-Austoß zu reduzieren und unsere Umwelt zu
              schonen.
            </p>
            <p>
              <a href="/kontakt" className="text-orange-500 hover:underline">
                Kontaktieren
              </a>{" "}
              Sie uns noch heute und lassen Sie uns gemeinsam Ihre
              Energieversorgung auf eine nachhaltige und umweltfreundliche Art
              und Weise verbessern.
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
      <div className="max-w-4xl mx-auto py-6 px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Entdecken Sie das Mieterstrommodell
        </h2>
        <div className="bg-gray-100 text-gray-700 rounded-lg p-4 mb-10">
          <p className="mb-4">
            Möchten Sie Ihre Energiekosten senken, Ihren ökologischen Fußabdruck
            verkleinern und gleichzeitig Ihren Mietern ein attraktives Angebot
            machen? Dann ist unser Mieterstrommodell die perfekte Lösung für
            Sie!
          </p>
          <p className="mb-4">
            Mit uns haben Sie die Möglichkeit, Ihren eigenen Strom zu erzeugen
            und direkt an Ihre Mieter weiterzugeben. Dank modernster
            Solartechnologie und unserer umfangreichen Expertise in der
            Energiebranche können wir Ihnen ein maßgeschneidertes Konzept
            bieten, das sowohl ökonomisch als auch ökologisch überzeugt. Die
            Vorteile unseres Mieterstrommodells sind vielfältig. Zum einen
            können Sie als Vermieter die Energiekosten nachhaltig reduzieren und
            somit Ihre Rentabilität steigern. Gleichzeitig bieten Sie Ihren
            Mietern attraktive Tarife für sauberen und bezahlbaren Strom,
            wodurch sie von niedrigeren Energiekosten profitieren. Dies stärkt
            die Mieterbindung und steigert die Attraktivität Ihrer Immobilie.
          </p>
          <p className="mb-4">
            Unser eingespieltes Team von der MNBau & Solar unterstützt Sie in
            jeder Phase des Projekts. Von der Planung und Installation der
            Solaranlage bis hin zur Vertragsabwicklung und Abrechnung stehen wir
            Ihnen mit unserer Fachkompetenz zur Seite. Wir sorgen dafür, dass
            das Mieterstrommodell reibungslos funktioniert und Sie sich um
            nichts kümmern müssen. Zusätzlich zu den finanziellen und
            ökologischen Vorteilen bietet unser Mieterstrommodell eine
            nachhaltige Imagesteigerung für Ihr Unternehmen. Sie zeigen Ihren
            Mietern und der Öffentlichkeit, dass Sie Verantwortung für die
            Umwelt übernehmen und aktiv zum Klimaschutz beitragen.
          </p>
          <p className="mb-4">
            Verpassen Sie nicht die Chance, mit uns, dass innovative
            Mieterstrommodell zu nutzen. Lassen Sie uns gemeinsam eine
            nachhaltige Zukunft gestalten und profitieren Sie von den
            zahlreichen Vorzügen dieses wegweisenden Konzepts.
          </p>
          <p>
            <a href="/kontakt" className="text-orange-500 hover:underline">
              Kontaktieren
            </a>{" "}
            Sie uns noch heute und lassen Sie sich persönlich von unseren
            Experten beraten. Gemeinsam finden wir die ideale Lösung für Ihr
            Immobilienprojekt und setzen Ihre Vision vom Mieterstrom erfolgreich
            um.
          </p>
          <div className="space-y-4 mt-4">
            <Link href="/kontakt">
              <img
                  src="mieterstrom_projekt_01.JPG"
                  alt="Bild vom ersten Angebot"
                  className="w-full h-auto rounded-lg mb-4"
              />
            </Link>
            <Link href="/kontakt">
              <img
                  src="mieterstrom_projekt_02.JPG"
                  alt="Bild vom zweiten Angebot"
                  className="w-full h-auto rounded-lg mb-4"
              />
            </Link>
            <Link href="/kontakt">
              <img
                  src="mieterstrom_projekt_03.JPG"
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

export default Service;
