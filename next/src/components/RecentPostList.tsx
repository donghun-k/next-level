import { getRecentPosts } from "@/service/post";

import PostListItem from "./PostListItem";

export const revalidate = 60 * 60 * 4;

const RecentPostList = async () => {
  const { posts, updatedAt } = await getRecentPosts();
  return (
    <section>
      <h2 className="mb-1 text-2xl font-extrabold text-gray-700">Recent</h2>
      <p className="mb-4 text-xs text-gray-500">마지막 업데이트: {updatedAt}</p>
      <ul className="flex w-full flex-col gap-8">
        {posts &&
          posts.map((post) => <PostListItem key={post.id} post={post} />)}
      </ul>
    </section>
  );
};

export default RecentPostList;
