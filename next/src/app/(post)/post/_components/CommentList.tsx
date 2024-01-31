"use client";

import { useState } from "react";

import { Comment } from "@/models/comment";
import { deleteCommentAction } from "@/actions/comment";
import useToast from "@/hooks/useToast";
import Toast from "@/app/_ui/Toast";

import CommentItem from "./CommentItem";
import CommentDeleteDialog from "./CommentDeleteDialog";
import CommentDeletingProgress from "./CommentDeletingProgress";

interface Props {
  comments: Comment[];
}

const CommentList = ({ comments }: Props) => {
  const [showDeletingProgress, setShowDeletingProgress] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [postId, setPostId] = useState<string | null>(null);
  const [commentId, setCommentId] = useState<string | null>(null);

  const { toastInfo, setToastInfo, closeToast } = useToast();

  const openDeleteDialog = ({
    commentId,
    postId,
  }: {
    commentId: string;
    postId: string;
  }) => {
    setPostId(postId);
    setCommentId(commentId);
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setPostId(null);
    setCommentId(null);
    setShowDeleteDialog(false);
  };

  const deleteComment = async (password: string) => {
    if (password.length < 8 || password.length > 20) {
      setToastInfo({
        show: true,
        message: "Password must be between 8 and 20 characters!",
        type: "error",
      });
      return;
    }
    if (!postId || !commentId) {
      setToastInfo({
        show: true,
        message: "Something went wrong.",
        type: "error",
      });
      return;
    }
    closeDeleteDialog();
    setShowDeletingProgress(true);
    try {
      await deleteCommentAction({
        commentId,
        postId,
        password,
      });
      setToastInfo({
        show: true,
        message: "Comment successfully deleted.",
        type: "success",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to delete comment.";
      setToastInfo({
        show: true,
        message,
        type: "error",
      });
    } finally {
      setShowDeletingProgress(false);
    }
  };
  return (
    <>
      <ul className="flex flex-col gap-3">
        {comments?.length === 0 && (
          <p className="text-md flex w-full items-center justify-center p-8 text-center text-gray-500 sm:text-lg">
            There are no comments yet on this post.
          </p>
        )}
        {comments?.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            openDeleteDialog={openDeleteDialog}
          />
        ))}
      </ul>
      {showDeleteDialog && (
        <CommentDeleteDialog
          closeDialog={closeDeleteDialog}
          deleteComment={deleteComment}
        />
      )}
      {showDeletingProgress && <CommentDeletingProgress />}
      {toastInfo.show && (
        <Toast
          type={toastInfo.type}
          message={toastInfo.message}
          closeToast={closeToast}
        />
      )}
    </>
  );
};

export default CommentList;
