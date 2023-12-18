import useSWR from "swr";

import { SimplePost } from "@/models/post";

const useRecentPosts = () => {
  return useSWR<SimplePost[]>(
    `/api/posts/recent`,
    (url: string) => fetch(url).then((res) => res.json()),
    {
      dedupingInterval: 1000 * 60 * 5,
    },
  );
};

export default useRecentPosts;
