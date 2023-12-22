import { getPopularPosts } from "@/service/post";

import PopularPostCard from "./PopularPostCard";

const PopularPostGrid = async () => {
  const posts = await getPopularPosts();
  return (
    <div className="grid grid-cols-3 gap-x-16 gap-y-8">
      {posts?.map((post) => <PopularPostCard key={post.id} post={post} />)}
    </div>
  );
};

export default PopularPostGrid;
