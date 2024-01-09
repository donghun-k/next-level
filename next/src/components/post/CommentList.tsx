"use client";

import { useState } from "react";

import { Comment } from "@/models/comment";
import { deleteCommentAction } from "@/actions/comment";

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
      alert("Password must be between 8 and 20 characters!");
      return;
    }
    if (!postId || !commentId) {
      alert("Something went wrong");
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
      alert("Comment deleted");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to delete comment";
      alert(message);
    } finally {
      setShowDeletingProgress(false);
    }
  };
  return (
    <>
      <ul className="flex flex-col gap-3">
        {comments?.length === 0 && (
          <p className="flex w-full items-center justify-center p-8 text-lg text-gray-500">
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
    </>
  );
};

export default CommentList;
