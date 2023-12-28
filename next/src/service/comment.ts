import { Comment } from "@/models/comment";
import { converToLocaleString } from "@/utils/date";

import { client } from "./sanity";

export const getComments = async (postId: string): Promise<Comment[]> => {
  return client
    .fetch(
      `*[_type == "comment" && postRef->_id == "${postId}"] | order(_createdAt asc) {
      ...,
      'id': _id,
      'createdAt': _createdAt,
      'postId': postRef->_id,
    }`,
      {},
      {
        next: { tags: ["comments", postId], revalidate: 60 * 60 * 4 },
      },
    )
    .then((comments) => {
      return comments.map((comment: Comment) => {
        return {
          id: comment.id,
          postId: comment.postId,
          author: comment.author,
          content: comment.content,
          createdAt: converToLocaleString(comment.createdAt),
        };
      });
    });
};

export const postComment = async ({
  postId,
  author,
  password,
  content,
}: {
  postId: string;
  author: string;
  password: string;
  content: string;
}) => {
  if (!postId || !author || !password || !content) {
    throw new Error("Invalid form data");
  }

  if (author.length < 2 || author.length > 10) {
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

  return client
    .create({
      _type: "comment",
      postRef: {
        _type: "reference",
        _ref: postId,
      },
      author,
      password,
      content,
    })
    .then((comment) => {
      return {
        id: comment._id,
      };
    });
};

export const deleteComment = async ({
  commentId,
  password,
}: {
  commentId: string;
  password: string;
}) => {
  const comments = await client.fetch(
    `*[_type == "comment" && _id == $commentId]`,
    { commentId },
  );

  if (comments.length === 0) {
    throw new Error("Comment not found");
  }

  const comment = comments[0];

  if (comment.password === password) {
    return client.delete(commentId);
  } else {
    throw new Error("Invalid password");
  }
};
