"use client";

import usePopularPosts from "@/hooks/usePopularPosts";

import PopularPostCard from "./PopularPostCard";

const PopularPostGrid = () => {
  const { data: posts } = usePopularPosts();
  return (
    <div className="grid grid-cols-3 gap-x-16 gap-y-8">
      {posts?.map((post) => <PopularPostCard key={post.id} post={post} />)}
    </div>
  );
};

export default PopularPostGrid;
