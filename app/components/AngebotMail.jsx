import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
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
  image,
}) => {
  const previewText = `Angebot unverbindlich anfordern`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Heading className="text-black text-[20px] font-normal text-left">
              <strong>Angebot unverbindlich anfordern</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Vielen Dank für Ihr Interesse. Bitte finden Sie unten die Details
              zur Anfrage:
            </Text>

            <Hr className="my-[16px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px]">
              Der Absender hat folgende Kontaktdaten hinterlassen:
            </Text>
            <Text className="text-[#666666] text-[12px]">Name: {name}</Text>
            <Text className="text-[#666666] text-[12px]">E-Mail: {email}</Text>
            <Text className="text-[#666666] text-[12px]">
              Telefonnummer: {phone}
            </Text>
            <Text className="text-[#666666] text-[12px]">
              Adresse: {address}
            </Text>
            <Text className="text-[#666666] text-[12px]">
              Dachtyp: {roofType}
            </Text>
            <Text className="text-[#666666] text-[12px]">
              Eigentümer: {owner}
            </Text>
            <Text className="text-[#666666] text-[12px]">
              Aktueller Stromverbrauch (kWh): {currentKWh}
            </Text>
            <Text className="text-[#666666] text-[12px]">
              Aktueller Strompreis (€/kWh): {currentPrice}
            </Text>
            <Text className="text-[#666666] text-[12px]">
              Aktuelle Grundgebühr (€): {currentCharge}
            </Text>
            <Text className="text-[#666666] text-[12px]">
              Themen von Interesse: {selects.join(", ")}
            </Text>

            <Hr className="my-[16px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px]">
              Der Absender hat folgendes Bild hochgeladen:
            </Text>
            <img
              src={`data:image/jpeg;base64,${image}`}
              alt="Hochgeladenes Bild"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AngebotMail;
