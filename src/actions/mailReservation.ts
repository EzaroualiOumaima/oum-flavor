"use server"

import nodemailer from "nodemailer";

export async function sendMail({
  from,
  name,
  subject,
  body,
}: {
  from: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  // Send email with reservation details to the restaurant owner
  try {
    const sendResult = await transport.sendMail({
      from: from,
      to: SMTP_EMAIL,
      subject: "New Reservation",
      html: `You have received a new reservation from ${name} and email : ${from}.`,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }

  // Send confirmation email to the user who made the reservation
  try {
    const confirmation = await transport.sendMail({
      from: SMTP_EMAIL,
      to: from,
      subject: "Reservation Confirmation",
      html: `${body} send by ${SMTP_EMAIL}`,
    });
    console.log(confirmation);
  } catch (error) {
    console.log(error);
  }
}
