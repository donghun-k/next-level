import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { Post, SimplePost } from "@/models/post";
import {
  convertToLocaleString,
  convertToLocaleStringWithTime,
} from "@/utils/date";
import { convertMarkdownToPlainText } from "@/utils/markdown";

import { client } from "./sanity";

interface FetchedPost {
  id: string;
  title: string;
  series: string | null;
  category: string;
  seriesImage?: string;
  mainImage?: string;
  content: string;
  publishedAt: string;
}

const POST_PROJECTION = `{
  'id': _id,
  'title': title,
  'series': series->title,
  'category': category->title,
  'seriesImage': series->image,
  'mainImage': image,
  'content': content,
  'publishedAt': _createdAt,
}`;

const builder = ImageUrlBuilder(client);

const getImageUrl = (source: SanityImageSource | undefined): string | null => {
  if (!source) return null;
  return ImageUrlBuilder(client).image(source).url();
};

const mapPosts = (post: FetchedPost): SimplePost => {
  return {
    ...post,
    image: getImageUrl(post.seriesImage || post.mainImage),
    contentPreview: convertMarkdownToPlainText(post.content),
    publishedAt: convertToLocaleString(post.publishedAt),
  };
};

export const increasePostViews = async (postId: string) => {
  return (await client.patch(postId).inc({ views: 1 }).commit()).views;
};

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
    .then((fetchedPost: FetchedPost) => {
      if (!fetchedPost) return null;
      return {
        ...fetchedPost,
        image: getImageUrl(fetchedPost.seriesImage || fetchedPost.mainImage),
        publishedAt: convertToLocaleString(fetchedPost.publishedAt),
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
        "fetchedPosts": *[_type == "post"${
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
    .then((data: { fetchedPosts: FetchedPost[]; totalPosts: number }) => {
      return {
        posts: data.fetchedPosts.map(mapPosts),
        totalPosts: data.totalPosts,
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
          "fetchedPosts": *[_type == "post"] | order(_createdAt desc)${POST_PROJECTION}[0...5],
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
          fetchedPosts,
          updatedAt,
        }: {
          fetchedPosts: FetchedPost[];
          updatedAt: string;
        }): GetRecentOrPopularPostsResponse => {
          return {
            posts: fetchedPosts.map(mapPosts),
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
          "fetchedPosts": *[_type == "post"] | order(views desc)${POST_PROJECTION}[0...6],
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
          fetchedPosts,
          updatedAt,
        }: {
          fetchedPosts: FetchedPost[];
          updatedAt: string;
        }): GetRecentOrPopularPostsResponse => {
          return {
            posts: fetchedPosts.map(mapPosts),
            updatedAt: convertToLocaleStringWithTime(updatedAt),
          };
        },
      );
  };
