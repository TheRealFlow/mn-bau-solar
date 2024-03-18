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
    //image, // Assuming you're receiving the image as a file in the request body
  } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: process.env.EMAIL_ADDRESS,
      subject: `Neue Angebotsanfrage`,
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
      }),
      //   attachments: [
      //     {
      //       filename: image.name, // Assuming image is a file object with a 'name' property
      //       content: image.data.toString("base64"), // Assuming 'image' is a Buffer
      //       encoding: "base64",
      //     },
      //   ],
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
