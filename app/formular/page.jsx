import AngebotForm from "../components/AngebotForm";

function Kontakt() {
  return (
    <div className="container min-h-screen mx-auto mt-20">
      <div className="max-w-4xl mx-auto text-center py-6 px-4">
        <h2 className="text-xl font-semibold mb-4">
          Holen Sie sich jetzt Ihr unverbindliches kostenfreies Angebot
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-100 text-gray-700 rounded-lg py-6 px-4">
          <p className=" mb-4">
            Gerne berechnen wir Ihren tatsächlichen Bedarf anhand der von Ihnen
            übermittelten Daten.
          </p>
          <p className=" mb-4">
            Beantworten Sie dazu in dem folgenden Formular einige Fragen.
            Anschließend haben Sie die Möglichkeit, Ihre ganz persönliche
            Auswertung zu erhalten. Diese wird Ihnen von uns per E-Mail
            zugesandt.
          </p>
          <p>
            Auf Wunsch belegen wir mit Hilfe unserer Software Ihr Dach und
            berechnen bei Bedarf einen Speicher mit ein. Dazu laden Sie einfach
            ein Bild Ihrer Dachfläche hoch.
          </p>
        </div>
      </div>

      <AngebotForm />

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
  );
}

export default Kontakt;
