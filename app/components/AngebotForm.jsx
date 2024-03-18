"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AngebotForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(formData) {
    try {
      await fetch("/api/angebotMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }).then(() => {
        toast.success(
          "Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen."
        );
        reset();
      });
      setMessageCount(0);
    } catch (error) {
      toast.error(
        "Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
      );
    }
  }

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl md:mx-auto bg-gray-100 rounded-lg py-6 px-4 mx-4"
      >
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name *
              </label>
              <input
                type="text"
                id="name"
                placeholder="Vor- und Nachname"
                {...register("name")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
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
                placeholder="max@mustermann.de"
                {...register("email")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-semibold">
                Telefonnummer
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="0123 4567890"
                minLength={10}
                {...register("phone")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-1 font-semibold">
                Adresse
              </label>
              <input
                type="text"
                id="address"
                placeholder="Straße, Hausnummer, PLZ, Ort"
                {...register("address")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
              />
            </div>

            <div>
              <label htmlFor="roofType" className="block mb-1 font-semibold">
                Dachtyp
              </label>
              <select
                id="roofType"
                {...register("roofType")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
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
                {...register("owner")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
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
                type="number"
                id="currentKWh"
                placeholder="z.B. 3500"
                {...register("currentKWh")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
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
                type="number"
                id="currentPrice"
                placeholder="z.B. 0,30"
                {...register("currentPrice")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
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
                type="number"
                id="currentCharge"
                placeholder="z.B. 1050"
                {...register("currentCharge")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label htmlFor="selects" className="block mb-1 font-semibold">
              Ist eins oder mehrere der folgenden Themen für Sie relevant?
            </label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  {...register("selects")}
                  className="form-checkbox"
                />
                <span className="ml-2">Stromspeicher</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  {...register("selects")}
                  className="form-checkbox"
                />
                <span className="ml-2">Laden eines E-Fahrzeugs</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  {...register("selects")}
                  className="form-checkbox"
                />
                <span className="ml-2">
                  Heizen mit Strom (Wärmepumpe, Infrarot, Flächenspeicher)
                </span>
              </label>
            </div>
          </div>

          {/* <div className="col-span-2">
            <label htmlFor="image" className="block my-3 font-semibold">
              Laden Sie hier Bilder (max. 20MB) Ihres Daches und sowie die
              Vorder und Rückseite Ihres Dachsteines hoch. Gerne auch vorab
              schon Bilder vom Zählerschrank (offen und geschlossen),
              Potentialausgleichschiene und Hauptanschlusskasten.
            </label>
            <input
              type="file"
              id="image"
              {...register("image")}
              onChange={handleImageChange}
              accept="image/*"
              className="w-full md:w-1/2 px-4 py-3 mt-2 border border-gray-300 rounded-md"
            />
          </div> */}
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold md:font-bold px-8 py-2 rounded-md mt-8 block mx-auto"
        >
          Angebot unverbindlich anfordern
        </button>
      </form>
    </>
  );
}