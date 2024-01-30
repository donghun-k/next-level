import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

interface SendMailParams {
  author: string;
  from: string;
  subject: string;
  text: string;
}
export const sendMail = async ({
  author,
  from,
  subject,
  text,
}: SendMailParams) => {
  const mailOption = {
    from: `${author} <${from}>`,
    to: process.env.AUTH_USER,
    subject: `from NEXT LEVEL - "${author}" sent you a message`,
    text: `『FROM』\n"${author}", ${from}\n\n『SUBJECT』\n${subject}\n\n『MESSAGE』\n${text}`,
  };
  return await transporter.sendMail(mailOption);
};

interface SendCommentNotificationParams {
  postId: string;
  author: string;
  content: string;
}

export const sendCommentNotification = async ({
  postId,
  author,
  content,
}: SendCommentNotificationParams) => {
  const mailOption = {
    from: `${author} <${process.env.AUTH_USER}>`,
    to: process.env.AUTH_USER,
    subject: `from NEXT LEVEL - "${author}" commented on your post`,
    text: `『POST』\n${process.env.NEXT_PUBLIC_URL}/post/${postId}\n\n『COMMENT』\n${content}`,
  };
  return await transporter.sendMail(mailOption);
};
