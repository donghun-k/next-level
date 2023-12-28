"use server";

import { revalidateTag } from "next/cache";

import { postComment } from "@/service/comment";

export const postCommentAction = async (formData: FormData) => {
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

  const result = await postComment({ postId, author, password, content });
  revalidateTag(postId);
  return result;
};
