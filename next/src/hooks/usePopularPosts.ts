import useSWR from "swr";

import { SimplePost } from "@/models/post";

const usePopularPosts = () => {
  return useSWR<SimplePost[]>(
    `/api/posts/popular`,
    (url: string) => fetch(url).then((res) => res.json()),
    {
      dedupingInterval: 1000 * 60 * 5,
    },
  );
};

export default usePopularPosts;
