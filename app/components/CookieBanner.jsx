"use client";

import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cookiesAccepted = sessionStorage.getItem("cookiesAccepted");
      setAcceptedCookies(
        cookiesAccepted === "true" || cookiesAccepted === "functional"
      );
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized && !acceptedCookies) {
      setBannerVisible(true);
    }
  }, [initialized, acceptedCookies]);

  const acceptAllCookies = () => {
    sessionStorage.setItem("cookiesAccepted", "true");
    setAcceptedCookies(true);
    setBannerVisible(false);
  };

  const acceptFunctionalCookies = () => {
    sessionStorage.setItem("cookiesAccepted", "functional");
    setAcceptedCookies(true);
    setBannerVisible(false);
  };

  const rejectCookies = () => {
    sessionStorage.setItem("cookiesAccepted", "false");
    setAcceptedCookies(false);
    setBannerVisible(false);
  };

  if (!bannerVisible || acceptedCookies) {
    return null;
  }
  return (
    <div
      id="cookie-banner"
      className="bg-gray-800 text-white p-3 mx-2 fixed bottom-2 md:left-1/2 md:transform md:-translate-x-1/2 rounded-lg z-50"
    >
      <div className="mb-3 text-center md:text-left">
        <h3 className="text-lg font-bold mb-1">Cookie-Hinweis</h3>
        <p className="text-sx md:text-sm mb-2">
          Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.
          <br />
          Durch die Nutzung dieser Website stimmen Sie unserer{" "}
          <a
            className="text-orange-500 hover:text-orange-600 font-semibold"
            href="/datenschutz"
          >
            Datenschutzerklärung
          </a>{" "}
          zu.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <button
          onClick={acceptAllCookies}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-2 rounded mb-2 md:mb-0 md:mr-2 uppercase text-xs"
        >
          Alle Cookies akzeptieren
        </button>
        <button
          onClick={acceptFunctionalCookies}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-2 rounded mb-2 md:mb-0 md:mr-2 uppercase text-xs"
        >
          Nur funktionale Cookies akzeptieren
        </button>
        <button
          onClick={rejectCookies}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-2 rounded uppercase text-xs"
        >
          Cookies ablehnen
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
