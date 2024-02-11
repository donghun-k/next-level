import { SimplePost } from "@/models/post";
import PostListItem from "@/app/_components/PostListItem";
import PostCard from "@/app/_components/PostCard";

import NoPostsMessage from "./NoPostsMessage";

const PostList = ({ posts }: { posts: SimplePost[] }) => {
  return (
    <>
      <ul className="mb-8 mt-4 hidden flex-col gap-6 sm:flex">
        {posts?.length === 0 && <NoPostsMessage />}
        {posts?.map((post) => <PostListItem key={post.id} post={post} />)}
      </ul>
      <ul className="mb-8 mt-4 flex flex-col items-center gap-6 sm:hidden">
        {posts?.length === 0 && <NoPostsMessage />}
        {posts?.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>
    </>
  );
};

export default PostList;
