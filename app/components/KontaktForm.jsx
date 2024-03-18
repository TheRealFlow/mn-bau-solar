"use client";

import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(formData) {
    await fetch("/api/kontaktMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        subject: formData.subject,
        message: formData.message,
      }),
    }).then(() => {
      alert("Ihre Nachricht wurde erfolgreich versendet.");
    });

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl md:mx-auto mx-4 bg-gray-100 rounded-lg py-6 px-4 mb-10"
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
        </div>
        <div className="col-span-2">
          <label htmlFor="subject" className="block mb-1 font-semibold">
            Betreff *
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Betreff Ihrer Nachricht"
            {...register("subject")}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="message" className="block mb-1 font-semibold">
            Nachricht *
          </label>
          <textarea
            id="message"
            placeholder="Ihre Nachricht an uns"
            {...register("message")}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
            rows={5}
            minLength={10}
            maxLength={1000}
          ></textarea>
          <p className="text-sm text-gray-500 mt-1 text-right">
            (max. 1000 Zeichen)
          </p>
        </div>
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold md:font-bold px-6 py-2 rounded-md mt-4 block mx-auto"
      >
        Absenden
      </button>
    </form>
  );
}
