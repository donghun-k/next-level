"use server";

import { sendMail } from "@/services/mail";

export const sendMailAction = async (formData: FormData) => {
  const author = formData.get("name");
  const from = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("message");

  if (
    !author ||
    !from ||
    !subject ||
    !text ||
    typeof author !== "string" ||
    typeof from !== "string" ||
    typeof subject !== "string" ||
    typeof text !== "string"
  )
    throw new Error("Invalid form data");

  return await sendMail({ author, from, subject, text });
};
