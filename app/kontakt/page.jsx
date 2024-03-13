"use client";

import React, { useState } from "react";

function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Logik für das Absenden des Formulars implementieren
    console.log(formData);
    // Optional: Formulardaten nach dem Absenden zurücksetzen
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="max-w-4xl mx-auto text-center py-6 px-4">
          <h2 className="text-xl font-semibold mb-4">Kontaktieren Sie uns</h2>
          <p className="text-gray-700">
            Treten Sie mit uns in Kontakt und lassen Sie uns gemeinsam Ihre
            Anliegen besprechen. Wir freuen uns darauf, von Ihnen zu hören!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-gray-100 rounded-lg py-6 px-4 mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="subject" className="block mb-1 font-semibold">
                Betreff
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Betreff Ihrer Nachricht"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block mb-1 font-semibold">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Ihre Nachricht an uns"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                rows={5}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold md:font-bold px-6 py-2 rounded-md mt-4 block mx-auto"
          >
            Absenden
          </button>
        </form>
      </div>
    </>
  );
}

export default Kontakt;
