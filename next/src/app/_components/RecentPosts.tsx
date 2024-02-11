import { getRecentPosts } from "@/services/post";

import PostGrid from "./PostGrid";
import PostList from "./PostList";

const RecentPosts = async () => {
  const { posts, updatedAt } = await getRecentPosts();
  return (
    <section>
      <h2 className="mb-1 text-2xl font-extrabold text-gray-700">Recent</h2>
      <p className="mb-4 text-xs text-gray-500">마지막 업데이트: {updatedAt}</p>
      <div className="block sm:hidden">
        <PostGrid posts={posts} />
      </div>
      <div className="hidden sm:block">
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export default RecentPosts;
