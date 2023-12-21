import { Post, SimplePost } from "@/models/post";
import { convertMarkdownToPlainText } from "@/utils/markdown";
import { converToLocaleString } from "@/utils/date";

import { client, urlFor } from "./sanity";

interface GetPostsParams {
  category?: string;
  page?: number;
}

export interface GetPostsResponse {
  posts: SimplePost[];
  totalPosts: number;
  totalPages: number;
}

export const getPosts = async ({
  category = "All",
  page = 1,
}: GetPostsParams): Promise<GetPostsResponse> => {
  return client
    .fetch(
      `{
        "totalPosts": count(*[_type == "post"${
          category === "All" ? "" : `&& category->title == "${category}"`
        }]),
        "posts": *[_type == "post"${
          category === "All" ? "" : `&& category->title == "${category}"`
        }] | order(_createdAt desc) {
          ...,
          'id': _id,
          'category': category->title,
          'categoryImage': category->defaultImage,
          'publishedAt': _createdAt,
        }[${(page - 1) * 5} ... ${page * 5}]
      }`,
      {
        fetch: {
          cache: "reload",
        },
      },
    )
    .then((data) => {
      const { posts } = data;
      const newPosts = posts.map((post: SimplePost) => ({
        ...post,
        categoryImage: urlFor(post.categoryImage),
        body: convertMarkdownToPlainText(post.body),
        publishedAt: converToLocaleString(post.publishedAt),
      }));
      return {
        ...data,
        posts: newPosts,
        totalPages: Math.ceil(data.totalPosts / 5),
      };
    });
};

export const getPost = async (postId: string): Promise<Post> => {
  return client
    .fetch(
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
    )
    .then((post) => ({
      ...post,
      publishedAt: converToLocaleString(post.publishedAt),
    }));
};

export const getRecentPosts = async (): Promise<SimplePost[]> => {
  return client
    .fetch(
      `*[_type == "post"] | order(_createdAt desc) {
      ...,
      'id': _id,
      'category': category->title,
      'categoryImage': category->defaultImage,
      'publishedAt': _createdAt,
    }[0...5]`,
    )
    .then((posts) => {
      return posts.map((post: SimplePost) => ({
        ...post,
        categoryImage: urlFor(post.categoryImage),
        body: convertMarkdownToPlainText(post.body),
        publishedAt: converToLocaleString(post.publishedAt),
      }));
    });
};

export const getPopularPosts = async (): Promise<SimplePost[]> => {
  return client
    .fetch(
      `*[_type == "post"] | order(views desc) {
      ...,
      'id': _id,
      'category': category->title,
      'categoryImage': category->defaultImage,
      'publishedAt': _createdAt,
    }[0...6]`,
    )
    .then((posts) => {
      return posts.map((post: SimplePost) => ({
        ...post,
        categoryImage: urlFor(post.categoryImage),
        body: convertMarkdownToPlainText(post.body),
        publishedAt: converToLocaleString(post.publishedAt),
      }));
    });
};
