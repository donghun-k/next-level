import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { Post, SimplePost } from "@/models/post";
import { client } from "@/services/sanity";

import { convertMarkdownToPlainText } from "./markdown";
import { convertToLocaleString } from "./date";

export const mapPosts = (post: Post): SimplePost => {
  return {
    ...post,
    mainImage: urlFor(post.mainImage),
    contentPreview: convertMarkdownToPlainText(post.content),
    publishedAt: convertToLocaleString(post.publishedAt),
  };
};

const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).url();
}
