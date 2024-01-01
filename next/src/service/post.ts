import { Post, SimplePost } from "@/models/post";
import { convertMarkdownToPlainText } from "@/utils/markdown";
import {
  convertToLocaleString,
  convertToLocaleStringWithTime,
} from "@/utils/date";

import { client, urlFor } from "./sanity";

interface GetPostsParams {
  category?: string;
  page?: number;
  query?: string;
}

export interface GetPostsResponse {
  posts: SimplePost[];
  totalPosts: number;
  totalPages: number;
}

export const getPosts = async ({
  category = "All",
  page = 1,
  query,
}: GetPostsParams): Promise<GetPostsResponse> => {
  return client
    .fetch(
      `{
        "totalPosts": count(*[_type == "post"${
          category === "All" ? "" : `&& category->title == "${category}"`
        }${query && query !== "" ? `&& title match "${query}*"` : ""}]),
        "posts": *[_type == "post"${
          category === "All" ? "" : `&& category->title == "${category}"`
        }${
          query && query !== "" ? `&& title match "${query}*"` : ""
        }] | order(_createdAt desc) {
          ...,
          'id': _id,
          'category': category->title,
          'categoryImage': category->defaultImage,
          'publishedAt': _createdAt,
        }[${(page - 1) * 5} ... ${page * 5}]
      }`,
      {},
      {
        next: {
          revalidate: 60 * 60 * 1,
        },
      },
    )
    .then((data) => {
      const { posts } = data;
      const newPosts = posts.map((post: SimplePost) => ({
        ...post,
        categoryImage: urlFor(post.categoryImage),
        body: convertMarkdownToPlainText(post.body),
        publishedAt: convertToLocaleString(post.publishedAt),
      }));
      return {
        ...data,
        posts: newPosts,
        totalPages: Math.ceil(data.totalPosts / 5),
      };
    });
};

export const increasePostViews = async (postId: string) => {
  return (await client.patch(postId).inc({ views: 1 }).commit()).views;
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
      {},
      {
        next: {
          revalidate: 60 * 60 * 4,
        },
      },
    )
    .then((post) => ({
      ...post,
      publishedAt: convertToLocaleString(post.publishedAt),
    }));
};

interface GetRecentOrPopularPostsResponse {
  posts: SimplePost[];
  updatedAt: string;
}

export const getRecentPosts =
  async (): Promise<GetRecentOrPopularPostsResponse> => {
    return client
      .fetch(
        `{
          "posts": *[_type == "post"] | order(_createdAt desc) {
            ...,
            'id': _id,
            'category': category->title,
            'categoryImage': category->defaultImage,
            'publishedAt': _createdAt,
          }[0...5],
          "updatedAt": now()
        }`,
        {},
        {
          next: {
            revalidate: 60 * 60 * 4,
          },
        },
      )
      .then(({ posts, updatedAt }: GetRecentOrPopularPostsResponse) => {
        return {
          posts: posts.map(
            (post: SimplePost): SimplePost => ({
              ...post,
              categoryImage: urlFor(post.categoryImage),
              body: convertMarkdownToPlainText(post.body),
              publishedAt: convertToLocaleString(post.publishedAt),
            }),
          ),
          updatedAt: convertToLocaleStringWithTime(updatedAt),
        };
      });
  };

export const getPopularPosts =
  async (): Promise<GetRecentOrPopularPostsResponse> => {
    return client
      .fetch(
        `{
          "posts": *[_type == "post"] | order(views desc) {
            ...,
            'id': _id,
            'category': category->title,
            'categoryImage': category->defaultImage,
            'publishedAt': _createdAt,
          }[0...6],
          "updatedAt": now()
        }`,
        {},
        {
          next: {
            revalidate: 60 * 60 * 4,
          },
        },
      )
      .then(({ posts, updatedAt }: GetRecentOrPopularPostsResponse) => {
        return {
          posts: posts.map(
            (post: SimplePost): SimplePost => ({
              ...post,
              categoryImage: urlFor(post.categoryImage),
              body: convertMarkdownToPlainText(post.body),
              publishedAt: convertToLocaleString(post.publishedAt),
            }),
          ),
          updatedAt: convertToLocaleStringWithTime(updatedAt),
        };
      });
  };
