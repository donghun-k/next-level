import { revalidatePath } from "next/cache";
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
    subject: "from NEXT LEVEL - " + subject,
    text,
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
    from: `${author}`,
    to: process.env.AUTH_USER,
    subject: `New comment from ${author}`,
    text: `${process.env.NEXT_PUBLIC_URL}/post/${postId}\n\n" ${content} "`,
  };
  return await transporter.sendMail(mailOption);
};
