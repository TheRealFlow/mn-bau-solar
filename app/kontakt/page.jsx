import KontaktForm from "../components/KontaktForm";

function Kontakt() {
  return (
    <div className="container min-h-screen mx-auto mt-20">
      <div className="max-w-4xl mx-auto text-center py-6 px-4">
        <h2 className="text-xl font-semibold mb-4">Kontaktieren Sie uns</h2>
        <p className="text-gray-700">
          Treten Sie mit uns in Kontakt und lassen Sie uns gemeinsam Ihre
          Anliegen besprechen. Wir freuen uns darauf, von Ihnen zu hören!
        </p>
      </div>
      <KontaktForm />
    </div>
  );
}

export default Kontakt;
