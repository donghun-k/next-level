import { useState } from "react";

import { deleteCommentAction } from "@/actions/comment";
import useComments from "@/hooks/useComments";
import { Comment } from "@/models/comment";

const CommentItem = ({ comment }: { comment: Comment }) => {
  const { author, content, createdAt, id, postId } = comment;
  const { mutate } = useComments(postId);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteBtnClick = () => {
    setShowDeleteDialog(true);
  };

  const formAction = async (formData: FormData) => {
    const password = formData.get("password") as string;
    if (!password) {
      alert("Password is required");
      return;
    }
    try {
      await deleteCommentAction({
        commentId: id,
        postId,
        password,
      });
      alert("Comment deleted");
      mutate();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to delete comment";
      alert(message);
    } finally {
      setShowDeleteDialog(false);
    }
  };
  return (
    <li className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <p className="text-md font-semibold">{author}</p>
          <span className="mt-1 text-xs text-gray-500">{createdAt}</span>
        </div>
        <button
          onClick={handleDeleteBtnClick}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Delete
        </button>
      </div>
      <p className="text-gray-700 ">{content}</p>
      {showDeleteDialog && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-700/20">
          <form
            action={formAction}
            className="flex h-[140px] w-[200px] flex-col items-center justify-evenly rounded-md bg-gray-100 p-2 shadow-md"
          >
            <label
              htmlFor="password"
              className="text-xl font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="h-6 w-[160px] rounded-sm "
            />
            <div className="mt-2 flex gap-2">
              <button
                type="submit"
                className="rounded-sm bg-gray-500 px-4 py-1 text-sm text-white duration-300 hover:bg-gray-400"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => setShowDeleteDialog(false)}
                className="rounded-sm bg-gray-500 px-4 py-1 text-sm text-white duration-300 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </li>
  );
};

export default CommentItem;
