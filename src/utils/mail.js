import nodemailer from 'nodemailer';
import { MAIL_PASS, MAIL_PORT, MAIL_SERVICE, MAIL_USER, NODE_ENV } from '../constants/constants.js';
import ApiError from './apiError';
import Mailgen from 'mailgen';
async function sendMail(options) {
  // Create a test account or replace with real credentials.
  const transporter = nodemailer.createTransport({
    host: MAIL_SERVICE,

    port: MAIL_PORT,
    secure: NODE_ENV === 'development' ? false : true,
    auth: {
      user: MAIL_USER,

      pass: MAIL_PASS,
    },
  });

  const { emailBody, emailText } = mailgenConfig(options.mailFormat);

  // Wrap in an async IIFE so we can use await.

  const mail = await transporter.sendMail({
    from: '"Nike" <conatct@nike.com>',
    to: options.email,
    subject: options.subject,
    text: emailText, // plain‑text body
    html: emailBody, // HTML body
  });
  try {
    await mail();
  } catch (error) {
    throw ApiError.serverError(error.message);
  }
}

function mailgenConfig(mailFormat) {
  // Configure mailgen by setting a theme and your product info
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      // Appears in header & footer of e-mails
      name: 'Nike',
      link: 'https://nike.js/',
      // Optional product logo
      // logo: 'https://mailgen.js/img/logo.png'
    },
  });

  const emailBody = mailGenerator.generate(mailFormat);

  // Generate the plaintext version of the e-mail (for clients that do not support HTML)
  const emailText = mailGenerator.generatePlaintext(mailFormat);
  return { emailBody, emailText };
}

function verifyEmail(name, verifyUrl) {
 return {
    body: {
      name: name,
      intro: "Welcome to Nike! We're very excited to haveyou on board.",
      action: {
        instructions: 'To get started with Nike,please click here:',
        button: {
          color: '#228C66',
          text: 'Confirm your account',
          link: verifyUrl,
        },
      },
      outro: "Need help,or have question? just reply to this email, we'd love to help.",
    },
  };

}

export { sendMail, verifyEmail};
