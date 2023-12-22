import { getRecentPosts } from "@/service/post";

import PostListItem from "./PostListItem";

const RecentPostList = async () => {
  const posts = await getRecentPosts();
  return (
    <ul className="flex w-full flex-col gap-8">
      {posts && posts.map((post) => <PostListItem key={post.id} post={post} />)}
    </ul>
  );
};

export default RecentPostList;
