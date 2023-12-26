"use client";

import { useParams, usePathname } from "next/navigation";

import useComments from "@/hooks/useComments";

import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const CommentSection = () => {
  const { postId } = useParams();
  const { data: comments } = useComments(
    Array.isArray(postId) ? postId[0] : postId,
  );
  return (
    <section className="flex w-full flex-col gap-2">
      <h3 className="w-full border-b-2 border-b-gray-100 pb-2 text-2xl font-bold text-gray-700">
        {comments?.length ?? 0}{" "}
        {comments?.length === 1 ? "Comment" : "Comments"}
      </h3>
      <ul className="flex flex-col gap-3">
        {comments?.length === 0 && (
          <p className="flex w-full items-center justify-center p-8 text-lg text-gray-500">
            There are no comments yet on this post.
          </p>
        )}
        {comments?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
      <CommentForm />
    </section>
  );
};

export default CommentSection;
