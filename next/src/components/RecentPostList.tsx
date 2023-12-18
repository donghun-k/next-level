"use client";

import useRecentPosts from "@/hooks/useRecentPosts";

import PostListItem from "./PostListItem";

const RecentPostList = () => {
  const { data: posts } = useRecentPosts();
  console.log(posts);
  return (
    <ul className="flex w-full flex-col gap-8">
      {posts && posts.map((post) => <PostListItem key={post.id} post={post} />)}
    </ul>
  );
};

export default RecentPostList;
