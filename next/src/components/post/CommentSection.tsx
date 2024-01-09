import { getComments } from "@/service/comment";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const CommentSection = async ({ postId }: { postId: string }) => {
  const comments = await getComments(postId);
  return (
    <section className="flex w-full flex-col gap-2">
      <h3 className="w-full border-b-2 border-b-gray-100 pb-2 text-2xl font-bold text-gray-700">
        {comments?.length ?? 0}{" "}
        {comments?.length === 1 ? "Comment" : "Comments"}
      </h3>
      <CommentList comments={comments} />
      <CommentForm />
    </section>
  );
};

export default CommentSection;
