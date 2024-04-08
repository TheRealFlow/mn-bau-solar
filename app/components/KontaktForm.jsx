"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const [messageCount, setMessageCount] = useState(0);

  async function onSubmit(formData) {
    try {
      setIsLoading(true);

      await fetch("/api/kontaktMail", {
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
    } finally {
      setIsLoading(false);
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
              {...register("message", {
                onChange: (e) => setMessageCount(e.target.value.length),
              })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-600"
              rows={5}
              minLength={10}
              maxLength={1000}
            ></textarea>
            <p className="text-sm text-gray-500 mt-1 text-right">
              ( {messageCount} / 1000 Zeichen )
            </p>
          </div>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold md:font-bold px-8 py-2 rounded-md mt-8 block mx-auto"
        >
          {isLoading ? "Sendet.." : "Anfrage senden"}
        </button>
      </form>
    </>
  );
}
