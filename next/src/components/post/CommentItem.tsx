"use client";
import { useState } from "react";

import { Comment } from "@/models/comment";
import { deleteCommentAction } from "@/actions/comment";

import Backdrop from "../ui/Backdrop";
import CommentDeleteDialog from "./CommentDeleteDialog";
import CommentDeletingProgress from "./CommentDeletingProgress";

const CommentItem = ({ comment }: { comment: Comment }) => {
  const { author, content, createdAt, id: commentId, postId } = comment;
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showDeletingProgress, setShowDeletingProgress] = useState(false);

  const handleOpenDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const handleShowDeletingProgress = () => {
    setShowDeletingProgress(true);
  };

  const handleHideDeletingProgress = () => {
    setShowDeletingProgress(false);
  };

  const deleteComment = async (password: string) => {
    if (!password) {
      alert("Password is required");
      return;
    }
    handleCloseDeleteDialog();
    handleShowDeletingProgress();
    try {
      await deleteCommentAction({
        commentId,
        postId,
        password,
      });
      alert("Comment deleted");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to delete comment";
      alert(message);
    } finally {
      handleHideDeletingProgress();
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
          onClick={handleOpenDeleteDialog}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Delete
        </button>
      </div>
      <p className="text-gray-700 ">{content}</p>
      {(showDeleteDialog || showDeletingProgress) && (
        <Backdrop>
          {showDeleteDialog && (
            <CommentDeleteDialog
              closeDialog={handleCloseDeleteDialog}
              deleteComment={deleteComment}
            />
          )}
          {showDeletingProgress && <CommentDeletingProgress />}
        </Backdrop>
      )}
    </li>
  );
};

export default CommentItem;
