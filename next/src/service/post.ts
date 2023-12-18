import { SimplePost } from "@/models/post";
import { convertMarkdownToPlainText } from "@/utils/markdown";

import { client, urlFor } from "./sanity";

interface GetPostsParams {
  category?: string;
  page?: number;
}

export const getPosts = async ({
  category = "All",
  page = 1,
}: GetPostsParams) => {
  return client
    .fetch(
      `*[_type == "post"${
        category === "All" ? "" : `&& category->title == "${category}"`
      }] | order(_createdAt desc) {
    ...,
    'id': _id,
    'category': category->title,
    'categoryImage': category->defaultImage,
    'publishedAt': _createdAt,
  }[${(page - 1) * 5}... ${page * 5}]`,
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

export const getPost = async (postId: string) => {
  return client.fetch(
    `*[_type == "post" && _id == "${postId}"][0]{
      ...,
      'id': _id,
      'category': category->title,
      'publishedAt': _createdAt,
    }`,
    {
      fetch: {
        cache: "reload",
      },
    },
  );
};
