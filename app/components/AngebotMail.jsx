import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

const AngebotMail = ({
  name,
  email,
  phone,
  address,
  roofType,
  owner,
  currentKWh,
  currentPrice,
  currentCharge,
  selects,
  attachments,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="mx-auto p-20 max-w-4xl">
            <Heading className="text-black text-2xl font-bold text-left mb-4">
              Angebotsanfrage
            </Heading>
            <Text className="text-black text-lg leading-6 mb-8">
              Der Absender hat ein Angebot angefordert und folgende Daten zur
              Verfügung gestellt:
            </Text>

            <Hr className="my-6 mx-0 w-full" />
            <div className="text-[#666666] text-lg ">
              <div className="mb-2">
                <strong>Name:</strong> {name}
              </div>
              <div className="mb-2">
                <strong>E-Mail:</strong> {email}
              </div>
              <div className="mb-2">
                <strong>Telefonnummer:</strong> {phone}
              </div>
              <div className="mb-2">
                <strong>Adresse:</strong> {address}
              </div>
              <div className="mb-2">
                <strong>Dachtyp:</strong> {roofType}
              </div>
              <div className="mb-2">
                <strong>Eigentümer:</strong> {owner}
              </div>
              <div className="mb-2">
                <strong>Aktueller Stromverbrauch (kWh):</strong> {currentKWh}
              </div>
              <div className="mb-2">
                <strong>Aktueller Strompreis (€/kWh):</strong> {currentPrice}
              </div>
              <div className="mb-2">
                <strong>Aktuelle Grundgebühr (€):</strong> {currentCharge}
              </div>
              <div className="mb-2">
                <strong>Themen von Interesse:</strong>{" "}
                {selects.length > 0
                  ? selects.join(", ")
                  : "Keine Themen ausgewählt"}
              </div>
            </div>

            <Hr className="mt-6 mx-0 w-full" />
            <Text className="text-[#666666]">
              Der Absender hat folgende Bilder hochgeladen:
            </Text>
            {attachments.map((attachment, index) => (
              <div key={index} className="mt-4">
                <Text className="text-[#666666]">
                  <strong>{attachment.filename}</strong>
                </Text>
                <img
                  src={`data:image/jpeg;base64,${attachment.content}`}
                  alt={attachment.filename}
                  className="w-full mt-2 rounded-md"
                />
              </div>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AngebotMail;
