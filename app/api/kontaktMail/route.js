import { Resend } from "resend";
import { Response } from "next/server";
import KontaktMail from "../../components/KontaktMail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, phone, address, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Kontaktformular <info@mnbausolar.de",
      to: process.env.EMAIL_ADDRESS,
      subject: `Neue Nachricht über das Kontaktformular.`,
      react: KontaktMail({ name, email, phone, address, subject, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
