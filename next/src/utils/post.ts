import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { SimplePost } from "@/models/post";
import { client } from "@/services/sanity";
import { FetchedPost, PROFILE_IMAGE_URL } from "@/services/post";

import { convertMarkdownToPlainText } from "./markdown";
import { convertToLocaleString } from "./date";

export const mapPosts = (post: FetchedPost): SimplePost => {
  return {
    ...post,
    image: post.seriesImage
      ? urlFor(post.seriesImage)
      : post.mainImage
        ? urlFor(post.mainImage)
        : PROFILE_IMAGE_URL,
    contentPreview: convertMarkdownToPlainText(post.content),
    publishedAt: convertToLocaleString(post.publishedAt),
  };
};

const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).url();
}
