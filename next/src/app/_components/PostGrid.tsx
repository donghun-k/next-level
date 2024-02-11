import { SimplePost } from "@/models/post";

import PostCard from "./PostCard";
import NoPostsMessage from "./NoPostsMessage";

const PostGrid = ({ posts }: { posts: SimplePost[] }) => {
  return (
    <ul className="grid grid-cols-1 justify-items-center gap-x-16 gap-y-8 sm:grid-cols-3">
      {posts?.length === 0 && <NoPostsMessage />}
      {posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </ul>
  );
};

export default PostGrid;
