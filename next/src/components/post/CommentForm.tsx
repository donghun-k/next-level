"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";

import { postCommentAction } from "@/actions/comment";

const CommentForm = () => {
  const { postId } = useParams();

  const formRef = useRef<HTMLFormElement>(null);

  const formAction = async (formdata: FormData) => {
    const name = formdata.get("name") as string;
    const password = formdata.get("password") as string;
    const content = formdata.get("content") as string;

    if (name.length < 2 || name.length > 10) {
      alert("Name must be between 2 and 10 characters!");
      return;
    }

    if (password.length < 8 || password.length > 20) {
      alert("Password must be between 8 and 20 characters!");
      return;
    }

    if (content.length < 10 || content.length > 100) {
      alert("Content must be between 10 and 100 characters!");
      return;
    }

    try {
      if (!postId) throw new Error("Post id not found!");
      formdata.append("postId", Array.isArray(postId) ? postId[0] : postId);
      await postCommentAction(formdata);
      formRef.current?.reset();
      alert("Comment sent successfully!");
    } catch (error) {
      alert("Comment sent failed!");
    }
  };

  return (
    <form ref={formRef} action={formAction} className="py-8">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            className="w-32 rounded-sm border-2 border-gray-300 px-1"
          />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            className="w-40 rounded-sm border-2 border-gray-300 px-1"
          />
        </div>
        <button
          type="submit"
          className="rounded-sm bg-gray-500 px-12 text-sm text-white duration-300 hover:bg-gray-400"
        >
          Post
        </button>
      </div>
      <textarea
        required
        name="content"
        placeholder="Enter your comment here"
        className="mt-4 h-32 w-full resize-none rounded-sm border-2 border-gray-300 p-1 text-gray-500"
      />
    </form>
  );
};

export default CommentForm;
