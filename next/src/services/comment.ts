import { Comment } from '@/models/comment';
import { convertToLocaleString } from '@/utils/date';
import { validateLength } from '@/utils/validations';

import { client } from './sanity';
import { sendCommentNotification } from './mail';

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
        next: { tags: ['comments', postId], revalidate: 60 * 60 * 1 },
      },
    )
    .then((comments) => {
      return comments.map((comment: Comment) => {
        return {
          id: comment.id,
          postId: comment.postId,
          author: comment.author,
          content: comment.content,
          createdAt: convertToLocaleString(comment.createdAt),
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
    throw new Error('Invalid form data');
  }

  if (!validateLength(author, 2, 10)) {
    throw new Error('Name must be between 2 and 10 characters!');
  }

  if (!validateLength(password, 8, 20)) {
    throw new Error('Password must be between 8 and 20 characters!');
  }

  if (!validateLength(content, 10, 100)) {
    throw new Error('Content must be between 10 and 100 characters!');
  }

  await client
    .create({
      _type: 'comment',
      postRef: {
        _type: 'reference',
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

  await sendCommentNotification({ postId, author, content });
  return;
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
    throw new Error('Comment not found');
  }

  const comment = comments[0];

  if (
    process.env.ADMIN_PASSWORD === password ||
    comment.password === password
  ) {
    return client.delete(commentId);
  } else {
    throw new Error('Invalid password');
  }
};
