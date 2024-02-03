import { PiSmileySadBold } from "react-icons/pi";

import { SimplePost } from "@/models/post";
import PostListItem from "@/app/_ui/PostListItem";
import PostCard from "@/app/_ui/PostCard";

const PostList = ({ posts }: { posts: SimplePost[] }) => {
  return (
    <>
      <ul className="mb-8 mt-4 hidden flex-col gap-6 sm:flex">
        {posts?.length === 0 && (
          <p className="flex w-full items-center justify-center p-8 text-2xl text-gray-500">
            <PiSmileySadBold className="mr-2 mt-1 h-7 w-7" />
            There are no posts yet in this category.
            <PiSmileySadBold className="ml-2 mt-1 h-7 w-7" />
          </p>
        )}
        {posts?.map((post) => <PostListItem key={post.id} post={post} />)}
      </ul>
      <ul className="mb-8 mt-4 flex flex-col items-center gap-6 sm:hidden">
        {posts?.length === 0 && (
          <p className="flex w-full items-center justify-center gap-2 p-8 text-center text-base text-gray-500">
            <PiSmileySadBold className="mr-2 mt-1 h-5 w-5" />
            There are no posts yet
            <br />
            in this category.
            <PiSmileySadBold className="ml-2 mt-1 h-5 w-5" />
          </p>
        )}
        {posts?.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>
    </>
  );
};

export default PostList;
