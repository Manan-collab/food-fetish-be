import { createTransport } from "nodemailer";

export const sendMail = async (
  to: string | string[],
  subject: string,
  message: string
) => {
  try {
    const transporter = createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.ETHEREAL_EMAIL,
        pass: process.env.ETHEREAL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      to,
      subject,
      text: message,
      from: process.env.FROM_EMAIL,
    });

    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
