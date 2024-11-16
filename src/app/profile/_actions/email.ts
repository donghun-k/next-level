'use server';

import nodemailer from 'nodemailer';

const isProduction = process.env.NODE_ENV === 'production';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: isProduction,
  },
});

export type EmailData = {
  senderEmail: string;
  subject: string;
  message: string;
};

export const sendEmail = async ({
  senderEmail,
  subject,
  message,
}: EmailData) => {
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_GMAIL_USER,
    to: process.env.NEXT_PUBLIC_GMAIL_USER,
    subject: `New email from NEXT LEVEL: ${subject}`,
    html: `
      <h3>From</h3>
      <a href="mailto:${senderEmail}">${senderEmail}</a>
      <h3>Message</h3>
      <p>${message}</p>
    `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info.response);
      }
    });
  });
};

export const sendEmailAction = async (formData: FormData) => {
  try {
    const emailData: EmailData = {
      senderEmail: formData.get('from') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    await sendEmail(emailData);

    return { success: true, message: 'Email sent successfully.' };
  } catch (error) {
    return { success: false, message: 'Failed to send email.' };
  }
};
