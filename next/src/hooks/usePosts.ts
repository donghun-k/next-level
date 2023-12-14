import useSWR from "swr";

import { SimplePost } from "@/models/post";

const usePosts = (category: string) => {
  return useSWR<SimplePost[]>(
    `/api/posts?category=${category}`,
    (url: string) => fetch(url).then((res) => res.json()),
  );
};

export default usePosts;
