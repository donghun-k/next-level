import { FormEventHandler, use } from "react";
import { useParams } from "next/navigation";

import { commentAction } from "@/actions";

const CommentForm = () => {
  const { postId } = useParams();

  return (
    <form
      action={async (formdata) => {
        try {
          if (!postId) throw new Error("Post id not found!");
          formdata.append("postId", Array.isArray(postId) ? postId[0] : postId);
          console.log(formdata);
          await commentAction(formdata);
          alert("Comment sent successfully!");
        } catch (error) {
          alert("Comment sent failed!");
        }
      }}
      className="py-8"
    >
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
