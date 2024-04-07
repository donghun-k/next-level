import { client } from './sanity';

export const getCategoryList = async () => {
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
    .then((data: { title: string }[]) => data.map((item) => item.title));
};
