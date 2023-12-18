import useSWR from "swr";

import { GetPostsResponse } from "@/service/post";

interface Params {
  category: string;
  page: number;
  query?: string;
}

const usePosts = ({ category = "All", page, query }: Params) => {
  return useSWR<GetPostsResponse>(
    `/api/posts?category=${category}&page=${page}${
      query ? `&query=${query}` : ""
    }`,
    (url: string) => fetch(url).then((res) => res.json()),
    {
      dedupingInterval: 1000 * 60 * 5,
    },
  );
};

export default usePosts;
