import useSWR from "swr";

import { Post } from "@/models/post";

const usePost = (postId: string) => {
  return useSWR<Post>(`/api/post?postId=${postId}`, (url: string) =>
    fetch(url).then((res) => res.json()),
  );
};

export default usePost;
