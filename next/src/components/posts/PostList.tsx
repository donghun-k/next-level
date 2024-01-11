import { PiSmileySadBold } from "react-icons/pi";

import { SimplePost } from "@/models/post";

import PostListItem from "../ui/PostListItem";

const PostList = ({ posts }: { posts: SimplePost[] }) => {
  return (
    <ul className="mb-8 mt-4 flex flex-col gap-6">
      {posts?.length === 0 && (
        <p className="flex w-full items-center justify-center p-8 text-2xl text-gray-500">
          <PiSmileySadBold className="mr-2 mt-1 h-7 w-7" />
          There are no posts yet in this category.
          <PiSmileySadBold className="ml-2 mt-1 h-7 w-7" />
        </p>
      )}
      {posts?.map((post) => <PostListItem key={post.id} post={post} />)}
    </ul>
  );
};

export default PostList;
