import useSWR from "swr";

import { Comment } from "@/models/comment";

const useComments = (postId: String) => {
  return useSWR<Comment[]>(
    `/api/comments/${postId}`,
    (url: string) => fetch(url).then((res) => res.json()),
    {
      dedupingInterval: 1000 * 60 * 5,
    },
  );
};

export default useComments;
