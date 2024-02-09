import { getPopularPosts } from "@/services/post";

import PostCard from "./PostCard";

const PopularPosts = async () => {
  const { posts, updatedAt } = await getPopularPosts();
  return (
    <section>
      <h2 className="mb-1 text-2xl font-extrabold text-gray-700">Popular</h2>
      <p className="mb-4 text-xs text-gray-500">마지막 업데이트: {updatedAt}</p>
      <ul className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-3">
        {posts?.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>
    </section>
  );
};

export default PopularPosts;
