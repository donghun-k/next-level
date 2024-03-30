import { Post, SimplePost } from "@/models/post";
import {
  convertToLocaleString,
  convertToLocaleStringWithTime,
} from "@/utils/date";
import { mapPosts, urlFor } from "@/utils/post";

import { client } from "./sanity";

export const POST_PROJECTION = `{
  'id': _id,
  'title': title,
  'series': series->title,
  'category': category->title,
  'seriesImage': series->image,
  'mainImage': image,
  'content': content,
  'publishedAt': _createdAt,
}`;

export const increasePostViews = async (postId: string) => {
  return (await client.patch(postId).inc({ views: 1 }).commit()).views;
};

export interface FetchedPost {
  id: string;
  title: string;
  series: string | null;
  category: string;
  seriesImage?: string;
  mainImage?: string;
  content: string;
  publishedAt: string;
}

export const getPost = async (postId: string): Promise<Post | null> => {
  return client
    .fetch(
      `*[_type == "post" && _id == "${postId}"]${POST_PROJECTION}[0]`,
      {},
      {
        next: {
          revalidate: 60 * 60 * 4,
        },
      },
    )
    .then((post: FetchedPost) => {
      if (!post) return null;
      return {
        ...post,
        image: post.seriesImage
          ? urlFor(post.seriesImage)
          : post.mainImage
            ? urlFor(post.mainImage)
            : null,
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
        }] | order(_createdAt desc)${POST_PROJECTION}[${(page - 1) * 5} ... ${
          page * 5
        }]
      }`,
      {},
      {
        next: {
          revalidate: 0,
        },
      },
    )
    .then((data: { posts: FetchedPost[]; totalPosts: number }) => {
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
          "posts": *[_type == "post"] | order(_createdAt desc)${POST_PROJECTION}[0...5],
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
          posts: FetchedPost[];
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
          "posts": *[_type == "post"] | order(views desc)${POST_PROJECTION}[0...6],
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
          posts: FetchedPost[];
          updatedAt: string;
        }): GetRecentOrPopularPostsResponse => {
          return {
            posts: posts.map(mapPosts),
            updatedAt: convertToLocaleStringWithTime(updatedAt),
          };
        },
      );
  };
