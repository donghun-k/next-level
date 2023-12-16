import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client, urlFor } from "./sanity";

export const getCategories = async () => {
  return client
    .fetch(`*[_type == "category"] | order(title asc)`, {})
    .then((categories) =>
      categories.map(
        (category: { title: string; defaultImage: SanityImageSource }) => ({
          ...category,
          defaultImage: urlFor(category.defaultImage),
        }),
      ),
    );
};
