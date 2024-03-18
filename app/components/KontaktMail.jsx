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

const MessageUsEmail = ({ name, email, phone, address, subject, message }) => {
  const previewText = `Neue Nachricht über das Kontaktformular.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <Heading className="text-black text-[20px] font-normal text-left">
              <strong>{subject},</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              {message}
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
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessageUsEmail;
