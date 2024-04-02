import { Resend } from "resend";
import { Response } from "next/server";
import AngebotMail from "../../components/AngebotMail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const {
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
  } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: process.env.EMAIL_ADDRESS,
      subject: `Neue Angebotsanfrage von ${name}`,
      react: AngebotMail({
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
        attachments: attachments.map((attachment) => ({
          filename: attachment.name,
          content: attachment.content,
        })),
      }),
    });

    console.log(data);
    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json(error);
  }
}
