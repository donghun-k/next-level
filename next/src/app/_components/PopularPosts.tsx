import { getPopularPosts } from '@/services/post';

import PostGrid from './PostGrid';

const PopularPosts = async () => {
  const { posts, updatedAt } = await getPopularPosts();
  return (
    <section>
      <h2 className="mb-1 text-2xl font-extrabold text-gray-700">Popular</h2>
      <p className="mb-4 text-xs text-gray-500">마지막 업데이트: {updatedAt}</p>
      <PostGrid posts={posts} />
    </section>
  );
};

export default PopularPosts;
