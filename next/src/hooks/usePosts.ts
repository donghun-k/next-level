import useSWR from "swr";

import { SimplePost } from "@/models/post";

interface Params {
  category?: string;
  page?: number;
  query?: string;
}

const usePosts = ({ category = "All", page = 1, query }: Params) => {
  return useSWR<SimplePost[]>(
    `/api/posts?category=${category}&page=${page}${
      query ? `&query=${query}` : ""
    }}`,
    (url: string) => fetch(url).then((res) => res.json()),
    {
      dedupingInterval: 1000 * 60 * 5,
    },
  );
};

export default usePosts;
