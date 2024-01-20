import { client } from "./sanity";

export const getCategories = async () => {
  return client
    .fetch(
      `*[_type == "category"] | order(title asc)`,
      {},
      {
        next: {
          revalidate: 60 * 60 * 4,
        },
      },
    )
};
