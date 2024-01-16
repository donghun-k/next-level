import { getRecentPosts } from "@/service/post";

import PostListItem from "../ui/PostListItem";
import PostCard from "../ui/PostCard";

const RecentPosts = async () => {
  const { posts, updatedAt } = await getRecentPosts();
  return (
    <section>
      <h2 className="mb-1 text-2xl font-extrabold text-gray-700">Recent</h2>
      <p className="mb-4 text-xs text-gray-500">마지막 업데이트: {updatedAt}</p>
      <ul className="hidden w-full flex-col gap-8 sm:flex">
        {posts &&
          posts.map((post) => <PostListItem key={post.id} post={post} />)}
      </ul>
      <ul className="grid grid-cols-1 gap-x-16 gap-y-8 sm:hidden">
        {posts?.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>
    </section>
  );
};

export default RecentPosts;
