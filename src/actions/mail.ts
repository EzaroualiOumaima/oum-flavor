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

  try {
    const sendResult = await transport.sendMail({
      from: from,
      to :SMTP_EMAIL,
      subject,
      html: `
      <h1 style="color:red">${body} send by ${from} </h1>`,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
//ajouter pour la reservation 
  // try {
  //   const confirmation = await transport.sendMail({
  //     from: SMTP_EMAIL,
  //     to :from,
  //     subject: 'confirmation',
  //     html: `${body} send by ${SMTP_EMAIL}`,
  //   });
  //   console.log(confirmation);
  // } catch (error) {
  //   console.log(error);
  // }


}
