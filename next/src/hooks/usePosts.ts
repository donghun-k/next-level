import useSWR from "swr";

import { SimplePost } from "@/models/post";

const usePosts = (category: string) => {
  return useSWR<SimplePost[]>(
    `/api/posts?category=${category}`,
    (url: string) => fetch(url).then((res) => res.json()),
    {
      dedupingInterval: 1000 * 60 * 5,
    },
  );
};

export default usePosts;
