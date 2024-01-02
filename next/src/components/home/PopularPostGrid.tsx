import { getPopularPosts } from "@/service/post";

import PostCard from "../ui/PostCard";

const PopularPostGrid = async () => {
  const { posts, updatedAt } = await getPopularPosts();
  return (
    <section>
      <h2 className="mb-1 text-2xl font-extrabold text-gray-700">Popular</h2>
      <p className="mb-4 text-xs text-gray-500">마지막 업데이트: {updatedAt}</p>
      <div className="grid grid-cols-3 gap-x-16 gap-y-8">
        {posts?.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  );
};

export default PopularPostGrid;
