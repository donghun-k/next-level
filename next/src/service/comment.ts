import { Comment } from "@/models/comment";
import { converToLocaleString } from "@/utils/date";

import { client } from "./sanity";

export const getComments = async (postId: string): Promise<Comment[]> => {
  return client
    .fetch(
      `*[_type == "comment" && postRef->_id == "${postId}"]{
      ...,
      'id': _id,
      'createdAt': _createdAt,
    }`,
      {
        fetch: {
          cache: "reload",
        },
      },
    )
    .then((comments) => {
      return comments.map((comment: Comment) => {
        return {
          id: comment.id,
          author: comment.author,
          content: comment.content,
          createdAt: converToLocaleString(comment.createdAt),
        };
      });
    });
};
