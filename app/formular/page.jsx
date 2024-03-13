"use client";

import React, { useState } from "react";

function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    roofType: "",
    currentKWh: "",
    currentPrice: "",
    currentCharge: "",
    owner: "",
    selects: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "selects") {
      // Überprüfen, ob die Checkbox geprüft oder abgewählt wurde
      const updatedSelects = checked
        ? [...formData.selects, value]
        : formData.selects.filter((item) => item !== value);
      setFormData({ ...formData, [name]: updatedSelects });
    } else if (name === "image") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      roofType: "",
      currentKWh: "",
      currentPrice: "",
      currentCharge: "",
      owner: "",
      selects: [],
      image: null,
    });
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    // Formulardaten absenden
    fetch("/submit-url", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    // Optional: Formulardaten nach dem Absenden zurücksetzen
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      roofType: "",
      currentKWh: "",
      currentPrice: "",
      currentCharge: "",
      owner: "",
      selects: [],
      image: null,
    });
  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="max-w-4xl mx-auto text-center py-6 px-4">
          <h2 className="text-xl font-semibold mb-4">
            Holen Sie sich jetzt Ihr unverbindliches kostenfreies Angebot
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-100 text-gray-700 rounded-lg py-6 px-4">
            <p className=" mb-4">
              Gerne berechnen wir Ihren tatsächlichen Bedarf anhand der von
              Ihnen übermittelten Daten.
            </p>
            <p className=" mb-4">
              Beantworten Sie dazu in dem folgenden Formular einige Fragen.
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
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-gray-100 rounded-lg py-6 px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Vor- und Nachname"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="max@mustermann.de"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-semibold">
                Telefonnummer
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="0123 4567890"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-1 font-semibold">
                Adresse
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Straße, Hausnummer, PLZ, Ort"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="roofType" className="block mb-1 font-semibold">
                Dachtyp
              </label>
              <select
                id="roofType"
                name="roofType"
                value={formData.roofType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Bitte auswählen</option>
                <option value="Satteldach">Satteldach</option>
                <option value="Flachdach">Flachdach</option>
                <option value="Pultdach">Pultdach</option>
                <option value="Tannendach">Zeltdach</option>
                <option value="Krüppelwalmdach">Mansarddach</option>
                <option value="Walmdach">Walmdach</option>
                <option value="Bogendach">Schmetterlingsdach</option>
                <option value="Nurdach">Faltwerkdach</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>

            <div>
              <label htmlFor="owner" className="block mb-1 font-semibold">
                Eigentümer
              </label>
              <select
                id="owner"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Bitte auswählen</option>
                <option value="Eigentümer">Eigentümer</option>
                <option value="Mieter">Mieter</option>
              </select>
            </div>

            <div>
              <label htmlFor="currentKWh" className="block mb-1 font-semibold">
                Aktueller Stromverbrauch (kWh)
              </label>
              <input
                type="text"
                id="currentKWh"
                name="currentKWh"
                placeholder="z.B. 3500"
                value={formData.currentKWh}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="currentPrice"
                className="block mb-1 font-semibold"
              >
                Aktueller Strompreis (€/kWh)
              </label>
              <input
                type="text"
                id="currentPrice"
                name="currentPrice"
                placeholder="z.B. 0,30"
                value={formData.currentPrice}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="currentCharge"
                className="block mb-1 font-semibold"
              >
                Aktuelle Grundgebühr (€)
              </label>
              <input
                type="text"
                id="currentCharge"
                name="currentCharge"
                placeholder="z.B. 1050"
                value={formData.currentCharge}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="selects" className="block mb-1 font-semibold">
                Ist eins oder mehrere der folgenden Themen für Sie relevant?
              </label>
              <div>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="selects"
                    value="Stromspeicher"
                    checked={formData.selects.includes("Stromspeicher")}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Stromspeicher</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="selects"
                    value="E-Fahrzeug"
                    checked={formData.selects.includes("E-Fahrzeug")}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Laden eines E-Fahrzeugs</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="selects"
                    value="Stromheizung"
                    checked={formData.selects.includes("Stromheizung")}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">
                    Heizen mit Strom (Wärmepumpe, Infrarot, Flächenspeicher)
                  </span>
                </label>
              </div>
            </div>

            <div className="col-span-2">
              <label htmlFor="image" className="block my-3 font-semibold">
                Laden Sie hier Bilder Ihres Daches und sowie die Vorder und
                Rückseite Ihres Dachsteines hoch. Gerne auch vorab schon Bilder
                vom Zählerschrank (offen und geschlossen),
                Potentialausgleichschiene und Hauptanschlusskasten.
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-1/2 px-4 py-3 mt-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold md:font-bold px-8 py-2 rounded-md mt-8 block mx-auto"
          >
            Angebot unverbindlich anfordern
          </button>
        </form>

        <div className="max-w-4xl mx-auto text-center py-6 px-4">
          <div className="bg-gray-100 text-gray-700 rounded-lg p-4">
            <p>
              Bitte beachten Sie, dass der endgültige Preis des Angebots von
              verschiedenen Faktoren abhängt, einschließlich der Größe der
              Solaranlage, der gewählten Komponenten und des Umfangs der
              Installation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kontakt;
