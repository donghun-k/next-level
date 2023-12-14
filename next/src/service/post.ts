import { SimplePost } from "@/models/post";
import { convertMarkdownToPlainText } from "@/utils/markdown";

import { client, urlFor } from "./sanity";

export const getPosts = async (category: string) => {
  return client
    .fetch(
      `*[_type == "post"${
        category === "All" ? "" : `&& category->title == "${category}"`
      }]{
    ...,
    'id': _id,
    'category': category->title,
    'categoryImage': category->defaultImage,
  }`,
      {
        fetch: {
          cache: "reload",
        },
      },
    )
    .then((posts) => {
      return posts.map((post: SimplePost) => ({
        ...post,
        categoryImage: urlFor(post.categoryImage),
        body: convertMarkdownToPlainText(post.body),
      }));
    });
};
