"use client";

import { Comment } from "@/models/comment";

interface Props {
  comment: Comment;
  openDeleteDialog: ({
    commentId,
    postId,
  }: {
    commentId: string;
    postId: string;
  }) => void;
}

const CommentItem = ({ comment, openDeleteDialog }: Props) => {
  const { author, content, createdAt, id: commentId, postId } = comment;

  const handleDeleteBtnClick = () => {
    openDeleteDialog({ commentId, postId });
  };

  return (
    <li className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between py-2 sm:py-4">
        <div className="flex items-center gap-4">
          <p className="text-sm font-semibold sm:text-base">{author}</p>
          <span className="mt-1 text-xs text-gray-500">{createdAt}</span>
        </div>
        <button
          onClick={handleDeleteBtnClick}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          Delete
        </button>
      </div>
      <p className="text-sm text-gray-700 sm:text-base">{content}</p>
    </li>
  );
};

export default CommentItem;
