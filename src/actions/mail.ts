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
  // Création d'un objet de transport Nodemailer avec les informations de connexion

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
    // Vérification du transport pour s'assurer qu'il est correctement configuré

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
      subject:'Welcome to OumFlavor',
      html: `
      <div
                style="
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                  font-family: Arial, sans-serif;
                "
              >
              <h2 style=" font-weight: 800; font-size: 30px;">Contact:</h2>
                <div class="details" style="margin-top: 20px">
                  <p style="font-weight: 600">
                    <strong style="color: red">From:</strong> ${name}
                  </p>
                  <p style="font-weight: 600" ><strong style="color: red">Message:</strong> ${body}</p>
                </div>
              </div>
      
      `,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }



}
