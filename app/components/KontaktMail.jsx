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

const KontaktMail = ({ name, email, phone, address, subject, message }) => {
  const previewText = `Neue Nachricht über das Kontaktformular.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="mx-auto p-20 max-w-4xl">
            <Heading className="text-black text-2xl font-bold text-left mb-4">
              <strong>{subject},</strong>
            </Heading>
            <Text className="text-black text-xl leading-6 mb-8">{message}</Text>

            <Hr className="my-6 mx-0 w-full" />
            <Text className="text-[#666666] text-lg font-bold">
              Der Absender hat folgende Informationen zur Verfügung gestellt:
            </Text>
            <div className="text-[#666666] text-lg">
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
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default KontaktMail;
