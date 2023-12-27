import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-12-14",
  token: process.env.SANITY_SECRET_TOKEN,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).url();
}
