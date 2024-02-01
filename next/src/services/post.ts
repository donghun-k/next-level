import { Post, SimplePost } from "@/models/post";
import {
  convertToLocaleString,
  convertToLocaleStringWithTime,
} from "@/utils/date";
import { mapPosts, urlFor } from "@/utils/post";

import { client } from "./sanity";

export const increasePostViews = async (postId: string) => {
  return (await client.patch(postId).inc({ views: 1 }).commit()).views;
};

export const getPost = async (postId: string): Promise<Post | null> => {
  return client
    .fetch(
      `*[_type == "post" && _id == "${postId}"]{
      ...,
      'id': _id,
      'category': category->title,
      'mainImage': mainImage->image,
      'publishedAt': _createdAt,
    }[0]`,
      {},
      {
        next: {
          revalidate: 60 * 60 * 4,
        },
      },
    )
    .then((post: Post) => {
      if (!post) return null;
      return {
        ...post,
        mainImage: urlFor(post.mainImage),
        publishedAt: convertToLocaleString(post.publishedAt),
      };
    });
};

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
          'mainImage': mainImage->image,
          'publishedAt': _createdAt,
        }[${(page - 1) * 5} ... ${page * 5}]
      }`,
      {},
      {
        next: {
          revalidate: 0,
        },
      },
    )
    .then((data) => {
      const { posts } = data;
      const newPosts = posts.map(mapPosts);
      return {
        ...data,
        posts: newPosts,
        totalPages: Math.ceil(data.totalPosts / 5),
      };
    });
};

export interface GetRecentOrPopularPostsResponse {
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
            'mainImage': mainImage->image,
            'publishedAt': _createdAt,
          }[0...5],
          "updatedAt": now()
        }`,
        {},
        {
          next: {
            revalidate: 60 * 60 * 1,
          },
        },
      )
      .then(
        ({
          posts,
          updatedAt,
        }: {
          posts: Post[];
          updatedAt: string;
        }): GetRecentOrPopularPostsResponse => {
          return {
            posts: posts.map(mapPosts),
            updatedAt: convertToLocaleStringWithTime(updatedAt),
          };
        },
      );
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
            'mainImage': mainImage->image,
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
      .then(
        ({
          posts,
          updatedAt,
        }: {
          posts: Post[];
          updatedAt: string;
        }): GetRecentOrPopularPostsResponse => {
          return {
            posts: posts.map(mapPosts),
            updatedAt: convertToLocaleStringWithTime(updatedAt),
          };
        },
      );
  };
