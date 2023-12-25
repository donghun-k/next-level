"use server";

import { sendMail } from "@/service/mail";

import { postComment } from "./service/comment";

export const mailAction = async (formData: FormData) => {
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

export const commentAction = async (formData: FormData) => {
  const postId = formData.get("postId");
  const author = formData.get("name");
  const password = formData.get("password");
  const content = formData.get("content");

  if (
    !postId ||
    !author ||
    !password ||
    !content ||
    typeof postId !== "string" ||
    typeof author !== "string" ||
    typeof password !== "string" ||
    typeof content !== "string"
  )
    throw new Error("Invalid form data");

  return await postComment({ postId, author, password, content });
};
